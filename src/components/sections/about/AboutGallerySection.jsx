import j1 from '../../../assets/images/journey-1.jpg';
import j2 from '../../../assets/images/journey-2.jpg';
import j3 from '../../../assets/images/journey-3.jpg';
import j4 from '../../../assets/images/journey-4.jpg';
import j5 from '../../../assets/images/journey-5.jpg';
import j6 from '../../../assets/images/journey-6.jpg';
import j7 from '../../../assets/images/journey-7.jpg';
import j8 from '../../../assets/images/journey-8.jpg';
import j9 from '../../../assets/images/journey-9.jpg';
import j10 from '../../../assets/images/journey-10.jpg';
import j11 from '../../../assets/images/journey-11.jpg';
import j12 from '../../../assets/images/journey-12.jpg';
import j13 from '../../../assets/images/journey-13.jpg';
import j14 from '../../../assets/images/journey-14.jpg';

const PHOTOS = [j1, j2, j3, j4, j5, j6, j7, j8, j9, j10, j11, j12, j13, j14];

export default function AboutGallerySection() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto"
        style={{ maxWidth: '1920px', padding: 'clamp(48px, 4.7vw, 91px) clamp(24px, 9.9vw, 191px)' }}
      >
        {/* Heading */}
        <h2
          className="font-nexa text-black"
          style={{
            fontSize: 'clamp(28px, 3.54vw, 68px)',
            lineHeight: '1.15',
            fontWeight: 400,
            marginBottom: 'clamp(24px, 2.6vw, 50px)',
          }}
        >
          Made In India,{' '}
          <span style={{ color: '#1863da' }}>Moving The World</span>
        </h2>

        {/* Masonry-style grid */}
        <div
          style={{
            columns: 'clamp(2, 4, 4)',
            columnCount: 4,
            gap: 'clamp(8px, 0.83vw, 16px)',
          }}
        >
          {PHOTOS.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden"
              style={{
                breakInside: 'avoid',
                marginBottom: 'clamp(8px, 0.83vw, 16px)',
                borderRadius: 'clamp(4px, 0.42vw, 8px)',
              }}
            >
              <img
                src={src}
                alt={`Naxatra Labs — ${i + 1}`}
                className="w-full h-auto block hover:scale-105 transition-transform duration-500"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
