import madeOne from '../../../assets/images/madeone.png';
import madeTwo from '../../../assets/images/madetwo.png';
import madeThree from '../../../assets/images/madethree.png';
import madeFour from '../../../assets/images/madefour.png';
import madeFive from '../../../assets/images/madefive.png';
import madeSix from '../../../assets/images/madesix.png';
import madeSeven from '../../../assets/images/madeseven.png';
import madeEight from '../../../assets/images/madeeight.png';
import madeNine from '../../../assets/images/madenine.png';

const PHOTOS = [
  { src: madeOne, alt: 'Naxatra Labs event', className: 'md:col-span-1 md:row-span-1' },
  { src: madeTwo, alt: 'Naxatra Labs Pitchfest', className: 'md:col-span-1 md:row-span-1' },
  { src: madeThree, alt: 'Naxatra Labs demo', className: 'md:col-span-1 md:row-span-2' },
  { src: madeFour, alt: 'Naxatra Labs conference', className: 'md:col-span-1 md:row-span-1' },
  { src: madeFive, alt: 'Naxatra Labs expo', className: 'md:col-span-1 md:row-span-1' },
  { src: madeSix, alt: 'Naxatra Labs team meeting', className: 'md:col-span-2 md:row-span-1' },
  { src: madeSeven, alt: 'Naxatra Labs group photo', className: 'md:col-span-1 md:row-span-1' },
  { src: madeEight, alt: 'Naxatra Labs workshop', className: 'md:col-span-1 md:row-span-2' },
  { src: madeNine, alt: 'Naxatra Labs showcase', className: 'md:col-span-2 md:row-span-2' },
];

const MOBILE_PHOTOS = [
  { src: madeOne, alt: 'Naxatra Labs event', className: 'col-span-1 row-span-1' },
  { src: madeTwo, alt: 'Naxatra Labs Pitchfest', className: 'col-span-1 row-span-1' },
  { src: madeThree, alt: 'Naxatra Labs demo', className: 'col-span-1 row-span-2' },
  { src: madeFour, alt: 'Naxatra Labs conference', className: 'col-span-1 row-span-1' },
  { src: madeFive, alt: 'Naxatra Labs expo', className: 'col-span-1 row-span-1' },
  { src: madeSix, alt: 'Naxatra Labs team meeting', className: 'col-span-2 row-span-1' },
  { src: madeSeven, alt: 'Naxatra Labs group photo', className: 'col-span-1 row-span-1' },
  { src: madeEight, alt: 'Naxatra Labs workshop', className: 'col-span-1 row-span-2' },
  { src: madeNine, alt: 'Naxatra Labs showcase', className: 'col-span-2 row-span-2' },
];

export default function AboutGallerySection() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto"
        style={{
          maxWidth: 'clamp(700px, 63vw, 1210px)',
          padding: 'clamp(42px, 5.8vw, 92px) clamp(24px, 4vw, 64px)',
        }}
      >
        <h2
          className="font-nexa text-center text-black"
          style={{
            fontSize: 'clamp(22px, 2vw, 38px)',
            lineHeight: 1.15,
            fontWeight: 400,
            margin: '0 0 clamp(22px, 2.5vw, 40px)',
          }}
        >
          Made In India, <span style={{ color: '#1863da' }}>Moving The World</span>
        </h2>

        <div
          className="grid grid-cols-3 md:hidden"
          style={{
            gap: '6px',
            gridAutoRows: '70px',
          }}
        >
          {MOBILE_PHOTOS.map((photo) => (
            <div key={photo.src} className={`overflow-hidden rounded-[2px] ${photo.className}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="block h-full w-full"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        <div
          className="hidden md:grid md:grid-cols-3"
          style={{
            gap: 'clamp(10px, 1vw, 18px)',
            gridAutoRows: 'clamp(76px, 8.9vw, 171px)',
          }}
        >
          {PHOTOS.map((photo) => (
            <div key={photo.src} className={`overflow-hidden ${photo.className}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="block h-full w-full"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
