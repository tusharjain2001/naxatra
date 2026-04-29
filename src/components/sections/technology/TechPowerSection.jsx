import graph from '../../../assets/images/tech-graph.png';

export default function TechPowerSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden" style={{ minHeight: 'clamp(420px, 41.6vw, 798px)' }}>
      <div
        className="relative mx-auto flex flex-col max-[768px]:items-center max-[768px]:justify-center max-[768px]:!px-10 md:flex-wrap md:flex-row md:items-center md:justify-between"
        style={{
          maxWidth: '1920px',
          minHeight: 'inherit',
          padding: 'clamp(40px, 4.2vw, 80px) clamp(24px, 8.7vw, 167px)',
          gap: '40px',
        }}
      >
        <div
          className="max-[768px]:order-1 max-[768px]:w-full max-[768px]:max-w-[380px] max-[768px]:mx-auto"
          style={{ maxWidth: 'clamp(280px, 33.6vw, 645px)' }}
        >
          <h2
            className="font-nexa capitalize text-black max-[768px]:flex max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-center max-[768px]:text-center max-[768px]:!text-[26px] max-[768px]:!leading-[1.12]"
            style={{ fontSize: 'clamp(26px, 2.5vw, 48px)', lineHeight: '1.07', fontWeight: 600, marginBottom: 'clamp(20px, 2.1vw, 40px)' }}
          >
            <span className="max-[768px]:block max-[768px]:whitespace-nowrap">{'More Power. More Range.'}</span>
            <span className="max-[768px]:block" style={{ color: '#1863da' }}>More Possibilities.</span>
          </h2>
          <p
            className="font-metro text-black max-[768px]:text-center max-[768px]:!text-[10px] max-[768px]:!leading-[1.6]"
            style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', lineHeight: '1.7' }}
          >
            <span className="hidden md:inline">
              Our advanced Antarix-AF58 powertrain delivers up to 10% higher average efficiency compared to market leaders. With improved energy optimization, it extends the operating range by 5-8%, ensuring peak performance with every ride.
            </span>
            <span className="md:hidden">
              Our advanced Antarix-AF58 powertrain delivers up to
              <br />
              10% higher average efficiency compared to market
              <br />
              leaders. With improved energy optimization, it extends
              <br />
              the operating range by 5-8%, ensuring peak performance with every ride.
            </span>
          </p>
        </div>

        <div
          className="max-[768px]:order-2 max-[768px]:!w-[calc(100vw-80px)] max-[768px]:!max-w-none max-[768px]:mx-auto max-[768px]:flex max-[768px]:justify-center md:flex-shrink-0 overflow-hidden"
          style={{
            width: 'clamp(260px, 38.3vw, 736px)',
            maxWidth: '736px',
            aspectRatio: '736 / 573',
            borderRadius: '4px',
          }}
        >
          <img
            src={graph}
            alt="Antarix-AF58 efficiency chart"
            className="block w-full h-full object-contain object-center max-[768px]:mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
