import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { LogOut, BookmarkIcon, Calendar } from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await base44.auth.me();
        setUser(currentUser);
      } catch (error) {
        console.error("Failed to load user:", error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await base44.auth.logout("/");
  };

  if (loading) {
    return (
      <div className="pt-[72px] min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="pt-[72px] min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Please log in to access your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="pt-[72px] min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <h1 className="text-4xl font-semibold text-accent mb-2">
              Welcome, {user.full_name || user.email}
            </h1>
            <p className="text-muted-foreground">Manage your resources and bookings</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-primary/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Log out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Saved Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-muted rounded-lg p-8 border border-border">
              <div className="flex items-center gap-2 mb-6">
                <BookmarkIcon className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-accent">Saved Resources</h2>
              </div>
              {saved.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    You haven't saved any resources yet.
                  </p>
                  <Link
                    to="/resources"
                    className="inline-block text-primary font-medium hover:text-primary/80"
                  >
                    Browse resources →
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {saved.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-lg border border-border">
                      <p className="font-medium text-accent">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.type}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Upcoming Bookings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-muted rounded-lg p-8 border border-border h-full">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-accent">Bookings</h2>
              </div>
              {bookings.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    No upcoming bookings.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block text-primary font-medium hover:text-primary/80"
                  >
                    Book now →
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="bg-white p-4 rounded-lg border border-border">
                      <p className="font-medium text-accent">{booking.title}</p>
                      <p className="text-sm text-muted-foreground">{booking.date}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-lg font-semibold text-accent mb-6">Explore more</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Services", desc: "Learn about our financial planning and training.", link: "/services" },
              { title: "Resources", desc: "Access guides, articles, and worksheets.", link: "/resources" },
              { title: "Contact", desc: "Get in touch to book a consultation.", link: "/contact" },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="bg-muted p-6 rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <h4 className="font-semibold text-accent mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}