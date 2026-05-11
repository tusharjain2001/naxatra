import blog1 from '../../../assets/images/blog-1.jpg';

const featuredArticle = {
  title: 'National Technology Week',
  date: 'May 11, 2023',
  desc: 'A proud moment as we presented our innovative motor and controller technology to industry leaders and policymakers, reinforcing our commitment...',
  href: 'https://www.linkedin.com/posts/abhilashmaurya_nationaltechnologyday2023-startupindia-sustainibility-share-7064079426128363520-6C7k/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACO14VQB5vnmxkT3Aaf0vGvf3_Thtn5MaXg',
  img: blog1,
};

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
        className="relative mx-auto flex flex-col items-center md:hidden"
        style={{ maxWidth: '420px', padding: '34px 24px 40px' }}
      >
        <h2
          className="font-nexa text-center capitalize"
          style={{
            fontSize: '20px',
            lineHeight: '1.15',
            fontWeight: 400,
            marginBottom: '20px',
          }}
        >
          <span style={{ color: '#1863da' }}>Featured </span>
          <span style={{ color: '#000' }}>Articles</span>
        </h2>

        <a href={featuredArticle.href} target="_blank" rel="noreferrer" style={{ display: 'block', maxWidth: '332px' }}>
          <img
            src={featuredArticle.img}
            alt={featuredArticle.title}
            className="block w-full h-auto object-contain"
          />
        </a>

        <div
          className="w-full text-center"
          style={{ maxWidth: '332px', marginTop: '18px' }}
        >
          <a href={featuredArticle.href} target="_blank" rel="noreferrer" className="no-underline">
            <h3
              className="font-nexa capitalize"
              style={{ color: '#1863da', fontSize: '16px', lineHeight: '1.2', fontWeight: 400, margin: 0 }}
            >
              {featuredArticle.title}
            </h3>
          </a>
          <p
            className="font-metro"
            style={{ fontSize: '10px', color: '#929292', marginTop: '4px' }}
          >
            {featuredArticle.date}
          </p>
          <p
            className="font-metro text-black"
            style={{ fontSize: '10px', lineHeight: '1.5', marginTop: '10px', marginBottom: 0 }}
          >
            {featuredArticle.desc}
          </p>
        </div>
      </div>

      <div
        className="relative mx-auto hidden md:flex md:flex-col md:items-center"
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

        <a href={featuredArticle.href} target="_blank" rel="noreferrer" style={{ display: 'block', maxWidth: 'clamp(320px, 48vw, 740px)', width: '100%' }}>
          <img
            src={featuredArticle.img}
            alt={featuredArticle.title}
            className="block w-full h-auto object-contain"
          />
        </a>

        <div
          className="w-full"
          style={{ maxWidth: 'clamp(320px, 48vw, 740px)', marginTop: 'clamp(12px, 1.25vw, 24px)' }}
        >
          <a href={featuredArticle.href} target="_blank" rel="noreferrer" className="no-underline">
            <h3
              className="font-nexa capitalize"
              style={{ color: '#1863da', fontSize: 'clamp(20px, 1.9vw, 36px)', lineHeight: '1.2', fontWeight: 600, margin: 0 }}
            >
              {featuredArticle.title}
            </h3>
          </a>
          <p
            className="font-metro"
            style={{ fontSize: 'clamp(10px, 0.72vw, 14px)', color: '#929292', marginTop: 'clamp(4px, 0.42vw, 8px)' }}
          >
            {featuredArticle.date}
          </p>
          <p
            className="font-metro text-black"
            style={{ fontSize: 'clamp(11px, 0.83vw, 16px)', lineHeight: '1.5', marginTop: 'clamp(4px, 0.42vw, 8px)' }}
          >
            {featuredArticle.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
