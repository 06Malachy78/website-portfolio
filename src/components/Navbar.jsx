import { NavLink } from 'react-router-dom';
import profilePhoto from '../../portfolio photo.jpg';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/academic', label: 'Academic' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/malachy-hearnden-84a0aa282/', label: 'LinkedIn', mark: 'in' },
  { href: 'https://github.com/06Malachy78', label: 'GitHub', mark: 'GH' },
  { href: 'https://tryhackme.com/p/malachyhearnden78', label: 'TryHackMe', mark: 'THM' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="nav-brand" to="/" aria-label="Return to the home page">
          <span className="nav-logo">Malachy</span>
        </NavLink>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="social-links" aria-label="Social profiles">
        {socialLinks.map((link) => (
          <a
            className="social-link"
            href={link.href}
            key={link.label}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit my ${link.label} profile`}
            title={link.label}
          >
            <span className={`social-mark social-mark-${link.label.toLowerCase()}`} aria-hidden="true">{link.mark}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
