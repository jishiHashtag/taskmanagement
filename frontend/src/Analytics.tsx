import React from "react";
import {
  Box,
  Typography,
  GridLegacy as Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "../src/css/dashboard.css";

const areaData = [
  { day: "Mon", activeUsers: 120 },
  { day: "Tue", activeUsers: 210 },
  { day: "Wed", activeUsers: 170 },
  { day: "Thu", activeUsers: 250 },
  { day: "Fri", activeUsers: 300 },
  { day: "Sat", activeUsers: 150 },
  { day: "Sun", activeUsers: 200 },
];

const pieData = [
  { name: "Trial", value: 24 },
  { name: "Paid", value: 76 },
];

const COLORS = ["#00b24f", "#e600ff"];

export default function AnalyticsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" mb={3}>
        Admin Analytics
      </Typography>

      {/* Key Metric Cards */}
      <Grid container spacing={3} mb={4}>
        {[
          { label: "Total Clients", value: "1,245" },
          { label: "Active Users (Weekly)", value: "348" },
          { label: "Expiring Licenses", value: "21" },
          { label: "Crashes (24h)", value: "6" },
        ].map((m, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card sx={{ p: 2, bgcolor: "#f5f5f5" }}>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  {m.label}
                </Typography>
                <Typography variant="h6">{m.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={8}>
          <Card sx={{ height: 300, p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Daily Active Users (Last 7 Days)
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart data={areaData}>
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="activeUsers"
                  stroke="#00b24f"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 300, p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              License Types
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Activity / Crash Summary */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <Typography variant="subtitle1">Recent Activity</Typography>
            <Box mt={2}>
              <Typography variant="body2">
                [Client John logged in at 10:12 AM]
              </Typography>
              <Typography variant="body2">
                [Client ACME updated to v1.2]
              </Typography>
              <Typography variant="body2">
                [Client PixelSoft installed trial]
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
