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
        className="mx-auto"
        style={{
          maxWidth: '1920px',
          padding: 'clamp(42px, 5.8vw, 92px) clamp(24px, 9.9vw, 191px)',
        }}
      >
        <div
          className="grid grid-cols-1 items-start lg:grid-cols-[clamp(200px,23vw,330px)_minmax(0,1fr)]"
          style={{
            maxWidth: 'clamp(760px, 72vw, 1382px)',
            margin: '0 auto',
            columnGap: 'clamp(28px, 4.8vw, 76px)',
            rowGap: 'clamp(28px, 4vw, 48px)',
          }}
        >
          <div>
            <h2
              className="font-nexa text-black"
              style={{
                fontSize: 'clamp(28px, 3vw, 44px)',
                lineHeight: 1.1,
                fontWeight: 400,
                margin: '0 0 clamp(10px, 1.15vw, 18px)',
              }}
            >
              Investors
            </h2>

            <div
              className="flex flex-wrap items-start"
              style={{
                gap: 'clamp(20px, 2.2vw, 34px)',
              }}
            >
              <img
                src={logoNavi}
                alt="Rainmatter"
                style={{
                  width: 'clamp(92px, 9.4vw, 142px)',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
              <img
                src={logoBvfl}
                alt="GVFL"
                style={{
                  width: 'clamp(82px, 8.4vw, 128px)',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>

          <div>
            <div
              className="grid grid-cols-1 sm:grid-cols-3"
              style={{
                gap: 'clamp(14px, 1.8vw, 26px)',
                maxWidth: 'clamp(470px, 49vw, 760px)',
                marginLeft: 0,
                marginTop: 'clamp(48px, 5vw, 80px)',
                marginBottom: 'clamp(16px, 1.8vw, 26px)',
              }}
            >
              {TOP_INVESTORS.map((person) => (
                <InvestorImage key={person.name} person={person} size="large" />
              ))}
            </div>

            <div
              className="grid grid-cols-2 sm:grid-cols-4"
              style={{
                gap: 'clamp(14px, 1.8vw, 26px)',
                maxWidth: 'clamp(620px, 61vw, 940px)',
                marginLeft: 'clamp(-96px, -5vw, 0px)',
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
