"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Library } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/home", icon: Home },
  { label: "Collections", href: "/collections", icon: Library },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-80 shrink-0 border-r border-zinc-200 dark:border-zinc-800 bg-[#ffffff] dark:bg-zinc-950 flex flex-col h-full">
      <div className="h-12 px-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center">
        <span className="text-base text-zinc-900 dark:text-zinc-50">Bookmarks</span>
      </div>

      <nav className="flex-1 px-2 py-3 flex flex-col gap-0.5">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-[#f5f5f5] dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-50"
              )}
            >
              <Icon size={16} className="shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
