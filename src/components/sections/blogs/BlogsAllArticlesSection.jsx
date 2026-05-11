import { useState } from 'react';
import blog1 from '../../../assets/images/blog-1.jpg';
import blog2 from '../../../assets/images/blog-2.jpg';
import blog3 from '../../../assets/images/blog-3.jpg';

const CATEGORIES = ['All', 'Latest', 'Events', 'Blogs'];

const ARTICLES = [
  {
    id: 1,
    date: 'May 11, 2023',
    title: 'National Technology Week',
    body: 'A proud moment as we presented our innovative motor and controller technology to industry leaders and policymakers, reinforcing our commitment...',
    href: 'https://www.linkedin.com/posts/abhilashmaurya_nationaltechnologyday2023-startupindia-sustainibility-share-7064079426128363520-6C7k/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACO14VQB5vnmxkT3Aaf0vGvf3_Thtn5MaXg',
    img: blog1,
  },
  {
    id: 2,
    date: 'Nov 21, 2024',
    title: 'EV India Expo',
    body: 'A milestone event where we unveil our latest advancements in electric vehicle technology, contributing to a cleaner and more sustainable tomorrow...',
    href: 'https://www.linkedin.com/posts/abhilashmaurya_naxatralabs-cleanenergy-sustainablemobility-ugcPost-7264498234008436736--t9S/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACO14VQB5vnmxkT3Aaf0vGvf3_Thtn5MaXg',
    img: blog2,
  },
  {
    id: 3,
    date: 'Jan 21, 2025',
    title: 'Bharat Mobility Global Expo',
    body: 'A defining moment where we unveiled a groundbreaking mobility solutions, setting new benchmarks in sustainable and high-performance transportation...',
    href: 'https://www.linkedin.com/posts/abhilashmaurya_naxatralabs-bharatmobilityexpo-autoexpo2025-share-7286605063093972993-E4-B/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACO14VQB5vnmxkT3Aaf0vGvf3_Thtn5MaXg',
    img: blog3,
  },
];

export default function BlogsAllArticlesSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const featuredArticle = ARTICLES[0];

  return (
    <section className="w-full bg-white">
      <div className="md:hidden" style={{ padding: '22px 20px 38px' }}>
        <div className="mx-auto" style={{ maxWidth: '460px' }}>
          <p
            className="font-metro text-center"
            style={{
              fontSize: '12px',
              color: '#515151',
              marginBottom: '10px',
              fontWeight: 500,
            }}
          >
            Categories
          </p>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '8px', marginBottom: '58px' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-metro transition-colors"
                style={{
                  fontSize: '10px',
                  padding: '8px 6px',
                  border: '1px solid #1863da',
                  color: activeCategory === cat ? '#fff' : '#1863da',
                  backgroundColor: activeCategory === cat ? '#1863da' : 'transparent',
                  lineHeight: 1.1,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <h2
            className="font-nexa capitalize text-center"
            style={{
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '1.15',
              color: '#000',
              marginBottom: '24px',
            }}
          >
            All Articles
          </h2>

          <div className="flex items-center justify-between" style={{ gap: '10px', marginBottom: '16px' }}>
            <button
              type="button"
              aria-label="Previous article"
              style={{ color: '#515151', fontSize: '22px', lineHeight: 1, background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              &#8249;
            </button>

            <img
              src={featuredArticle.img}
              alt={featuredArticle.title}
              className="block h-auto object-cover"
              style={{ width: '286px', maxWidth: '100%' }}
            />

            <div className="flex items-center" style={{ gap: '8px' }}>
              <button
                type="button"
                aria-label="Next article"
                style={{ color: '#515151', fontSize: '22px', lineHeight: 1, background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
              >
                &#8250;
              </button>
             
            </div>
          </div>

          <div className="mx-auto text-center" style={{ maxWidth: '300px' }}>
            <h3
              className="font-nexa"
              style={{
                fontSize: '16px',
                fontWeight: 400,
                color: '#1863da',
                lineHeight: '1.2',
                marginBottom: '4px',
              }}
            >
              {featuredArticle.title}
            </h3>
            <p
              className="font-metro"
              style={{ fontSize: '10px', color: '#929292', marginBottom: '10px' }}
            >
              {featuredArticle.date}
            </p>
            <p
              className="font-metro text-black"
              style={{ fontSize: '10px', lineHeight: '1.5', margin: 0 }}
            >
              {featuredArticle.body}
            </p>
          </div>
        </div>
      </div>

      <div
        className="mx-auto hidden md:grid"
        style={{
          maxWidth: '1840px',
          gridTemplateColumns: 'clamp(180px, 14vw, 240px) minmax(0, 1fr)',
          gap: 'clamp(28px, 3vw, 56px)',
          padding: 'clamp(28px, 3.6vw, 60px) clamp(20px, 4.2vw, 80px)',
        }}
      >
        <aside
          style={{
            backgroundColor: '#f8fdfd',
            padding: 'clamp(16px, 1.6vw, 28px) clamp(12px, 1.1vw, 20px)',
            minHeight: 'clamp(560px, 58vw, 980px)',
          }}
        >
          <p
            className="font-metro"
            style={{
              fontSize: '20px',
              color: '#515151',
              marginBottom: 'clamp(10px, 0.9vw, 14px)',
              fontWeight: 600,
            }}
          >
            Categories
          </p>
          <div className="flex flex-wrap" style={{ gap: 'clamp(6px, 0.52vw, 10px)' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-metro transition-colors"
                style={{
                  fontSize: 'clamp(11px, 0.72vw, 14px)',
                  padding: 'clamp(6px, 0.45vw, 8px) clamp(10px, 0.75vw, 14px)',
                  border: '1px solid #1863da',
                  color: activeCategory === cat ? '#fff' : '#1863da',
                  backgroundColor: activeCategory === cat ? '#1863da' : 'transparent',
                  lineHeight: 1,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        <div>
          <h2
            className="font-nexa capitalize"
            style={{
              fontSize: 'clamp(24px, 2.2vw, 42px)',
              fontWeight: 400,
              lineHeight: '1.15',
              color: '#000',
              marginBottom: 'clamp(18px, 1.8vw, 32px)',
            }}
          >
            All Articles
          </h2>

          <div className="flex flex-col" style={{ gap: 'clamp(16px, 1.5vw, 28px)' }}>
            {ARTICLES.map((article) => (
              <article
                key={article.id}
                className="grid items-start"
                style={{
                  gridTemplateColumns: 'clamp(280px, 26vw, 450px) minmax(320px, 1fr)',
                  gap: 'clamp(20px, 1.8vw, 30px)',
                }}
              >
                <img
                  src={article.img}
                  alt={article.title}
                  className="block w-full h-auto object-cover"
                  style={{ aspectRatio: '16 / 9' }}
                />

                <div style={{ maxWidth: '760px', paddingTop: 'clamp(4px, 0.35vw, 6px)' }}>
                  <p
                    className="font-metro"
                    style={{ fontSize: 'clamp(12px, 0.9vw, 17px)', color: '#929292', marginBottom: 'clamp(6px, 0.45vw, 8px)' }}
                  >
                    {article.date}
                  </p>
                  <a href={article.href} target="_blank" rel="noreferrer" className="no-underline">
                    <h3
                      className="font-nexa"
                      style={{
                        fontSize: 'clamp(24px, 2.3vw, 44px)',
                        fontWeight: 400,
                        color: '#1863da',
                        lineHeight: '1.14',
                        marginBottom: 'clamp(10px, 0.8vw, 14px)',
                      }}
                    >
                      {article.title}
                    </h3>
                  </a>
                  <p
                    className="font-metro text-black"
                    style={{ fontSize: 'clamp(14px, 1.15vw, 22px)', lineHeight: '1.5', maxWidth: '720px', margin: 0 }}
                  >
                    {article.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
