import logoNavi from '../../../assets/images/about-investor-logo-navi.png';
import logoGiraffe from '../../../assets/images/about-investor-logo-giraffe.png';
import logoBvfl from '../../../assets/images/about-investor-logo-bvfl.png';
import mohit from '../../../assets/images/mohitinv.png';
import himanshu from '../../../assets/images/himanshuenv.png';
import vijayShekhar from '../../../assets/images/vijayenv.png';
import aloke from '../../../assets/images/alokeinv.png';
import anupam from '../../../assets/images/anupam.png';
import rajnish from '../../../assets/images/rajnishenv.png';
import soumitra from '../../../assets/images/soumitra.png';
import sunil from '../../../assets/images/sunilenv.png';
import narayan from '../../../assets/images/narayanenv.png';
import investorsSection from '../../../assets/images/investors-section.png';

const TOP_INVESTORS = [
  { name: 'Mohit Tandon', card: mohit, aspectRatio: '315 / 359' },
  { name: 'Himanshu Aggarwal', card: himanshu, aspectRatio: '315 / 359' },
  { name: 'Vijay Shekhar Sharma', card: vijayShekhar, aspectRatio: '315 / 359' },
];

const BOTTOM_INVESTORS = [
  { name: 'Aloke Bajpai', card: aloke },
  { name: 'Anupam', card: anupam },
  { name: 'Rajnish Kumar', card: rajnish },
  { name: 'Sunil Kalra', card: sunil },
  { name: 'Narayan', card: narayan },
  { name: 'Soumitra', card: soumitra },
];

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
          paddingTop: 'clamp(48px, 4.7vw, 91px)',
          paddingBottom: 'clamp(48px, 4.7vw, 91px)',
          paddingLeft: 'clamp(24px, 9.9vw, 191px)',
          paddingRight: 'clamp(12px, 4.2vw, 80px)',
        }}
      >
        <img
          src={investorsSection}
          alt="Investors section"
          className="block w-full"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
    </section>
  );
}
