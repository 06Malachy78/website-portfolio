import { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AcademicPage from './pages/AcademicPage';

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const app = appRef.current;
    const updatePointerPosition = (event) => {
      app.style.setProperty('--pointer-x', `${event.clientX}px`);
      app.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', updatePointerPosition);
    return () => window.removeEventListener('pointermove', updatePointerPosition);
  }, []);

  return (
    <div className="app-shell" ref={appRef}>
      <Navbar />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academic" element={<AcademicPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}
