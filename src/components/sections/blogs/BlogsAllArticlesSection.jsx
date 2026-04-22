import { useState } from 'react';
import articleThumb from '../../../assets/images/blogs-article-thumb.png';
import blogsBadge from '../../../assets/images/blogs-badge.svg';

const CATEGORIES = ['All', 'Latest', 'Events', 'Blogs'];

const ARTICLES = Array.from({ length: 6 }, (_, i) => ({
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
        className="mx-auto flex flex-wrap items-start"
        style={{ maxWidth: '1920px', padding: 'clamp(40px, 4.8vw, 92px) clamp(24px, 10.5vw, 201px)', gap: 'clamp(24px, 2.6vw, 50px)' }}
      >
        {/* Left sidebar */}
        <aside
          className="flex-shrink-0 rounded"
          style={{
            width: 'clamp(200px, 19.4vw, 372px)',
            backgroundColor: '#f8fdfd',
            padding: 'clamp(24px, 2.6vw, 50px) clamp(16px, 1.56vw, 30px)',
          }}
        >
          <p
            className="font-metro uppercase"
            style={{
              fontSize: 'clamp(11px, 0.73vw, 14px)',
              color: '#515151',
              letterSpacing: '0.08em',
              marginBottom: 'clamp(16px, 1.56vw, 30px)',
              fontWeight: 600,
            }}
          >
            Categories
          </p>
          <div className="flex flex-col" style={{ gap: 'clamp(10px, 1.04vw, 20px)' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-metro text-left rounded-full transition-colors"
                style={{
                  fontSize: 'clamp(12px, 0.83vw, 16px)',
                  padding: 'clamp(8px, 0.73vw, 14px) clamp(14px, 1.25vw, 24px)',
                  border: '1px solid #1863da',
                  color: activeCategory === cat ? '#fff' : '#1863da',
                  backgroundColor: activeCategory === cat ? '#1863da' : 'transparent',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        {/* Right: article list */}
        <div className="flex flex-col" style={{ flex: '1 1 clamp(260px, 55vw, 1060px)', gap: 0 }}>
          <h2
            className="font-nexa capitalize"
            style={{
              fontSize: 'clamp(28px, 3.54vw, 68px)',
              fontWeight: 400,
              lineHeight: '1.15',
              color: '#000',
              marginBottom: 'clamp(24px, 2.6vw, 50px)',
            }}
          >
            All Articles
          </h2>

          {/* Article rows */}
          <div className="flex flex-col">
            {ARTICLES.map((article, idx) => (
              <div
                key={article.id}
                className="flex flex-wrap items-start gap-5 cursor-pointer group"
                style={{
                  padding: 'clamp(16px, 1.56vw, 30px) 0',
                  borderTop: idx === 0 ? '1px solid #d7d7d7' : 'none',
                  borderBottom: '1px solid #d7d7d7',
                }}
              >
                {/* Thumbnail with badge overlay */}
                <div className="relative flex-shrink-0" style={{ width: 'clamp(100px, 9.4vw, 180px)' }}>
                  <img
                    src={articleThumb}
                    alt={article.title}
                    className="w-full h-auto block rounded"
                    style={{ border: '1px solid #d7d7d7' }}
                  />
                  <img
                    src={blogsBadge}
                    alt="LinkedIn"
                    className="absolute"
                    style={{ width: '28%', top: '6%', right: '6%' }}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col" style={{ flex: '1 1 clamp(180px, 30vw, 580px)', gap: 'clamp(6px, 0.52vw, 10px)' }}>
                  <p
                    className="font-metro"
                    style={{ fontSize: 'clamp(11px, 0.73vw, 14px)', color: '#929292' }}
                  >
                    {article.date}
                  </p>
                  <h3
                    className="font-nexa group-hover:underline"
                    style={{
                      fontSize: 'clamp(15px, 1.25vw, 24px)',
                      fontWeight: 400,
                      color: '#1863da',
                      lineHeight: '1.3',
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="font-metro text-black"
                    style={{ fontSize: 'clamp(12px, 0.83vw, 16px)', lineHeight: '1.65' }}
                  >
                    {article.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center" style={{ marginTop: 'clamp(24px, 2.6vw, 50px)' }}>
            <a
              href="#"
              className="font-metro underline"
              style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', color: '#1863da' }}
            >
              Load More Blogs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
