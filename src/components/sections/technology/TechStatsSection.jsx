import cardShape from '../../../assets/images/tech-stat-card-1.svg';

const stats = [
  {
    value: '10%',
    label: 'Higher Average Efficiency',
    description:
      'Our motors offers up to 10% greater efficiency compared to existing market leaders. This translates to optimized energy usage and superior performance in real-world applications.',
  },
  {
    value: '8%',
    label: 'Increased Operating Range',
    description:
      'Better efficiency directly results in an extended operating range, allowing EVs to travel 5-8% farther on a single charge.',
  },
  {
    value: '20%',
    label: 'Lighter for Better Energy Utilization',
    description: '20% Weight Reduction Reduced Material Consumption.',
  },
  {
    value: '2x',
    label: 'Power Density for Maximum Performance',
    description:
      'Our motors offers twice the power density, delivering higher performance in a compact, energy-efficient design.',
  },
];

export default function TechStatsSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ minHeight: 'clamp(800px, 90.3vw, 1734px)' }}>
      {/* Section heading on left */}
      <div
        className="absolute"
        style={{
          left: 'clamp(24px, 9.9vw, 191px)',
          top: 'clamp(60px, 7.9vw, 152px)',
          maxWidth: 'clamp(240px, 36vw, 691px)',
        }}
      >
        <h2
          className="font-nexa capitalize text-white"
          style={{ fontSize: 'clamp(28px, 3.54vw, 68px)', lineHeight: '1.15', fontWeight: 400 }}
        >
          {'Drive Smart, Safe, and '}
          <span style={{ color: '#1863da' }}>Your Way</span>
        </h2>
      </div>

      {/* Stats cards on right */}
      <div
        className="absolute flex flex-col"
        style={{
          left: 'clamp(200px, 50vw, 960px)',
          top: 'clamp(60px, 9.5vw, 183px)',
          right: 'clamp(24px, 6.8vw, 130px)',
          gap: 'clamp(24px, 7.8vw, 150px)',
        }}
      >
        {stats.map((stat) => (
          <div key={stat.value} className="relative">
            {/* Card background shape */}
            <img
              src={cardShape}
              alt=""
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ objectFit: 'fill' }}
            />
            <div
              className="relative flex flex-col"
              style={{ padding: 'clamp(20px, 5.5vw, 106px) clamp(20px, 2.6vw, 50px) clamp(20px, 2.6vw, 50px)' }}
            >
              {/* Large stat number */}
              <p
                className="font-nexa capitalize"
                style={{ color: '#4dd6c4', fontSize: 'clamp(36px, 4.17vw, 80px)', lineHeight: '1.125', fontWeight: 400 }}
              >
                {stat.value}
              </p>
              {/* Stat label */}
              <p
                className="font-nexa capitalize text-white"
                style={{ fontSize: 'clamp(14px, 1.58vw, 30px)', lineHeight: '1.25', fontWeight: 400, marginTop: '4px' }}
              >
                {stat.label}
              </p>
              {/* Description */}
              <p
                className="font-metro text-white"
                style={{
                  fontSize: 'clamp(12px, 1.04vw, 20px)',
                  lineHeight: '1.6',
                  maxWidth: 'clamp(220px, 34.3vw, 659px)',
                  marginTop: 'clamp(12px, 2.4vw, 46px)',
                }}
              >
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
