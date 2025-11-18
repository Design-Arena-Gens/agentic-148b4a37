import { CalendarDays, GraduationCap, Timer } from 'lucide-react';

export function SummaryCards() {
  const stats = [
    { label: 'GPA', value: '3.82', icon: GraduationCap },
    { label: 'Credits', value: '48/60', icon: Timer },
    { label: 'Upcoming', value: '3 tasks', icon: CalendarDays },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="card p-4">
          <div className="flex items-center justify-between">
            <span className="subtle">{s.label}</span>
            <s.icon size={16} className="text-slate-400" />
          </div>
          <div className="mt-2 text-2xl font-semibold">{s.value}</div>
        </div>
      ))}
    </div>
  );
}
