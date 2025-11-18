import { Calendar } from 'lucide-react';

const events = [
  { time: '09:00', title: 'Linear Algebra', place: 'Room 204' },
  { time: '11:00', title: 'Data Structures Lab', place: 'Lab A' },
  { time: '14:00', title: 'Study Group', place: 'Library' },
];

export function Schedule() {
  return (
    <div id="schedule" className="card p-4">
      <div className="flex items-center justify-between">
        <h2 className="section-title">Schedule</h2>
        <span className="badge">Today</span>
      </div>
      <div className="mt-4 space-y-3">
        {events.map((e, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/15 text-primary grid place-items-center">
                <Calendar size={16} />
              </div>
              <div>
                <div className="font-medium">{e.title}</div>
                <div className="subtle text-xs">{e.place}</div>
              </div>
            </div>
            <div className="text-sm subtle">{e.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
