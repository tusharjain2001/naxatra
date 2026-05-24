import blogHeroGrid from '../../../assets/images/blog-hero-grid.png';
import blogHeroEllipse from '../../../assets/images/blog-hero-ellipse.png';
import blogHeroImage from '../../../assets/images/blog-hero-image.png';
import AnimatedTextReveal, { countAnimatedCharacters } from '../../common/AnimatedTextReveal';

export default function BlogsHeroSection() {
  const textStagger = 0.03;
  const introText = 'Get the latest ';
  const middleText = 'updates and innovations';
  const endText = ' from Naxatra Labs.';
  const middleDelay = countAnimatedCharacters(introText) * textStagger;
  const endDelay = middleDelay + countAnimatedCharacters(middleText) * textStagger;

  return (
    <>
      <section className="relative w-full bg-black overflow-hidden md:hidden" style={{ height: '268px' }}>
        <img
          src={blogHeroGrid}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35 pointer-events-none"
        />

        <img
          src={blogHeroImage}
          alt=""
          className="absolute pointer-events-none object-contain"
          style={{
            width: '178px',
            height: 'auto',
            left: '50%',
            top: '50px',
            transform: 'translateX(-50%)',
          }}
        />

        <img
          src={blogHeroEllipse}
          alt=""
          className="absolute pointer-events-none object-contain"
          style={{
            width: '320px',
            height: 'auto',
            left: '50%',
            top: '-6px',
            transform: 'translateX(-50%)',
            opacity: 0.58,
          }}
        />

        <h1
          className="absolute font-nexa text-center text-white"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            top: '82px',
            width: 'min(352px, 88vw)',
            fontSize: '26px',
            lineHeight: '26px',
            fontWeight: 400,
          }}
        >
          <span className="block whitespace-nowrap">
            <AnimatedTextReveal text={introText.trimEnd()} stagger={textStagger} />
          </span>
          <span className="block whitespace-nowrap" style={{ color: '#4dd6c4' }}>
            <AnimatedTextReveal text={middleText} delay={middleDelay} stagger={textStagger} />
          </span>
          <span className="block whitespace-nowrap">
            <AnimatedTextReveal text={endText.trimStart()} delay={endDelay} stagger={textStagger} />
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
            opacity: 0.85,
          }}
        >
          Follow us on LinkedIn to stay ahead!
        </p>
      </section>

      <section
        className="relative hidden w-full bg-black overflow-hidden md:block"
        style={{ minHeight: 'clamp(420px, 51vw, 980px)' }}
      >
        {/* Decorative ellipse */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 'clamp(200px, 28vw, 540px)',
            height: 'clamp(200px, 28vw, 540px)',
            top: '-10%',
            right: '5%',
            background: 'radial-gradient(circle, rgba(77,214,196,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Left content */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            left: 'clamp(40px, 10vw, 191px)',
            top: 'clamp(56px, 9.9vw, 190px)',
            maxWidth: 'clamp(300px, 49.7vw, 954px)',
            gap: 'clamp(16px, 1.56vw, 30px)',
          }}
        >
          <h1
            className="font-nexa text-white"
            style={{
              fontSize: 'clamp(36px, 5.2vw, 100px)',
              lineHeight: '1.2',
              fontWeight: 600,
            }}
          >
            <AnimatedTextReveal text={introText} />
            <span style={{ color: '#4dd6c4' }}><AnimatedTextReveal text={middleText} delay={middleDelay} stagger={textStagger} /></span>{' '}
            <AnimatedTextReveal text={endText} delay={endDelay} stagger={textStagger} />
          </h1>
          <p
            className="font-metro text-white"
            style={{
              fontSize: 'clamp(14px, 1.25vw, 24px)',
              lineHeight: '1.5',
              opacity: 0.85,
            }}
          >
            Follow us on LinkedIn to stay ahead!
          </p>
        </div>

        {/* Right: layered hero visual */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 'clamp(16px, 4.5vw, 86px)',
            right: 'clamp(-24px, 1vw, 18px)',
            width: 'clamp(598px, 51.9vw, 997px)',
            aspectRatio: '869 / 601',
          }}
        >
          <img
            src={blogHeroGrid}
            alt=""
            className="absolute inset-0 w-full h-full object-fill"
          />
          <img
            src={blogHeroEllipse}
            alt=""
            className="absolute z-10 h-auto object-contain"
            style={{
              width: 'clamp(345px, 38vw, 730px)',
              top: '51%',
              left: '47%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <img
            src={blogHeroImage}
            alt="Naxatra Labs LinkedIn"
            className="absolute z-20 h-auto object-contain"
            style={{
              width: 'clamp(218px, 25.3vw, 483px)',
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
