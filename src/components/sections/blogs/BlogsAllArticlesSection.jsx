import { useState } from 'react';
import nationalTechnologyWeekImg from '../../../assets/blogs/national technology week.png';
import evIndiaExpo2024Img from '../../../assets/blogs/ev india expo 2024.png';
import evIndiaExpo2025Img from '../../../assets/blogs/ev india expo.png';
import bharatMobilityImg from '../../../assets/blogs/Bharat Mobility Global Expo.png';
import efficiencyNewFuelImg from '../../../assets/blogs/Efficiency is the new fuel.png';
import introducingNaxatraImg from '../../../assets/blogs/Introducing Naxatra Labs.png';
import axialFluxMotorsImg from '../../../assets/blogs/Axial Flux Motors.png';
import axialFluxApplicationsImg from '../../../assets/blogs/Applications of Axial flux motors.png';
import centuryBreakthroughsImg from '../../../assets/blogs/A Century of Breakthroughs.png';
import miningEfficiencyImg from '../../../assets/blogs/Efficiency in Mining Industry.png';
import treatingEvsImg from '../../../assets/blogs/Why Treating EVs.png';
import electricCenturyBreakthroughsImg from '../../../assets/blogs/second A Century of Breakthroughs in Electric.png';
import rareEarthMotorsImg from '../../../assets/blogs/Rare-Earth Free Magnet Motors.png';

const CATEGORIES = ['All', 'Events', 'Blogs'];
const BLOG_DESC = 'Motors have become a ubiquitous part of our modern life, silently existing in almost everything that makes motion possible. However, on the flip...';

const ARTICLES = [
  {
    id: 1,
    category: 'Events',
    date: 'May 11, 2023',
    title: 'National Technology Week',
    body: 'A proud moment as we presented our innovative motor and controller technology to industry leaders and policymakers, reinforcing our commitment...',
    href: 'https://www.linkedin.com/posts/abhilashmaurya_nationaltechnologyday2023-startupindia-sustainibility-share-7064079426128363520-6C7k/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACO14VQB5vnmxkT3Aaf0vGvf3_Thtn5MaXg',
    img: nationalTechnologyWeekImg,
  },
  {
    id: 2,
    category: 'Events',
    date: '11th September 2025',
    title: 'EV India Expo 2025',
    body: 'We are showcasing our products at EV India Expo 2025, At Hall 1, Stall 54B. Do Come by if you are around!..,',
    href: '#',
    img: evIndiaExpo2025Img,
  },
  {
    id: 3,
    category: 'Events',
    date: 'Jan 21, 2025',
    title: 'Bharat Mobility Global Expo',
    body: 'A defining moment where we unveiled a groundbreaking mobility solutions, setting new benchmarks in sustainable and high-performance transportation...',
    href: 'https://www.linkedin.com/posts/abhilashmaurya_naxatralabs-bharatmobilityexpo-autoexpo2025-share-7286605063093972993-E4-B/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACO14VQB5vnmxkT3Aaf0vGvf3_Thtn5MaXg',
    img: bharatMobilityImg,
  },
  {
    id: 4,
    category: 'Events',
    date: 'Nov 21, 2024',
    title: 'EV India Expo 2024',
    body: 'A milestone event where we unveil our latest advancements in electric vehicle technology, contributing to a cleaner and more sustainable tomorrow...',
    href: 'https://www.linkedin.com/posts/abhilashmaurya_naxatralabs-cleanenergy-sustainablemobility-ugcPost-7264498234008436736--t9S/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACO14VQB5vnmxkT3Aaf0vGvf3_Thtn5MaXg',
    img: evIndiaExpo2024Img,
  },
  {
    id: 5,
    category: 'Blogs',
    date: 'October 13, 2025',
    title: 'Efficiency is the new fuel: Rethinking motors for a sustainable future',
    body: BLOG_DESC,
    href: 'https://evreporter.com/efficiency-is-the-new-fuel-rethinking-motors-for-a-sustainable-future/',
    img: efficiencyNewFuelImg,
  },
  {
    id: 6,
    category: 'Blogs',
    date: 'January 21, 2025',
    title: 'Introducing Naxatra Labs',
    body: 'When we as a fund look at climate tech investments, we’ve primarily invested in solutions around water, integrated farming, alternative green energy...',
    href: 'https://zerodha.com/z-connect/rainmatter/introducing-naxatra-labs',
    img: introducingNaxatraImg,
  },
  {
    id: 7,
    category: 'Blogs',
    date: 'April 2, 2025',
    title: 'Axial Flux Motors: Future of Electric Vehicles',
    body: 'Since the invention of electric motors in the mid 1800s, Motors are being used from industries to our homes to make our ...',
    href: 'https://naxatra-labs.medium.com/axial-flux-technology-f1ecf6c882c7',
    img: axialFluxMotorsImg,
  },
  {
    id: 8,
    category: 'Blogs',
    date: 'April 2, 2025',
    title: 'Applications of Axial flux motors',
    body: 'The very first axial flux motor was invented back in the 1830s by Nikola Tesla. In principle the axial flux motor is sam...',
    href: 'https://naxatra-labs.medium.com/applications-of-axial-flux-motors-6f39ed707a28',
    img: axialFluxApplicationsImg,
  },
  {
    id: 9,
    category: 'Blogs',
    date: 'April 2, 2025',
    title: 'A Century of Breakthroughs in Electric Motor Technology',
    body: 'Electric motors have been a critical component of modern society, enabling countless devices to function and making our ...',
    href: 'https://naxatra-labs.medium.com/a-century-of-breakthroughs-in-electric-motor-technology-298bf97c9ad4',
    img: centuryBreakthroughsImg,
  },
  {
    id: 10,
    category: 'Blogs',
    date: 'Mar 30, 2023',
    title: 'Efficiency in Mining Industry',
    body: 'Mining is a highly energy-intensive industry, and a significant portion of that energy is consumed by electric motors. E...',
    href: 'https://naxatra-labs.medium.com/efficiency-in-mining-industry-dd464b00d7e2',
    img: miningEfficiencyImg,
  },
  {
    id: 11,
    category: 'Blogs',
    date: 'Mar 30, 2023',
    title: 'Why Treating EVs Like ICE Vehicles Can Lead to Failures and Inefficiency',
    body: 'Electric vehicles (EVs) are not just an electrified version of internal combustion engine (ICE) vehicles. While they may...',
    href: 'https://naxatra-labs.medium.com/why-treating-evs-like-ice-vehicles-can-lead-to-failures-and-inefficiency-2e516c0222b8',
    img: treatingEvsImg,
  },
  {
    id: 12,
    category: 'Blogs',
    date: 'Mar 30, 2023',
    title: 'Electric Planes : Future of Aviation',
    body: 'Electric planes represent an exciting opportunity for the aviation industry to make a significant impact on the environm...',
    href: 'https://naxatra-labs.medium.com/a-century-of-breakthroughs-in-electric-motor-technology-298bf97c9ad4',
    img: electricCenturyBreakthroughsImg,
  },
  {
    id: 13,
    category: 'Blogs',
    date: 'Mar 30, 2023',
    title: 'Rare-Earth Free Magnet Motors',
    body: 'Tesla, one of the leading electric car manufacturers, has been at the forefront of technical advancements in every key c...',
    href: 'https://naxatra-labs.medium.com/rare-earth-free-magnet-motors-404e7279f30a',
    img: rareEarthMotorsImg,
  },
];

export default function BlogsAllArticlesSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [mobileArticleIndex, setMobileArticleIndex] = useState(0);
  const visibleArticles = activeCategory === 'All' ? ARTICLES : ARTICLES.filter((article) => article.category === activeCategory);
  const orderedVisibleArticles =
    activeCategory === 'All'
      ? [...visibleArticles].sort((left, right) => {
          const pinnedOrder = {
            'National Technology Week': 0,
            'Introducing Naxatra Labs': 1,
          };
          const leftRank = pinnedOrder[left.title];
          const rightRank = pinnedOrder[right.title];

          if (leftRank !== undefined || rightRank !== undefined) {
            return (leftRank ?? Number.MAX_SAFE_INTEGER) - (rightRank ?? Number.MAX_SAFE_INTEGER);
          }

          return 0;
        })
      : visibleArticles;
  const featuredArticle = orderedVisibleArticles[mobileArticleIndex] || orderedVisibleArticles[0] || ARTICLES[0];

  const selectCategory = (category) => {
    setActiveCategory(category);
    setMobileArticleIndex(0);
  };

  const showPreviousArticle = () => {
    setMobileArticleIndex((currentIndex) => (currentIndex === 0 ? visibleArticles.length - 1 : currentIndex - 1));
  };

  const showNextArticle = () => {
    setMobileArticleIndex((currentIndex) => (currentIndex === visibleArticles.length - 1 ? 0 : currentIndex + 1));
  };

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
                onClick={() => selectCategory(cat)}
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
            {activeCategory}
          </h2>

          <div className="flex items-center justify-between" style={{ gap: '10px', marginBottom: '16px' }}>
            <button
              type="button"
              aria-label="Previous article"
              onClick={showPreviousArticle}
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
                onClick={showNextArticle}
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
                onClick={() => selectCategory(cat)}
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
            {activeCategory}
          </h2>

          <div className="flex flex-col" style={{ gap: 'clamp(16px, 1.5vw, 28px)' }}>
            {orderedVisibleArticles.map((article) => (
              <article
                key={article.id}
                className="grid items-start"
                style={{
                  gridTemplateColumns: 'clamp(280px, 26vw, 450px) minmax(320px, 1fr)',
                  gap: 'clamp(20px, 1.8vw, 30px)',
                  transition: 'transform 300ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 300ms cubic-bezier(0.22, 1, 0.36, 1), background-color 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                  borderRadius: '8px',
                  padding: 'clamp(10px, 0.9vw, 18px)',
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = 'translateY(-4px)';
                  event.currentTarget.style.boxShadow = '0 16px 32px rgba(24, 99, 218, 0.10)';
                  event.currentTarget.style.backgroundColor = '#edf6ff';
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = 'translateY(0)';
                  event.currentTarget.style.boxShadow = 'none';
                  event.currentTarget.style.backgroundColor = 'transparent';
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
