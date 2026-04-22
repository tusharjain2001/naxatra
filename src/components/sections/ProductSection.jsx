import productMotor from '../../assets/images/product-motor.png';
import productEllipse from '../../assets/images/product-ellipse.svg';
import productBg from '../../assets/images/product-bg.svg';
import viewAllProducts from '../../assets/images/view-all-products.png';

export default function ProductSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: '#f5fafa', paddingTop: '108px', paddingBottom: '0' }}
      id="products"
    >
      {/* Ellipse glow behind motor */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          top: '196px',
          width: '788px',
          height: '788px',
        }}
      >
        <img src={productEllipse} alt="" className="w-full h-full" />
      </div>

      {/* Subtitle */}
      <p
        className="font-metro text-center uppercase"
        style={{ color: '#515151', fontSize: '24px', lineHeight: '24.45px', letterSpacing: '0.1em' }}
      >
        THE PULSE BEHIND EVERY MOTION.
      </p>

      {/* Main heading */}
      <p
        className="font-nexa text-center font-light"
        style={{ fontSize: '50px', lineHeight: '64px', marginTop: '47px', padding: '0 486px' }}
      >
        <span style={{ color: '#000' }}>The Future of Drivetrains is Here. </span>
        <span style={{ color: '#1863da' }}>Smart, Compact &amp; Efficient</span>
      </p>

      {/* Motor + watermark */}
      <div className="relative" style={{ height: '549px', marginTop: '40px' }}>
        {/* Watermark text */}
        <p
          className="font-nexa text-center capitalize absolute w-full"
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '144px',
            lineHeight: '1.15',
            background: 'linear-gradient(90deg, #f5fafa 0%, #515151 45%, #f5fafa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: 0.67,
            letterSpacing: '0.15em',
            paddingTop: '18px',
            paddingBottom: '18px',
            userSelect: 'none',
          }}
        >
          Antarix&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RF55
        </p>
        {/* Motor image */}
        <div
          className="absolute"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            top: 0,
            width: '653px',
            height: '549px',
          }}
        >
          <img src={productMotor} alt="Antarix RF55 Motor" className="w-full h-full object-contain relative z-10" />
        </div>
      </div>

      {/* CTA Box */}
      <div
        className="relative mx-auto"
        style={{ maxWidth: '1254px', marginTop: '40px', marginBottom: '40px' }}
      >
        <img
          src={productBg}
          alt=""
          className="absolute inset-0 w-full h-full"
          style={{ display: 'block' }}
        />
        <div className="relative z-10 text-center" style={{ padding: '66px 48px 72px' }}>
          <h3
            className="font-nexa capitalize"
            style={{ fontSize: '36px', lineHeight: '64px', color: '#000' }}
          >
            Explore our versatile range of motors from 1kW to 15kW.
          </h3>
          <p
            className="font-metro capitalize"
            style={{ fontSize: '24px', lineHeight: '64px', color: '#515151' }}
          >
            Perfect for electric vehicles, farming equipment, power tools and beyond.
          </p>
          <a
            href="#products"
            className="inline-flex items-center"
            style={{
              marginTop: '14px',
              textDecoration: 'none',
            }}
            aria-label="View all products"
          >
            <img
              src={viewAllProducts}
              alt="View All Products"
              style={{ width: '272px', height: '52px', display: 'block' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
