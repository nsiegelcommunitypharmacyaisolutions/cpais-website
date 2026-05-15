const LINKEDIN_URL = 'https://www.linkedin.com/in/communitypharmacyaisolutions/';

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-pm-hairline mt-24">
      <div className="mx-auto max-w-wide px-6 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] text-pm-slate">
        <p>© 2026 Community Pharmacy AI Solutions, LLC · Cincinnati, Ohio</p>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-pm-teal transition-colors"
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
}
