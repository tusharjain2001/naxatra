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
      style={{ background: '#f5fafa', paddingTop: '94px', paddingBottom: '94px' }}
    >
      <div style={{ maxWidth: '1920px', margin: '0 auto', padding: '0 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '508px 1fr', gap: '137px' }}>
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="flex items-center gap-3" style={{ marginBottom: '11px' }}>
              <img
                src={efficientMotors}
                alt="Efficient Motors, Cleaner Future"
                style={{ height: '42.4px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <h2 className="font-nexa font-medium" style={{ fontSize: '54px', lineHeight: '78.5px' }}>
              <span style={{ color: '#000' }}>From Ground to Sky, </span>
              <span style={{ color: '#1863da' }}>We Power It All</span>
            </h2>
          </div>

          {/* Right - image + categories */}
          <div>
            {/* Top: image + active category */}
            <div style={{ display: 'grid', gridTemplateColumns: '424px 1fr', gap: '56px', marginBottom: '0' }}>
              <img
                src={scooter}
                alt="EV Scooter"
                style={{ width: '424px', height: '259px', objectFit: 'cover' }}
              />
              <div>
                <h3
                  className="font-nexa capitalize"
                  style={{ color: '#1863da', fontSize: '36px', lineHeight: '35.8px', marginBottom: '16px' }}
                >
                  EV Scooters
                </h3>
                <p
                  className="font-metro"
                  style={{ color: '#000', fontSize: '19.5px', lineHeight: '30.4px' }}
                >
                  Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions,
                  our motors deliver unmatched durability and performance wherever the journey takes you.
                </p>
              </div>
            </div>

            {/* Category list with dividers */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.2)', marginTop: '20px' }}>
              {categories.slice(1).map((cat, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: '1px solid rgba(0,0,0,0.2)',
                    padding: '20px 0',
                  }}
                >
                  <p
                    className="font-nexa capitalize"
                    style={{ color: '#515151', fontSize: '24px', lineHeight: '35.8px', opacity: 0.6 }}
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
