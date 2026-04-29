import { useState } from 'react';
import { Link } from 'react-router-dom';
import downloadSpecSheet from '../../../assets/images/download-spec-sheet.svg';
import viewDetails from '../../../assets/images/view-details.svg';
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
      className="max-[560px]:rounded-[4px]"
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
        className="max-[560px]:!justify-start max-[560px]:!pt-3 max-[560px]:!px-3 max-[560px]:!pb-1"
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          paddingTop: 'clamp(16px, 1.8vw, 28px)',
          paddingInline: 'clamp(16px, 1.8vw, 28px)',
          paddingBottom: 'clamp(6px, 0.8vw, 12px)',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-[560px]:!w-[74px] max-[560px]:!h-[56px]"
          style={{
            width: 'clamp(82px, 7vw, 128px)',
            height: 'clamp(64px, 5.8vw, 102px)',
            objectFit: 'contain',
            transform: 'rotate(180deg) scaleY(-1)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="max-[560px]:!px-3 max-[560px]:!pb-3"
        style={{
          padding: '0 clamp(16px, 1.8vw, 28px) clamp(16px, 1.7vw, 24px)',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h3
          className="font-nexa capitalize max-[560px]:!text-[11px] max-[560px]:!leading-[1.15] max-[560px]:!mb-1"
          style={{
            color: '#1863da',
            fontSize: 'clamp(18px, 1.6vw, 28px)',
            lineHeight: '1.12',
            marginBottom: '6px',
          }}
        >
          {product.name}
        </h3>
        <p
          className="font-metro max-[560px]:!text-[6px] max-[560px]:!leading-[1.35] max-[560px]:!mb-2"
          style={{
            color: '#1f1f1f',
            fontSize: 'clamp(12px, 0.9vw, 16px)',
            lineHeight: '1.45',
            marginBottom: '14px',
            maxWidth: '30ch',
            flex: 1,
          }}
        >
          {product.description}
        </p>

        <div className="max-[560px]:!mb-2" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)', marginBottom: '10px' }} />

        <div className="max-[560px]:!gap-3 max-[560px]:!mb-2" style={{ display: 'flex', gap: '18px', marginBottom: 'clamp(10px, 1vw, 16px)' }}>
          <div>
            <p className="font-metro max-[560px]:!text-[7px]" style={{ color: '#1863da', fontSize: 'clamp(16px, 1.1vw, 21px)', fontWeight: 500, marginBottom: '2px' }}>
              {product.heroVoltage}
            </p>
            <p className="font-metro max-[560px]:!text-[5px] max-[560px]:!leading-[1.15]" style={{ color: '#000', fontSize: 'clamp(11px, 0.72vw, 14px)' }}>Rated Voltage (DC)</p>
          </div>
          <div>
            <p className="font-metro max-[560px]:!text-[7px]" style={{ color: '#1863da', fontSize: 'clamp(16px, 1.1vw, 21px)', fontWeight: 500, marginBottom: '2px' }}>
              {product.heroTorque}
            </p>
            <p className="font-metro max-[560px]:!text-[5px] max-[560px]:!leading-[1.15]" style={{ color: '#000', fontSize: 'clamp(11px, 0.72vw, 14px)' }}>Peak Torque</p>
          </div>
        </div>

        <Link
          to={`/products/${product.id}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '6px',
            textDecoration: 'none',
            width: '100%',
          }}
          aria-label={`View details for ${product.name}`}
        >
          <img
            src={viewDetails}
            alt="View Details"
            className="block max-[560px]:!w-full"
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
            className="block max-[560px]:!w-full"
            style={{ width: '100%', height: 'auto' }}
          />
        </button>
      </div>
    </div>
  );
}

function AllProductsView() {
  return (
    <div
      className="grid grid-cols-3 max-[980px]:!grid-cols-2 max-[560px]:!grid-cols-2"
      style={{
        justifyContent: 'center',
        gap: 'clamp(14px, 1.67vw, 32px)',
      }}
    >
      {PRODUCTS.map((product, index) => (
        <div
          key={product.id}
          className={
            index === PRODUCTS.length - 1 && PRODUCTS.length % 2 === 1
              ? 'max-[560px]:col-span-2 max-[560px]:mx-auto max-[560px]:w-[44%]'
              : ''
          }
        >
          <ProductCard product={product} />
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
    <div style={{ display: 'flex', gap: 'clamp(14px, 1.25vw, 24px)', alignItems: 'flex-start' }} className="max-[720px]:flex-col">
      {/* Sidebar */}
      <div
        style={{ flexShrink: 0, width: 'clamp(180px, 22.9vw, 420px)', border: '0.5px solid #4dd6c4', borderRadius: '8px', overflow: 'hidden' }}
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
                gap: 'clamp(8px, 1vw, 18px)',
                padding: 'clamp(8px, 0.85vw, 16px) clamp(10px, 1.05vw, 20px)',
                background: activeCategory === cat.id ? 'rgba(77,214,196,0.12)' : '#f8fefd',
                borderBottom: idx < CATEGORIES.length - 1 ? '0.5px solid rgba(77,214,196,0.4)' : 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  width: 'clamp(36px, 3.4vw, 64px)', height: 'clamp(36px, 3.4vw, 64px)',
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
                style={{ fontSize: 'clamp(12px, 1.1vw, 21px)', lineHeight: '1.35', color: activeCategory === cat.id ? '#1863da' : '#515151' }}
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
          style={{ fontSize: 'clamp(17px, 1.45vw, 28px)', lineHeight: '1.2', color: '#000', marginBottom: 'clamp(12px, 1.25vw, 24px)' }}
        >
          Applications of <span style={{ color: '#1863da' }}>{catLabel}</span>
        </h2>

        {catProducts.length === 0 ? (
          <p className="font-metro" style={{ color: '#515151', fontSize: 'clamp(13px, 1vw, 20px)' }}>
            No products assigned to this category yet.
          </p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(280px, 400px))',
              justifyContent: 'center',
              gap: 'clamp(12px, 1.25vw, 24px)',
            }}
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
    <section className="w-full" style={{ background: '#fff', paddingBottom: 'clamp(40px, 4vw, 72px)' }}>
      {/* Tab bar */}
      <div
        className="max-[560px]:!px-4 max-[560px]:!pt-2 max-[560px]:!pb-4"
        style={{
          display: 'flex',
          gap: 'clamp(12px, 1.25vw, 24px)',
          justifyContent: 'center',
          paddingTop: 'clamp(24px, 4.5vw, 84px)',
          paddingBottom: 'clamp(16px, 2vw, 32px)',
          maxWidth: '1500px',
          margin: '0 auto',
        }}
      >
        {[{ key: 'all', label: 'All Products' }, { key: 'applications', label: 'Applications' }].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="max-[560px]:!gap-1.5"
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px',
              background: 'none', border: 'none', cursor: 'pointer',
            }}
          >
            <span
              className="font-nexa capitalize max-[560px]:!text-[11px]"
              style={{ fontSize: 'clamp(13px, 1.25vw, 24px)', lineHeight: '1.5', color: activeTab === tab.key ? '#1863da' : '#b3b3b3' }}
            >
              {tab.label}
            </span>
            <div style={{ width: '100%', height: '1.5px', background: activeTab === tab.key ? '#1863da' : '#d9d9d9' }} />
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="max-[560px]:!px-4" style={{ maxWidth: '1530px', margin: '0 auto', padding: '0 clamp(14px, 2.5vw, 48px)' }}>
        {activeTab === 'all' ? <AllProductsView /> : <ApplicationsView />}
      </div>
    </section>
  );
}
