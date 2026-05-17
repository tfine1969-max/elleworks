import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";

export default function Register() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Redirect to Base44 registration
      await base44.auth.redirectToLogin("/dashboard");
    } catch (error) {
      toast({ title: "Error", description: error.message });
      setLoading(false);
    }
  };

  return (
    <div className="pt-[72px] min-h-screen flex items-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto px-6 w-full"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-accent mb-2">Create your account</h1>
          <p className="text-muted-foreground">Join the Elleworks community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
              className="mt-2 h-11"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-muted-foreground mt-6">
          Already have an account?{" "}
          <button
            onClick={() => window.location.href = "/auth/login"}
            className="text-primary font-medium hover:text-primary/80"
          >
            Log in here
          </button>
        </p>
      </motion.div>
    </div>
  );
}