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
          maxWidth: '1840px',
          padding: 'clamp(40px, 4.6vw, 84px) clamp(20px, 4.2vw, 80px)',
          gap: 'clamp(34px, 4.2vw, 80px)',
        }}
      >
        {/* Section heading on left */}
        <div
          style={{
            width: 'clamp(420px, 35vw, 560px)',
            marginTop: 'clamp(12px, 2.2vw, 34px)',
          }}
        >
          <h2
            className="font-nexa capitalize text-white"
            style={{ fontSize: 'clamp(34px, 3.65vw, 70px)', lineHeight: '1.08', fontWeight: 400, maxWidth: '520px' }}
          >
            {'Drive Smart, Safe,'}
            <br />
            {'And '}
            <span style={{ color: '#1863da' }}>Your Way</span>
          </h2>
        </div>

        {/* Stats cards on right */}
        <div
          className="flex flex-col"
          style={{
            width: '100%',
            maxWidth: 'clamp(420px, 44vw, 760px)',
            gap: 'clamp(16px, 1.5vw, 28px)',
          }}
        >
          {stats.map((stat) => (
            <div key={stat.value} className="relative" style={{ minHeight: 'clamp(170px, 14.8vw, 288px)' }}>
              <img
                src={cardShape}
                alt=""
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ objectFit: 'fill' }}
              />
              <div
                className="relative flex flex-col"
                style={{ padding: 'clamp(22px, 2vw, 38px) clamp(22px, 2.2vw, 42px)' }}
              >
                <p
                  className="font-nexa capitalize"
                  style={{ color: '#4dd6c4', fontSize: 'clamp(34px, 3vw, 58px)', lineHeight: '1.05', fontWeight: 400 }}
                >
                  {stat.value}
                </p>
                <p
                  className="font-nexa capitalize text-white"
                  style={{ fontSize: 'clamp(20px, 1.8vw, 34px)', lineHeight: '1.14', fontWeight: 400, marginTop: '4px' }}
                >
                  {stat.label}
                </p>
                <p
                  className="font-metro text-white"
                  style={{
                    fontSize: 'clamp(12px, 0.98vw, 18px)',
                    lineHeight: '1.5',
                    marginTop: 'clamp(10px, 1vw, 18px)',
                    maxWidth: 'clamp(280px, 31vw, 620px)',
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
