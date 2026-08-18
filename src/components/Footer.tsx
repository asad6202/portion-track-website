import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-foreground">Portion Track</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
              Simple meal portion tracking without calorie counting — plus exercise
              tracking to support your whole wellness journey.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted transition-colors hover:text-brand-green"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-muted transition-colors hover:text-brand-green"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate-wellness"
                  className="text-muted transition-colors hover:text-brand-green"
                >
                  Corporate Wellness
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a
                  href="mailto:portiontrack@gmail.com"
                  className="transition-colors hover:text-brand-green"
                >
                  portiontrack@gmail.com
                </a>
              </li>
              <li>Available on iOS and Android</li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} Portion Track. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
