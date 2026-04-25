import featuredArticle from '../../../assets/images/featured-article.png';

export default function BlogsFeaturedSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{ height: 'clamp(60px, 6.25vw, 120px)', background: 'linear-gradient(to bottom, rgba(77,214,196,0.10), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ height: 'clamp(60px, 6.25vw, 120px)', background: 'linear-gradient(to top, rgba(77,214,196,0.10), transparent)' }}
      />

      <div
        className="relative mx-auto flex flex-col items-center"
        style={{ maxWidth: '920px', padding: 'clamp(36px, 4.4vw, 84px) clamp(24px, 4vw, 76px)' }}
      >
        <h2
          className="font-nexa text-center capitalize"
          style={{
            fontSize: 'clamp(24px, 2.6vw, 50px)',
            lineHeight: '1.15',
            fontWeight: 600,
            marginBottom: 'clamp(18px, 2vw, 38px)',
          }}
        >
          <span style={{ color: '#1863da' }}>Featured </span>
          <span style={{ color: '#000' }}>Articles</span>
        </h2>

        <img
          src={featuredArticle}
          alt="Naxatra Labs Fund Raise"
          className="block w-full h-auto object-contain"
          style={{ maxWidth: 'clamp(320px, 48vw, 740px)' }}
        />

        <div
          className="w-full"
          style={{ maxWidth: 'clamp(320px, 48vw, 740px)', marginTop: 'clamp(12px, 1.25vw, 24px)' }}
        >
          <h3
            className="font-nexa capitalize"
            style={{ color: '#1863da', fontSize: 'clamp(20px, 1.9vw, 36px)', lineHeight: '1.2', fontWeight: 600, margin: 0 }}
          >
            Fund Raise
          </h3>
          <p
            className="font-metro"
            style={{ fontSize: 'clamp(10px, 0.72vw, 14px)', color: '#929292', marginTop: 'clamp(4px, 0.42vw, 8px)' }}
          >
            May 11, 2023
          </p>
          <p
            className="font-metro text-black"
            style={{ fontSize: 'clamp(11px, 0.83vw, 16px)', lineHeight: '1.5', marginTop: 'clamp(4px, 0.42vw, 8px)' }}
          >
            Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions,
            our motors deliver unmatched durability and performance wherever the journey takes you.
          </p>
        </div>
      </div>
    </section>
  );
}
