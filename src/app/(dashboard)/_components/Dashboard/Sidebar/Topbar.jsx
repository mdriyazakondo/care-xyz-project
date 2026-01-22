import { Bell, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Topbar({ pageTitle = "Overview" }) {
  return (
    <header className="sticky top-0 z-40 h-16 w-full bg-background/80 backdrop-blur-md border-b-2 border-gray-200 dark:border-slate-800 px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg">
          <Menu size={24} />
        </button>

        <div className="hidden sm:block font-medium text-gray-500 dark:text-gray-400 text-sm">
          Pages / <span className="text-foreground">{pageTitle}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="p-2 text-gray-400 hover:text-primary transition-colors">
          <Bell size={20} />
        </button>
        <ThemeToggle />
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
          JD
        </div>
      </div>
    </header>
  );
}
