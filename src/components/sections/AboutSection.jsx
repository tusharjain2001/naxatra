import aboutSectionPhoto from '../../assets/images/about-section-photo.png';

export default function AboutSection() {
  return (
    <section id="about" className="relative mt-[44px] overflow-hidden bg-[#f5fafa] px-4 pb-[26px] pt-[18px] max-[720px]:mt-4 max-[720px]:px-3 max-[720px]:pb-6 max-[720px]:pt-4">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-x-0 top-0 h-full bg-[image:linear-gradient(rgba(77,214,196,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(77,214,196,0.12)_1px,transparent_1px)] bg-[length:200px_214px] max-[720px]:bg-[length:120px_140px]" />
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(180deg,rgba(24,99,218,0)_0%,rgba(24,99,218,0.22)_100%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1235px] mt-10 flex-col items-center">
        <h2 className="font-nexa font-semibold text-center text-[clamp(24px,3.35vw,46px)] font-light leading-[1.04] tracking-[-0.02em] text-black max-[720px]:text-[26px] max-[720px]:leading-[1.3]">
          <span className="text-[#1863da] max-[720px]:block">Efficient Motors,</span>{' '}
          <span className="max-[720px]:block">Better Performance,</span>{' '}
          <span className="max-[720px]:block">Greener Future</span>
        </h2>

        <div className="mt-[clamp(18px,2.4vw,34px)] w-full rounded-[clamp(20px,2.1vw,34px)] shadow-[0_18px_45px_rgba(24,99,218,0.10)]">
          <img
            src={aboutSectionPhoto}
            alt="Efficient Motors, Better Performance, Greener Future"
            className="block aspect-[1235/683] w-full rounded-[inherit] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
