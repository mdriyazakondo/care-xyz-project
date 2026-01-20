"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  DollarSign,
  Briefcase,
  Star,
  MoreVertical,
  CheckCircle2,
} from "lucide-react";

const data = [
  { name: "Sat", val: 2000 },
  { name: "Sun", val: 4000 },
  { name: "Mon", val: 3500 },
  { name: "Tue", val: 5000 },
  { name: "Wed", val: 4200 },
  { name: "Thu", val: 6000 },
];

const recentUsers = [
  {
    id: 1,
    name: "Arif Ahmed",
    email: "arif@example.com",
    status: "Active",
    date: "20 Jan",
  },
  {
    id: 2,
    name: "Sara Islam",
    email: "sara@example.com",
    status: "Pending",
    date: "19 Jan",
  },
  {
    id: 3,
    name: "Tanvir Khan",
    email: "tanvir@example.com",
    status: "Active",
    date: "18 Jan",
  },
];

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      {/* 1. TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value="৳12,500"
          icon={<DollarSign size={20} />}
          trend="+12%"
          color="text-emerald-500"
        />
        <StatCard
          title="Total Users"
          value="1,240"
          icon={<Users size={20} />}
          trend="+5%"
          color="text-blue-500"
        />
        <StatCard
          title="Services"
          value="45"
          icon={<Briefcase size={20} />}
          trend="Live"
          color="text-purple-500"
        />
        <StatCard
          title="Avg Rating"
          value="4.8"
          icon={<Star size={20} />}
          trend="Excellent"
          color="text-orange-500"
        />
      </div>

      {/* 2. CHART SECTION */}
      <div className="bg-background border border-gray-200 dark:border-slate-800 p-6 rounded-[2.5rem] shadow-sm">
        <h3 className="text-lg font-bold mb-6">Revenue Analytics</h3>
        <div className="h-75">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#88888820"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                fontSize={12}
                stroke="#888888"
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{ borderRadius: "16px", border: "none" }}
              />
              <Area
                type="monotone"
                dataKey="val"
                stroke="#3b82f6"
                strokeWidth={3}
                fill="url(#colorVal)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BOTTOM SECTION: USERS & SERVICE STATUS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 3. RECENT USERS TABLE */}
        <div className="lg:col-span-2 bg-background border border-gray-200 dark:border-slate-800 p-6 rounded-[2.5rem]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">Recent Users</h3>
            <button className="text-sm text-primary font-medium">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-100 dark:border-slate-900">
                  <th className="pb-4 font-medium">User</th>
                  <th className="pb-4 font-medium">Status</th>
                  <th className="pb-4 font-medium">Date</th>
                  <th className="pb-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-slate-900">
                {recentUsers.map((user) => (
                  <tr key={user.id} className="group">
                    <td className="py-4">
                      <div className="font-medium text-sm">{user.name}</div>
                      <div className="text-xs text-gray-400">{user.email}</div>
                    </td>
                    <td className="py-4">
                      <span
                        className={`text-[10px] px-2 py-1 rounded-full font-bold ${user.status === "Active" ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 text-xs text-gray-500">{user.date}</td>
                    <td className="py-4 text-right">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. SERVICE STATUS / QUICK ACTIONS */}
        <div className="bg-background border border-gray-200 dark:border-slate-800 p-6 rounded-[2.5rem]">
          <h3 className="font-bold mb-6">Service Health</h3>
          <div className="space-y-6">
            <StatusItem
              label="Nursing Care"
              progress="95%"
              color="bg-emerald-500"
            />
            <StatusItem
              label="Physiotherapy"
              progress="80%"
              color="bg-blue-500"
            />
            <StatusItem
              label="Emergency"
              progress="60%"
              color="bg-orange-500"
            />
            <div className="pt-4 border-t border-gray-100 dark:border-slate-900">
              <div className="bg-primary/5 p-4 rounded-2xl flex items-center gap-3">
                <CheckCircle2 className="text-primary" size={20} />
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  All systems are running smoothly today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-components
function StatCard({ title, value, icon, trend, color }) {
  return (
    <div className="bg-background border border-gray-200 dark:border-slate-800 p-6 rounded-4xl hover:shadow-lg transition-all">
      <div className="flex justify-between mb-4">
        <div className="p-2 bg-gray-50 dark:bg-slate-900 rounded-lg">
          {icon}
        </div>
        <span className={`text-xs font-bold ${color}`}>{trend}</span>
      </div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <h2 className="text-2xl font-black mt-1">{value}</h2>
    </div>
  );
}

function StatusItem({ label, progress, color }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-bold">
        <span>{label}</span>
        <span>{progress}</span>
      </div>
      <div className="h-2 w-full bg-gray-100 dark:bg-slate-900 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full`}
          style={{ width: progress }}
        ></div>
      </div>
    </div>
  );
}
