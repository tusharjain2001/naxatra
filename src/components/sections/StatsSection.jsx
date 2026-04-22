import statsGrid from '../../assets/images/stats-grid.svg';

const stats = [
  {
    value: '10%',
    title: 'Higher Average Efficiency',
    desc: 'Our motors offers up to 10% greater efficiency compared to existing market leaders. This translates to optimized energy usage and superior performance in real-world applications.',
  },
  {
    value: '8%',
    title: 'Increased Operating Range',
    desc: 'Better efficiency directly results in an extended operating range, allowing EVs to travel 5-8% farther on a single charge.',
  },
  {
    value: '20%',
    title: 'Lighter for Better Energy Utilization',
    desc: '20% Weight Reduction Reduced Material Consumption.',
  },
  {
    value: '2x',
    title: 'Power Density for Maximum Performance',
    desc: 'Our motors offers twice the power density, delivering higher performance in a compact, energy-efficient design.',
  },
];

export default function StatsSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden" style={{ paddingTop: '128px', paddingBottom: '128px' }}>
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={statsGrid} alt="" className="w-full h-full" style={{ opacity: 0.3, objectFit: 'cover' }} />
      </div>

      <div className="relative z-10" style={{ maxWidth: '1920px', margin: '0 auto', padding: '0 13px' }}>
        {/* Gradient heading */}
        <h2
          className="font-nexa capitalize text-center"
          style={{
            fontSize: '61.36px',
            lineHeight: '78.54px',
            background: 'linear-gradient(90.01deg, #fefefe 8.69%, #666 49.43%, #fefefe 107%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '135px',
          }}
        >
          Drive Smart, Safe, and Your Way
        </h2>

        {/* Stats grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid rgba(0,0,0,0.15)',
            borderBottom: '1px solid rgba(0,0,0,0.15)',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '32px 100px 32px 0',
                borderRight: i < 3 ? '1px solid rgba(0,0,0,0.12)' : 'none',
                paddingLeft: i === 0 ? '0' : '100px',
              }}
            >
              <p
                className="font-nexa capitalize"
                style={{ color: '#1863da', fontSize: '80px', lineHeight: '35.8px', marginBottom: '28px' }}
              >
                {stat.value}
              </p>
              <h3
                className="font-nexa capitalize"
                style={{ color: '#000', fontSize: '30.4px', lineHeight: '38px', marginBottom: '20px', marginTop: '28px' }}
              >
                {stat.title}
              </h3>
              <p
                className="font-metro"
                style={{ color: '#000', fontSize: '18px', lineHeight: '28px' }}
              >
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
