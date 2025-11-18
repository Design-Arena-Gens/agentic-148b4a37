"use client";

import { Bell, Search } from 'lucide-react';
import { useState } from 'react';

export function Topbar() {
  const [query, setQuery] = useState('');
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b border-border">
      <div className="flex items-center justify-between gap-3 h-14 px-4">
        <div className="hidden md:block">
          <h1 className="text-lg font-semibold">Overview</h1>
        </div>
        <div className="flex-1 flex items-center gap-2 max-w-xl mx-auto">
          <div className="flex items-center gap-2 flex-1 bg-card border border-border rounded-lg px-3 py-2">
            <Search size={16} className="text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses, assignments..."
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="button" aria-label="Notifications">
            <Bell size={16} />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
        </div>
      </div>
    </header>
  );
}
