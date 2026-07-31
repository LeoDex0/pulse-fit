const SOCIALS = [
  {
    label: "Instagram",
    path: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428A4.9 4.9 0 0 1 3.678 3.678 4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2m0 1.802c-2.67 0-2.987.01-4.04.059-.976.045-1.505.207-1.858.344-.467.181-.8.398-1.15.748-.35.35-.567.683-.748 1.15-.137.353-.3.882-.344 1.857-.05 1.054-.06 1.37-.06 4.04s.01 2.987.06 4.04c.045.976.207 1.505.344 1.858.181.466.398.8.748 1.15.35.35.683.566 1.15.747.353.137.882.3 1.857.344 1.054.05 1.37.06 4.04.06s2.988-.01 4.04-.06c.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.566-.683.747-1.15.137-.352.3-.881.344-1.857.05-1.053.06-1.37.06-4.04s-.01-2.986-.06-4.04c-.045-.975-.207-1.504-.344-1.857a3.1 3.1 0 0 0-.748-1.15 3.1 3.1 0 0 0-1.15-.748c-.352-.137-.881-.3-1.857-.344-1.053-.05-1.37-.06-4.04-.06M12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27m0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m6.538-2.006a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0",
  },
  {
    label: "TikTok",
    path: "M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z",
  },
  {
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

const LINKS = [
  { href: "#programs", label: "Programs" },
  { href: "#schedule", label: "Schedule" },
  { href: "#trainers", label: "Trainers" },
  { href: "#pricing", label: "Pricing" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal-deep py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-3xl text-white">
            PULSE<span className="text-lime">FIT</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white-dim">
            Strength, conditioning and boxing programs built by coaches who
            actually track your progress.
          </p>
          <div className="mt-6 flex items-center gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-white-dim transition-colors hover:border-lime hover:text-lime"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:flex sm:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white-dim/60">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white-dim transition-colors hover:text-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white-dim/60">
              Gym
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white-dim">
              <li>442 Industry Row</li>
              <li>Los Angeles, CA</li>
              <li>hello@pulsefit.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-line px-6 pt-6 text-xs text-white-dim/50 sm:px-10">
        © {new Date().getFullYear()} PulseFit. All rights reserved.
      </div>
    </footer>
  );
}
