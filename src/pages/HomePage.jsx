import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import { projects } from '../data/projects';
import profilePhoto from '../../portfolio photo.jpg';

const destinations = [
  { path: '/projects', number: '01', label: 'Projects', title: 'See what I build', summary: 'Browse web apps, game prototypes, and security experiments, with the technologies behind each one.', action: 'Explore projects' },
  { path: '/about', number: '02', label: 'About me', title: 'Get to know my approach', summary: 'Learn about my interests, the problems I enjoy solving, and the ideas that shape my work.', action: 'Read my story' },
  { path: '/academic', number: '03', label: 'Academic record', title: 'Follow my progress', summary: 'See my Computer Science modules and results across my first two years at university.', action: 'View my record' },
  { path: '/contact', number: '04', label: 'Contact', title: 'Start a conversation', summary: 'Have an idea, opportunity, or project to discuss? Send me a message and let’s talk.', action: 'Get in touch' },
];

export default function HomePage() {
  const [activeDestination, setActiveDestination] = useState(destinations[0].path);
  const activeItem = destinations.find((destination) => destination.path === activeDestination);

  return (
    <>
        <Hero title="Malachy Hearnden" subtitle="Computer Science student • Developer • Creative problem-solver" photo={profilePhoto} />

      <main className="container">
        <section className="home-intro">
          <div className="intro-copy">
            <h2>Building useful things with a curious mind.</h2>
            <p>
              I’m a Computer Science student who enjoys turning ideas into thoughtful,
              usable software. My work spans full-stack web apps, games, and cybersecurity
              learning projects.
            </p>
            <div className="intro-actions">
              <NavLink className="btn" to="/projects">View my projects</NavLink>
              <NavLink className="text-link" to="/about">More about me <span aria-hidden="true">→</span></NavLink>
            </div>
          </div>
          <div className="home-stat" aria-label={`${projects.length} projects showcased`}>
            <strong>{String(projects.length).padStart(2, '0')}</strong>
            <span>projects<br />showcased</span>
          </div>
        </section>

        <section className="quick-nav" aria-labelledby="quick-nav-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Quick navigation</p>
              <h2 id="quick-nav-heading">Where would you like to start?</h2>
            </div>
            <p className="quick-nav-status" aria-live="polite">Currently viewing: {activeItem.label}</p>
          </div>

          <div className="destination-layout">
            <div className="destination-list" role="tablist" aria-label="Portfolio sections">
              {destinations.map((destination) => (
                <button
                  className={activeDestination === destination.path ? 'destination-tab active' : 'destination-tab'}
                  key={destination.path}
                  type="button"
                  role="tab"
                  aria-selected={activeDestination === destination.path}
                  onClick={() => setActiveDestination(destination.path)}
                >
                  <span className="destination-number">{destination.number}</span>
                  <span>{destination.label}</span>
                  <span className="destination-arrow" aria-hidden="true">↗</span>
                </button>
              ))}
            </div>

            <div className="destination-preview" role="tabpanel">
              <p className="eyebrow">{activeItem.label}</p>
              <h3>{activeItem.title}</h3>
              <p>{activeItem.summary}</p>
              <NavLink className="btn btn-small" to={activeItem.path}>{activeItem.action} <span aria-hidden="true">→</span></NavLink>
            </div>
          </div>
        </section>

        <section className="home-note">
          <p>Currently learning, building, and looking for the next interesting challenge.</p>
          <NavLink className="text-link" to="/contact">Say hello <span aria-hidden="true">→</span></NavLink>
        </section>
      </main>
    </>
  );
}
