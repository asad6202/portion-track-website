type BalancedPlateDialProps = {
  className?: string;
  showLabels?: boolean;
};

export function BalancedPlateDial({
  className = "",
  showLabels = true,
}: BalancedPlateDialProps) {
  return (
    <div className={`relative mx-auto aspect-square w-full max-w-[280px] ${className}`}>
      <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow-sm" aria-hidden="true">
        <circle cx="100" cy="100" r="96" fill="white" />
        <path d="M100 100 L100 8 A92 92 0 0 0 8 100 Z" fill="var(--plate-veggies)" />
        <path d="M100 100 L192 100 A92 92 0 0 0 100 8 Z" fill="var(--plate-protein)" />
        <path d="M100 100 L100 192 A92 92 0 0 0 192 100 Z" fill="var(--plate-carbs)" />
        <path d="M100 100 L8 100 A92 92 0 0 0 100 192 Z" fill="var(--plate-fats)" />
        <path
          d="M28 48 A92 92 0 0 1 172 48"
          fill="none"
          stroke="var(--brand-green)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="168" cy="52" r="5" fill="var(--brand-green)" />
        <circle cx="100" cy="100" r="36" fill="white" />
      </svg>

      {showLabels && (
        <>
          <p className="pointer-events-none absolute left-[14%] top-[22%] w-[32%] text-center text-[10px] font-semibold leading-tight text-white sm:text-[11px]">
            Vegetables
            <span className="block text-[9px] font-medium opacity-90">50%</span>
          </p>
          <p className="pointer-events-none absolute right-[12%] top-[22%] w-[32%] text-center text-[10px] font-semibold leading-tight text-foreground/80 sm:text-[11px]">
            Protein
            <span className="block text-[9px] font-medium opacity-70">25%</span>
          </p>
          <p className="pointer-events-none absolute bottom-[20%] left-[14%] w-[32%] text-center text-[10px] font-semibold leading-tight text-foreground/80 sm:text-[11px]">
            Fats
            <span className="block text-[9px] font-medium opacity-70">Healthy fats</span>
          </p>
          <p className="pointer-events-none absolute bottom-[20%] right-[12%] w-[32%] text-center text-[10px] font-semibold leading-tight text-white sm:text-[11px]">
            Carbs
            <span className="block text-[9px] font-medium opacity-90">25%</span>
          </p>
          <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-center shadow-sm">
            <span className="text-sm font-bold leading-none text-foreground">100%</span>
            <span className="mt-1 text-[9px] font-medium text-muted">Daily goal</span>
          </div>
        </>
      )}
    </div>
  );
}
