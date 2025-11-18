import { Sidebar } from '@/components/Sidebar';
import { Topbar } from '@/components/Topbar';
import { SummaryCards } from '@/components/SummaryCards';
import { CourseList } from '@/components/CourseList';
import { Schedule } from '@/components/Schedule';
import { Tasks } from '@/components/Tasks';

export default function Page() {
  return (
    <div className="min-h-screen grid md:grid-cols-[240px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Topbar />
        <main className="p-4">
          <div className="container-max mx-auto space-y-4">
            <SummaryCards />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 space-y-4">
                <CourseList />
                <Tasks />
              </div>
              <div className="space-y-4">
                <Schedule />
                <div id="grades" className="card p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="section-title">Grades</h2>
                    <span className="badge">This Term</span>
                  </div>
                  <div className="mt-3 text-sm subtle">No grades posted yet.</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
