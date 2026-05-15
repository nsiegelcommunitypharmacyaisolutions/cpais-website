import FadeIn from '../components/FadeIn.jsx';
import CTABand from '../components/CTABand.jsx';

const PREPRINT_URL = 'https://www.researchsquare.com/article/rs-9374687/v1';

const primitives = [
  {
    title: 'Independence from the reasoning layer',
    body: `The deterministic verifier and the AI reasoning layer run independently. Neither can override the other. The verifier can block the AI's output. The AI cannot disable the verifier. This is the architectural primitive that separates PharmMesh from every clinical AI product that uses a single-layer policy wrapper.`,
  },
  {
    title: 'Aggregation across available clinical data',
    body: `Most clinical AI tools see only what the EHR sees. PharmMesh is designed to aggregate the patient's medication profile across EHR and authorized external sources as integrations deploy. The single largest source of preventable medication harm is the gap between what one institution can see and what the patient is actually taking.`,
  },
  {
    title: 'An audit trail designed for regulatory inspection',
    body: `Every decision the system makes — every gate firing, every input, every override — produces a structured audit record. The record is designed to meet the audit trail expectations of OMB M-25-21 for federal high-impact AI and to survive a Joint Commission inspection, a tort plaintiff's discovery request, and an FDA Predetermined Change Control Plan submission.`,
  },
];

const regs = [
  {
    code: 'HTI-1 §170.315(b)(11)',
    body: '31 transparency attributes required for every predictive clinical decision support intervention in certified health IT. In effect.',
  },
  {
    code: 'OMB M-25-21',
    body: 'Audit trail requirements for high-impact AI in federal programs. In effect.',
  },
  {
    code: 'CMS-0057-F',
    body: 'FHIR-based prior authorization API requirements activating 2026–2027.',
  },
  {
    code: 'CMS POLY-ACH',
    body: 'Concurrent anticholinergic use becomes a Medicare Part D Star Rating measure, Star Year 2027 financial impact.',
  },
];

export default function Method() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-8 pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="mx-auto max-w-wide">
          <FadeIn>
            <h1 className="font-display font-semibold text-[32px] sm:text-[40px] md:text-[52px] leading-[1.08] tracking-tight text-pm-ink max-w-[900px]">
              The safety floor is independent of the AI.
            </h1>
            <p className="mt-8 max-w-prose text-[17px] md:text-[18px] text-pm-ink leading-relaxed">
              Every clinical AI tool you have evaluated wraps a language model in a policy layer
              and calls it safe. The wrapper and the model share the same reasoning process. When
              the reasoning is wrong, the wrapper is also wrong. PharmMesh built the safety floor
              as an independent layer that cannot be disabled by the reasoning above it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Three architectural primitives */}
      <section className="px-6 md:px-8 py-16 md:py-20 border-t border-pm-hairline">
        <div className="mx-auto max-w-prose space-y-16">
          {primitives.map((p, i) => (
            <FadeIn key={p.title} delay={i * 60}>
              <h2 className="font-display font-semibold text-[22px] md:text-[26px] leading-tight tracking-tight text-pm-ink">
                {p.title}
              </h2>
              <p className="mt-4 text-[17px] md:text-[18px] text-pm-ink leading-relaxed">
                {p.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* The escape register */}
      <section className="px-6 md:px-8 py-20 md:py-24 border-t border-pm-hairline">
        <div className="mx-auto max-w-prose">
          <FadeIn>
            <h2 className="font-display font-semibold text-[24px] md:text-[30px] leading-tight tracking-tight text-pm-ink">
              The escape register: how the system improves with deployment
            </h2>
            <p className="mt-6 text-[17px] md:text-[18px] text-pm-ink leading-relaxed">
              When a case passes through the verification gates and a near-miss or unexpected
              pattern emerges, the escape is cataloged, a deterministic rule is derived, and the
              rule is added back to the verifier. The next case that matches the pattern is
              blocked permanently. Every individual near-miss becomes a system-wide deterministic
              rule. The safety envelope reshapes itself based on what falls through.
            </p>
            <p className="mt-5 text-[17px] md:text-[18px] text-pm-ink leading-relaxed">
              The escape register is what makes the substrate compound rather than degrade with
              time. It is also what produces the federated network effect: a rule derived from a
              near-miss at one institution can be broadcast to every connected institution without
              protected health information crossing the boundary. The institutions get safer
              together. The patient data stays where it was generated.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What this is NOT */}
      <section className="px-6 md:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-prose">
          <FadeIn>
            <div className="bg-pm-paper-warm border-l-2 border-pm-teal px-6 md:px-8 py-6 md:py-8">
              <p className="font-display font-medium text-[17px] md:text-[18px] text-pm-ink leading-relaxed">
                PharmMesh does not replace clinical judgment. It does not generate diagnoses. It
                does not make treatment decisions. It provides deterministic verification that
                makes other people's AI defensible.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Regulatory drivers */}
      <section className="px-6 md:px-8 py-20 md:py-24 border-t border-pm-hairline">
        <div className="mx-auto max-w-wide">
          <FadeIn>
            <h2 className="font-display font-semibold text-[24px] md:text-[30px] leading-tight tracking-tight text-pm-ink">
              The regulatory environment we monitor
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:gap-10 md:grid-cols-2">
            {regs.map((r, i) => (
              <FadeIn key={r.code} delay={i * 80}>
                <div className="border-t border-pm-hairline pt-5">
                  <p className="font-mono text-[14px] text-pm-teal">{r.code}</p>
                  <p className="mt-2 text-[16px] text-pm-ink leading-relaxed">{r.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Published methodology */}
      <section className="px-6 md:px-8 py-20 md:py-24 border-t border-pm-hairline">
        <div className="mx-auto max-w-prose">
          <FadeIn>
            <h2 className="font-display font-semibold text-[24px] md:text-[30px] leading-tight tracking-tight text-pm-ink">
              The methodology is published.
            </h2>
            <p className="mt-6 text-[17px] md:text-[18px] text-pm-ink leading-relaxed">
              The methodology behind the deterministic verifier and the escape register is
              documented in a published open-access preprint available on Research Square under
              CC-BY 4.0. The provisional patent corpus covering the underlying inventions is
              filed.
            </p>
            <p className="mt-6">
              <a
                href={PREPRINT_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-display font-medium text-[15px] text-pm-teal hover:text-pm-teal-deep underline underline-offset-4"
              >
                Read the preprint on Research Square
                <span aria-hidden>→</span>
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABand heading="If you cannot replay the decision, you cannot defend it." />
    </>
  );
}
