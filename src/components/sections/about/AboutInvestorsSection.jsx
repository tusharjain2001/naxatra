import logoNavi from '../../../assets/images/about-investor-logo-navi.png';
import logoBvfl from '../../../assets/images/about-investor-logo-bvfl.png';
import mohit from '../../../assets/images/about-investor-mohit.png';
import himanshu from '../../../assets/images/about-investor-himanshu.png';
import vijayShekhar from '../../../assets/images/about-investor-vijayshekhar.png';
import aloke from '../../../assets/images/about-investor-aloke.png';
import rajnish from '../../../assets/images/about-investor-rajnish.png';
import sunil from '../../../assets/images/about-investor-sunil.png';
import narayan from '../../../assets/images/about-investor-narayan.png';

const ROW1 = [
  { name: 'Mohit Tandon', role: 'Founder Delhivery', photo: mohit },
  { name: 'Himanshu Aggarwal', role: 'Founder Aspiring Minds', photo: himanshu },
  { name: 'Vijay Shekhar Sharma', role: 'Founder Paytm', photo: vijayShekhar },
];

const ROW2 = [
  { name: 'Aloke Bajpai', role: 'Cofounder Ixigo', photo: aloke },
  { name: 'Rajnish Kumar', role: 'Cofounder Ixigo', photo: rajnish },
  { name: 'Sunil Kalra', role: 'Angel Investor', photo: sunil },
  { name: 'Narayan', role: 'Ather', photo: narayan },
];

function InvestorCard({ person, large }) {
  return (
    <div
      className="relative overflow-hidden bg-white rounded"
      style={{
        width: large ? 'clamp(160px, 16.4vw, 314px)' : 'clamp(140px, 15.2vw, 291px)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        borderRadius: 'clamp(4px, 0.3vw, 6px)',
      }}
    >
      <img
        src={person.photo}
        alt={person.name}
        className="w-full block"
        style={{ aspectRatio: '1 / 1', objectFit: 'cover', objectPosition: 'top' }}
      />
      <div
        className="flex flex-col"
        style={{ padding: 'clamp(8px, 0.73vw, 14px) clamp(10px, 0.83vw, 16px)', background: '#fff' }}
      >
        <span
          className="font-nexa text-black"
          style={{ fontSize: 'clamp(11px, 1.09vw, 20.9px)', lineHeight: '1.4' }}
        >
          {person.name}
        </span>
        <span
          className="font-metro"
          style={{ fontSize: 'clamp(9px, 0.78vw, 14.9px)', color: '#2c2c2c', lineHeight: '1.6' }}
        >
          {person.role}
        </span>
      </div>
    </div>
  );
}

export default function AboutInvestorsSection() {
  return (
    <section className="w-full" style={{ backgroundColor: '#f4fdfb' }}>
      <div
        className="mx-auto"
        style={{
          maxWidth: '1920px',
          padding: 'clamp(48px, 4.7vw, 91px) clamp(24px, 9.9vw, 191px)',
        }}
      >
        {/* Heading */}
        <h2
          className="font-nexa text-black"
          style={{
            fontSize: 'clamp(28px, 3.54vw, 68px)',
            lineHeight: '1.15',
            fontWeight: 400,
            marginBottom: 'clamp(24px, 2.6vw, 50px)',
          }}
        >
          Investors
        </h2>

        {/* Investor logos */}
        <div
          className="flex flex-wrap items-center"
          style={{ gap: 'clamp(16px, 2.08vw, 40px)', marginBottom: 'clamp(24px, 2.6vw, 50px)' }}
        >
          <img src={logoNavi} alt="Navi" style={{ height: 'clamp(28px, 2.6vw, 50px)', width: 'auto', objectFit: 'contain' }} />
          <img src={logoBvfl} alt="BVFL" style={{ height: 'clamp(28px, 2.6vw, 50px)', width: 'auto', objectFit: 'contain' }} />
        </div>

        {/* Row 1 — larger cards */}
        <div
          className="flex flex-wrap"
          style={{ gap: 'clamp(12px, 1.56vw, 30px)', marginBottom: 'clamp(12px, 1.56vw, 30px)' }}
        >
          {ROW1.map((p) => <InvestorCard key={p.name} person={p} large />)}
        </div>

        {/* Row 2 — smaller cards */}
        <div className="flex flex-wrap" style={{ gap: 'clamp(12px, 1.56vw, 30px)' }}>
          {ROW2.map((p) => <InvestorCard key={p.name} person={p} />)}
        </div>
      </div>
    </section>
  );
}
