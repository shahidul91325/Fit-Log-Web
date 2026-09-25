import Link from "next/link";

const notFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d0e12] px-5 py-12 text-white">
      <div className="w-full max-w-3xl text-center">
        {/* Small Label */}
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#CCFF00]">
          FitLog • Page Not Found
        </p>

        {/* 404 */}
        <h1 className="text-[clamp(7rem,25vw,16rem)] font-black leading-[0.8] tracking-[-0.08em] text-white">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-10 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:text-5xl">
          This Rep Doesn&apos;t Exist.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
          Looks like you&apos;ve taken a wrong turn. The workout or page
          you&apos;re looking for isn&apos;t available here.
        </p>

        {/* Decorative line */}
        <div className="mx-auto my-8 flex max-w-xs items-center gap-3">
          <span className="h-px flex-1 bg-white/10" />

          <span className="h-2 w-2 rotate-45 bg-[#CCFF00]" />

          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full bg-[#CCFF00] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-[#ccf139] active:scale-95"
        >
          <span>←</span>
          Back to Workouts
        </Link>

        {/* Bottom text */}
        <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-white/25">
          Train hard • Log honest
        </p>
      </div>
    </main>
  );
};

export default notFound;