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

  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto grid"
        style={{
          maxWidth: '1060px',
          gridTemplateColumns: 'clamp(150px, 13vw, 205px) minmax(0, 1fr)',
          gap: 'clamp(36px, 4.8vw, 92px)',
          padding: 'clamp(44px, 5.2vw, 100px) clamp(24px, 5vw, 96px)',
        }}
      >
        <aside
          style={{
            backgroundColor: '#f8fdfd',
            padding: 'clamp(16px, 1.8vw, 34px) clamp(12px, 1.35vw, 26px)',
            minHeight: 'clamp(420px, 38vw, 730px)',
          }}
        >
          <p
            className="font-metro"
            style={{
              fontSize: 'clamp(10px, 0.68vw, 13px)',
              color: '#515151',
              marginBottom: 'clamp(10px, 1vw, 18px)',
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
                  fontSize: 'clamp(10px, 0.68vw, 13px)',
                  padding: 'clamp(5px, 0.42vw, 8px) clamp(9px, 0.73vw, 14px)',
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
              fontSize: 'clamp(26px, 2.6vw, 50px)',
              fontWeight: 400,
              lineHeight: '1.15',
              color: '#000',
              marginBottom: 'clamp(26px, 2.6vw, 50px)',
            }}
          >
            All Articles
          </h2>

          <div className="flex flex-col" style={{ gap: 'clamp(20px, 1.9vw, 36px)' }}>
            {ARTICLES.map((article) => (
              <article
                key={article.id}
                className="grid items-start"
                style={{
                  gridTemplateColumns: 'clamp(220px, 22vw, 420px) minmax(220px, 1fr)',
                  gap: 'clamp(22px, 2.3vw, 44px)',
                }}
              >
                <img
                  src={articleThumb}
                  alt={article.title}
                  className="block w-full h-auto object-cover"
                />

                <div>
                  <p
                    className="font-metro"
                    style={{ fontSize: 'clamp(9px, 0.6vw, 12px)', color: '#929292', marginBottom: 'clamp(6px, 0.55vw, 10px)' }}
                  >
                    {article.date}
                  </p>
                  <h3
                    className="font-nexa"
                    style={{
                      fontSize: 'clamp(18px, 1.7vw, 32px)',
                      fontWeight: 400,
                      color: '#1863da',
                      lineHeight: '1.2',
                      marginBottom: 'clamp(6px, 0.55vw, 10px)',
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="font-metro text-black"
                    style={{ fontSize: 'clamp(10px, 0.75vw, 14px)', lineHeight: '1.45', maxWidth: '360px' }}
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
