import {
  LayoutDashboard,
  PieChart,
  Users,
  Settings,
  PlusCircle,
} from "lucide-react";
import Sidebar from "./_components/Dashboard/Sidebar/Sidebar";
import Topbar from "./_components/Dashboard/Sidebar/Topbar";

export default function DashboardLayout({ children }) {
  const navLinks = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      href: "/dashboard/overview",
      active: true,
    },
    {
      icon: <PlusCircle size={20} />,
      label: "Create Service",
      href: "/dashboard/add-service",
    },
    {
      icon: <PieChart size={20} />,
      label: "Analytics",
      href: "/dashboard/analytics",
    },
    {
      icon: <PieChart size={20} />,
      label: "My Booking",
      href: "/dashboard/my-bookings",
    },
    { icon: <Users size={20} />, label: "Team", href: "/dashboard/team" },
    {
      icon: <Settings size={20} />,
      label: "Settings",
      href: "/dashboard/profile",
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar navLinks={navLinks} />

      <div className="flex-1 lg:pl-64 flex flex-col w-full">
        <Topbar pageTitle="Overview" />

        <main className="p-4 md:p-8 lg:p-10 mb-16 lg:mb-0">
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
}
