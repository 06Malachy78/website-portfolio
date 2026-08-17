const pageData = {
  home: {
    title: 'Malachy — Portfolio',
    hero: {
      title: 'Welcome',
      subtitle: 'Developer • Designer • Creator of Checkpoint Hub'
    },
    nav: [
      { label: 'Home', href: 'index.html', active: true },
      { label: 'Projects', href: 'projects.html', active: false },
      { label: 'About', href: '#about', active: false },
      { label: 'Contact', href: '#contact', active: false }
    ],
    main: `
      <section id="about" class="intro">
        <h2>About Me</h2>
        <p>
          I'm a Computer Science student and developer who enjoys building apps,
          games, and tools. This site showcases the projects I've created — from
          full‑stack web apps to Unity prototypes and cybersecurity labs.
        </p>
        <a class="btn" href="projects.html">View My Projects</a>
      </section>

      <section id="contact" class="intro" style="margin-top: 40px;">
        <h2>Contact</h2>
        <p>
          Want to collaborate, ask about a project, or talk through an idea?
          Feel free to reach out and connect.
        </p>
        <a class="btn" href="mailto:malachy@example.com">Get in Touch</a>
      </section>
    `
  },
  projects: {
    title: 'Projects — Malachy',
    hero: {
      title: 'My Projects',
      subtitle: 'A collection of apps, games, prototypes, and experiments.'
    },
    nav: [
      { label: 'Home', href: 'index.html', active: false },
      { label: 'Projects', href: 'projects.html', active: true },
      { label: 'About', href: 'index.html#about', active: false },
      { label: 'Contact', href: 'index.html#contact', active: false }
    ],
    main: `
      <section class="project-list">
        <div class="project-card">
          <h2>Checkpoint Hub</h2>
          <p>A full video-game review and tracking platform built with Next.js and Supabase.</p>
          <a class="btn" href="https://checkpointhub.vercel.app/" target="_blank" rel="noreferrer">Visit Project</a>
        </div>

        <div class="project-card">
          <h2>Weather App (Launchpad Project)</h2>
          <p>A clean, responsive weather app built for my university Launchpad project.</p>
          <a class="btn" href="#" target="_blank" rel="noreferrer">View Project</a>
        </div>

        <div class="project-card">
          <h2>Gelate — Co-op Puzzle Game Concept</h2>
          <p>A unique co-op puzzle game prototype exploring movement-based mechanics.</p>
          <a class="btn" href="#" target="_blank" rel="noreferrer">View Concept</a>
        </div>

        <div class="project-card">
          <h2>Cybersecurity Labs</h2>
          <p>Completed TryHackMe Pre-Security course — collection of writeups and exercises.</p>
          <a class="btn" href="#" target="_blank" rel="noreferrer">View Work</a>
        </div>

        <div class="project-card">
          <h2>Unity Experiments</h2>
          <p>Small gameplay prototypes built while learning Unity.</p>
          <a class="btn" href="#" target="_blank" rel="noreferrer">View Prototypes</a>
        </div>
      </section>
    `
  }
};

const bodyPage = document.body.dataset.page || 'home';
const page = pageData[bodyPage] || pageData.home;

document.title = page.title;

const appRoot = document.getElementById('app');

appRoot.innerHTML = `
  <nav class="navbar">
    <div class="nav-logo">Malachy Hearnden</div>
    <ul class="nav-links">
      ${page.nav.map(item => `
        <li>
          <a href="${item.href}" class="${item.active ? 'active' : ''}">${item.label}</a>
        </li>
      `).join('')}
    </ul>
  </nav>

  <header class="hero">
    <h1>${page.hero.title}</h1>
    <p>${page.hero.subtitle}</p>
  </header>

  <main class="container">
    ${page.main}
  </main>

  <footer class="footer">
    © 2026 Malachy — Portfolio
  </footer>
`;
