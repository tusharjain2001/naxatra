import workshop from '../../assets/images/workshop.jpg';

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: '#f5fafa', paddingTop: '44px', paddingBottom: '0' }}>
      {/* Blue gradient at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '640px',
          background: 'linear-gradient(to top, rgba(24,99,218,0.4), transparent)',
        }}
      />

      <div className="relative z-10" style={{ maxWidth: '1920px', margin: '0 auto' }}>
        {/* Title */}
        <p
          className="font-nexa text-center font-light"
          style={{ fontSize: '50px', lineHeight: '106px', marginBottom: '0' }}
        >
          <span style={{ color: '#1863da' }}>Efficient Motors,</span>
          <span style={{ color: '#000' }}> Better Performance, Greener Future</span>
        </p>

        {/* Large image */}
        <div style={{ padding: '0 168px 0 168px' }}>
          <img
            src={workshop}
            alt="Manufacturing workshop"
            style={{
              width: '100%',
              height: '798px',
              objectFit: 'cover',
              borderRadius: '28px',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
}
