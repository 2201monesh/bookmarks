import Link from "next/link";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Collections", href: "/collections" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 shrink-0 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col h-full">
      <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
        <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50">Bookmarks</span>
      </div>
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
