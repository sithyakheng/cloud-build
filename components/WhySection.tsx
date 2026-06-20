import Reveal from "./Reveal";

const specs = [
  {
    tag: "OPEN 24/7",
    text: "Customers can find you and place an order at 2am while you sleep.",
  },
  {
    tag: "SHOW UP ON GOOGLE",
    text: "Facebook posts disappear in a day. A website stays found, for years.",
  },
  {
    tag: "BUILD TRUST",
    text: "A real website makes people trust your business before they even message you.",
  },
  {
    tag: "SELL DIRECTLY",
    text: "Show prices, take orders, and stop typing the same answers all day.",
  },
  {
    tag: "YOU OWN IT",
    text: "No algorithm decides who sees your business. It's yours, permanently.",
  },
  {
    tag: "LOAD FAST, LOOK SHARP",
    text: "First impressions happen in seconds — we make sure yours is a good one.",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="bp-canvas px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">
            [ Why a website ]
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-bp-paper sm:text-4xl">
            A Facebook page can get lost in the feed. A website never does.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec, i) => (
            <Reveal key={spec.tag} delay={i * 80}>
              <div
                className="pin-card rotate-[-0.4deg] p-6 even:rotate-[0.4deg]"
              >
                <p className="font-mono text-[11px] uppercase tracking-wider text-signal">
                  {spec.tag}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-bp-ink/80">
                  {spec.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
