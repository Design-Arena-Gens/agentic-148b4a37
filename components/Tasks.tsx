import { CheckCircle2, Clock3 } from 'lucide-react';

const tasks = [
  { title: 'DS: Implement Linked List', due: 'Tomorrow', course: 'CS201', done: false },
  { title: 'Essay Outline', due: 'Fri', course: 'EN110', done: false },
  { title: 'Problem Set 4', due: 'Mon', course: 'MA204', done: true },
];

export function Tasks() {
  return (
    <div id="assignments" className="card p-4">
      <div className="flex items-center justify-between">
        <h2 className="section-title">Assignments</h2>
        <span className="badge">Next 7 days</span>
      </div>
      <div className="mt-4 space-y-3">
        {tasks.map((t, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
            <div className="flex items-center gap-3">
              {t.done ? (
                <CheckCircle2 size={18} className="text-emerald-400" />
              ) : (
                <Clock3 size={18} className="text-amber-300" />
              )}
              <div>
                <div className={`font-medium ${t.done ? 'line-through text-slate-400' : ''}`}>{t.title}</div>
                <div className="subtle text-xs">{t.course} ? Due {t.due}</div>
              </div>
            </div>
            <button className="button text-xs">Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
