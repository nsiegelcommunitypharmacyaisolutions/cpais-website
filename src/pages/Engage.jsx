import { useState } from 'react';
import FadeIn from '../components/FadeIn.jsx';

const FORM_ENDPOINT = 'https://formspree.io/f/mdabjqgg';
const CONTACT_EMAIL = 'nathan.siegel@communitypharmacyaisolutions.com';
const PREPRINT_URL = 'https://www.researchsquare.com/article/rs-9374687/v1';

const phases = [
  ['Discovery', '0–2', 'We shadow your current workflow and measure the baseline.'],
  ['Design', '2–4', 'We scope the integration and sign the pilot agreement.'],
  ['Build', '4–8', 'We connect to your systems and deploy in shadow mode.'],
  ['Validate', '8–12', 'Full pilot alongside your team with weekly check-ins.'],
  ['Decide', '12+', 'We measure results against baseline and decide together.'],
];

export default function Engage() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent('PharmMesh — Discovery call request');
      const lines = [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        `Organization: ${data.get('organization')}`,
        `Role: ${data.get('role')}`,
        `Category: ${data.get('category')}`,
        '',
        'Problem:',
        data.get('problem') || '',
      ];
      const body = encodeURIComponent(lines.join('\n'));
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  }

  const inputCls =
    'w-full bg-white border border-pm-hairline rounded px-3 py-2.5 text-[16px] text-pm-ink placeholder:text-pm-slate-light focus:border-pm-teal';
  const labelCls = 'block font-display font-medium text-[14px] text-pm-ink mb-1.5';

  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-8 pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="mx-auto max-w-wide">
          <FadeIn>
            <h1 className="font-display font-semibold text-[32px] sm:text-[40px] md:text-[52px] leading-[1.08] tracking-tight text-pm-ink">
              Start with a conversation.
            </h1>
            <p className="mt-8 max-w-prose text-[17px] md:text-[18px] text-pm-ink leading-relaxed">
              Every engagement begins with a 30-minute discovery call where we learn about your
              clinical AI deployment and assess whether a pilot makes sense. No pitch deck. No
              demo theater. A working conversation between a clinical pharmacist and your team.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pilot framework */}
      <section className="px-6 md:px-8 py-16 md:py-20 border-t border-pm-hairline">
        <div className="mx-auto max-w-[780px]">
          <FadeIn>
            <p className="text-[14px] text-pm-slate font-display">
              This is the engagement framework we have designed for our first pilot partners.
            </p>
            <div className="mt-6 overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-pm-hairline">
                    <th className="py-3 pr-4 font-display font-medium text-[13px] uppercase tracking-wider text-pm-slate">
                      Phase
                    </th>
                    <th className="py-3 pr-4 font-display font-medium text-[13px] uppercase tracking-wider text-pm-slate">
                      Weeks
                    </th>
                    <th className="py-3 font-display font-medium text-[13px] uppercase tracking-wider text-pm-slate">
                      What Happens
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {phases.map(([phase, weeks, what]) => (
                    <tr key={phase} className="border-b border-pm-hairline last:border-b-0">
                      <td className="py-4 pr-4 font-display font-semibold text-[16px] text-pm-ink align-top">
                        {phase}
                      </td>
                      <td className="py-4 pr-4 font-mono text-[14px] text-pm-teal align-top">
                        {weeks}
                      </td>
                      <td className="py-4 text-[16px] text-pm-ink align-top leading-relaxed">
                        {what}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Resources */}
      <section className="px-6 md:px-8 py-16 md:py-20 border-t border-pm-hairline">
        <div className="mx-auto max-w-wide">
          <FadeIn>
            <h2 className="font-display font-semibold text-[24px] md:text-[30px] leading-tight tracking-tight text-pm-ink">
              Resources
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="h-full border border-pm-hairline rounded-md p-6 md:p-7 bg-white">
                <p className="font-display font-semibold text-[18px] text-pm-ink">
                  PharmMesh Safety Substrate — One-Pager
                </p>
                <p className="mt-3 text-[16px] text-pm-ink leading-relaxed">
                  A single-page overview of the methodology, the architecture, and the regulatory
                  context. Written for the executive sponsor your champion needs to convince.
                </p>
                <p className="mt-5">
                  <a
                    href="/pharmmesh-onepager.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-display font-medium text-[15px] text-pm-teal hover:text-pm-teal-deep underline underline-offset-4"
                  >
                    Open the one-pager
                    <span aria-hidden>→</span>
                  </a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="h-full border border-pm-hairline rounded-md p-6 md:p-7 bg-white">
                <p className="font-display font-semibold text-[18px] text-pm-ink">
                  Published Preprint — The Escape Register
                </p>
                <p className="mt-3 text-[16px] text-pm-ink leading-relaxed">
                  The full methodology paper, open-access on Research Square.
                </p>
                <p className="mt-5">
                  <a
                    href={PREPRINT_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-display font-medium text-[15px] text-pm-teal hover:text-pm-teal-deep underline underline-offset-4"
                  >
                    Read on Research Square
                    <span aria-hidden>→</span>
                  </a>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Discovery call form */}
      <section
        id="form"
        className="px-6 md:px-8 py-20 md:py-24 border-t border-pm-hairline scroll-mt-20"
      >
        <div className="mx-auto max-w-[640px]">
          <FadeIn>
            <h2 className="font-display font-semibold text-[26px] md:text-[34px] leading-tight tracking-tight text-pm-ink">
              Schedule a Discovery Call
            </h2>
            <p className="mt-5 text-[17px] text-pm-ink leading-relaxed">
              Tell us about your deployment context and the problem you are working on. We respond
              within two business days.
            </p>
          </FadeIn>

          <FadeIn>
            <form onSubmit={onSubmit} className="mt-10 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="name">
                    Name
                  </label>
                  <input className={inputCls} type="text" id="name" name="name" required />
                </div>
                <div>
                  <label className={labelCls} htmlFor="email">
                    Email
                  </label>
                  <input className={inputCls} type="email" id="email" name="email" required />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="organization">
                    Organization
                  </label>
                  <input
                    className={inputCls}
                    type="text"
                    id="organization"
                    name="organization"
                    required
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="role">
                    Role
                  </label>
                  <input className={inputCls} type="text" id="role" name="role" required />
                </div>
              </div>

              <div>
                <label className={labelCls} htmlFor="category">
                  Which category fits best?
                </label>
                <select className={inputCls} id="category" name="category" defaultValue="" required>
                  <option value="" disabled>
                    Select one…
                  </option>
                  <option>Health System</option>
                  <option>MA Plan</option>
                  <option>Legal Aid</option>
                  <option>Pharmacy Group</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className={labelCls} htmlFor="problem">
                  What problem are you trying to solve?
                </label>
                <textarea
                  className={inputCls}
                  id="problem"
                  name="problem"
                  rows={5}
                  placeholder="3–5 sentences"
                  required
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-pm-teal hover:bg-pm-teal-deep disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-medium text-[15px] px-5 py-3 rounded transition-colors"
                >
                  {submitting ? 'Sending…' : 'Send'}
                  <span aria-hidden>→</span>
                </button>
                {status === 'success' && (
                  <span className="text-[14px] text-pm-teal">
                    Thanks — we'll be in touch within two business days.
                  </span>
                )}
                {status === 'error' && (
                  <span className="text-[14px] text-pm-amber-deep">
                    Something went wrong. Please email us directly.
                  </span>
                )}
              </div>
            </form>

            <p className="mt-8 text-[14px] text-pm-slate">
              Or email directly:{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-pm-teal hover:text-pm-teal-deep underline underline-offset-2"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
