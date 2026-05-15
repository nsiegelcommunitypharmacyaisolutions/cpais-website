import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PharmMeshLogo from './PharmMeshLogo.jsx';

const LINKEDIN_URL = 'https://www.linkedin.com/in/communitypharmacyaisolutions/';

function LinkedInIcon({ className = '' }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase =
    'text-pm-ink hover:text-pm-teal transition-colors font-display font-medium text-[15px]';
  const linkActive = 'text-pm-teal';

  return (
    <header
      className={`sticky top-0 z-40 bg-pm-paper/85 backdrop-blur-sm transition-shadow ${
        scrolled ? 'border-b border-pm-hairline' : ''
      }`}
    >
      <div className="mx-auto max-w-wide px-6 md:px-8 flex items-center justify-between h-16">
        <Link to="/" aria-label="PharmMesh home" className="flex items-center">
          <PharmMeshLogo size={32} />
        </Link>

        <nav className="flex items-center gap-6 md:gap-8">
          <NavLink
            to="/method"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ''}`}
          >
            Method
          </NavLink>
          <NavLink
            to="/engage"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ''}`}
          >
            Engage
          </NavLink>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-pm-slate hover:text-pm-teal transition-colors hidden sm:inline-flex"
          >
            <LinkedInIcon />
          </a>
          <Link
            to="/engage#form"
            className="hidden sm:inline-flex items-center gap-1.5 bg-pm-teal hover:bg-pm-teal-deep text-white font-display font-medium text-[14px] px-4 py-2 rounded transition-colors"
          >
            Schedule Discovery
            <span aria-hidden>→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
