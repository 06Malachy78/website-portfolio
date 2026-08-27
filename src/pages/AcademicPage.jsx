import Hero from '../components/Hero';

const academicYears = [
  {
    year: 'Year 1',
    academicYear: '2024/25',
    modules: [
      { name: 'Web-Based Programming', grade: 74.30 },
      { name: 'Systems Development', grade: 77.55 },
      { name: 'Computing Principles', grade: 80.40 },
      { name: 'Database Systems', grade: 92.30 },
      { name: 'Mathematics for Computing B', grade: 88.65 },
      { name: 'Programming 1', grade: 72.15 },
    ],
  },
  {
    year: 'Year 2',
    academicYear: '2025/26',
    modules: [
      { name: 'Architectures & Operating Systems', grade: 76.73 },
      { name: 'Programming 2', grade: 79.20 },
      { name: 'Information Retrieval', grade: 87.90 },
      { name: 'Software Engineering', grade: 76.25 },
      { name: 'Data Structures & Algorithms', grade: 87.20 },
      { name: 'Networks', grade: 72.98 },
    ],
  },
];

const modules = academicYears.flatMap((academicYear) => academicYear.modules);

const average = (modules.reduce((total, module) => total + module.grade, 0) / modules.length).toFixed(2);
const topGrade = Math.max(...modules.map((module) => module.grade));

export default function AcademicPage() {
  return (
    <>
      <Hero title="Academic Record" subtitle="A summary of my modules and grades." />

      <main className="container">
        <section className="academic-summary">
          <div className="summary-card">
            <span>Total Modules</span>
            <strong>{modules.length}</strong>
          </div>
          <div className="summary-card">
            <span>Average Percentage</span>
            <strong>{average}%</strong>
          </div>
          <div className="summary-card">
            <span>Top Percentage</span>
            <strong>{topGrade}%</strong>
          </div>
        </section>

        {academicYears.map((academicYear) => (
          <section className="academic-panel" key={academicYear.year}>
            <div className="academic-year-heading">
              <span>{academicYear.academicYear}</span>
              <h2>{academicYear.year} Grades</h2>
            </div>
            <div className="academic-header">
              <div>Module</div>
              <div>Percentage</div>
            </div>

            {academicYear.modules.map((module) => (
              <div className="academic-row" key={module.name}>
                <div className="module-name">{module.name}</div>
                <div className="module-grade"><span className="grade-badge">{module.grade}%</span></div>
              </div>
            ))}
          </section>
        ))}
      </main>
    </>
  );
}
