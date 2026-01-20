"use client";
import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Camera,
  ShieldCheck,
  Bell,
  Lock,
  LogOut,
  Edit2,
  ChevronRight,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-24 lg:pb-10 transition-colors duration-300">
      {/* 1. Profile Header Section */}
      <div className="relative group">
        {/* Cover Image - Dynamic Gradient for Light/Dark */}
        <div className="h-44 md:h-56 w-full bg-gradient-to-r from-blue-500/20 via-primary/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-[2.5rem] border border-primary/5"></div>

        <div className="absolute -bottom-16 left-6 md:left-10 flex items-end gap-4 md:gap-6">
          {/* Avatar with Camera Overlay */}
          <div className="relative">
            <div className="h-28 w-28 md:h-36 md:w-36 rounded-[2.2rem] border-4 border-background bg-white dark:bg-slate-900 overflow-hidden shadow-2xl">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="Admin Avatar"
                className="h-full w-full object-cover"
              />
            </div>
            <button className="absolute bottom-1 right-1 p-2.5 bg-primary text-white rounded-2xl shadow-lg hover:scale-110 active:scale-95 transition-all">
              <Camera size={18} />
            </button>
          </div>

          <div className="pb-4">
            <h1 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
              Jon Doe
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-bold text-sm flex items-center gap-2">
              <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Super Admin
            </p>
          </div>
        </div>

        {/* Edit Button for Desktop */}
        <div className="absolute -bottom-12 right-10 hidden md:block">
          <button className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-2xl font-black text-sm shadow-xl hover:opacity-90 transition-all active:scale-95">
            <Edit2 size={16} /> Edit Profile
          </button>
        </div>
      </div>

      {/* 2. Content Grid */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Bio & Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-background border border-gray-200 dark:border-slate-800 p-6 rounded-[2.5rem] shadow-sm">
            <h3 className="font-black text-lg text-foreground mb-6">
              Personal Info
            </h3>
            <div className="space-y-5">
              <InfoRow
                icon={<Mail />}
                label="Email Address"
                value="jon.admin@core.dash"
              />
              <InfoRow
                icon={<Phone />}
                label="Phone Number"
                value="+880 1712-345678"
              />
              <InfoRow
                icon={<MapPin />}
                label="Work Location"
                value="Dhaka, Bangladesh"
              />
              <InfoRow
                icon={<Calendar />}
                label="Member Since"
                value="January 2024"
              />
            </div>
          </div>

          {/* Quick Action: Logout */}
          <button className="w-full flex items-center justify-center gap-3 p-5 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 font-black rounded-[2rem] border border-red-100 dark:border-red-500/20 hover:bg-red-100 dark:hover:bg-red-500/20 transition-all">
            <LogOut size={20} /> Sign Out
          </button>
        </div>

        {/* Right Column: Settings & Security */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-background border border-gray-200 dark:border-slate-800 p-6 md:p-8 rounded-[2.5rem] shadow-sm">
            <h3 className="font-black text-lg text-foreground mb-8">
              Account Settings
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SettingCard
                icon={<Lock className="text-blue-500" />}
                title="Security"
                desc="Password & Authentication"
              />
              <SettingCard
                icon={<Bell className="text-orange-500" />}
                title="Notifications"
                desc="Manage alerts & emails"
              />
              <SettingCard
                icon={<ShieldCheck className="text-emerald-500" />}
                title="Access Control"
                desc="Your admin permissions"
              />
              <SettingCard
                icon={<User className="text-purple-500" />}
                title="Linked Accounts"
                desc="Manage external logins"
              />
            </div>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 border border-primary/10 p-8 rounded-[2.5rem] relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="font-black text-lg text-primary mb-2">
                Profile Security Score
              </h3>
              <div className="flex items-center gap-4 mb-3">
                <div className="h-3 flex-1 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-primary rounded-full transition-all duration-1000 group-hover:w-[90%]"></div>
                </div>
                <span className="font-black text-primary">85%</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Verify your email address to unlock all administrative features.
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 h-32 w-32 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="p-2.5 bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 rounded-xl group-hover:text-primary transition-colors">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-black">
          {label}
        </p>
        <p className="text-sm font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}

function SettingCard({ icon, title, desc }) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-100 dark:border-slate-800 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer group">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-white dark:bg-slate-900 rounded-xl  shadow-sm border border-gray-100 dark:border-slate-800 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-black text-foreground text-gray-500">
            {title}
          </h4>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
            {desc}
          </p>
        </div>
      </div>
      <ChevronRight
        size={16}
        className="text-gray-300 group-hover:text-primary transition-colors"
      />
    </div>
  );
}
