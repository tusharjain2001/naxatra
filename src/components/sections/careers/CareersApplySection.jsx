import careersPhoto from '../../../assets/images/careers-photo.png';
import CareersApplicationFormPanel from './CareersApplicationFormPanel';

export default function CareersApplySection() {
  return (
    <section className="w-full bg-white mb-20">
      <div
        className="mx-auto md:hidden"
        style={{ maxWidth: '460px', padding: '26px 16px 18px' }}
      >
        <CareersApplicationFormPanel
          mobileCenteredHeading
          desktopSubmitAlign="center"
          mobileSubmitAlign="right"
          mobileLeadImage
        />

      </div>

      <div
        className="mx-auto hidden md:flex md:flex-wrap items-stretch"
        style={{ maxWidth: '1920px', padding: '0 clamp(24px, 9.3vw, 179px)' }}
      >
        {/* Left: form */}
        <div
          className="flex flex-col"
          style={{
            flex: '1 1 58%',
            padding: '28px 32px 34px 0',
            gap: '24px',
            justifyContent: 'space-between',
          }}
        >
          <CareersApplicationFormPanel />
        </div>

        {/* Right: photo */}
        <div
          className="flex-shrink-0 hidden lg:block"
          style={{ width: 'clamp(320px, 31vw, 520px)', padding: '20px 0 20px 18px' }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 34px), calc(100% - 34px) 100%, 0 100%)',
              borderRadius: '4px',
            }}
          >
            <img
              src={careersPhoto}
              alt="Join Naxatra Labs"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
