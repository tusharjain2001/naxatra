import abhilash from '../../../assets/images/about-team-abhilash.png';
import arnav from '../../../assets/images/about-team-arnav.png';
import piyush from '../../../assets/images/about-team-piyush.png';
import aditya from '../../../assets/images/about-team-aditya.png';
import amit from '../../../assets/images/about-team-amit.png';
import vijay from '../../../assets/images/about-team-vijay.png';

const TEAM = [
  { name: 'Abhilash Maurya', role: 'Co-founder & CEO', photo: abhilash },
  { name: 'Arnav Biswas', role: 'Co-founder & COO', photo: arnav },
  { name: 'Piyush Verma', role: 'Co-founder & CTO', photo: piyush },
  { name: 'Aditya Singh', role: 'Business Development Manager', photo: aditya },
  { name: 'Amit Kendre', role: 'Sr. Product Design Engineer', photo: amit },
  { name: 'Vijay Nair', role: 'Head HR & Admin', photo: vijay },
];

function PersonCard({ person }) {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden"
      style={{
        width: 'clamp(160px, 14.9vw, 286px)',
        borderRadius: 'clamp(4px, 0.28vw, 5.4px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
      }}
    >
      <img
        src={person.photo}
        alt={person.name}
        className="w-full block"
        style={{ aspectRatio: '286 / 247', objectFit: 'cover', objectPosition: 'top' }}
      />
      {/* Name tag */}
      <div
        className="w-full flex flex-col items-start"
        style={{
          padding: 'clamp(8px, 0.73vw, 14px) clamp(10px, 0.83vw, 16px)',
          background: 'linear-gradient(135deg, rgba(24,99,218,0.92) 0%, rgba(0,0,0,0.85) 100%)',
        }}
      >
        <span
          className="font-nexa"
          style={{ fontSize: 'clamp(11px, 1.04vw, 20px)', color: '#4dd6c4', lineHeight: '1.3' }}
        >
          {person.name}
        </span>
        <span
          className="font-metro"
          style={{ fontSize: 'clamp(9px, 0.73vw, 14px)', color: 'white', lineHeight: '1.5' }}
        >
          {person.role}
        </span>
      </div>
    </div>
  );
}

export default function AboutTeamSection() {
  const row1 = TEAM.slice(0, 4);
  const row2 = TEAM.slice(4);

  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto"
        style={{
          maxWidth: '1920px',
          padding: 'clamp(48px, 4.7vw, 91px) clamp(24px, 9.9vw, 191px)',
        }}
      >
        {/* Vision intro */}
        <div
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)',
            background: '#cbd8d5',
            padding: '1px',
            marginBottom: 'clamp(36px, 4.2vw, 70px)',
          }}
        >
          <div
            className="grid grid-cols-1 items-center lg:grid-cols-[minmax(220px,0.9fr)_minmax(280px,1.45fr)]"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)',
              background: '#f5fbfa',
              minHeight: 'clamp(128px, 13vw, 220px)',
              columnGap: 'clamp(32px, 5.4vw, 104px)',
              rowGap: 'clamp(16px, 3vw, 32px)',
              padding: 'clamp(24px, 3vw, 56px) clamp(30px, 6.2vw, 119px)',
            }}
          >
            <div>
              <p
                className="font-metro text-black"
                style={{
                  fontSize: 'clamp(8px, 0.63vw, 12px)',
                  lineHeight: 1.2,
                  margin: '0 0 clamp(12px, 1vw, 18px)',
                }}
              >
                [An introduction with the team]
              </p>
              <h2
                className="font-nexa text-black"
                style={{
                  fontSize: 'clamp(22px, 2.15vw, 41px)',
                  lineHeight: 1.18,
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                <span style={{ color: '#1863da' }}>A Vision</span> For
                <br />
                Tomorrow
              </h2>
            </div>

            <p
              className="font-metro text-black"
              style={{
                fontSize: 'clamp(8px, 0.73vw, 14px)',
                lineHeight: 1.55,
                margin: 0,
                maxWidth: 'clamp(360px, 41vw, 790px)',
              }}
            >
              Founded in 2021 by{' '}
              <strong>Abhilash Maurya, Arnav Biswas, and Piyush Verma,</strong>{' '}
              Naxatra Labs brings groundbreaking axial and radial flux motors technology to the world of electric mobility. From our Ahmedabad base, we craft lightweight, power-dense solutions that redefine how vehicles and industries move.
            </p>
          </div>
        </div>

        {/* Our Team heading */}
        <h3
          className="font-nexa text-black"
          style={{
            fontSize: 'clamp(20px, 2.08vw, 40px)',
            fontWeight: 400,
            lineHeight: '1.2',
            marginBottom: 'clamp(20px, 2.08vw, 40px)',
          }}
        >
          Our Team
        </h3>

        {/* Row 1 */}
        <div
          className="flex flex-wrap"
          style={{ gap: 'clamp(12px, 1.56vw, 30px)', marginBottom: 'clamp(12px, 1.56vw, 30px)' }}
        >
          {row1.map((p) => <PersonCard key={p.name} person={p} />)}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap" style={{ gap: 'clamp(12px, 1.56vw, 30px)' }}>
          {row2.map((p) => <PersonCard key={p.name} person={p} />)}
        </div>
      </div>
    </section>
  );
}
