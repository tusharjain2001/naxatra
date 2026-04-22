import fundraisePost from '../../../assets/images/blogs-fundraise-post.png';

export default function BlogsFeaturedSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Teal gradient overlays */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{ height: 'clamp(60px, 6.25vw, 120px)', background: 'linear-gradient(to bottom, rgba(77,214,196,0.10), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ height: 'clamp(60px, 6.25vw, 120px)', background: 'linear-gradient(to top, rgba(77,214,196,0.10), transparent)' }}
      />

      <div
        className="relative mx-auto"
        style={{ maxWidth: '1920px', padding: 'clamp(48px, 5.2vw, 100px) clamp(24px, 10.5vw, 201px)' }}
      >
        {/* Section heading */}
        <h2
          className="font-nexa text-center capitalize"
          style={{
            fontSize: 'clamp(28px, 3.54vw, 68px)',
            lineHeight: '1.15',
            fontWeight: 400,
            marginBottom: 'clamp(32px, 3.6vw, 70px)',
          }}
        >
          <span style={{ color: '#1863da' }}>Featured </span>
          <span style={{ color: '#000' }}>Articles</span>
        </h2>

        {/* Featured card layout */}
        <div className="flex flex-wrap items-start justify-center gap-10 lg:gap-16">
          {/* Fundraise post image — displayed with slight tilt */}
          <div
            className="flex-shrink-0 rounded overflow-hidden"
            style={{
              width: 'clamp(240px, 28vw, 536px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
              transform: 'rotate(-3deg)',
            }}
          >
            <img
              src={fundraisePost}
              alt="Naxatra Labs Pre-Series A Fund Raise"
              className="w-full h-auto block"
            />
          </div>

          {/* Article metadata */}
          <div
            className="flex flex-col items-start justify-center"
            style={{ flex: '1 1 clamp(260px, 36vw, 690px)', gap: 'clamp(12px, 1.25vw, 24px)' }}
          >
            <h3
              className="font-nexa text-black capitalize"
              style={{ fontSize: 'clamp(22px, 2.08vw, 40px)', fontWeight: 400, lineHeight: '1.2' }}
            >
              Fund Raise
            </h3>
            <p
              className="font-metro"
              style={{ fontSize: 'clamp(12px, 0.83vw, 16px)', color: '#929292' }}
            >
              May 11, 2023
            </p>
            <p
              className="font-metro text-black"
              style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.7' }}
            >
              Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions,
              our motors deliver unmatched durability and performance wherever the journey takes you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
