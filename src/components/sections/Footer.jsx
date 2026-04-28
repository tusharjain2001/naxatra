import { Link } from 'react-router-dom';
import footerVectorDeco from '../../assets/images/footer-vector-deco.svg';
import footerEllipseDeco from '../../assets/images/footer-ellipse-deco.svg';
import footerPlusGrid from '../../assets/images/footer-plus-grid.png';
import footerBrandCard from '../../assets/images/footer-brand-card.svg';
import instaIcon from '../../assets/images/insta.png';
import linkedinIcon from '../../assets/images/linkedin.png';
import footerPinCorp from '../../assets/images/footer-pin-corp.svg';
import footerPinMfg from '../../assets/images/footer-pin-mfg.svg';

/* Figma canvas: 1920 × 763 px */
const W = 1920;
const H = 763;
const px = (v) => `${((v / W) * 100).toFixed(4)}%`;
const py = (v) => `${((v / H) * 100).toFixed(4)}%`;

const PLUS_GRID_LEFT = 703;
const PLUS_GRID_WIDTH = 1217;
const PLUS_GRID_HEIGHT = 630;
const COPYRIGHT_BAR_HEIGHT = 76;
const GRID_CONTENT_TOP = 81;
const GRID_CONTENT_HEIGHT = 430;

const QUICK_LINKS = [
  { label: 'Products',         to: null },
  { label: 'Technology',       to: '/technology' },
  { label: 'Case Studies',     to: '/case-studies' },
  { label: 'Insights & Blogs', to: '/insights-blogs' },
  { label: 'Media Kit',        to: '/media-kit' },
  { label: 'Careers',          to: '/careers' },
];

function ColHeader({ children }) {
  return (
    <h4
      style={{
        color: '#1863da',
        fontSize: 'clamp(11px, 1.15vw, 22px)',
        lineHeight: 1,
        fontWeight: 800,
        margin: 0,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        marginBottom: 'clamp(8px, 0.67vw, 13px)',
        fontFamily: 'inherit',
      }}
    >
      {children}
    </h4>
  );
}

const bodyStyle = {
  color: '#fff',
  fontSize: 'clamp(9px, 0.94vw, 18px)',
  lineHeight: 2.87,
  margin: 0,
  whiteSpace: 'nowrap',
  fontFamily: 'inherit',
};

const locateTitleStyle = {
  ...bodyStyle,
  fontWeight: 800,
  lineHeight: 1.4,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
};

const locateAddressStyle = {
  ...bodyStyle,
  lineHeight: 1.45,
  textTransform: 'none',
  whiteSpace: 'normal',
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden font-nexa"
      style={{
        background: '#000',
        height: `clamp(360px, 37vw, ${PLUS_GRID_HEIGHT + COPYRIGHT_BAR_HEIGHT}px)`,
      }}
    >
      {/* ── Decorative background ─────────────────── */}

      {/* Circuit-globe vector — left area */}
      <div
        className="absolute pointer-events-none"
        style={{ left: 0, top: 0, width: px(867), height: py(599), opacity: 0.5 }}
      >
        <img src={footerVectorDeco} alt="" className="w-full h-full" style={{ objectFit: 'fill' }} />
      </div>

      {/* Rotated ellipse — left area */}
      <div
        className="absolute pointer-events-none"
        style={{ left: px(-100), top: py(-80), width: px(628), height: py(628), transform: 'rotate(-45deg)', opacity: 0.5 }}
      >
        <img src={footerEllipseDeco} alt="" className="w-full h-full" style={{ objectFit: 'contain' }} />
      </div>

      {/* Figma plus grid — right area */}
      <div
        className="absolute pointer-events-none"
        style={{ left: px(PLUS_GRID_LEFT), top: 0, width: px(PLUS_GRID_WIDTH), height: py(PLUS_GRID_HEIGHT) }}
      >
        <img src={footerPlusGrid} alt="" className="w-full h-full" style={{ objectFit: 'fill' }} />
      </div>

      {/* ── Brand card background ─────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{ left: px(146), top: py(GRID_CONTENT_TOP), width: px(601), height: py(GRID_CONTENT_HEIGHT) }}
      >
        <img src={footerBrandCard} alt="" className="w-full h-full" style={{ objectFit: 'fill' }} />
      </div>

      {/* ── Column 1 — Brand tagline ──────────────── */}
      <p
        className="absolute"
        style={{
          left: px(201),
          top: py(111),
          width: px(483),
          fontSize: 'clamp(18px, 3.54vw, 68px)',
          lineHeight: 1.147,
          fontWeight: 400,
          margin: 0,
        }}
      >
        <span style={{ color: '#fff' }}>Engineering the </span>
        <span style={{ color: '#4dd6c4' }}>Future of Mobility</span>
      </p>

      {/* Social icons */}
      <div
        className="absolute"
        style={{
          left: px(201),
          top: py(432),
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(5px, 0.52vw, 10px)',
        }}
      >
        {[
          { src: instaIcon, alt: 'Instagram' },
          { src: linkedinIcon, alt: 'LinkedIn' },
        ].map(({ src, alt }) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            style={{
              width: 'clamp(24px, 2.34vw, 45px)',
              height: 'clamp(24px, 2.29vw, 44px)',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        ))}
      </div>

      {/* ── Column 2 — Quick Links ────────────────── */}
      <div className="absolute" style={{ left: px(865), top: py(112) }}>
        <ColHeader>Quick Links</ColHeader>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {QUICK_LINKS.map(({ label, to }) => (
            <li key={label}>
              {to ? (
                <Link to={to} style={{ ...bodyStyle, textDecoration: 'none', display: 'block' }}>{label}</Link>
              ) : (
                <span style={{ ...bodyStyle, display: 'block' }}>{label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Column 3 — Contact Us ─────────────────── */}
      <div className="absolute" style={{ left: px(1086), top: py(112) }}>
        <ColHeader>Contact Us</ColHeader>
        {['+91 9266030266', 'enquiry@naxatralabs.com', 'careers@naxatralabs.com'].map((item) => (
          <p key={item} style={bodyStyle}>{item}</p>
        ))}
      </div>

      {/* ── Column 4 — Locate Us ──────────────────── */}
      <div className="absolute" style={{ left: px(1418), top: py(112), width: px(430) }}>
        <ColHeader>Locate Us</ColHeader>

        <div
          style={{
            marginTop: 'clamp(16px, 1.55vw, 30px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(24px, 2.35vw, 45px)',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(10px, 0.9vw, 17px)',
                marginBottom: 'clamp(8px, 0.78vw, 15px)',
              }}
            >
              <img
                src={footerPinCorp}
                alt=""
                style={{
                  width: 'clamp(10px, 0.94vw, 18px)',
                  height: 'clamp(10px, 0.94vw, 18px)',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
              <p style={locateTitleStyle}>Corporate Office</p>
            </div>
            <div style={{ marginLeft: 'clamp(20px, 1.85vw, 36px)' }}>
              <p style={locateAddressStyle}>Sector 44, Gurugram,</p>
              <p style={locateAddressStyle}>Haryana 122003</p>
            </div>
          </div>

          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(10px, 0.9vw, 17px)',
                marginBottom: 'clamp(8px, 0.78vw, 15px)',
              }}
            >
              <img
                src={footerPinMfg}
                alt=""
                style={{
                  width: 'clamp(10px, 0.94vw, 18px)',
                  height: 'clamp(10px, 0.94vw, 18px)',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
              <p style={locateTitleStyle}>Manufacturing Facility</p>
            </div>
            <div style={{ marginLeft: 'clamp(20px, 1.85vw, 36px)' }}>
              <p style={locateAddressStyle}>Paldi-Kankaj, Dakroi Ahmedabad,</p>
              <p style={locateAddressStyle}>Gujarat 382425</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright bar ─────────────────────────── */}
      <div
        className="absolute"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          height: `clamp(44px, 3.96vw, ${COPYRIGHT_BAR_HEIGHT}px)`,
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, #1863da 0%, #154da6 25%, #123773 50%, #102c59 62.5%, #0f213f 75%, #0d1625 87.5%, #0b0b0b 100%)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span style={{ position: 'absolute', left: px(129), color: '#fff', fontSize: 'clamp(9px, 0.94vw, 18px)', whiteSpace: 'nowrap' }}>
          Copyright © 2026
        </span>
        <div
          style={{
            position: 'absolute',
            right: px(146),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 'clamp(20px, 3.2vw, 62px)',
            width: 'clamp(240px, 22vw, 420px)',
          }}
        >
          {['Privacy Policy', 'Terms of Use'].map((t) => (
            <span key={t} style={{ color: '#fff', fontSize: 'clamp(9px, 0.94vw, 18px)', whiteSpace: 'nowrap', cursor: 'pointer' }}>{t}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
