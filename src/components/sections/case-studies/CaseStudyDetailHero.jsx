import mobileDetailHero from '../../../assets/images/case-detail-hero.svg';
import detailCaseStudyGrid from '../../../assets/detailcasestudy/detailcasestudygrid.png';
import detailCaseStudyEllipse from '../../../assets/detailcasestudy/detailcasestudyellipse.png';
import detailCaseStudyRightImage from '../../../assets/detailcasestudy/detailcasestudyrightimage.png';

export default function CaseStudyDetailHero() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-black md:hidden">
        <img
          src={mobileDetailHero}
          alt="Boosting Power Tool Performance with Naxatra Labs' Advanced BLDC Motor Solution"
          className="block h-auto w-full"
        />
      </section>

      <section
        className="relative hidden w-full overflow-hidden bg-black md:block"
        style={{ height: 'clamp(360px, 36.2vw, 695px)' }}
      >
        <div
          className="relative mx-auto h-full"
          style={{
            maxWidth: '1920px',
            height: '100%',
          }}
        >
          <div
            className="absolute"
            style={{
              left: 'clamp(26px, 2.8vw, 56px)',
              top: 'clamp(62px, 8.2vw, 156px)',
              width: 'clamp(700px, 58vw, 1120px)',
              height: 'clamp(260px, 32vw, 560px)',
            }}
          >
            <div
              className="relative h-full w-full"
              style={{
                background: 'transparent',
              }}
            >
              <img
                src={detailCaseStudyGrid}
                alt=""
                className="pointer-events-none absolute"
                style={{
                  width: 'clamp(470px, 36vw, 680px)',
                  maxWidth: 'none',
                  left: 'clamp(0px, 1vw, 24px)',
                  top: 'clamp(-28px, -1vw, 0px)',
                  opacity: 1,
                  filter: 'brightness(1.15)',
                }}
              />

              <img
                src={detailCaseStudyEllipse}
                alt=""
                className="pointer-events-none absolute"
                style={{
                  width: 'clamp(360px, 29vw, 560px)',
                  maxWidth: 'none',
                  left: 'clamp(52px, 6vw, 120px)',
                  top: 'clamp(8px, 2.5vw, 72px)',
                  opacity: 1,
                }}
              />

              <div
                className="absolute z-10 flex flex-col items-start"
                style={{
                  left: 'clamp(80px, 5.9vw, 132px)',
                  top: 'clamp(92px, 11.2vw, 166px)',
                  width: 'clamp(620px, 56vw, 1080px)',
                  gap: 'clamp(12px, 0.9vw, 18px)',
                }}
              >
                <p
                  className="font-nexa uppercase tracking-[0.22em] text-[#4dd6c4]"
                  style={{
                    fontSize: 'clamp(10px, 0.72vw, 12px)',
                    lineHeight: '1.2',
                    fontWeight: 400,
                  }}
                >
                  Case Study
                </p>

                <h1
                  className="font-nexa text-white"
                  style={{
                    fontSize: 'clamp(26px, 2.55vw, 40px)',
                    lineHeight: '1.35',
                    fontWeight: 400,
                    letterSpacing: '-0.015em',
                  }}
                >
                  <span className="block">Boosting Power Tool Performance With</span>
                  <span className="block">Naxatra Labs&apos; Advanced BLDC Motor</span>
                  <span className="block">Solution</span>
                </h1>
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute"
            style={{
              width: 'clamp(210px, 17vw, 320px)',
              aspectRatio: '595 / 595',
              right: 'clamp(42px, 7.6vw, 102px)',
              bottom: 'clamp(-124px, -8vw, -62px)',
            }}
            aria-hidden="true"
          >
            <div
              className="absolute"
              style={{
                inset: '20% 10% 10% 10%',
                background:
                  'radial-gradient(circle at 50% 60%, rgba(77,214,196,0.12) 0%, rgba(77,214,196,0.06) 42%, rgba(0,0,0,0) 82%)',
                filter: 'blur(14px)',
              }}
            />
            <img
              src={detailCaseStudyEllipse}
              alt=""
              className="absolute z-10 h-auto w-full object-contain"
              style={{
                inset: 0,
                opacity: 0.72,
                transform: 'scale(0.98)',
              }}
            />
            <img
              src={detailCaseStudyRightImage}
              alt=""
              className="absolute z-20 h-auto w-full object-contain"
              style={{
                inset: 0,
                transform: 'scale(0.96)',
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
