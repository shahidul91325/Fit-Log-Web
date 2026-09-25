const loadingPlanPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0e12] px-4">
      <div className="flex flex-col items-center">
        {/* Animated Loader */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          {/* Outer Ring */}
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-[#24262d] border-t-[#CCFF00]" />

          {/* Inner Ring */}
          <div className="absolute h-14 w-14 animate-spin rounded-full border-4 border-[#24262d] border-b-[#CCFF00] [animation-direction:reverse] [animation-duration:1.5s]" />

          {/* Center */}
          <div className="h-4 w-4 animate-pulse rounded-full bg-[#CCFF00] shadow-[0_0_20px_#8cff18]" />
        </div>

        {/* Loading Text */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-black uppercase tracking-[0.25em] text-white">
            Loading
          </h2>

          <div className="mt-3 flex justify-center gap-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#CCFF00]" />
            <span
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#CCFF00]"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#CCFF00]"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>

        {/* Bottom Message */}
        <p className="mt-5 text-center text-sm text-[#777b86]">
          Preparing your Plan...
        </p>
      </div>
    </div>
  );
};

export default loadingPlanPage;