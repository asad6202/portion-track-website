import Image from "next/image";

type StoreBadgesProps = {
  className?: string;
};

export function StoreBadges({ className = "" }: StoreBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-2 ${className}`}>
      <a
        href="https://apps.apple.com/us/app/portion-track/id6756213687"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className="inline-block transition-opacity hover:opacity-80"
      >
        <Image
          src="/badges/app-store.svg"
          alt="Download on the App Store"
          width={120}
          height={40}
          className="h-10 w-auto sm:h-11"
        />
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=com.amynovoa.portiontracker"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className="inline-block transition-opacity hover:opacity-80"
      >
        <Image
          src="/badges/google-play.png"
          alt="Get it on Google Play"
          width={135}
          height={40}
          className="h-10 w-auto sm:h-16"
        />
      </a>
    </div>
  );
}
