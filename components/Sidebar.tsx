"use client";

import Link from 'next/link';
import { BookOpen, Calendar, GraduationCap, Home, Inbox, LineChart, Menu } from 'lucide-react';
import { useState } from 'react';

const nav = [
  { href: '#', label: 'Overview', icon: Home },
  { href: '#courses', label: 'Courses', icon: BookOpen },
  { href: '#assignments', label: 'Assignments', icon: Inbox },
  { href: '#schedule', label: 'Schedule', icon: Calendar },
  { href: '#grades', label: 'Grades', icon: LineChart },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between px-4 h-14">
          <button className="button" onClick={() => setOpen(!open)}>
            <Menu size={18} />
            <span className="sr-only">Toggle Menu</span>
          </button>
          <div className="flex items-center gap-2">
            <GraduationCap size={18} className="text-primary" />
            <span className="font-semibold">Student</span>
          </div>
          <div className="w-9" />
        </div>
      </div>

      <aside className={`fixed md:static inset-y-0 left-0 z-50 w-64 md:w-60 bg-card border-r border-border p-4 transition-transform ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="hidden md:flex items-center gap-2 px-2 pb-4">
          <GraduationCap size={18} className="text-primary" />
          <span className="font-semibold">Student</span>
        </div>
        <nav className="space-y-1">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50/5 text-slate-300 hover:text-white"
              onClick={() => setOpen(false)}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-6 p-3 rounded-lg bg-primary/10 text-primary text-sm">
          <p>Welcome back! Stay curious.</p>
        </div>
      </aside>

      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
