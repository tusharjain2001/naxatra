import { useState } from 'react';
import { Link } from 'react-router-dom';
import downloadSpecSheet from '../../../assets/images/download-spec-sheet.png';
import viewDetails from '../../../assets/images/view-details.png';
import { PRODUCTS, APPLICATIONS } from '../../../data/products';

const CATEGORIES = [
  { id: 'scooters', label: 'Scooters' },
  { id: 'bikes', label: 'Bikes' },
  { id: 'sweepers', label: 'Sweepers' },
  { id: 'agribot', label: 'Agri-bot' },
  { id: 'loader', label: 'Loader Vehicle' },
  { id: 'weeder', label: 'Power Weeder' },
  { id: 'forklift', label: 'Forklift' },
  { id: 'erickshaw', label: 'E-Rickshaw' },
  { id: 'tiller', label: 'Electric Tiller' },
];

const APP_ICON_MAP = Object.fromEntries(APPLICATIONS.map((a) => [a.id, a.icon]));

function ProductCard({ product }) {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #f4fbfd 0%, #ffffff 100%)',
        border: '1px solid rgba(77,214,196,0.18)',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 10px 30px rgba(24, 99, 218, 0.05)',
        minHeight: '100%',
      }}
    >
      {/* Motor image */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          paddingTop: 'clamp(28px, 3vw, 56px)',
          paddingInline: 'clamp(24px, 2.6vw, 44px)',
          paddingBottom: 'clamp(12px, 1.2vw, 20px)',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: 'clamp(108px, 10.5vw, 180px)',
            height: 'clamp(82px, 8.4vw, 138px)',
            objectFit: 'contain',
            transform: 'rotate(180deg) scaleY(-1)',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: '0 clamp(24px, 2.6vw, 44px) clamp(24px, 2.8vw, 40px)',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h3
          className="font-nexa capitalize"
          style={{
            color: '#1863da',
            fontSize: 'clamp(22px, 2.1vw, 40px)',
            lineHeight: '1.12',
            marginBottom: '10px',
          }}
        >
          {product.name}
        </h3>
        <p
          className="font-metro"
          style={{
            color: '#1f1f1f',
            fontSize: 'clamp(13px, 1vw, 19px)',
            lineHeight: '1.6',
            marginBottom: '24px',
            maxWidth: '30ch',
            flex: 1,
          }}
        >
          {product.description}
        </p>

        <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)', marginBottom: '16px' }} />

        <div style={{ display: 'flex', gap: '28px', marginBottom: 'clamp(18px, 1.5vw, 24px)' }}>
          <div>
            <p className="font-metro" style={{ color: '#1863da', fontSize: 'clamp(18px, 1.25vw, 24px)', fontWeight: 500, marginBottom: '4px' }}>
              {product.heroVoltage}
            </p>
            <p className="font-metro" style={{ color: '#000', fontSize: 'clamp(12px, 0.83vw, 16px)' }}>Rated Voltage (DC)</p>
          </div>
          <div>
            <p className="font-metro" style={{ color: '#1863da', fontSize: 'clamp(18px, 1.25vw, 24px)', fontWeight: 500, marginBottom: '4px' }}>
              {product.heroTorque}
            </p>
            <p className="font-metro" style={{ color: '#000', fontSize: 'clamp(12px, 0.83vw, 16px)' }}>Peak Torque</p>
          </div>
        </div>

        <Link
          to={`/products/${product.id}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px',
            textDecoration: 'none',
            width: '100%',
          }}
          aria-label={`View details for ${product.name}`}
        >
          <img
            src={viewDetails}
            alt="View Details"
            className="block"
            style={{ width: '100%', height: 'auto' }}
          />
        </Link>

        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            width: '100%',
          }}
          type="button"
          aria-label={`Download spec sheet for ${product.name}`}
        >
          <img
            src={downloadSpecSheet}
            alt="Download Spec Sheet"
            className="block"
            style={{ width: '100%', height: 'auto' }}
          />
        </button>
      </div>
    </div>
  );
}

function AllProductsView() {
  const rows = [PRODUCTS.slice(0, 3), PRODUCTS.slice(3, 6), PRODUCTS.slice(6)];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 1.67vw, 32px)' }}>
      {rows.map((row, ri) => (
        <div
          key={ri}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(14px, 1.67vw, 32px)' }}
          className="max-[980px]:grid-cols-2 max-[560px]:grid-cols-1"
        >
          {row.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      ))}
    </div>
  );
}

function ApplicationsView() {
  const [activeCategory, setActiveCategory] = useState('scooters');
  const catProducts = PRODUCTS.filter((p) => p.applications.includes(activeCategory));
  const catLabel = CATEGORIES.find((c) => c.id === activeCategory)?.label ?? activeCategory;

  return (
    <div style={{ display: 'flex', gap: 'clamp(16px, 1.67vw, 32px)', alignItems: 'flex-start' }} className="max-[720px]:flex-col">
      {/* Sidebar */}
      <div
        style={{ flexShrink: 0, width: 'clamp(180px, 22.9vw, 440px)', border: '0.5px solid #4dd6c4', borderRadius: '8px', overflow: 'hidden' }}
        className="max-[720px]:w-full"
      >
        {CATEGORIES.map((cat, idx) => {
          const iconImg = APP_ICON_MAP[cat.id];
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(10px, 1.25vw, 24px)',
                padding: 'clamp(10px, 1.04vw, 20px) clamp(12px, 1.25vw, 24px)',
                background: activeCategory === cat.id ? 'rgba(77,214,196,0.12)' : '#f8fefd',
                borderBottom: idx < CATEGORIES.length - 1 ? '0.5px solid rgba(77,214,196,0.4)' : 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  width: 'clamp(40px, 3.96vw, 76px)', height: 'clamp(40px, 3.96vw, 76px)',
                  background: '#fff', borderRadius: '4px', flexShrink: 0,
                  border: activeCategory === cat.id ? 'none' : '0.5px solid #9d9d9d',
                  overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                {iconImg && (
                  <img src={iconImg} alt={cat.label} style={{ width: '70%', height: '70%', objectFit: 'contain' }} />
                )}
              </div>
              <span
                className="font-nexa capitalize"
                style={{ fontSize: 'clamp(13px, 1.25vw, 24px)', lineHeight: '1.5', color: activeCategory === cat.id ? '#1863da' : '#515151' }}
              >
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h2
          className="font-nexa"
          style={{ fontSize: 'clamp(18px, 1.67vw, 32px)', lineHeight: '1.25', color: '#000', marginBottom: 'clamp(16px, 1.67vw, 32px)' }}
        >
          Applications of <span style={{ color: '#1863da' }}>{catLabel}</span>
        </h2>

        {catProducts.length === 0 ? (
          <p className="font-metro" style={{ color: '#515151', fontSize: 'clamp(13px, 1vw, 20px)' }}>
            No products assigned to this category yet.
          </p>
        ) : (
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(14px, 1.67vw, 32px)' }}
            className="max-[560px]:grid-cols-1"
          >
            {catProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductListingSection() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="w-full" style={{ background: '#fff', paddingBottom: 'clamp(48px, 5.2vw, 100px)' }}>
      {/* Tab bar */}
      <div
        style={{
          display: 'flex',
          gap: 'clamp(12px, 1.25vw, 24px)',
          justifyContent: 'center',
          paddingTop: 'clamp(32px, 6.7vw, 128px)',
          paddingBottom: 'clamp(20px, 2.5vw, 48px)',
          maxWidth: '1500px',
          margin: '0 auto',
        }}
      >
        {[{ key: 'all', label: 'All Products' }, { key: 'applications', label: 'Applications' }].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px',
              background: 'none', border: 'none', cursor: 'pointer',
            }}
          >
            <span
              className="font-nexa capitalize"
              style={{ fontSize: 'clamp(13px, 1.25vw, 24px)', lineHeight: '1.5', color: activeTab === tab.key ? '#1863da' : '#b3b3b3' }}
            >
              {tab.label}
            </span>
            <div style={{ width: '100%', height: '1.5px', background: activeTab === tab.key ? '#1863da' : '#d9d9d9' }} />
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{ maxWidth: '1530px', margin: '0 auto', padding: '0 clamp(14px, 2.5vw, 48px)' }}>
        {activeTab === 'all' ? <AllProductsView /> : <ApplicationsView />}
      </div>
    </section>
  );
}
