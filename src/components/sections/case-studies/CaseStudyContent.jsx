import solutionMotor from '../../../assets/images/cs-solution-motor.png';
import cardLg from '../../../assets/images/cs-card-lg.svg';
import cardSm from '../../../assets/images/cs-card-sm.svg';
import cardTeal from '../../../assets/images/cs-card-teal.svg';

const SECTION_LABEL = {
  color: '#1863da',
  fontSize: 'clamp(24px, 2.6vw, 50px)',
  lineHeight: '1.24',
  fontWeight: 400,
  marginBottom: 'clamp(16px, 1.25vw, 24px)',
};

const BODY_TEXT = {
  fontSize: 'clamp(14px, 1.04vw, 20px)',
  lineHeight: '1.7',
  color: '#000',
};

export default function CaseStudyContent() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto"
        style={{ maxWidth: '1920px', padding: 'clamp(40px, 7.6vw, 146px) clamp(24px, 10.5vw, 201px)' }}
      >

        {/* ── OVERVIEW ── */}
        <div
          className="flex flex-wrap gap-8 mb-20"
          style={{ marginBottom: 'clamp(48px, 5.2vw, 100px)' }}
        >
          {/* Left label + card bg */}
          <div className="relative flex-shrink-0" style={{ width: 'clamp(160px, 23.7vw, 455px)' }}>
            <img src={cardSm} alt="" className="absolute inset-0 w-full h-full pointer-events-none" style={{ objectFit: 'fill' }} />
            <h2 className="font-nexa capitalize relative" style={SECTION_LABEL}>Overview</h2>
          </div>

          {/* Right text */}
          <div style={{ flex: '1 1 clamp(280px, 55.4vw, 1064px)' }}>
            <p className="font-metro" style={{ ...BODY_TEXT, marginBottom: '1em' }}>
              In the competitive world of power tools, performance, durability, and efficiency are critical differentiators.
              While lithium-ion batteries have revolutionized cordless tools, traditional brushed DC motors remain a
              bottleneck—hindering the full potential of modern equipment.
            </p>
            <p className="font-metro" style={BODY_TEXT}>
              This case study explores how Naxatra Labs' high-efficiency Brushless DC (BLDC) motor solution enabled a
              significant performance leap in industrial-grade power tools. By replacing conventional brushed motors with a
              smarter, more durable alternative, manufacturers are seeing measurable gains in runtime, reliability, and
              long-term cost savings.
            </p>
          </div>
        </div>

        {/* ── THE CHALLENGE ── */}
        <div
          className="flex flex-wrap gap-8"
          style={{ marginBottom: 'clamp(48px, 5.2vw, 100px)' }}
        >
          {/* Left label */}
          <div className="relative flex-shrink-0" style={{ width: 'clamp(160px, 23.7vw, 455px)' }}>
            <img src={cardSm} alt="" className="absolute inset-0 w-full h-full pointer-events-none" style={{ objectFit: 'fill' }} />
            <h2 className="font-nexa capitalize relative" style={SECTION_LABEL}>The Challenge</h2>
          </div>

          {/* Right content inside card bg */}
          <div className="relative" style={{ flex: '1 1 clamp(280px, 55.4vw, 1064px)' }}>
            <img src={cardLg} alt="" className="absolute inset-0 w-full h-full pointer-events-none" style={{ objectFit: 'fill' }} />
            <div className="relative" style={{ padding: 'clamp(20px, 2.1vw, 40px) clamp(20px, 2.1vw, 40px)' }}>
              <p className="font-metro" style={{ ...BODY_TEXT, marginBottom: '1em' }}>
                Most industrial power tools today still rely on brushed DC motors. Though cost-effective, they come with serious drawbacks:
              </p>
              <ul className="font-metro" style={{ ...BODY_TEXT, paddingLeft: '1.5em', display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
                <li>
                  <strong>Inefficiency &amp; Energy Loss:</strong>{' '}
                  Brushed motors operate through physical contact between brushes and a commutator, causing friction. This leads to energy loss as heat, with peak efficiencies typically limited to ~75–80%.
                </li>
                <li>
                  <strong>Shorter Runtime:</strong>{' '}
                  Energy waste reduces battery life, limiting cordless tool performance in high-demand environments.
                </li>
                <li>
                  <strong>Wear &amp; Maintenance:</strong>{' '}
                  Constant friction causes brush and commutator wear, increasing maintenance frequency and downtime.
                </li>
                <li>
                  <strong>Noise &amp; Vibration:</strong>{' '}
                  Mechanical contact creates excessive operational noise and vibrations—problematic in tools used for 8+ hours a day.
                </li>
                <li>
                  <strong>Safety Concerns:</strong>{' '}
                  Electrical arcing at the contact points makes brushed motors unsuitable for hazardous environments unless heavily certified.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── OUR SOLUTION ── */}
        <div className="flex flex-wrap gap-8">
          {/* Left label */}
          <div className="relative flex-shrink-0" style={{ width: 'clamp(160px, 23.7vw, 455px)' }}>
            <img src={cardSm} alt="" className="absolute inset-0 w-full h-full pointer-events-none" style={{ objectFit: 'fill' }} />
            <h2 className="font-nexa capitalize relative" style={SECTION_LABEL}>Our Solution</h2>
          </div>

          {/* Right: dark card with image + text */}
          <div
            className="relative overflow-hidden"
            style={{
              flex: '1 1 clamp(280px, 55.4vw, 1064px)',
              borderRadius: '4px',
            }}
          >
            <img src={cardTeal} alt="" className="absolute inset-0 w-full h-full pointer-events-none" style={{ objectFit: 'fill' }} />
            <div
              className="relative flex flex-wrap gap-6"
              style={{ padding: 'clamp(20px, 2.1vw, 40px)', background: 'rgba(0,0,0,0.75)', borderRadius: '4px' }}
            >
              {/* Image */}
              <div className="flex-shrink-0" style={{ width: 'clamp(200px, 28.4vw, 545px)' }}>
                <img
                  src={solutionMotor}
                  alt="Naxatra Labs BLDC Motor Solution"
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              {/* Text */}
              <div style={{ flex: '1 1 clamp(200px, 25.5vw, 490px)' }}>
                <p className="font-metro text-white" style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.7' }}>
                  <strong>Naxatra Labs introduced a custom-engineered Brushless DC (BLDC) motor</strong>{' '}
                  specifically designed for power tool applications. The goal: eliminate the mechanical
                  limitations of brushed motors while unlocking higher efficiency and smarter control.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
