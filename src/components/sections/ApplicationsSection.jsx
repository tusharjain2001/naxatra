import efficientMotors from '../../assets/images/efficient-motors.png';
import scooter from '../../assets/images/scooter.jpg';

const categories = [
  { label: 'EV Scooters', active: true, desc: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.' },
  { label: 'Agricultural Equipment', active: false },
  { label: 'Power Tools', active: false },
  { label: 'Drone', active: false },
];

export default function ApplicationsSection() {
  return (
    <section
      className="relative w-full"
      style={{
        background: '#f5fafa',
        paddingTop: 'clamp(42px, 4.9vw, 94px)',
        paddingBottom: 'clamp(42px, 4.9vw, 94px)',
      }}
    >
      <div style={{ maxWidth: '1680px', margin: '0 auto', padding: '0 clamp(80px, 6.25vw, 120px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(340px, 26.46vw, 508px) minmax(620px, 820px)',
            gap: 'clamp(52px, 5.2vw, 100px)',
            alignItems: 'start',
          }}
        >
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="flex items-center gap-3" style={{ marginBottom: '11px' }}>
              <img
                src={efficientMotors}
                alt="Efficient Motors, Cleaner Future"
                style={{ height: 'clamp(24px, 2.21vw, 42.4px)', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <h2
              className="font-nexa font-medium"
              style={{ fontSize: 'clamp(34px, 2.81vw, 54px)', lineHeight: 1.45 }}
            >
              <span style={{ color: '#000' }}>From Ground to Sky, </span>
              <span style={{ color: '#1863da' }}>We Power It All</span>
            </h2>
          </div>

          {/* Right - image + categories */}
          <div>
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.14)', marginBottom: 'clamp(16px, 1.2vw, 23px)' }} />
            {/* Top: image + active category */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(260px, 20vw, 384px) minmax(280px, 1fr)',
                gap: 'clamp(32px, 3.13vw, 60px)',
                marginBottom: 0,
                alignItems: 'start',
              }}
            >
              <img
                src={scooter}
                alt="EV Scooter"
                style={{
                  width: '100%',
                  aspectRatio: '424 / 259',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div>
                <h3
                  className="font-nexa capitalize"
                  style={{
                    color: '#1863da',
                    fontSize: 'clamp(24px, 1.67vw, 32px)',
                    lineHeight: 1,
                    marginBottom: 'clamp(12px, 0.83vw, 16px)',
                  }}
                >
                  EV Scooters
                </h3>
                <p
                  className="font-metro"
                  style={{
                    color: '#000',
                    fontSize: 'clamp(12px, 0.78vw, 15px)',
                    lineHeight: 1.45,
                    maxWidth: '420px',
                  }}
                >
                  Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions,
                  our motors deliver unmatched durability and performance wherever the journey takes you.
                </p>
              </div>
            </div>

            {/* Category list with dividers */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.14)', marginTop: 'clamp(24px, 1.56vw, 30px)' }}>
              {categories.slice(1).map((cat, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: '1px solid rgba(0,0,0,0.14)',
                    padding: 'clamp(13px, 0.94vw, 18px) 0',
                  }}
                >
                  <p
                    className="font-nexa capitalize"
                    style={{
                      color: '#515151',
                      fontSize: 'clamp(16px, 1.15vw, 22px)',
                      lineHeight: 1.2,
                      opacity: 0.6,
                      textAlign: 'left',
                    }}
                  >
                    {cat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
