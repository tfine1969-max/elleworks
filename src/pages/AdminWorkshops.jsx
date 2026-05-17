import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Plus, Download, Eye, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function AdminWorkshops() {
  const { toast } = useToast();
  const [workshops, setWorkshops] = useState([]);
  const [bookings, setBookings] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const currentUser = await base44.auth.me();
      setUser(currentUser);
      if (currentUser?.role !== "admin") {
        window.location.href = "/";
        return;
      }
      loadWorkshops();
    } catch (error) {
      window.location.href = "/";
    }
  };

  const loadWorkshops = async () => {
    try {
      const data = await base44.entities.Workshop.list("-date", 50);
      setWorkshops(data);

      // Load bookings for each workshop
      const bookingsMap = {};
      for (const ws of data) {
        const ws_bookings = await base44.entities.WorkshopBooking.filter(
          { workshop_id: ws.id },
          "-created_date",
          100
        );
        bookingsMap[ws.id] = ws_bookings;
      }
      setBookings(bookingsMap);
    } catch (error) {
      toast({ title: "Error", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const exportCSV = (workshopId) => {
    const workshop = workshops.find((w) => w.id === workshopId);
    const ws_bookings = bookings[workshopId] || [];

    const headers = ["Full Name", "Email", "Phone", "Status", "Date Booked"];
    const rows = ws_bookings.map((booking) => [
      booking.full_name,
      booking.email,
      booking.phone,
      booking.status,
      new Date(booking.created_date).toLocaleDateString(),
    ]);

    const csv = [
      `Workshop: ${workshop.title}`,
      `Date: ${new Date(workshop.date).toLocaleDateString()}`,
      "",
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${workshop.title.replace(/\s+/g, "_")}_attendees.csv`;
    a.click();
  };

  if (loading) {
    return (
      <div className="pt-[72px] min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <div className="pt-[72px] min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-semibold text-accent">Workshop Management</h1>
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" />
            Add workshop
          </button>
        </div>

        <div className="space-y-8">
          {workshops.map((workshop) => {
            const ws_bookings = bookings[workshop.id] || [];
            const booked = ws_bookings.filter((b) => b.status === "booked");
            const waitlist = ws_bookings.filter((b) => b.status === "waitlist");

            return (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-muted p-8 rounded-lg border border-border"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-accent mb-2">
                      {workshop.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {new Date(workshop.date).toLocaleDateString("en-ZA", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-2">Status</p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {workshop.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Booked</p>
                    <p className="text-2xl font-semibold text-accent">
                      {booked.length}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      / {workshop.total_spots} spots
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Waitlist</p>
                    <p className="text-2xl font-semibold text-accent">{waitlist.length}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Price</p>
                    <p className="text-2xl font-semibold text-accent">
                      {workshop.price === 0 ? "Free" : `R${workshop.price}`}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedWorkshop(workshop.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    View bookings
                  </button>
                  <button
                    onClick={() => exportCSV(workshop.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Export CSV
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bookings Modal */}
      {selectedWorkshop && (
        <BookingsModal
          workshop={workshops.find((w) => w.id === selectedWorkshop)}
          bookings={bookings[selectedWorkshop] || []}
          onClose={() => setSelectedWorkshop(null)}
        />
      )}
    </div>
  );
}

function BookingsModal({ workshop, bookings, onClose }) {
  const booked = bookings.filter((b) => b.status === "booked");
  const waitlist = bookings.filter((b) => b.status === "waitlist");

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-border p-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-accent">{workshop.title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Booked */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-4">
              Confirmed ({booked.length})
            </h3>
            <div className="space-y-3">
              {booked.length === 0 ? (
                <p className="text-muted-foreground text-sm">No bookings yet</p>
              ) : (
                booked.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-muted p-4 rounded-lg text-sm"
                  >
                    <p className="font-medium text-accent">{booking.full_name}</p>
                    <p className="text-muted-foreground">{booking.email}</p>
                    <p className="text-muted-foreground text-xs">{booking.phone}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Waitlist */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-4">
              Waitlist ({waitlist.length})
            </h3>
            <div className="space-y-3">
              {waitlist.length === 0 ? (
                <p className="text-muted-foreground text-sm">No waitlist entries</p>
              ) : (
                waitlist.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-muted p-4 rounded-lg text-sm border border-border"
                  >
                    <p className="font-medium text-accent">{booking.full_name}</p>
                    <p className="text-muted-foreground">{booking.email}</p>
                    <p className="text-muted-foreground text-xs">{booking.phone}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}