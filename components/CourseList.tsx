import { BookOpenText } from 'lucide-react';

const courses = [
  { code: 'CS201', name: 'Data Structures', progress: 72 },
  { code: 'MA204', name: 'Linear Algebra', progress: 54 },
  { code: 'EN110', name: 'Academic Writing', progress: 88 },
];

export function CourseList() {
  return (
    <div id="courses" className="card p-4">
      <div className="flex items-center justify-between">
        <h2 className="section-title">Courses</h2>
        <span className="badge">This Term</span>
      </div>
      <div className="mt-4 space-y-3">
        {courses.map((c) => (
          <div key={c.code} className="p-3 rounded-lg bg-card border border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/15 text-primary grid place-items-center">
                  <BookOpenText size={16} />
                </div>
                <div>
                  <div className="font-medium">{c.name}</div>
                  <div className="subtle text-xs">{c.code}</div>
                </div>
              </div>
              <div className="text-sm subtle">{c.progress}%</div>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-slate-700/50 overflow-hidden">
              <div className="h-full bg-primary" style={{ width: `${c.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
