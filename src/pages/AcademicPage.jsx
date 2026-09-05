import Hero from '../components/Hero';

const academicYears = [
  {
    year: 'Year 1',
    academicYear: '2024/25',
    modules: [
      { name: 'Web-Based Programming', grade: 55.20 },
      { name: 'Systems Development', grade: 56.20 },
      { name: 'Computing Principles', grade: 53.30 },
      { name: 'Database Systems', grade: 75.50 },
      { name: 'Mathematics for Computing A', grade: 60.18 },
      { name: 'Programming 1', grade: 72.56 },
    ],
  },
  {
    year: 'Year 2',
    academicYear: '2025/26',
    modules: [
      { name: 'Architectures & Operating Systems', grade: 46.50 },
      { name: 'Programming 2', grade: 55.30 },
      { name: 'Information Retrieval', grade: 71.10 },
      { name: 'Software Engineering', grade: 73.55 },
      { name: 'Data Structures & Algorithms', grade: 71.60 },
      { name: 'Networks', grade: 77.53 },
    ],
  },
];

const modules = academicYears.flatMap((academicYear) => academicYear.modules);
const bestGradeThreshold = 70;
const bestModules = modules.filter((module) => module.grade >= bestGradeThreshold);

const average = (bestModules.reduce((total, module) => total + module.grade, 0) / bestModules.length).toFixed(2);
const topGrade = Math.max(...bestModules.map((module) => module.grade));

export default function AcademicPage() {
  return (
    <>
      <Hero title="Academic Highlights" subtitle="Selected modules with results of 70% or above." />

      <main className="container">
        <section className="academic-summary">
          <div className="summary-card">
            <span>Highlighted Modules</span>
            <strong>{bestModules.length}</strong>
          </div>
          <div className="summary-card">
            <span>Highlight Average</span>
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

            {academicYear.modules.filter((module) => module.grade >= bestGradeThreshold).map((module) => (
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
