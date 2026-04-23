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
    <section className="relative w-full bg-black overflow-hidden">
      <div
        className="relative mx-auto flex flex-col items-start lg:flex-row lg:items-start lg:justify-between"
        style={{
          maxWidth: '1240px',
          padding: 'clamp(36px, 5vw, 80px) clamp(20px, 4.2vw, 64px)',
          gap: 'clamp(20px, 3.2vw, 44px)',
        }}
      >
        {/* Section heading on left */}
        <div
          style={{
            width: 'clamp(220px, 28vw, 360px)',
            marginTop: 'clamp(0px, 2.2vw, 26px)',
          }}
        >
          <h2
            className="font-nexa capitalize text-white"
            style={{ fontSize: 'clamp(24px, 3vw, 56px)', lineHeight: '1.1', fontWeight: 400 }}
          >
            {'Drive Smart, Safe, and '}
            <span style={{ color: '#1863da' }}>Your Way</span>
          </h2>
        </div>

        {/* Stats cards on right */}
        <div
          className="flex flex-col"
          style={{
            width: '100%',
            maxWidth: 'clamp(320px, 48vw, 760px)',
            gap: 'clamp(10px, 1.1vw, 14px)',
          }}
        >
          {stats.map((stat) => (
            <div key={stat.value} className="relative" style={{ minHeight: 'clamp(132px, 13.2vw, 252px)' }}>
              <img
                src={cardShape}
                alt=""
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ objectFit: 'fill' }}
              />
              <div
                className="relative flex flex-col"
                style={{ padding: 'clamp(14px, 1.9vw, 34px) clamp(16px, 2.1vw, 40px)' }}
              >
                <p
                  className="font-nexa capitalize"
                  style={{ color: '#4dd6c4', fontSize: 'clamp(26px, 2.55vw, 49px)', lineHeight: '1.05', fontWeight: 400 }}
                >
                  {stat.value}
                </p>
                <p
                  className="font-nexa capitalize text-white"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 29px)', lineHeight: '1.12', fontWeight: 400, marginTop: '2px' }}
                >
                  {stat.label}
                </p>
                <p
                  className="font-metro text-white"
                  style={{
                    fontSize: 'clamp(10px, 0.82vw, 16px)',
                    lineHeight: '1.45',
                    marginTop: 'clamp(7px, 0.85vw, 13px)',
                    maxWidth: 'clamp(240px, 30vw, 600px)',
                  }}
                >
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
