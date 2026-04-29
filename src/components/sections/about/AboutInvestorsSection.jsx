import logoNavi from '../../../assets/images/about-investor-logo-navi.png';
import logoBvfl from '../../../assets/images/about-investor-logo-bvfl.png';
import mohit from '../../../assets/images/mohitinv.png';
import himanshu from '../../../assets/images/himanshuenv.png';
import vijayShekhar from '../../../assets/images/vijayenv.png';
import aloke from '../../../assets/images/alokeinv.png';
import rajnish from '../../../assets/images/rajnishenv.png';
import sunil from '../../../assets/images/sunilenv.png';
import narayan from '../../../assets/images/narayanenv.png';

const TOP_INVESTORS = [
  { name: 'Mohit Tandon', card: mohit, aspectRatio: '315 / 359' },
  { name: 'Himanshu Aggarwal', card: himanshu, aspectRatio: '315 / 359' },
  { name: 'Vijay Shekhar Sharma', card: vijayShekhar, aspectRatio: '291 / 358' },
];

const BOTTOM_INVESTORS = [
  { name: 'Aloke Bajpai', card: aloke },
  { name: 'Rajnish Kumar', card: rajnish },
  { name: 'Sunil Kalra', card: sunil },
  { name: 'Narayan', card: narayan },
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
        maxWidth: size === 'large' ? 'clamp(150px, 15.5vw, 315px)' : 'clamp(140px, 14.3vw, 291px)',
      }}
    />
  );
}

export default function AboutInvestorsSection() {
  return (
    <section className="w-full" style={{ backgroundColor: '#f4fdfb' }}>
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

        <div
          className="flex items-center justify-center"
          style={{
            gap: '26px',
            marginBottom: '24px',
          }}
        >
          <img
            src={logoNavi}
            alt="Rainmatter"
            style={{
              width: '132px',
              height: 'auto',
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
          <img
            src={logoBvfl}
            alt="GVFL"
            style={{
              width: '128px',
              height: 'auto',
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
        </div>

        <div
          className="grid grid-cols-2 justify-items-center"
          style={{
            gap: '12px',
          }}
        >
          {[...TOP_INVESTORS, ...BOTTOM_INVESTORS].map((person) => (
            <img
              key={person.name}
              src={person.card}
              alt={person.name}
              className="block w-full"
              style={{
                maxWidth: '216px',
                aspectRatio: person.aspectRatio || '291 / 332',
                objectFit: 'cover',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
            />
          ))}
        </div>
      </div>

      <div
        className="mx-auto hidden md:block"
        style={{
          maxWidth: '1920px',
          padding: 'clamp(42px, 5.8vw, 92px) clamp(24px, 9.9vw, 191px)',
        }}
      >
        <div
          className="grid grid-cols-1 items-start lg:grid-cols-[clamp(220px,18vw,320px)_minmax(280px,1fr)]"
          style={{
            columnGap: 'clamp(28px, 5.3vw, 102px)',
            rowGap: 'clamp(20px, 3vw, 36px)',
            paddingLeft: 'clamp(30px, 6.2vw, 119px)',
          }}
        >
          <div
            className="justify-self-start text-left"
            style={{
              width: 'clamp(180px, 18vw, 260px)',
            }}
          >
            <h2
              className="font-nexa text-black"
              style={{
                fontSize: 'clamp(24px, 2.6vw, 44px)',
                lineHeight: 1.1,
                fontWeight: 400,
                margin: '0 0 clamp(12px, 1.15vw, 18px)',
              }}
            >
              Investors
            </h2>

            <div
              className="flex items-center justify-start"
              style={{
                gap: 'clamp(14px, 1.6vw, 24px)',
                flexWrap: 'nowrap',
              }}
            >
              <img
                src={logoNavi}
                alt="Rainmatter"
                style={{
                  width: 'clamp(86px, 7.4vw, 118px)',
                  height: 'auto',
                  objectFit: 'contain',
                  flexShrink: 0,
                }}
              />
              <img
                src={logoBvfl}
                alt="GVFL"
                style={{
                  width: 'clamp(74px, 6.8vw, 108px)',
                  height: 'auto',
                  objectFit: 'contain',
                  flexShrink: 0,
                }}
              />
            </div>
          </div>

          <div className="flex w-full flex-col items-start">
            <div
              className="grid grid-cols-1 sm:grid-cols-3 justify-items-center lg:justify-items-end lg:ml-auto"
              style={{
                gap: 'clamp(14px, 1.8vw, 26px)',
                width: 'fit-content',
                maxWidth: '100%',
                marginTop: 'clamp(24px, 2.5vw, 48px)',
                marginBottom: 'clamp(16px, 1.8vw, 26px)',
              }}
            >
              {TOP_INVESTORS.map((person) => (
                <InvestorImage key={person.name} person={person} size="large" />
              ))}
            </div>

            <div
              className="grid grid-cols-2 sm:grid-cols-4 justify-items-center lg:justify-items-end lg:ml-auto"
              style={{
                gap: 'clamp(14px, 1.8vw, 26px)',
                width: 'fit-content',
                maxWidth: '100%',
              }}
            >
              {BOTTOM_INVESTORS.map((person) => (
                <InvestorImage key={person.name} person={person} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
