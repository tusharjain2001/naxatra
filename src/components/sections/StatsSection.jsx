import { useEffect, useRef, useState } from 'react';
import statsGrid from '../../assets/images/stats-grid.svg';

const stats = [
  {
    value: 10,
    suffix: '%',
    label: 'Higher Average Efficiency',
    description:
      'Our motors offers up to 10% greater efficiency compared to existing market leaders. This translates to optimized energy usage and superior performance in real-world applications.',
  },
  {
    value: 8,
    suffix: '%',
    label: 'Increased Operating Range',
    description:
      'Better efficiency directly results in an extended operating range, allowing EVs to travel 5-8% farther on a single charge.',
  },
  {
    value: 20,
    suffix: '%',
    label: 'Lighter for Better Energy Utilization',
    description: '20% Weight Reduction Reduced Material Consumption.',
  },
  {
    value: 2,
    suffix: 'x',
    label: 'Power Density for Maximum Performance',
    description:
      'Our motors offers twice the power density, delivering higher performance in a compact, energy-efficient design.',
  },
];

const DIVIDER = '#D1D1D1';

function useCountUp(target, duration, shouldStart) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let raf;
    const startTime = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, shouldStart]);

  return count;
}

function StatCard({ stat, isVisible }) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div
      className="flex flex-col"
      style={{
        padding: 'clamp(24px, 3vw, 56px) clamp(16px, 2.7vw, 52px) clamp(28px, 3.5vw, 60px)',
      }}
    >
      <p
        className="font-nexa"
        style={{ color: '#1863DA', fontSize: 'clamp(40px, 5.2vw, 80px)', lineHeight: 1, fontWeight: 400 }}
      >
        {count}{stat.suffix}
      </p>
      <p
        className="font-nexa capitalize text-black"
        style={{ fontSize: 'clamp(15px, 1.58vw, 30.4px)', lineHeight: 1.25, fontWeight: 400, marginTop: 'clamp(8px, 1vw, 16px)' }}
      >
        {stat.label}
      </p>
      <p
        className="font-metro"
        style={{ fontSize: 'clamp(12px, 0.94vw, 18px)', lineHeight: 1.56, marginTop: 'clamp(10px, 1.25vw, 24px)', color: '#111' }}
      >
        {stat.description}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white">
      {/* Title */}
      <div
        style={{
          maxWidth: '1840px',
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 108px) clamp(20px, 8.5vw, 164px) clamp(28px, 4.5vw, 80px)',
        }}
      >
        <h2
          className="font-nexa text-center capitalize"
          style={{
            fontSize: 'clamp(24px, 3.8vw, 61px)',
            lineHeight: 1.28,
            fontWeight: 400,
            backgroundImage: 'linear-gradient(90deg, #fefefe 8.69%, #666666 49.43%, #fefefe 107%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Drive Smart, Safe, And Your Way
        </h2>
      </div>

      {/* Stats grid */}
      <div className="relative">
        {/* Desktop background — SVG has 5 vertical lines for 4-col layout.
            Hidden on mobile because those extra lines fall inside columns. */}
        <img
          src={statsGrid}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none select-none hidden lg:block"
        />

        {/* Mobile borders — drawn with plain CSS so they're reliable.
            Top/bottom lines span full width. Vertical at 50% = col boundary.
            (50% works because padding is 5.807% each side → col1 ends at 50%) */}
        <div className="lg:hidden" style={{ position: 'absolute', inset: '0 0 auto 0', height: '1px', background: DIVIDER }} />
        <div className="lg:hidden" style={{ position: 'absolute', inset: 'auto 0 0 0', height: '1px', background: DIVIDER }} />
        <div className="lg:hidden" style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', background: DIVIDER }} />

        {/* Content — padding 113/1946≈5.807% aligns CSS columns with SVG dividers */}
        <div className="relative" style={{ padding: '0 5.807%' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {/* Row 1 */}
            <StatCard stat={stats[0]} isVisible={isVisible} />
            <StatCard stat={stats[1]} isVisible={isVisible} />

            {/* Full-width row divider on mobile (between row 1 and row 2).
                margin: 0 -5.807% cancels the parent's padding so it reaches
                the outer edges. Hidden on desktop so grid stays 4-col. */}
            <div
              className="col-span-2 lg:hidden"
              style={{ height: '1px', background: DIVIDER, margin: '0 -5.807%' }}
            />

            {/* Row 2 */}
            <StatCard stat={stats[2]} isVisible={isVisible} />
            <StatCard stat={stats[3]} isVisible={isVisible} />
          </div>
        </div>
      </div>

      <div style={{ height: 'clamp(36px, 5vw, 80px)' }} />
    </section>
  );
}
