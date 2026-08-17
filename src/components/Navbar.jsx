import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/academic', label: 'Academic' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Malachy Hearnden</div>
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
    </nav>
  );
}
