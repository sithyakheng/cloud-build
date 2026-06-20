import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    text: "We learn your business, your customers, and what you're trying to sell or show.",
  },
  {
    n: "02",
    title: "Design",
    text: "We sketch the look and feel — colors, layout, your logo — built around your brand, not a template.",
  },
  {
    n: "03",
    title: "Build",
    text: "We code the real thing: fast, mobile-friendly, and easy for you to update yourself.",
  },
  {
    n: "04",
    title: "Launch",
    text: "We put it live on your own domain and show you exactly how to keep it running.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bp-canvas px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">
            [ How it&apos;s built ]
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-bp-paper sm:text-4xl">
            From idea to a live website, in four drafted steps.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <div className="relative">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-signal">{step.n}</span>
                  <h3 className="font-display text-xl text-bp-paper">{step.title}</h3>
                </div>
                <div className="dim-line mt-4" />
                <p className="mt-4 font-body text-sm leading-relaxed text-bp-mist">
                  {step.text}
                </p>
                {i < steps.length - 1 && (
                  <span className="absolute -right-5 top-2 hidden font-mono text-bp-line md:block">
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
