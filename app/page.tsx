import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="blur-circle blur-circle-1" />
      <div className="blur-circle blur-circle-2" />

      <div className="text-center z-10 p-8">
        <div className="flex items-center justify-center gap-2 mb-10">
          <Image
            src="/flitch-logo-3.svg"
            alt="Flitch Icon"
            width={32}
            height={32}
          />
          <Image
            src="/flitch-logo-text.svg"
            alt="Flitch"
            width={96}
            height={32}
            className="h-8 w-auto"
          />
        </div>

        <h1 className="text-5xl font-bold text-[#1a1a2e] mb-4">
          Coming <span className="text-[#5371FF]">Soon</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 font-normal">
          We&apos;re building something amazing ready soon
        </p>

        <div className="inline-block border-2 border-[#5371FF] bg-[#5371FF]/10 text-[#5371FF] px-6 py-3 rounded-lg font-medium text-sm transition-all hover:bg-[#5371FF]/20">
          <div className="text-xs uppercase tracking-wider mb-1">Testing Starts</div>
          <div className="text-lg font-semibold text-[#1a1a2e]">15th January 2026</div>
        </div>
      </div>
    </>
  );
}
