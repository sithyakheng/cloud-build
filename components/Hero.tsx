import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="bp-canvas flex min-h-screen items-center pt-28 md:pt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-signal">
            [ Web design &amp; build — Phnom Penh ]
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.1] text-bp-paper sm:text-5xl">
            Your business deserves more than a Facebook page.
          </h1>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-bp-mist">
            Cloud Build designs and builds fast, modern websites for
            Cambodian businesses — so customers can find you, trust you, and
            buy from you, any hour of the day.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-signal px-6 py-3 font-mono text-sm uppercase tracking-wider text-bp-deep transition hover:bg-signal-soft"
            >
              Start your project
            </a>
            <a
              href="#process"
              className="border border-bp-line px-6 py-3 font-mono text-sm uppercase tracking-wider text-bp-paper transition hover:border-bp-paper"
            >
              See how it works
            </a>
          </div>
        </div>

        <Reveal>
          <BlueprintBrowser />
        </Reveal>
      </div>
    </section>
  );
}

function BlueprintBrowser() {
  return (
    <svg
      viewBox="0 0 480 340"
      className="mx-auto w-full max-w-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* outer window */}
      <rect
        x="10"
        y="10"
        width="460"
        height="320"
        rx="4"
        stroke="#7FA6C4"
        strokeWidth="1.5"
        pathLength={1}
        strokeDasharray="1"
        className="animate-draw"
        style={{ animationDelay: "0ms" }}
      />
      {/* top bar */}
      <line
        x1="10"
        y1="46"
        x2="470"
        y2="46"
        stroke="#7FA6C4"
        strokeWidth="1.5"
        pathLength={1}
        strokeDasharray="1"
        className="animate-draw"
        style={{ animationDelay: "150ms" }}
      />
      <circle cx="30" cy="28" r="5" stroke="#FF6B35" strokeWidth="1.5" />
      <circle cx="48" cy="28" r="5" stroke="#7FA6C4" strokeWidth="1.5" />
      <circle cx="66" cy="28" r="5" stroke="#7FA6C4" strokeWidth="1.5" />
      <rect x="90" y="22" width="280" height="12" rx="2" stroke="#7FA6C4" strokeWidth="1" />

      {/* heading line */}
      <line
        x1="34" y1="80" x2="220" y2="80"
        stroke="#F3F5F1" strokeWidth="3"
        pathLength={1} strokeDasharray="1"
        className="animate-draw" style={{ animationDelay: "300ms" }}
      />
      {/* paragraph lines */}
      <line x1="34" y1="104" x2="300" y2="104" stroke="#7FA6C4" strokeWidth="1.5" pathLength={1} strokeDasharray="1" className="animate-draw" style={{ animationDelay: "420ms" }} />
      <line x1="34" y1="120" x2="260" y2="120" stroke="#7FA6C4" strokeWidth="1.5" pathLength={1} strokeDasharray="1" className="animate-draw" style={{ animationDelay: "480ms" }} />

      {/* CTA button */}
      <rect x="34" y="142" width="110" height="30" rx="2" stroke="#FF6B35" strokeWidth="1.5" pathLength={1} strokeDasharray="1" className="animate-draw" style={{ animationDelay: "560ms" }} />

      {/* image block */}
      <rect x="34" y="196" width="412" height="110" rx="2" stroke="#7FA6C4" strokeWidth="1.5" pathLength={1} strokeDasharray="1" className="animate-draw" style={{ animationDelay: "640ms" }} />
      <line x1="34" y1="306" x2="446" y2="196" stroke="#3E6E96" strokeWidth="1" pathLength={1} strokeDasharray="1" className="animate-draw" style={{ animationDelay: "760ms" }} />
      <line x1="446" y1="306" x2="34" y2="196" stroke="#3E6E96" strokeWidth="1" pathLength={1} strokeDasharray="1" className="animate-draw" style={{ animationDelay: "760ms" }} />

      {/* dimension annotation */}
      <text x="34" y="330" fill="#7FA6C4" fontFamily="var(--font-mono)" fontSize="10">
        480 × 340 — drafted, then built
      </text>
    </svg>
  );
}
