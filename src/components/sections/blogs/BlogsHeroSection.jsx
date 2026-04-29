import blogHeroGrid from '../../../assets/images/blog-hero-grid.png';
import blogHeroEllipse from '../../../assets/images/blog-hero-ellipse.png';
import blogHeroImage from '../../../assets/images/blog-hero-image.png';
import mobileBlogsHero from '../../../assets/images/mobile-blogs-hero.svg';

export default function BlogsHeroSection() {
  return (
    <>
      <section className="relative w-full bg-black overflow-hidden md:hidden">
        <img
          src={mobileBlogsHero}
          alt="Get the latest updates and innovations from Naxatra Labs"
          className="block w-full h-auto"
        />
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
            Get the latest{' '}
            <span style={{ color: '#4dd6c4' }}>updates and innovations</span>
            {' '}from Naxatra Labs.
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
