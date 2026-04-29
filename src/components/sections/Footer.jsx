import { Link } from 'react-router-dom';
import footerVectorDeco from '../../assets/images/footer-vector-deco.svg';
import footerEllipseDeco from '../../assets/images/footer-ellipse-deco.svg';
import footerPlusGrid from '../../assets/images/footer-plus-grid.png';
import footerBrandCard from '../../assets/images/footer-brand-card.svg';
import instaIcon from '../../assets/images/insta.png';
import linkedinIcon from '../../assets/images/linkedin.png';
import footerPinCorp from '../../assets/images/footer-pin-corp.svg';
import footerPinMfg from '../../assets/images/footer-pin-mfg.svg';

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
const pgx = (v) => `calc(${((v / PLUS_GRID_HEIGHT) * 100).toFixed(4)}% - ${(v / PLUS_GRID_HEIGHT).toFixed(6)} * clamp(44px, 3.96vw, ${COPYRIGHT_BAR_HEIGHT}px))`;

const QUICK_LINKS = [
  { label: 'Products', to: null },
  { label: 'Technology', to: '/technology' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Insights & Blogs', to: '/insights-blogs' },
  { label: 'Media Kit', to: '/media-kit' },
  { label: 'Careers', to: '/careers' },
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
    <footer id="contact" className="font-nexa">
      <div
        className="relative w-full overflow-hidden bg-black max-[720px]:hidden"
        style={{ height: 'clamp(330px, 34vw, 645px)' }}
      >
        <div
          className="absolute pointer-events-none"
          style={{ left: 0, top: 0, width: px(867), height: py(599), opacity: 0.5 }}
        >
          <img src={footerVectorDeco} alt="" className="h-full w-full" style={{ objectFit: 'fill' }} />
        </div>

        <div
          className="absolute pointer-events-none"
          style={{ left: px(-100), top: py(-80), width: px(628), height: py(628), transform: 'rotate(-45deg)', opacity: 0.5 }}
        >
          <img src={footerEllipseDeco} alt="" className="h-full w-full" style={{ objectFit: 'contain' }} />
        </div>

        <div
          className="absolute pointer-events-none"
          style={{ left: px(PLUS_GRID_LEFT), top: 0, width: px(PLUS_GRID_WIDTH), height: `calc(100% - clamp(44px, 3.96vw, ${COPYRIGHT_BAR_HEIGHT}px))` }}
        >
          <img src={footerPlusGrid} alt="" className="h-full w-full" style={{ objectFit: 'fill' }} />
        </div>

        <div
          className="absolute pointer-events-none"
          style={{ left: px(146), top: pgx(GRID_CONTENT_TOP), width: px(601), height: pgx(GRID_CONTENT_HEIGHT) }}
        >
          <img src={footerBrandCard} alt="" className="h-full w-full" style={{ objectFit: 'fill' }} />
        </div>

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
          {[instaIcon, linkedinIcon].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={index === 0 ? 'Instagram' : 'LinkedIn'}
              style={{
                width: 'clamp(24px, 2.34vw, 45px)',
                height: 'clamp(24px, 2.29vw, 44px)',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          ))}
        </div>

        <div className="absolute" style={{ left: px(865), top: py(112) }}>
          <ColHeader>Quick Links</ColHeader>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {QUICK_LINKS.map(({ label, to }) => (
              <li key={label}>
                {to ? (
                  <Link to={to} style={{ ...bodyStyle, textDecoration: 'none', display: 'block' }}>
                    {label}
                  </Link>
                ) : (
                  <span style={{ ...bodyStyle, display: 'block' }}>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute" style={{ left: px(1086), top: py(112) }}>
          <ColHeader>Contact Us</ColHeader>
          {['+91 9266030266', 'enquiry@naxatralabs.com', 'careers@naxatralabs.com'].map((item) => (
            <p key={item} style={bodyStyle}>{item}</p>
          ))}
        </div>

        <div className="absolute" style={{ left: px(1418), top: py(112), width: px(430) }}>
          <ColHeader>Locate Us</ColHeader>

          <div
            style={{
              marginTop: 'clamp(16px, 1.55vw, 20px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(24px, 2.35vw, 25px)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
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
                  alignItems: 'flex-start',
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
              <span key={t} style={{ color: '#fff', fontSize: 'clamp(9px, 0.94vw, 18px)', whiteSpace: 'nowrap', cursor: 'pointer' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden bg-black text-white max-[720px]:block">
        <div className="relative overflow-hidden px-[14px] pt-[34px]">
          <div className="pointer-events-none absolute -left-[52px] -right-[52px] top-[214px] bottom-[104px] opacity-70 overflow-hidden">
            <img src={footerPlusGrid} alt="" className="h-full w-[132%] max-w-none -translate-x-[21%] object-fill" />
          </div>

          <div className="relative mx-auto max-w-[380px]">
            <div
              className="relative overflow-hidden bg-[#071514] px-5 pt-[28px] pb-[34px]"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 34px), calc(100% - 34px) 100%, 0 100%)' }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-35">
                <img src={footerVectorDeco} alt="" className="h-full w-full object-cover" />
              </div>
              <p className="relative text-center text-[25px] leading-[1.12]">
                <span className="block text-white">Engineering The</span>
                <span className="block text-[#4dd6c4]">Future Of Mobility</span>
              </p>
              <div className="relative mt-5 flex items-center justify-center gap-3">
                <img src={instaIcon} alt="Instagram" className="h-[22px] w-[22px] object-contain" />
                <img src={linkedinIcon} alt="LinkedIn" className="h-[22px] w-[22px] object-contain" />
              </div>
            </div>

            <div className="relative mt-12 grid grid-cols-2 bg-black/25 px-[38px] pt-[36px] pb-8">
              <div className="px-0 pt-0 pb-5">
                <h4 className="mb-4 text-[14px] font-extrabold uppercase leading-none tracking-[0.06em] text-[#1863da]">
                  Quick Links
                </h4>
                <div className="space-y-[7px] text-[10px] leading-[1.35] text-white">
                  {QUICK_LINKS.map(({ label, to }) => (
                    to ? (
                      <Link key={label} to={to} className="block text-white no-underline">
                        {label}
                      </Link>
                    ) : (
                      <span key={label} className="block">
                        {label}
                      </span>
                    )
                  ))}
                </div>
              </div>

              <div className="px-0 pt-0 pb-5 pl-6">
                <h4 className="mb-4 text-[14px] font-extrabold uppercase leading-none tracking-[0.06em] text-[#1863da]">
                  Contact Us
                </h4>
                <div className="space-y-[10px] text-[10px] leading-[1.35] text-white">
                  <p>+91 9266030266</p>
                  <p>enquiry@naxatralabs.com</p>
                  <p>careers@naxatralabs.com</p>
                </div>
              </div>

              <div className="col-span-2 px-0 pt-[38px] pb-0">
                <h4 className="mb-4 text-[14px] font-extrabold uppercase leading-none tracking-[0.06em] text-[#1863da]">
                  Locate Us
                </h4>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <div className="flex items-start gap-2">
                      <img src={footerPinCorp} alt="" className="mt-[2px] h-[10px] w-[10px] object-contain" />
                      <p className="text-[10px] font-extrabold uppercase leading-[1.3] text-white">Corporate Office</p>
                    </div>
                    <div className="ml-[18px] mt-1 space-y-[2px] text-[10px] leading-[1.35] text-white">
                      <p>Sector 44, Gurugram,</p>
                      <p>Haryana 122003</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-2">
                      <img src={footerPinMfg} alt="" className="mt-[2px] h-[10px] w-[10px] object-contain" />
                      <p className="text-[10px] font-extrabold uppercase leading-[1.3] text-white">Manufacturing Facility</p>
                    </div>
                    <div className="ml-[18px] mt-1 space-y-[2px] text-[10px] leading-[1.35] text-white">
                      <p>Paldi-Kankaj, Dakroi</p>
                      <p>Ahmedabad, Gujarat 382425</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,#1863da_0%,#154da6_25%,#123773_50%,#102c59_62.5%,#0f213f_75%,#0d1625_87.5%,#0b0b0b_100%)] px-[18px] py-4 text-[10px] leading-none text-white">
          <span>Copyright © 2026</span>
          <div className="flex items-center gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
