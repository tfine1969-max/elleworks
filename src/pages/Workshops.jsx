import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Calendar, MapPin, Users, Lock } from "lucide-react";
import BookingModal from "@/components/workshops/BookingModal";

export default function Workshops() {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  useEffect(() => {
    loadWorkshops();
  }, []);

  const loadWorkshops = async () => {
    const data = await base44.entities.Workshop.filter({ status: "upcoming" }, "-date", 50);
    setWorkshops(data);
    setLoading(false);
  };

  const getAvailableSpots = (workshop) => {
    return workshop.total_spots - workshop.booked_spots;
  };

  const formatPrice = (price) => {
    return price === 0 ? "Free" : `R${price}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-ZA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="pt-[72px] min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-accent mb-4">
              Upcoming workshops
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our community of women building financial confidence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop, i) => {
              const availableSpots = getAvailableSpots(workshop);
              const isFull = availableSpots === 0;

              return (
                <motion.div
                  key={workshop.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-muted p-8 rounded-lg border border-border hover:border-primary/30 transition-colors flex flex-col"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-accent mb-4">
                      {workshop.title}
                    </h3>

                    <div className="space-y-3 text-sm text-muted-foreground mb-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{formatDate(workshop.date)}</span>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          {workshop.format === "Online"
                            ? "Zoom link sent on registration"
                            : workshop.location}
                        </span>
                      </div>

                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>
                          {availableSpots} spot{availableSpots !== 1 ? "s" : ""} remaining
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-foreground leading-relaxed mb-6">
                      {workshop.description}
                    </p>

                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <span className="text-lg font-semibold text-accent">
                        {formatPrice(workshop.price)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedWorkshop(workshop)}
                    disabled={isFull}
                    className={`w-full h-11 font-medium rounded-lg transition-colors ${
                      isFull
                        ? "bg-muted text-muted-foreground cursor-not-allowed"
                        : "bg-primary text-white hover:bg-primary/90"
                    }`}
                  >
                    {isFull ? "Join waitlist" : "Reserve my spot"}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {selectedWorkshop && (
        <BookingModal
          workshop={selectedWorkshop}
          onClose={() => setSelectedWorkshop(null)}
          onSuccess={() => {
            loadWorkshops();
            setSelectedWorkshop(null);
          }}
        />
      )}
    </div>
  );
}