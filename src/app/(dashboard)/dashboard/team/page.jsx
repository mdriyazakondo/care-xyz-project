"use client";
import React, { useState } from "react";
import {
  Users,
  UserPlus,
  Search,
  MoreVertical,
  Mail,
  Shield,
  Trash2,
  Edit3,
  Filter,
} from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Arif Ahmed",
    email: "arif@homecare.com",
    role: "Super Admin",
    status: "Active",
    avatar: "",
  },
  {
    id: 2,
    name: "Sara Islam",
    email: "sara@homecare.com",
    role: "Manager",
    status: "Active",
    avatar: "",
  },
  {
    id: 3,
    name: "Tanvir Khan",
    email: "tanvir@homecare.com",
    role: "Editor",
    status: "Offline",
    avatar: "",
  },
  {
    id: 4,
    name: "Mehedi Hasan",
    email: "mehedi@homecare.com",
    role: "Support",
    status: "Active",
    avatar: "",
  },
];

export default function TeamPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8 pb-10">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-foreground flex items-center gap-3">
            <Users className="text-primary" size={32} /> Team Members
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">
            Manage your staff roles and permissions.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-black text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95">
          <UserPlus size={18} /> Add New Member
        </button>
      </div>

      {/* 2. Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by name or email..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-background border border-gray-200 dark:border-slate-800 focus:border-primary outline-none transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 px-5 py-3 bg-background border border-gray-200 dark:border-slate-800 rounded-2xl font-bold text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-900 transition-all">
          <Filter size={18} /> Filters
        </button>
      </div>

      {/* 3. Team Table Section */}
      <div className="bg-background border border-gray-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 dark:bg-slate-900/50 text-gray-400 dark:text-gray-500 text-[11px] uppercase tracking-widest font-black border-b border-gray-100 dark:border-slate-800">
                <th className="px-8 py-5">Member</th>
                <th className="px-6 py-5">Role</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
              {teamMembers.map((member) => (
                <tr
                  key={member.id}
                  className="group hover:bg-gray-50/50 dark:hover:bg-slate-900/30 transition-all"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-2xl bg-primary/10 overflow-hidden border border-primary/5 group-hover:scale-105 transition-transform">
                        <Image
                          width={20}
                          height={20}
                          src={member.avatar}
                          alt={member.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-black text-foreground text-sm">
                          {member.name}
                        </p>
                        <p className="text-xs text-gray-400 font-medium flex items-center gap-1">
                          <Mail size={12} /> {member.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Shield size={14} className="text-primary" />
                      <span className="text-sm font-bold">{member.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                        member.status === "Active"
                          ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                          : "bg-gray-100 text-gray-500 dark:bg-slate-800 dark:text-gray-400"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${member.status === "Active" ? "bg-emerald-500" : "bg-gray-400"}`}
                      ></span>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right group">
                    <div className="flex justify-end gap-2 ">
                      <button className="p-2 text-green-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-all">
                        <Edit3 size={18} />
                      </button>
                      <button className="p-2 text-red-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all">
                        <Trash2 size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-primary/5 dark:bg-primary/10 border border-primary/10 p-6 rounded-4xl flex items-center justify-between">
        <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
          Showing <span className="text-primary">{teamMembers.length}</span>{" "}
          active team members
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-xs font-bold bg-background border border-gray-200 dark:border-slate-800 rounded-xl disabled:opacity-50">
            Previous
          </button>
          <button className="px-4 py-2 text-xs font-bold bg-background border border-gray-200 dark:border-slate-800 rounded-xl">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
