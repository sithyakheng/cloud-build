import Reveal from "./Reveal";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TikTokIcon,
} from "./SocialIcons";

/**
 * TODO(Sithya): Drop your real links in here.
 * - facebook: your Page URL, e.g. "https://facebook.com/cloudbuild"
 * - telegram: your username link, e.g. "https://t.me/yourusername"
 * - tiktok: e.g. "https://tiktok.com/@yourusername"
 * - instagram: e.g. "https://instagram.com/yourusername"
 * Leave any of them as "#" to hide that icon's real link for now.
 */
const socials = [
  {
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61591208636187",
    Icon: FacebookIcon,
  },
  { name: "Telegram", href: "#", Icon: TelegramIcon },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bp-canvas px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">
            [ Contact ]
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight text-bp-paper sm:text-4xl">
            Let&apos;s build your website.
          </h2>
          <p className="mx-auto mt-5 max-w-md font-body text-sm leading-relaxed text-bp-mist">
            Tell us a bit about your business — message Cloud Build directly
            on any of these, and we&apos;ll reply within a day.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex items-center justify-center gap-5">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="corner-marks flex h-14 w-14 items-center justify-center border border-bp-line/60 text-bp-paper transition hover:border-signal hover:text-signal"
              >
                <Icon className="h-6 w-6" stroke="currentColor" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
