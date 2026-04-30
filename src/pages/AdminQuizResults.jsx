import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useToast } from "@/components/ui/use-toast";

export default function AdminQuizResults() {
  const { toast } = useToast();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
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
      loadResults();
    } catch (error) {
      window.location.href = "/";
    }
  };

  const loadResults = async () => {
    try {
      const data = await base44.entities.QuizResult.list("-created_date", 500);
      setResults(data);
    } catch (error) {
      toast({ title: "Error", description: error.message });
    } finally {
      setLoading(false);
    }
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

  // Calculate stats
  const totalLeads = results.length;
  const avgScore = results.length > 0 ? (results.reduce((sum, r) => sum + r.score, 0) / results.length).toFixed(1) : 0;
  const newsletterSignups = results.filter((r) => r.wants_newsletter).length;

  const categoryBreakdown = [
    { name: "Financial go-getter", value: results.filter((r) => r.category === "Financial go-getter").length },
    { name: "On the right track", value: results.filter((r) => r.category === "On the right track").length },
    { name: "Building your base", value: results.filter((r) => r.category === "Building your base").length },
    { name: "Let's start from scratch", value: results.filter((r) => r.category === "Let's start from scratch").length },
  ];

  const scoreDistribution = [
    { range: "8-9", count: results.filter((r) => r.score >= 8 && r.score <= 9).length },
    { range: "10-17", count: results.filter((r) => r.score >= 10 && r.score <= 17).length },
    { range: "18-25", count: results.filter((r) => r.score >= 18 && r.score <= 25).length },
    { range: "26-32", count: results.filter((r) => r.score >= 26).length },
  ];

  const COLORS = ["#2dd4bf", "#1e3a4c", "#a78bfa", "#fb923c"];

  return (
    <div className="pt-[72px] min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold text-accent mb-12">Quiz Results & Analytics</h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-muted p-6 rounded-lg border border-border"
          >
            <p className="text-sm text-muted-foreground mb-2">Total Leads</p>
            <p className="text-3xl font-semibold text-accent">{totalLeads}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-muted p-6 rounded-lg border border-border"
          >
            <p className="text-sm text-muted-foreground mb-2">Avg Score</p>
            <p className="text-3xl font-semibold text-accent">{avgScore}/32</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-muted p-6 rounded-lg border border-border"
          >
            <p className="text-sm text-muted-foreground mb-2">Newsletter Signups</p>
            <p className="text-3xl font-semibold text-accent">{newsletterSignups}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-muted p-6 rounded-lg border border-border"
          >
            <p className="text-sm text-muted-foreground mb-2">Conversion Rate</p>
            <p className="text-3xl font-semibold text-accent">
              {totalLeads > 0 ? ((newsletterSignups / totalLeads) * 100).toFixed(0) : 0}%
            </p>
          </motion.div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Score Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-muted p-8 rounded-lg border border-border"
          >
            <h3 className="text-lg font-semibold text-accent mb-6">Score Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={scoreDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#2dd4bf" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Category Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-muted p-8 rounded-lg border border-border"
          >
            <h3 className="text-lg font-semibold text-accent mb-6">Results by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryBreakdown.filter((c) => c.value > 0)}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#2dd4bf"
                  dataKey="value"
                >
                  {categoryBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Recent Leads */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-muted p-8 rounded-lg border border-border"
        >
          <h3 className="text-lg font-semibold text-accent mb-6">Recent Leads</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border">
                <tr>
                  <th className="text-left py-3 px-4 font-medium text-accent">Name</th>
                  <th className="text-left py-3 px-4 font-medium text-accent">Email</th>
                  <th className="text-left py-3 px-4 font-medium text-accent">Score</th>
                  <th className="text-left py-3 px-4 font-medium text-accent">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-accent">Newsletter</th>
                  <th className="text-left py-3 px-4 font-medium text-accent">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-accent">Date</th>
                </tr>
              </thead>
              <tbody>
                {results.slice(0, 20).map((result) => (
                  <tr key={result.id} className="border-b border-border/50 hover:bg-white/50 transition-colors">
                    <td className="py-3 px-4 text-foreground font-medium">{result.full_name}</td>
                    <td className="py-3 px-4 text-muted-foreground">{result.email}</td>
                    <td className="py-3 px-4 text-foreground font-semibold">{result.score}/32</td>
                    <td className="py-3 px-4 text-muted-foreground text-xs">{result.category}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs font-medium ${result.wants_newsletter ? "text-primary" : "text-muted-foreground"}`}>
                        {result.wants_newsletter ? "Yes" : "No"}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        {result.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {new Date(result.created_date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {results.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No quiz results yet</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}