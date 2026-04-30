import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function BookingModal({ workshop, onClose, onSuccess }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
  });

  const availableSpots = workshop.total_spots - workshop.booked_spots;
  const isWaitlist = availableSpots === 0;
  const paymentRequired = workshop.price > 0;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create booking
      const booking = await base44.entities.WorkshopBooking.create({
        workshop_id: workshop.id,
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        status: isWaitlist ? "waitlist" : "booked",
        payment_required: paymentRequired,
        payment_status: paymentRequired ? "pending" : "not_required",
      });

      // Update workshop spots if not waitlist
      if (!isWaitlist) {
        await base44.entities.Workshop.update(workshop.id, {
          booked_spots: workshop.booked_spots + 1,
        });
      }

      // Send confirmation email
      await base44.functions.invoke("sendBookingConfirmation", {
        booking_id: booking.id,
        workshop_id: workshop.id,
        full_name: form.full_name,
        email: form.email,
        workshop_title: workshop.title,
        workshop_date: workshop.date,
        is_waitlist: isWaitlist,
      });

      toast({
        title: "Success!",
        description: isWaitlist
          ? "You've been added to the waitlist. We'll contact you if a spot becomes available."
          : "Your booking is confirmed! Check your email for details.",
      });

      onSuccess();
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-border p-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-accent">
            {isWaitlist ? "Join waitlist" : "Reserve your spot"}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-muted p-4 rounded-lg mb-6">
            <p className="text-sm font-medium text-accent mb-1">{workshop.title}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(workshop.date).toLocaleDateString("en-ZA", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="full_name" className="text-sm font-medium text-foreground">
                Full name
              </Label>
              <Input
                id="full_name"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="mt-2 h-11"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="mt-2 h-11"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                Phone number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Your phone number"
                className="mt-2 h-11"
              />
            </div>

            {paymentRequired && (
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium text-accent mb-2">Payment required</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Workshop fee: <span className="font-semibold text-foreground">R{workshop.price}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Payment link will be sent to your email after booking confirmation.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {loading ? "Processing..." : isWaitlist ? "Join waitlist" : "Confirm booking"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}