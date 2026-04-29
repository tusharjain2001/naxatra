import { useState } from 'react';
import articleThumb from '../../../assets/images/blogs-article-thumb.png';

const CATEGORIES = ['All', 'Latest', 'Events', 'Blogs'];

const ARTICLES = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  date: 'May 11, 2023',
  title: 'National Technology Week',
  body: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
}));

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
              src={articleThumb}
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
                  gridTemplateColumns: 'clamp(280px, 28vw, 480px) minmax(320px, 620px)',
                  gap: 'clamp(20px, 2vw, 34px)',
                }}
              >
                <img
                  src={articleThumb}
                  alt={article.title}
                  className="block w-full h-auto object-cover"
                />

                <div style={{ maxWidth: '620px' }}>
                  <p
                    className="font-metro"
                    style={{ fontSize: '16px', color: '#929292', marginBottom: 'clamp(6px, 0.45vw, 8px)' }}
                  >
                    {article.date}
                  </p>
                  <h3
                    className="font-nexa"
                    style={{
                      fontSize: '40px',
                      fontWeight: 400,
                      color: '#1863da',
                      lineHeight: '1.2',
                      marginBottom: 'clamp(4px, 0.35vw, 6px)',
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="font-metro text-black"
                    style={{ fontSize: '20px', lineHeight: '1.45', maxWidth: '620px' }}
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
