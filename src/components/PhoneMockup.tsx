import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function PhoneMockup({ src, alt, priority = false }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto w-full max-w-[240px]">
      <div className="rounded-[2.25rem] border-[6px] border-zinc-800 bg-zinc-800 p-2 shadow-xl shadow-brand-green/10">
        <div className="absolute left-1/2 top-3 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-zinc-900" />
        <div className="overflow-hidden rounded-[1.75rem] bg-white">
          <Image
            src={src}
            alt={alt}
            width={390}
            height={844}
            className="h-auto w-full object-cover"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
