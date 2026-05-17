import FadeIn from '../components/FadeIn.jsx';
import { PrimaryCTA, TextCTA } from '../components/CTAButton.jsx';
import CTABand from '../components/CTABand.jsx';

const CHESTER_URL = 'https://www.linkedin.com/in/ziyuanguan/';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="mx-auto max-w-wide">
          <FadeIn>
            <h1 className="font-display font-semibold text-[34px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-tight text-pm-ink max-w-[920px]">
              The safety substrate underneath clinical AI.
            </h1>
            <p className="mt-5 font-display font-semibold text-[22px] md:text-[26px] text-pm-teal tracking-tight">
              Deterministic. Auditable. Published.
            </p>
            <p className="mt-8 text-pm-ink max-w-prose text-[17px] md:text-[18px]">
              Every time our system encounters a new way clinical AI can fail, the failure is
              documented, a permanent code-level safeguard is built, and the safeguard is validated
              to never regress — the safety net reshapes itself based on what falls through.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <PrimaryCTA to="/engage#form">Schedule a Discovery Call</PrimaryCTA>
              <TextCTA to="/method">Read the Method</TextCTA>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Three things every clinical AI system needs */}
      <section className="px-6 md:px-8 py-20 md:py-28 border-t border-pm-hairline">
        <div className="mx-auto max-w-wide">
          <FadeIn>
            <h2 className="font-display font-semibold text-[26px] md:text-[34px] leading-tight tracking-tight text-pm-ink max-w-[760px]">
              Three things every clinical AI system needs and most do not have.
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-12 md:gap-10 md:grid-cols-3">
            <FadeIn delay={0}>
              <h3 className="font-display font-semibold text-[19px] text-pm-ink">
                Independent verification
              </h3>
              <p className="mt-3 text-[16px] text-pm-ink leading-relaxed">
                The safety layer runs independently of the AI reasoning. Neither can override the
                other. When the AI is wrong, the verifier catches it before the patient. The
                verifier's record is the defensible artifact.
              </p>
            </FadeIn>

            <FadeIn delay={120}>
              <h3 className="font-display font-semibold text-[19px] text-pm-ink">
                Cross-silo aggregation
              </h3>
              <p className="mt-3 text-[16px] text-pm-ink leading-relaxed">
                Designed to aggregate medication data across EHR, cross-pharmacy, and monitoring
                program sources as integrations deploy — closing the gap between what one
                institution sees and what the patient is actually taking.
              </p>
            </FadeIn>

            <FadeIn delay={240}>
              <h3 className="font-display font-semibold text-[19px] text-pm-ink">
                Structured audit trail
              </h3>
              <p className="mt-3 text-[16px] text-pm-ink leading-relaxed">
                Every gate firing, every input, every override produces a structured audit record
                meeting the expectations of OMB M-25-21 for federal high-impact AI systems and
                designed to survive regulatory inspection.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="px-6 md:px-8 py-20 md:py-24 border-t border-pm-hairline">
        <div className="mx-auto max-w-prose">
          <FadeIn>
            <h2 className="font-display font-semibold text-[24px] md:text-[30px] leading-tight tracking-tight text-pm-ink">
              Four federal rules activating between 2026–2027 require the audit infrastructure
              PharmMesh provides.
            </h2>
            <div className="mt-6">
              <TextCTA to="/method">See the regulatory environment</TextCTA>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder note */}
      <section className="px-6 md:px-8 py-20 md:py-24 bg-pm-paper-warm border-y border-pm-hairline">
        <div className="mx-auto max-w-prose">
          <FadeIn>
            <p className="text-[17px] md:text-[18px] text-pm-ink leading-relaxed">
              I am a clinical pharmacist who has spent the last several years building the safety
              infrastructure that I wished existed when I was on the floor. PharmMesh is not an AI
              company. PharmMesh is an infrastructure company that makes other people's AI
              defensible. If you are evaluating clinical AI and you cannot answer the question
              "what happens when this is wrong," we should talk.
            </p>
            <p className="mt-6 text-[15px] text-pm-slate">
              — Nate Siegel, PharmD · Founder
            </p>
            <p className="mt-8 pt-6 border-t border-pm-hairline text-[15px] text-pm-slate">
              Working with{' '}
              <a
                href={CHESTER_URL}
                target="_blank"
                rel="noreferrer"
                className="text-pm-teal hover:text-pm-teal-deep underline-offset-2 hover:underline"
              >
                Ziyuan Guan
              </a>{' '}
              on data infrastructure and FHIR integration.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABand
        heading="If the substrate is missing, the AI above it is liability."
        subheading="Tell us about your deployment. We will tell you where the floor needs to be."
      />
    </>
  );
}
