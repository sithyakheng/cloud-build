import Reveal from "./Reveal";

/**
 * TODO(Sithya): Replace these placeholder entries with your real projects.
 * Each one just needs a title, a one-line description, and a link
 * (your live site, or "#" if it's not live yet).
 *
 * Example once you're ready:
 * {
 *   title: "NestKH",
 *   tag: "Online marketplace",
 *   description: "A Cambodian marketplace with seller storefronts and a custom admin panel.",
 *   href: "https://nestkh.com",
 * },
 */
const projects: {
  title: string;
  tag: string;
  description: string;
  href: string;
}[] = [];

export default function WorkSection() {
  const slots = Math.max(projects.length, 2);

  return (
    <section id="work" className="bp-canvas px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">
            [ Recent work ]
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-bp-paper sm:text-4xl">
            A few things we&apos;ve built lately.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {Array.from({ length: slots }).map((_, i) => {
            const project = projects[i];
            return (
              <Reveal key={i} delay={i * 100}>
                {project ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="corner-marks block border border-bp-line/60 p-8 transition hover:border-signal"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-wider text-signal">
                      {project.tag}
                    </p>
                    <h3 className="mt-3 font-display text-2xl text-bp-paper">
                      {project.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-bp-mist">
                      {project.description}
                    </p>
                  </a>
                ) : (
                  <div className="corner-marks flex h-full min-h-[180px] flex-col justify-between border border-dashed border-bp-line/50 p-8">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-bp-line">
                      PROJECT {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="font-mono text-sm text-bp-mist">
                      Coming soon — drafted, not yet pinned.
                    </p>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
