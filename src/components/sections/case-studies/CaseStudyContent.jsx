import solutionMotor from '../../../assets/images/cs-solution-motor.png';
import cardLg from '../../../assets/images/cs-card-lg.svg';
import cardSm from '../../../assets/images/cs-card-sm.svg';

const SECTION_LABEL = {
  color: '#1863da',
  fontSize: 'clamp(20px, 1.7vw, 32px)',
  lineHeight: '1.24',
  fontWeight: 600,
  margin: 0,
};

const BODY_TEXT = {
  fontSize: 'clamp(11px, 0.83vw, 16px)',
  lineHeight: '1.65',
  color: '#000',
};

const rowStyle = {
  display: 'grid',
  gridTemplateColumns: 'clamp(120px, 14vw, 260px) minmax(280px, 1fr)',
  gap: 'clamp(16px, 2vw, 38px)',
  alignItems: 'start',
};

const cardInnerStyle = {
  position: 'relative',
  padding: 'clamp(18px, 1.9vw, 36px) clamp(22px, 2.5vw, 48px)',
};

export default function CaseStudyContent() {
  return (
    <section className="w-full bg-white">
      <div className="md:hidden" style={{ padding: '24px 10px 36px' }}>
        <div className="mx-auto" style={{ maxWidth: '460px' }}>
          <div style={{ marginBottom: '26px' }}>
            <h2
              className="font-nexa font-semibold capitalize text-center"
              style={{ color: '#1863da', fontSize: '20px', lineHeight: '1.2', fontWeight: 400, margin: '0 0 10px' }}
            >
              Overview
            </h2>
            <div className="relative mx-auto" style={{ minHeight: '126px' }}>
              <img src={cardSm} alt="" className="absolute inset-0 w-full h-full pointer-events-none" style={{ objectFit: 'fill' }} />
              <div style={{ position: 'relative', padding: '18px 16px' }}>
                <p className="font-metro text-center" style={{ fontSize: '10px', lineHeight: '1.55', color: '#000', marginBottom: '0.9em' }}>
                  In the competitive world of power tools, performance,
                  durability, and efficiency are critical differentiators. While
                  lithium-ion batteries have revolutionized cordless tools,
                  traditional brushed DC motors remain a bottleneck - hindering
                  the full potential of modern equipment.
                </p>
                <p className="font-metro text-center" style={{ fontSize: '10px', lineHeight: '1.55', color: '#000', margin: 0 }}>
                  This case study explores how Naxatra Labs' high-efficiency
                  Brushless DC (BLDC) motor solution enabled a significant
                  performance leap in industrial-grade power tools. By
                  replacing conventional brushed motors with a smarter, more
                  durable alternative, manufacturers are seeing measurable
                  gains in runtime, reliability, and long-term cost savings.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h2
              className="font-nexa font-semibold capitalize text-center"
              style={{ color: '#1863da', fontSize: '20px', lineHeight: '1.2', fontWeight: 400, margin: '0 0 10px' }}
            >
              The Challenge
            </h2>
            <div className="relative mx-auto" style={{ minHeight: '212px' }}>
              <img src={cardLg} alt="" className="absolute inset-0 w-full h-full pointer-events-none" style={{ objectFit: 'fill' }} />
              <div style={{ position: 'relative', padding: '16px 12px 18px' }}>
                <p className="font-metro text-center" style={{ fontSize: '10px', lineHeight: '1.55', color: '#000', marginBottom: '0.8em' }}>
                  Most industrial power tools today still rely on brushed DC motors. Though
                  cost-effective, they come with serious drawbacks:
                </p>
                <ul className="font-metro" style={{ fontSize: '10px', lineHeight: '1.45', color: '#000', paddingLeft: '1.1em', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45em' }}>
                  <li>
                    <strong>Inefficiency &amp; Energy Loss:</strong> Brushed motors operate through physical
                    contact between brushes and a commutator, causing friction. This leads
                    to energy loss as heat, with peak efficiencies typically limited to ~75-80%.
                  </li>
                  <li>
                    <strong>Shorter Runtime:</strong> Energy waste reduces battery life, limiting cordless
                    tool performance in high-demand environments.
                  </li>
                  <li>
                    <strong>Wear &amp; Maintenance:</strong> Constant friction causes brush and commutator
                    wear, increasing maintenance frequency and downtime.
                  </li>
                  <li>
                    <strong>Noise &amp; Vibration:</strong> Mechanical contact creates excessive operational
                    noise and vibrations-problematic in tools used for 8+ hours a day.
                  </li>
                  <li>
                    <strong>Safety Concerns:</strong> Electrical arcing at the contact points makes brushed
                    motors unsuitable for hazardous environments unless heavily certified.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2
              className="font-nexa font-semibold capitalize text-center"
              style={{ color: '#1863da', fontSize: '20px', lineHeight: '1.2', fontWeight: 400, margin: '0 0 10px' }}
            >
              Our Solution
            </h2>
            <div className="relative overflow-hidden" style={{ borderRadius: '4px' }}>
              <div
                className="relative flex flex-col"
                style={{ padding: '14px', background: '#000', borderRadius: '4px', gap: '12px' }}
              >
                <div style={{ width: '100%' }}>
                  <img
                    src={solutionMotor}
                    alt="Naxatra Labs BLDC Motor Solution"
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
                <div>
                  <p className="font-metro text-white text-center" style={{ fontSize: '10px', lineHeight: '1.6', margin: 0 }}>
                    <strong>Naxatra Labs introduced a custom-engineered Brushless DC (BLDC) motor</strong>{' '}
                    specifically designed for power tool applications. The goal: eliminate the
                    mechanical limitations of brushed motors while unlocking higher efficiency
                    and smarter control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto hidden md:block"
        style={{ maxWidth: 'min(1600px, 83vw)', padding: 'clamp(40px, 5vw, 96px) clamp(20px, 4.2vw, 80px)' }}
      >
        <div style={{ ...rowStyle, marginBottom: 'clamp(40px, 4.7vw, 90px)' }}>
          <h2 className="font-nexa font-semibold capitalize" style={SECTION_LABEL}>Overview</h2>

          <div className="relative" style={{ minHeight: 'clamp(150px, 11.7vw, 224px)' }}>
            <img src={cardSm} alt="" className="absolute inset-0 w-full h-full pointer-events-none" style={{ objectFit: 'fill' }} />
            <div style={cardInnerStyle}>
              <p className="font-metro" style={{ ...BODY_TEXT, marginBottom: '1em' }}>
                In the competitive world of power tools, performance, durability, and efficiency are critical differentiators.
                While lithium-ion batteries have revolutionized cordless tools, traditional brushed DC motors remain a
                bottleneck-hindering the full potential of modern equipment.
              </p>
              <p className="font-metro" style={BODY_TEXT}>
                This case study explores how Naxatra Labs' high-efficiency Brushless DC (BLDC) motor solution enabled a
                significant performance leap in industrial-grade power tools. By replacing conventional brushed motors with a
                smarter, more durable alternative, manufacturers are seeing measurable gains in runtime, reliability, and
                long-term cost savings.
              </p>
            </div>
          </div>
        </div>

        <div style={{ ...rowStyle, marginBottom: 'clamp(48px, 5.2vw, 100px)' }}>
          <h2 className="font-nexa capitalize font-semibold" style={SECTION_LABEL}>The Challenge</h2>

          <div className="relative" style={{ minHeight: 'clamp(250px, 22.7vw, 436px)' }}>
            <img src={cardLg} alt="" className="absolute inset-0 w-full h-full pointer-events-none" style={{ objectFit: 'fill' }} />
            <div style={cardInnerStyle}>
              <p className="font-metro" style={{ ...BODY_TEXT, marginBottom: '1em' }}>
                Most industrial power tools today still rely on brushed DC motors. Though cost-effective, they come with
                serious drawbacks:
              </p>
              <ul className="font-metro" style={{ ...BODY_TEXT, paddingLeft: '1.5em', display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
                <li>
                  <strong>Inefficiency &amp; Energy Loss:</strong>{' '}
                  Brushed motors operate through physical contact between brushes and a commutator, causing friction. This
                  leads to energy loss as heat, with peak efficiencies typically limited to ~75-80%.
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
                  Mechanical contact creates excessive operational noise and vibrations-problematic in tools used for 8+
                  hours a day.
                </li>
                <li>
                  <strong>Safety Concerns:</strong>{' '}
                  Electrical arcing at the contact points makes brushed motors unsuitable for hazardous environments unless
                  heavily certified.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div style={rowStyle}>
          <h2 className="font-nexa font-semibold capitalize" style={SECTION_LABEL}>Our Solution</h2>

          <div
            className="relative overflow-hidden"
            style={{ borderRadius: '4px' }}
          >
            <div
              className="relative flex gap-6"
              style={{ padding: 'clamp(20px, 2.1vw, 40px)', background: '#000', borderRadius: '4px', flexWrap: 'nowrap', alignItems: 'flex-start' }}
            >
              <div className="flex-shrink-0" style={{ width: '55%' }}>
                <img
                  src={solutionMotor}
                  alt="Naxatra Labs BLDC Motor Solution"
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <div style={{ flex: '1 1 0', minWidth: 0 }}>
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
