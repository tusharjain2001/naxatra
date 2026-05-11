import { useEffect, useRef, useState } from 'react';
import cardShape from '../../../assets/images/tech-stat-card-1.svg';

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
    <div key={stat.value} className="relative" style={{ minHeight: 'clamp(170px, 14.8vw, 288px)' }}>
      <img
        src={cardShape}
        alt=""
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ objectFit: 'fill' }}
      />
      <div
        className="relative flex flex-col max-[768px]:absolute max-[768px]:inset-0 max-[768px]:h-full max-[768px]:items-center max-[768px]:justify-center max-[768px]:text-center max-[768px]:px-1.5!"
        style={{ padding: 'clamp(22px, 2vw, 38px) clamp(22px, 2.2vw, 42px)' }}
      >
        <p
          className="font-nexa capitalize"
          style={{ color: '#4dd6c4', fontSize: 'clamp(36px, 4.17vw, 80px)', lineHeight: '1.05', fontWeight: 600 }}
        >
          {count}{stat.suffix}
        </p>
        <p
          className="font-nexa capitalize text-white"
          style={{ fontSize: 'clamp(16px, 1.56vw, 30px)', lineHeight: '1.14', fontWeight: 400, marginTop: '4px' }}
        >
          {stat.label}
        </p>
        <p
          className="font-metro text-white max-[768px]:text-[10px]! max-[768px]:max-w-none!"
          style={{
            fontSize: 'clamp(12px, 1.04vw, 20px)',
            lineHeight: '1.5',
            marginTop: 'clamp(10px, 1vw, 18px)',
            maxWidth: 'clamp(280px, 31vw, 620px)',
          }}
        >
          <span className="block max-[768px]:w-full">{stat.description}</span>
        </p>
      </div>
    </div>
  );
}

export default function TechStatsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div
        ref={sectionRef}
        className="relative mx-auto flex flex-col items-start max-[768px]:px-3! lg:flex-row lg:items-start lg:justify-between"
        style={{
          maxWidth: '1840px',
          padding: 'clamp(40px, 4.6vw, 84px) clamp(20px, 10.1vw, 194px)',
          gap: 'clamp(20px, 2.5vw, 48px)',
        }}
      >
        {/* Section heading */}
        <div
          className="max-[768px]:mt-0 max-[768px]:w-full!"
          style={{ width: 'clamp(420px, 35vw, 560px)', marginTop: 'clamp(12px, 2.2vw, 34px)' }}
        >
          <h2
            className="font-nexa font-semibold capitalize text-white max-[768px]:text-center max-[768px]:text-[26px]! max-[768px]:leading-[1.08]!"
            style={{ fontSize: 'clamp(34px, 3.54vw, 68px)', lineHeight: '1.08', fontWeight: 500 }}
          >
            <span className="max-[768px]:whitespace-normal" style={{ whiteSpace: 'nowrap' }}>Drive Smart, Safe,</span>
            <br />
            {'And '}
            <span style={{ color: '#1863da' }}>Your Way</span>
          </h2>
        </div>

        {/* Stats cards */}
        <div
          className="flex flex-col"
          style={{ width: '100%', maxWidth: 'clamp(360px, 36vw, 640px)', gap: 'clamp(16px, 1.5vw, 28px)' }}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
