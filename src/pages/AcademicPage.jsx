import Hero from '../components/Hero';

const modules = [
  { name: 'Computer Science Project', code: 'CMP-3010', grade: 'A' },
  { name: 'Software Engineering', code: 'CMP-2201', grade: 'A-' },
  { name: 'Databases', code: 'CMP-2108', grade: 'B+' },
  { name: 'Algorithms and Complexity', code: 'CMP-2204', grade: 'A' },
  { name: 'Operating Systems', code: 'CMP-2301', grade: 'B' },
  { name: 'Cybersecurity Fundamentals', code: 'CMP-2402', grade: 'A-' },
  { name: 'Human-Computer Interaction', code: 'CMP-2106', grade: 'B+' },
];

const average = (modules.reduce((total, module) => total + getGradeValue(module.grade), 0) / modules.length).toFixed(2);

function getGradeValue(grade) {
  const values = {
    'A': 90,
    'A-': 85,
    'B+': 80,
    'B': 75,
    'B-': 70,
    'C+': 67,
    'C': 60,
  };

  return values[grade] ?? 0;
}

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
            <span>Average Grade</span>
            <strong>{average}%</strong>
          </div>
          <div className="summary-card">
            <span>Top Grade</span>
            <strong>A</strong>
          </div>
        </section>

        <section className="academic-panel">
          <div className="academic-header">
            <div>Module</div>
            <div>Code</div>
            <div>Grade</div>
          </div>

          {modules.map((module) => (
            <div className="academic-row" key={module.code}>
              <div className="module-name">{module.name}</div>
              <div className="module-code">{module.code}</div>
              <div className="module-grade"><span className="grade-badge">{module.grade}</span></div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
