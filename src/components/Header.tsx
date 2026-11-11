import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-mission", label: "Our Mission" },
  { href: "/corporate-wellness", label: "Corporate Wellness" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/assets/images/portiontrack_logo_wordmark.png"
            alt="PortionTrack"
            width={160}
            height={149}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-brand-green-soft hover:text-brand-green sm:px-4 sm:text-[0.9375rem]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
