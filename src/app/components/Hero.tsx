import Image from 'next/image';
import banner from '@/public/banner.png'

const Hero = () => {
  return (
    <section className="w-full bg-[#0a0c10] min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full bg-[#12141a] rounded-2xl border border-gray-800 p-6 md:p-12 lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 shadow-2xl">
        
        {/* Left Text Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Tagline */}
          <span className="text-[#C2F800] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            WORKOUT LIBRARY
          </span>

          {/* Main Heading */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl lg:mt-3 font-extrabold uppercase tracking-tight leading-none">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          {/* Subtitle / Description */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <button className="bg-[#C2F800] hover:bg-[#C2F800] text-black font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md">
              BROWSE WORKOUTS
            </button>
          </div>
        </div>

        {/* Right 3D Model Image */}
        <div className="flex-1 flex justify-end items-right relative w-full max-w-md lg:max-w-none">
          <div className="relative w-[50%] h-64 sm:h-80 md:h-96 lg:h-[400px]">
            <Image
              src={banner}
              alt="Gym Equipment 3D Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
export default Hero;