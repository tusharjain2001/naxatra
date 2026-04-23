import { Link } from 'react-router-dom';
import footerVectorDeco from '../../assets/images/footer-vector-deco.svg';
import footerEllipseDeco from '../../assets/images/footer-ellipse-deco.svg';
import footerPlusGrid from '../../assets/images/footer-plus-grid.png';
import footerBrandCard from '../../assets/images/footer-brand-card.svg';
import instaIcon from '../../assets/images/insta.png';
import linkedinIcon from '../../assets/images/linkedin.png';

/* Figma canvas: 1920 × 763 px */
const W = 1920;
const H = 763;
const px = (v) => `${((v / W) * 100).toFixed(4)}%`;
const py = (v) => `${((v / H) * 100).toFixed(4)}%`;

const PLUS_GRID_LEFT = 703;
const PLUS_GRID_WIDTH = 1217;
const PLUS_GRID_HEIGHT = 687;
const GRID_CONTENT_TOP = 81;
const GRID_CONTENT_HEIGHT = 469;

const QUICK_LINKS = [
  { label: 'Products',         to: null },
  { label: 'Technology',       to: '/technology' },
  { label: 'Case Studies',     to: '/case-studies' },
  { label: 'Insights & Blogs', to: '/insights-blogs' },
  { label: 'Media Kit',        to: '/media-kit' },
  { label: 'Careers',          to: '/careers' },
];

/* Office building icon (Corporate Office) */
function OfficePinIcon({ color }) {
  return (
    <svg
      viewBox="0 0 15 15.0004"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      <path
        d="M11.4989 13.9202H12.1893V2.77879H13.2579C13.6741 2.77879 14.2937 3.39471 14.2937 3.80794V13.9202C14.7764 13.8318 15.1847 14.3132 14.9128 14.7477C14.7135 15.0663 14.3029 14.95 13.9799 14.9641C12.2509 15.0407 10.4866 14.969 8.75486 14.9641C6.74834 14.9582 4.73523 15.006 2.73727 14.9998C2.13093 14.9979 1.53085 14.9959 0.928793 14.9645C0.602885 14.9474 0.28258 15.0617 0.0822237 14.7274C-0.16196 14.3201 0.173834 13.8931 0.615408 13.9202V3.87375C0.612112 3.41108 1.19209 2.77879 1.65113 2.77879H2.7198V13.9202H3.41017V1.06334C3.41017 0.628827 3.97104 0.0469666 4.41591 0.00439951L10.4319 0.000142798C10.9311 0.020444 11.4992 0.6118 11.4992 1.09608V13.9202H11.4989ZM5.76798 2.62228C5.47404 2.68777 5.46053 3.27716 5.57883 3.48279C5.72251 3.7323 6.431 3.72968 6.54172 3.45659C6.5961 3.32202 6.58984 2.85345 6.49625 2.73426C6.37926 2.58528 5.93703 2.58462 5.76798 2.62228ZM8.59636 2.62293C8.29418 2.68318 8.31263 3.10983 8.3413 3.35116C8.38315 3.70446 8.96247 3.72935 9.20896 3.59117C9.47852 3.43989 9.46764 2.6953 9.14075 2.62228C9.04123 2.60001 8.69851 2.6023 8.59636 2.62293ZM5.76798 4.71331C5.47404 4.77879 5.46053 5.36818 5.57883 5.57382C5.72251 5.82333 6.431 5.82071 6.54172 5.54762C6.5961 5.41304 6.58984 4.94448 6.49625 4.82529C6.37926 4.67631 5.93703 4.67565 5.76798 4.71331ZM8.59636 4.71396C8.29451 4.77421 8.31263 5.20054 8.3413 5.44219C8.38315 5.79549 8.96247 5.82038 9.20896 5.6822C9.47852 5.53092 9.46764 4.78632 9.14075 4.71331C9.04123 4.69104 8.69851 4.69333 8.59636 4.71396ZM5.76798 6.80433C5.47404 6.86982 5.46053 7.45921 5.57883 7.66484C5.72251 7.91435 6.431 7.91173 6.54172 7.63865C6.5961 7.50407 6.58984 7.03551 6.49625 6.91632C6.37926 6.76733 5.93703 6.76668 5.76798 6.80433ZM8.59636 6.80499C8.29451 6.86524 8.31263 7.29156 8.3413 7.53321C8.38315 7.88652 8.96247 7.91141 9.20896 7.77323C9.47852 7.62195 9.46764 6.87735 9.14075 6.80433C9.04123 6.78207 8.69851 6.78436 8.59636 6.80499ZM9.39449 13.9202V9.91796C9.39449 9.44219 8.97664 9.08953 8.52419 9.0509C7.96432 9.00309 6.98198 9.00997 6.41716 9.0509C5.94857 9.08462 5.51424 9.41926 5.51424 9.91828V13.9206H6.56644V10.0977H8.34196V13.9206H9.39416L9.39449 13.9202Z"
        fill={color}
      />
    </svg>
  );
}

/* Factory/warehouse icon (Manufacturing Facility) */
function FactoryPinIcon({ color }) {
  return (
    <svg
      viewBox="0 0 14.9997 15.0001"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      <path
        d="M0 2.34684H4.98014V6.71783L9.34506 4.18036C9.51765 4.09688 9.73955 4.12804 9.87193 4.26854C9.89864 4.29705 9.98934 4.44724 9.98934 4.4737V6.71783L14.3543 4.18036C14.6507 4.04162 14.9844 4.22915 14.9997 4.5607V14.5957C14.9944 14.7838 14.875 14.9378 14.7006 15.0001H0.297922C0.140889 14.949 0.0722057 14.8343 0 14.6971V2.34684ZM4.4157 9.74617C4.23343 9.80789 4.12306 9.94046 4.10134 10.1353C4.05731 10.5298 4.05731 11.5597 4.10134 11.9544C4.12394 12.1555 4.26131 12.3263 4.46707 12.351C5.05205 12.4215 5.77264 12.2966 6.37259 12.351C6.60183 12.3104 6.71953 12.1511 6.7392 11.9262C6.77677 11.5006 6.78469 10.5527 6.73802 10.1356C6.71542 9.93458 6.57806 9.7638 6.3723 9.73911C5.77499 9.6671 5.02857 9.78849 4.4157 9.74646V9.74617ZM9.4249 9.74617C9.24262 9.80789 9.13226 9.94046 9.11054 10.1353C9.06651 10.5298 9.06651 11.5597 9.11054 11.9544C9.13314 12.1555 9.27051 12.3263 9.47627 12.351C10.0612 12.4215 10.7818 12.2966 11.3818 12.351C11.611 12.3104 11.7287 12.1511 11.7484 11.9262C11.786 11.5006 11.7939 10.5527 11.7472 10.1356C11.7246 9.93458 11.5873 9.7638 11.3815 9.73911C10.7842 9.6671 10.0378 9.78849 9.4249 9.74646V9.74617Z"
        fill={color}
      />
      <path
        d="M4.65786 0C4.76616 0.0408559 4.98014 0.218094 4.98014 0.337429V1.4667H0V0.322732C0.0745539 0.16166 0.161436 0.0746576 0.322284 0H4.65786Z"
        fill={color}
      />
    </svg>
  );
}

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

const pinSize = 'clamp(8px, 0.78vw, 15px)';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden font-nexa"
      style={{
        background: '#000',
        height: `clamp(380px, ${((H / W) * 100).toFixed(4)}vw, ${H}px)`,
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
          top: py(458),
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
      <div className="absolute" style={{ left: px(1418), top: py(112) }}>
        <ColHeader>Locate Us</ColHeader>
      </div>

      {/* Address text block — starts at left=1445, top=171 (Figma coords) */}
      <div
        className="absolute"
        style={{
          left: px(1445),
          top: py(171),
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(16px, 1.67vw, 32px)',
        }}
      >
        {/* Corporate Office */}
        <div>
          <p style={{ ...bodyStyle, fontWeight: 800, lineHeight: '1.78', textTransform: 'uppercase', whiteSpace: 'normal' }}>Corporate Office</p>
          <p style={{ ...bodyStyle, lineHeight: '1.78', textTransform: 'uppercase', whiteSpace: 'normal' }}>Sector 44, Gurugram,</p>
          <p style={{ ...bodyStyle, lineHeight: '1.56', textTransform: 'uppercase', whiteSpace: 'normal' }}>Haryana 122003</p>
        </div>

        {/* Manufacturing Facility */}
        <div>
          <p style={{ ...bodyStyle, fontWeight: 800, lineHeight: '1.78', textTransform: 'uppercase', whiteSpace: 'normal' }}>Manufacturing Facility</p>
          <p style={{ ...bodyStyle, lineHeight: '1.78', textTransform: 'uppercase', whiteSpace: 'normal' }}>Paldi-Kankaj, Dakroi Ahemdabad,</p>
          <p style={{ ...bodyStyle, lineHeight: '1.56', textTransform: 'uppercase', whiteSpace: 'normal' }}>Gujarat 382425</p>
        </div>
      </div>

      {/* Corporate Office pin icon */}
      <div
        className="absolute"
        style={{ left: px(1418), top: py(198), width: pinSize, height: pinSize }}
      >
        <OfficePinIcon color="#4DD6C4" />
      </div>

      {/* Manufacturing Facility pin icon */}
      <div
        className="absolute"
        style={{ left: px(1418), top: py(333), width: pinSize, height: pinSize }}
      >
        <FactoryPinIcon color="#1863DA" />
      </div>

      {/* ── Copyright bar ─────────────────────────── */}
      <div
        className="absolute"
        style={{
          bottom: 0, left: 0, right: 0,
          height: 'clamp(44px, 3.96vw, 76px)',
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, #1863da 0%, #154da6 25%, #123773 50%, #102c59 62.5%, #0f213f 75%, #0d1625 87.5%, #0b0b0b 100%)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span style={{ position: 'absolute', left: px(129), color: '#fff', fontSize: 'clamp(9px, 0.94vw, 18px)', whiteSpace: 'nowrap' }}>
          Copyright © 2026
        </span>
        <div style={{ position: 'absolute', right: px(240), display: 'flex', gap: 'clamp(12px, 8.7vw, 167px)' }}>
          {['Privacy Policy', 'Terms of Use'].map((t) => (
            <span key={t} style={{ color: '#fff', fontSize: 'clamp(9px, 0.94vw, 18px)', whiteSpace: 'nowrap', cursor: 'pointer' }}>{t}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
