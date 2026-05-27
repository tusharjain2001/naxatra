import techHeroGrid from '../../../assets/images/tech-hero-grid.png';
import techHeroEllipse from '../../../assets/images/case-hero-ellipse.png';
import techRightHero from '../../../assets/images/case-right-hero.png';
import AnimatedTextReveal, { countAnimatedCharacters } from '../../common/AnimatedTextReveal';

export default function CaseStudiesHeroSection() {
  const textStagger = 0.03;
  const firstText = 'Engineering';
  const secondText = 'Real-World';
  const thirdText = 'Electric Mobility';
  const secondDelay = countAnimatedCharacters(firstText) * textStagger;
  const thirdDelay = secondDelay + countAnimatedCharacters(secondText) * textStagger;

  return (
    <>
      <section className="relative w-full bg-black overflow-hidden md:hidden" style={{ height: '268px' }}>
        <img
          src={techHeroGrid}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35 pointer-events-none"
        />
        <img
          src={techRightHero}
          alt=""
          className="absolute pointer-events-none object-contain"
          style={{
            width: '168px',
            height: 'auto',
            left: '50%',
            top: '54px',
            transform: 'translateX(-50%)',
          }}
        />
        <img
          src={techHeroEllipse}
          alt=""
          className="absolute pointer-events-none object-contain"
          style={{
            width: '320px',
            height: 'auto',
            left: '50%',
            top: '-8px',
            transform: 'translateX(-50%)',
            opacity: 0.58,
          }}
        />
        <h1
          className="absolute font-nexa text-center text-white"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            top: '80px',
            width: 'min(350px, 88vw)',
            fontSize: '26px',
            lineHeight: '26px',
            fontWeight: 400,
          }}
        >
          <span className="block whitespace-nowrap">
            <AnimatedTextReveal text={firstText} stagger={textStagger} />
          </span>
          <span className="block whitespace-nowrap" style={{ color: '#4dd6c4' }}>
            <AnimatedTextReveal text={secondText} delay={secondDelay} stagger={textStagger} />
          </span>
          <span className="block whitespace-nowrap text-white">
            <AnimatedTextReveal text={thirdText} delay={thirdDelay} stagger={textStagger} />
          </span>
        </h1>
        <p
          className="absolute font-metro text-center text-white whitespace-nowrap"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            top: '164px',
            fontSize: '10px',
            lineHeight: '14px',
            opacity: 0.95,
          }}
        >
          Lighter, Stronger, Smarter Motors for the Future
        </p>
      </section>

      <section
        className="relative hidden w-full bg-black overflow-hidden md:block"
        style={{ minHeight: 'clamp(520px, 51vw, 979px)' }}
      >
        {/* Background radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '50%',
            right: '-5%',
            transform: 'translateY(-50%)',
            width: 'clamp(400px, 50vw, 867px)',
            height: 'clamp(400px, 50vw, 867px)',
            background:
              'radial-gradient(ellipse at center, rgba(24,99,218,0.15) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Left content */}
        <div
          className="absolute flex flex-col"
          style={{
            left: 'clamp(40px, 8.8vw, 168px)',
            top: 'clamp(150px, 16vw, 307px)',
            gap: 'clamp(10px, 1.1vw, 20px)',
          }}
        >
          <h1
            className="font-nexa text-white"
            style={{
              fontSize: 'clamp(36px, 5.2vw, 100px)',
              lineHeight: '0.96',
              maxWidth: 'clamp(300px, 40vw, 760px)',
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}
            >
            <span className="block"><AnimatedTextReveal text={firstText} stagger={textStagger} /></span>
            <span className="block" style={{ color: '#4dd6c4' }}><AnimatedTextReveal text={secondText} delay={secondDelay} stagger={textStagger} /></span>
            <span className="block whitespace-nowrap"><AnimatedTextReveal text={thirdText} delay={thirdDelay} stagger={textStagger} /></span>
          </h1>
          <p
            className="font-metro text-white"
            style={{
              fontSize: 'clamp(10px, 0.83vw, 16px)',
              lineHeight: '1.5',
              opacity: 0.95,
            }}
          >
            Lighter, Stronger, Smarter Motors for the Future
          </p>
        </div>

        {/* Right: Motor image */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 'clamp(106px, 9.2vw, 176px)',
            right: 'clamp(-24px, 1vw, 18px)',
            width: 'clamp(598px, 51.9vw, 997px)',
            aspectRatio: '867 / 598',
          }}
        >
          <img
            src={techHeroGrid}
            alt=""
            className="absolute inset-0 w-full h-full object-fill"
          />
          <img
            src={techHeroEllipse}
            alt="Motor Diagram"
            className="absolute z-10 block h-auto object-contain"
            style={{
              width: 'clamp(345px, 38vw, 730px)',
              top: '51%',
              left: '47%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <img
            src={techRightHero}
            alt="Motor Render"
            className="absolute z-20 block h-auto object-contain"
            style={{
              width: 'clamp(173px, 19.5vw, 374px)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </section>
    </>
  );
}
