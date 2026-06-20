export default function Footer() {
  return (
    <footer className="bp-canvas border-t border-bp-line/40 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-bp-mist sm:flex-row">
        <span className="flex items-center gap-2">
          <img src="/logo.png" alt="Cloud Build logo" className="h-6 w-6 rounded" />
          CLOUD BUILD
        </span>
        <span>© {new Date().getFullYear()} — designed &amp; built in Phnom Penh</span>
      </div>
    </footer>
  );
}
