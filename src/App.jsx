import { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AcademicPage from './pages/AcademicPage';
import SkillsPage from './pages/SkillsPage';

export default function App() {
  const appRef = useRef(null);
  const pointerPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const app = appRef.current;
    const updatePointerPosition = (x, y) => {
      app.style.setProperty('--pointer-x', `${x + window.scrollX}px`);
      app.style.setProperty('--pointer-y', `${y + window.scrollY}px`);
    };
    const handlePointerMove = (event) => {
      pointerPosition.current = { x: event.clientX, y: event.clientY };
      updatePointerPosition(event.clientX, event.clientY);
    };
    const handleScroll = () => {
      updatePointerPosition(pointerPosition.current.x, pointerPosition.current.y);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
    };
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
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}
