import goalPhoto from '../../../assets/images/about-goal-photo.png';

export default function AboutGoalSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div
        className="mx-auto flex flex-col items-center md:hidden"
        style={{
          maxWidth: '460px',
          padding: '26px 14px 30px',
          gap: '14px',
        }}
      >
        <h2
          className="font-nexa text-center"
          style={{ fontSize: '20px', lineHeight: '1.15', fontWeight: 400 }}
        >
          <span style={{ color: '#4dd6c4' }}>Our </span>
          <span className="text-white">Goal?</span>
        </h2>

        <p
          className="font-metro text-white text-center"
          style={{
            fontSize: '10px',
            lineHeight: '1.55',
            maxWidth: '304px',
            opacity: 0.9,
            margin: 0,
          }}
        >
          To become the leading technology company that builds application specific, efficient, compact and smart motors, powering the world smarter, cleaner energy solutions.
        </p>

        <div
          className="w-full overflow-hidden"
          style={{
            maxWidth: '330px',
            aspectRatio: '330 / 203',
            marginTop: '14px',
            borderRadius: '4px',
          }}
        >
          <img
            src={goalPhoto}
            alt="Our Goal - EV Charging"
            className="w-full h-full block"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <div
        className="mx-auto hidden md:flex md:flex-col md:items-center"
        style={{
          maxWidth: '1920px',
          padding: 'clamp(48px, 4.7vw, 91px) clamp(24px, 9.9vw, 191px)',
          gap: 'clamp(16px, 1.56vw, 30px)',
        }}
      >
        {/* Heading */}
        <h2
          className="font-nexa text-center"
          style={{ fontSize: 'clamp(28px, 3.54vw, 68px)', lineHeight: '1.15', fontWeight: 400 }}
        >
          <span style={{ color: '#4dd6c4' }}>Our </span>
          <span className="text-white">Goal?</span>
        </h2>

        {/* Body */}
        <p
          className="font-metro text-white text-center"
          style={{
            fontSize: 'clamp(14px, 1.25vw, 24px)',
            lineHeight: '1.6',
            maxWidth: 'clamp(300px, 58.1vw, 1116px)',
            opacity: 0.9,
          }}
        >
          To become the leading technology company that builds application specific, efficient, compact and smart motors, powering the world smarter, cleaner energy solutions.
        </p>

        {/* Large image */}
        <div
          className="w-full overflow-hidden"
          style={{
            maxWidth: 'clamp(240px, 55vw, 1060px)',
            aspectRatio: '1414 / 750',
            marginTop: 'clamp(16px, 1.04vw, 20px)',
            borderRadius: 'clamp(6px, 0.68vw, 13px)',
          }}
        >
          <img
            src={goalPhoto}
            alt="Our Goal — EV Charging"
            className="w-full h-full block"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
