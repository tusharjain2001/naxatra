import abhilash from '../../../assets/images/abhilash.png';
import arnav from '../../../assets/images/arnav.png';
import piyush from '../../../assets/images/piyush.png';
import aditya from '../../../assets/images/aditya.png';
import amit from '../../../assets/images/amit.png';
import vijay from '../../../assets/images/vijay.png';

const TEAM = [
  { name: 'Abhilash Maurya', card: abhilash },
  { name: 'Arnav Biswas', card: arnav },
  { name: 'Piyush Verma', card: piyush },
  { name: 'Aditya Singh', card: aditya },
  { name: 'Amit Kendre', card: amit },
  { name: 'Vijay Nair', card: vijay },
  { name: 'Amit Kendre duplicate', card: amit },
  { name: 'Vijay Nair duplicate', card: vijay },
];

function PersonCard({ person }) {
  return (
    <img
      src={person.card}
      alt={person.name.replace(' duplicate', '')}
      className="block h-full w-full"
      style={{
        aspectRatio: '287 / 326',
        objectFit: 'cover',
        boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
      }}
    />
  );
}

export default function AboutTeamSection() {
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
                  fontWeight: 600,
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

        <div
          className="grid grid-cols-1 items-start lg:grid-cols-[clamp(150px,12.6vw,242px)_minmax(280px,1fr)]"
          style={{
            columnGap: 'clamp(28px, 5.3vw, 102px)',
            rowGap: 'clamp(20px, 3vw, 36px)',
            maxWidth: 'clamp(760px, 72vw, 1382px)',
            margin: '0 auto',
          }}
        >
          <h3
            className="font-nexa text-black"
            style={{
              fontSize: 'clamp(20px, 2.08vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Our <span style={{ color: '#1863da' }}>Team</span>
          </h3>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            style={{
              gap: 'clamp(12px, 1vw, 20px)',
            }}
          >
            {TEAM.map((p) => <PersonCard key={p.name} person={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
