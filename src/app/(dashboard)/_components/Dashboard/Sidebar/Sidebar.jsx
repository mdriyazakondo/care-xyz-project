"use client"; // usePathname use korar jonno client component hote hobe
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PieChart,
  Users,
  Settings,
  PlusCircle,
} from "lucide-react";

export default function Sidebar({ navLinks }) {
  const pathname = usePathname(); // Bortoman URL path nibe

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 w-64 hidden lg:flex flex-col border-r border-gray-200 dark:border-slate-800 bg-background">
        <div className="h-16 flex items-center px-6 border-b border-gray-100 dark:border-slate-900">
          <Link href="/">
            <h1 className="text-xl font-bold text-primary italic">CORE.DASH</h1>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navLinks.map((link, index) => {
            // Check korbe bortoman path eii link er href er sathe mile kina
            const isActive = pathname === link.href;

            return (
              <Link key={index} href={link.href}>
                <div
                  className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                  ${
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 dark:text-gray-400"
                  }
                `}
                >
                  {link.icon}
                  <span className="font-medium text-sm">{link.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-background border-t border-gray-200 dark:border-slate-800 flex items-center justify-around px-2 z-50">
        {navLinks.slice(0, 4).map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={index}
              href={link.href}
              className={`flex flex-col items-center transition-colors ${
                isActive ? "text-primary" : "text-gray-400"
              }`}
            >
              <div
                className={`${isActive ? "scale-110" : "scale-100"} transition-transform`}
              >
                {link.icon}
              </div>
              <span className="text-[10px] mt-1 font-medium">
                {link.label.split(" ")[0]}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
