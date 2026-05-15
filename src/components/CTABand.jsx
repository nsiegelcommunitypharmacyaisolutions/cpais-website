import { PrimaryCTA } from './CTAButton.jsx';
import FadeIn from './FadeIn.jsx';

export default function CTABand({ heading, subheading, ctaLabel = 'Schedule a Discovery Call' }) {
  return (
    <section className="bg-pm-ink-deep text-pm-paper mt-32">
      <FadeIn className="mx-auto max-w-wide px-6 md:px-8 py-20 md:py-24 text-center">
        <h2 className="font-display font-semibold text-[28px] md:text-[36px] leading-tight tracking-tight max-w-[760px] mx-auto">
          {heading}
        </h2>
        {subheading && (
          <p className="mt-5 text-pm-slate-light text-[17px] md:text-[18px] max-w-prose mx-auto">
            {subheading}
          </p>
        )}
        <div className="mt-8">
          <PrimaryCTA to="/engage#form" variant="amber">
            {ctaLabel}
          </PrimaryCTA>
        </div>
      </FadeIn>
    </section>
  );
}
