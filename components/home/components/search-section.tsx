"use client";

import { useState } from "react";
import { Plus, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SearchSection() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full h-16 border-b border-neutral-200 input-search-div flex items-center gap-2 px-4">
      <div className="relative flex items-center" style={{ width: "90%" }}>
        <Search size={15} className="absolute left-3 text-zinc-400 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search bookmarks..."
          className="w-full h-9 rounded-md border border-zinc-200 bg-white pl-9 pr-9 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-1 focus:ring-zinc-300 transition"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>
      <div className="flex-1">
        <Button size="default" className="w-full bg-zinc-900 hover:bg-zinc-700 text-white shadow-none cursor-pointer">
          <Plus size={15} /> Add New
        </Button>
      </div>
    </div>
  );
}
