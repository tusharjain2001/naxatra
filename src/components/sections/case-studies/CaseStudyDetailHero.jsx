import detailCaseStudyGrid from '../../../assets/detailcasestudy/detailcasestudygrid.png';
import detailCaseStudyEllipse from '../../../assets/detailcasestudy/detailcasestudyellipse.png';
import detailCaseStudyRightImage from '../../../assets/detailcasestudy/detailcasestudyrightimage.png';
import AnimatedTextReveal, { countAnimatedCharacters } from '../../common/AnimatedTextReveal';

export default function CaseStudyDetailHero() {
  const textStagger = 0.03;
  const mobileLineOneText = 'Boosting Power Tool';
  const mobileLineTwoText = 'Performance With Naxatra';
  const mobileLineThreeText = "Labs' Advanced BLDC";
  const mobileLineFourText = 'Motor Solution';
  const mobileLineTwoDelay = countAnimatedCharacters(mobileLineOneText) * textStagger;
  const mobileLineThreeDelay = mobileLineTwoDelay + countAnimatedCharacters(mobileLineTwoText) * textStagger;
  const mobileLineFourDelay = mobileLineThreeDelay + countAnimatedCharacters(mobileLineThreeText) * textStagger;
  const lineOneText = 'Boosting Power Tool Performance With';
  const lineTwoText = "Naxatra Labs' Advanced BLDC Motor";
  const lineThreeText = 'Solution';
  const lineTwoDelay = countAnimatedCharacters(lineOneText) * textStagger;
  const lineThreeDelay = lineTwoDelay + countAnimatedCharacters(lineTwoText) * textStagger;

  return (
    <>
      <section className="relative w-full overflow-hidden bg-black md:hidden" style={{ height: '268px' }}>
        <img
          src={detailCaseStudyGrid}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35 pointer-events-none"
        />
        <img
          src={detailCaseStudyRightImage}
          alt=""
          className="absolute pointer-events-none object-contain"
          style={{
            width: '154px',
            height: 'auto',
            left: '50%',
            top: '50px',
            transform: 'translateX(-50%)',
          }}
        />
        <img
          src={detailCaseStudyEllipse}
          alt=""
          className="absolute pointer-events-none object-contain"
          style={{
            width: '320px',
            height: 'auto',
            left: '50%',
            top: '-12px',
            transform: 'translateX(-50%)',
            opacity: 0.58,
          }}
        />
        <div
          className="absolute text-center"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            top: '62px',
            width: 'min(364px, 91vw)',
          }}
        >
          <p
            className="font-nexa uppercase tracking-[0.22em] text-[#4dd6c4]"
            style={{
              fontSize: '12px',
              lineHeight: '1.2',
              fontWeight: 400,
              margin: 0,
              marginBottom: '12px',
            }}
          >
            <AnimatedTextReveal text="Case Study" stagger={textStagger} />
          </p>
          <h1
            className="font-nexa text-white"
            style={{
              fontSize: '26px',
              lineHeight: '26px',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            <span className="block whitespace-nowrap">
              <AnimatedTextReveal text={mobileLineOneText} stagger={textStagger} />
            </span>
            <span className="block whitespace-nowrap">
              <AnimatedTextReveal text={mobileLineTwoText} delay={mobileLineTwoDelay} stagger={textStagger} />
            </span>
            <span className="block whitespace-nowrap">
              <AnimatedTextReveal text={mobileLineThreeText} delay={mobileLineThreeDelay} stagger={textStagger} />
            </span>
            <span className="block whitespace-nowrap">
              <AnimatedTextReveal text={mobileLineFourText} delay={mobileLineFourDelay} stagger={textStagger} />
            </span>
          </h1>
        </div>
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
                  <AnimatedTextReveal text="Case Study" stagger={textStagger} />
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
                  <span className="block"><AnimatedTextReveal text={lineOneText} stagger={textStagger} /></span>
                  <span className="block"><AnimatedTextReveal text={lineTwoText} delay={lineTwoDelay} stagger={textStagger} /></span>
                  <span className="block"><AnimatedTextReveal text={lineThreeText} delay={lineThreeDelay} stagger={textStagger} /></span>
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
