import logoNavi from '../../../assets/images/about-investor-logo-navi.png';
import logoGiraffe from '../../../assets/images/about-investor-logo-giraffe.svg';
import logoBvfl from '../../../assets/images/about-investor-logo-bvfl.svg';
import mohit from '../../../assets/images/mohitinv.png';
import himanshu from '../../../assets/images/himanshuenv.png';
import vijayShekhar from '../../../assets/images/vijayenv.png';
import aloke from '../../../assets/images/alokeinv.png';
import anupam from '../../../assets/images/anupam.png';
import rajnish from '../../../assets/images/rajnishenv.png';
import soumitra from '../../../assets/images/soumitra.png';
import sunil from '../../../assets/images/sunilenv.png';
import narayan from '../../../assets/images/narayanenv.png';

const TOP_INVESTORS = [
  { name: 'Mohit Tandon', card: mohit, aspectRatio: '315 / 359', url: 'https://www.linkedin.com/in/mohit-tandon-03b9046/' },
  { name: 'Himanshu Aggarwal', card: himanshu, aspectRatio: '315 / 359', url: 'https://www.linkedin.com/in/himanshuaggarwal/' },
  { name: 'Vijay Shekhar Sharma', card: vijayShekhar, aspectRatio: '315 / 359', url: 'https://www.linkedin.com/in/vijayshekhar/' },
];

const BOTTOM_INVESTORS = [
  { name: 'Aloke Bajpai', card: aloke, url: 'https://www.linkedin.com/in/alokebajpai/' },
  { name: 'Anupam', card: anupam, url: 'https://www.linkedin.com/in/anupamjalote/' },
  { name: 'Rajnish Kumar', card: rajnish, url: 'https://www.linkedin.com/in/rajnishkumar/' },
  { name: 'Sunil Kalra', card: sunil, url: 'https://www.linkedin.com/in/sunilkalranewdelhi/' },
  { name: 'Narayan', card: narayan, url: 'https://www.linkedin.com/in/narayan-g-v-7ba86543/' },
  { name: 'Soumitra', card: soumitra, url: 'https://www.linkedin.com/in/soumitrasharma5/' },
];

const DESKTOP_INVESTOR_ROWS = [
  [...TOP_INVESTORS, BOTTOM_INVESTORS[0]],
  [BOTTOM_INVESTORS[2], BOTTOM_INVESTORS[3], BOTTOM_INVESTORS[4], BOTTOM_INVESTORS[1], BOTTOM_INVESTORS[5]],
];

const DESKTOP_INVESTOR_CARD_SIZES = [
  'clamp(160px, 16.9vw, 324.47px)',
  'clamp(124px, 13.16vw, 252.627px)',
];

const DESKTOP_LOGO_ROW_WIDTH = 'min(100%, clamp(620px, 63.9vw, 1227px))';
const DESKTOP_LOGO_CARD_STYLE = {
  backgroundColor: '#FFFFFF66',
  borderRadius: '20px',
  boxShadow: '0 4px 15.8px 0 rgba(34, 110, 205, 0.20)',
};

const INVESTOR_LOGOS = [
  { name: 'Rainmatter', src: logoNavi, width: '232px', desktopWidth: '220px' },
  { name: 'Giraffe', src: logoGiraffe, width: '168px', desktopWidth: '150px' },
  { name: 'GVFL', src: logoBvfl, width: '150px', desktopWidth: '120px' },
];

function InvestorImage({ person, size = 'regular' }) {
  return (
    <img
      src={person.card}
      alt={person.name}
      className="block w-full"
      style={{
        aspectRatio: person.aspectRatio || '291 / 332',
        objectFit: 'cover',
        boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
        maxWidth: size === 'large' ? 'clamp(140px, 14.2vw, 290px)' : 'clamp(150px, 15vw, 305px)',
      }}
    />
  );
}

export default function AboutInvestorsSection() {
  return (
    <section className="w-full" style={{ background: 'linear-gradient(180deg, #FFF 0%, #EFFBF9 50%, #DEF7F4 100%)' }}>
      <div
        className="mx-auto md:hidden"
        style={{
          maxWidth: '520px',
          padding: '24px 14px 30px',
        }}
      >
        <h2
          className="font-nexa text-black text-center"
          style={{
            fontSize: '20px',
            lineHeight: 1.1,
            fontWeight: 400,
            margin: '0 0 16px',
          }}
        >
          Investors
        </h2>

        <div className="flex flex-col items-center" style={{ gap: '18px', marginBottom: '24px' }}>
          {INVESTOR_LOGOS.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              style={{
                width: logo.width,
                height: 'auto',
                objectFit: 'contain',
                flexShrink: 0,
                display: 'block',
              }}
            />
          ))}
        </div>

        <div
          className="grid grid-cols-2 justify-items-center"
          style={{
            gap: '12px',
          }}
        >
          {[...TOP_INVESTORS, ...BOTTOM_INVESTORS].map((person) => (
            <a
              key={person.name}
              href={person.url}
              target="_blank"
              rel="noreferrer"
              className="block w-full"
              style={{
                maxWidth: '216px',
                textDecoration: 'none',
              }}
              aria-label={`Open ${person.name} on LinkedIn`}
            >
              <img
                src={person.card}
                alt={person.name}
                className="block w-full"
                style={{
                aspectRatio: person.aspectRatio || '291 / 332',
                objectFit: 'cover',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
              />
            </a>
          ))}
        </div>
      </div>

      <div
        className="mx-auto hidden md:block"
        style={{
          maxWidth: '1920px',
          padding: 'clamp(48px, 4.7vw, 91px) clamp(24px, 7vw, 134px) clamp(180px, 12vw, 230px)',
        }}
      >
        <div
          className="mx-auto flex flex-col items-center"
          style={{
            maxWidth: 'clamp(760px, 74vw, 1420px)',
          }}
        >
          <h2
            className="font-nexa text-center text-black"
            style={{
              fontSize: 'clamp(22px, 2vw, 38px)',
              lineHeight: 1.12,
              fontWeight: 600,
              margin: '0 0 clamp(34px, 4vw, 66px)',
            }}
          >
            Investors
          </h2>

          <div className="w-full" style={{ marginBottom: 'clamp(16px, 1.5vw, 24px)' }}>
            <div
              className="mx-auto flex items-center justify-center rounded-[8px] bg-white"
              style={{
                ...DESKTOP_LOGO_CARD_STYLE,
                width: DESKTOP_LOGO_ROW_WIDTH,
                aspectRatio: '1227 / 322',
                border: '1px solid rgba(24,99,218,0.08)',
              }}
            >
              <img
                src={INVESTOR_LOGOS[0].src}
                alt={INVESTOR_LOGOS[0].name}
                className="block"
                style={{
                  width: 'clamp(330px, 34.17vw, 656px)',
                  aspectRatio: '656 / 217',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>

          <div
            className="grid grid-cols-2"
            style={{
              gap: '32px',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              width: DESKTOP_LOGO_ROW_WIDTH,
              marginBottom: 'clamp(24px, 2.6vw, 42px)',
            }}
          >
            {[INVESTOR_LOGOS[2], INVESTOR_LOGOS[1]].map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center rounded-[8px] bg-white"
                style={{
                  ...DESKTOP_LOGO_CARD_STYLE,
                  aspectRatio: '591 / 226',
                  border: '1px solid rgba(24,99,218,0.08)',
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="block"
                  style={{
                    width: 'clamp(160px, 12.92vw, 247.986px)',
                    aspectRatio: '218 / 117',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col items-center" style={{ gap: 'clamp(14px, 1.3vw, 24px)' }}>
            {DESKTOP_INVESTOR_ROWS.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid"
                style={{
                  gap: 'clamp(12px, 1.1vw, 20px)',
                  gridTemplateColumns: `repeat(${row.length}, ${DESKTOP_INVESTOR_CARD_SIZES[rowIndex]})`,
                  justifyContent: 'center',
                  maxWidth: '100%',
                }}
              >
                {row.map((person) => (
                  <a
                    key={person.name}
                    href={person.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full rounded-[6px]"
                    style={{
                      textDecoration: 'none',
                    }}
                    aria-label={`Open ${person.name} on LinkedIn`}
                  >
                    <img
                      src={person.card}
                      alt={person.name}
                      className="block w-full rounded-[6px]"
                      style={{
                      aspectRatio: person.aspectRatio || '291 / 332',
                      objectFit: 'cover',
                      }}
                    />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
