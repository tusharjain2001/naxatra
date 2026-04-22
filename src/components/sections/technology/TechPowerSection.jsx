import graph from '../../../assets/images/tech-graph.png';

export default function TechPowerSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden" style={{ minHeight: 'clamp(420px, 41.6vw, 798px)' }}>
      <div
        className="relative mx-auto flex flex-wrap items-center justify-between"
        style={{
          maxWidth: '1920px',
          minHeight: 'inherit',
          padding: 'clamp(40px, 4.2vw, 80px) clamp(24px, 8.7vw, 167px)',
          gap: '40px',
        }}
      >
        {/* Left: graph image */}
        <div
          className="flex-shrink-0 overflow-hidden"
          style={{
            width: 'clamp(260px, 38.3vw, 736px)',
            height: 'clamp(240px, 29.8vw, 573px)',
            borderRadius: '4px',
          }}
        >
          <img
            src={graph}
            alt="Antarix-AF58 efficiency chart"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: text */}
        <div style={{ maxWidth: 'clamp(280px, 33.6vw, 645px)' }}>
          <h2
            className="font-nexa capitalize text-black"
            style={{ fontSize: 'clamp(26px, 2.5vw, 48px)', lineHeight: '1.07', fontWeight: 400, marginBottom: 'clamp(20px, 2.1vw, 40px)' }}
          >
            {'More Power. More Range. '}
            <span style={{ color: '#1863da' }}>More Possibilities.</span>
          </h2>
          <p
            className="font-metro text-black"
            style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.7' }}
          >
            Our advanced Antarix-AF58 powertrain delivers up to 10% higher average efficiency compared to market leaders. With improved energy optimization, it extends the operating range by 5-8%, ensuring peak performance with every ride.
          </p>
        </div>
      </div>
    </section>
  );
}
