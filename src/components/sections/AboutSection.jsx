import { useState } from 'react';
import aboutThumbnail from '../../assets/images/Thumbnail .png';

const aboutSectionVideo =
  'https://res.cloudinary.com/dgr33gxhd/video/upload/v1780134285/Corporate_Video_NEW_30s_def8us.mp4';

export default function AboutSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section id="about" className="relative mt-[44px] overflow-hidden bg-[#f5fafa] px-4 pb-[26px] pt-[18px] max-[720px]:mt-10 max-[720px]:px-3 max-[720px]:pb-6 max-[720px]:pt-4">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-x-0 top-0 h-full bg-[image:linear-gradient(rgba(77,214,196,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(77,214,196,0.12)_1px,transparent_1px)] bg-[length:200px_214px] max-[720px]:bg-[length:120px_140px]" />
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(180deg,rgba(24,99,218,0)_0%,rgba(24,99,218,0.22)_100%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1235px] mt-10 flex-col items-center">
        <h2 className="font-nexa font-semibold text-center text-[40px] font-light leading-[1.04] tracking-[-0.02em] text-black max-[720px]:text-[26px] max-[720px]:leading-[1.3]">
          <span className="text-[#1863da] max-[720px]:block">Efficient Motors,</span>{' '}
          <span className="max-[720px]:block">Better Performance,</span>{' '}
          <span className="max-[720px]:block">Greener Future</span>
        </h2>

        <div className="mt-[clamp(18px,2.4vw,34px)] w-full max-w-[980px] rounded-[clamp(20px,2.1vw,34px)] shadow-[0_18px_45px_rgba(24,99,218,0.10)] max-[720px]:max-w-none">
          {isVideoPlaying ? (
            <video
              src={aboutSectionVideo}
              autoPlay
              muted
              loop
              controls
              playsInline
              className="block aspect-[1235/683] w-full rounded-[inherit] object-cover"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsVideoPlaying(true)}
              className="group relative block w-full overflow-hidden rounded-[inherit]"
              aria-label="Play about video"
            >
              <img
                src={aboutThumbnail}
                alt="About Naxatra video thumbnail"
                className="block aspect-[1235/683] w-full rounded-[inherit] object-cover transition duration-300 ease-out group-hover:scale-[1.01]"
              />
              <span className="absolute inset-0 bg-black/18 transition duration-300 group-hover:bg-black/24" />
              <span className="absolute left-1/2 top-1/2 flex h-[clamp(44px,4.2vw,60px)] w-[clamp(44px,4.2vw,60px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition duration-300 ease-out group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="ml-0.5 h-[clamp(33px,3.6vw,46px)] w-[clamp(33px,3.6vw,46px)] fill-[#1863da]"
                >
                  <path d="M8 6.5v11l9-5.5-9-5.5Z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
