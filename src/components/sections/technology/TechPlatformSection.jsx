import controllerIcon from '../../../assets/new-tech-sections/controller.svg';
import customerValueIcon from '../../../assets/new-tech-sections/customer-value.svg';
import defensibilityIcon from '../../../assets/new-tech-sections/defensibility.svg';
import economicsIcon from '../../../assets/new-tech-sections/economics.svg';
import fasterTurnaroundIcon from '../../../assets/new-tech-sections/faster-turnaround.svg';
import hardToReplicaeIcon from '../../../assets/new-tech-sections/hard to replicae.svg';
import indiaFirstSupplyIcon from '../../../assets/new-tech-sections/india first supply.svg';
import newMarketsIcon from '../../../assets/new-tech-sections/new markets.svg';
import supplyChainIcon from '../../../assets/new-tech-sections/supply-chain.svg';
import youConfigureIcon from '../../../assets/new-tech-sections/you configure.svg';

const platformHighlights = [
  {
    title: 'Customer Value',
    description:
      'Higher efficiency at your exact torque and RPM. Better cooling. Faster integration. Local service and support.',
    icon: customerValueIcon,
  },
  {
    title: 'Faster Turnaround',
    description:
      'New product variants, service cycles, and sourcing done faster than any overseas lead time.',
    icon: fasterTurnaroundIcon,
  },
  {
    title: 'Controller Agnostic',
    description:
      'Compatible with all controllers. No system lock-in. Fits your existing architecture out of the box.',
    icon: controllerIcon,
  },
  {
    title: 'Economics',
    description:
      'Custom motors at lower cost, enabled by repeated tooling and optimised assembly across the platform.',
    icon: economicsIcon,
  },
  {
    title: 'Supply Chain',
    description:
      '80%+ domestic value addition. Common vendors across all variants. No single-point import dependency.',
    icon: supplyChainIcon,
  },
  {
    title: 'Defensibility',
    description:
      'Proprietary EM/thermal map library, in-house jigs, fixtures, and a locked supplier network that grows harder to replicate over time.',
    icon: defensibilityIcon,
  },
];

const platformCards = [
  {
    title: 'New Markets, Fast',
    titleLines: ['New Markets, Fast'],
    description:
      'The same platform powering e-scooters also serves agriculture, forklifts, and marine - no redesign required.',
    descriptionLines: [
      'The same platform powering e-',
      'scooters also serves agriculture,',
      'forklifts, and marine - no',
      'redesign required.',
    ],
    icon: newMarketsIcon,
  },
  {
    title: 'Hard To Replicate',
    titleLines: ['Hard To Replicate'],
    description:
      'Proprietary EM/thermal library and in-house tooling create a moat that compounds with every motor shipped.',
    descriptionLines: [
      'Proprietary EM/thermal library',
      'and in-house tooling create a',
      'moat that compounds with',
      'every motor shipped.',
    ],
    icon: hardToReplicaeIcon,
  },
  {
    title: 'India-First Supply Chain',
    titleLines: ['India-First Supply', 'Chain'],
    description:
      'Common vendors across variants mean no 16-week overseas lead times. 80%+ domestic value addition.',
    descriptionLines: [
      'Common vendors across variants',
      'mean no 16-week overseas lead',
      'times. 80%+ domestic value',
      'addition.',
    ],
    icon: indiaFirstSupplyIcon,
  },
  {
    title: 'You Configure, We Build',
    titleLines: ['You Configure, We', 'Build'],
    description:
      'Torque, voltage, form factor, shaft, cooling, sensing - every layer is a variable, not a fixed constraint.',
    descriptionLines: [
      'Torque, voltage, form factor,',
      'shaft, cooling, sensing - every',
      'layer is a variable, not a fixed',
      'constraint.',
    ],
    icon: youConfigureIcon,
  },
];

function HighlightCard({ item }) {
  return (
    <article
      className="border-b bg-white"
      style={{ borderColor: 'rgba(15, 23, 42, 0.1)' }}
    >
      <div
        className="flex h-full flex-col"
        style={{
          padding: 'clamp(28px, 3vw, 44px) clamp(22px, 2.9vw, 40px)',
          minHeight: 'clamp(208px, 17.5vw, 280px)',
        }}
      >
        <img
          src={item.icon}
          alt=""
          aria-hidden="true"
          className="block object-contain"
          style={{ width: '28px', height: '28px', marginBottom: 'clamp(18px, 1.8vw, 26px)' }}
        />
        <h3
          className="font-nexa text-[16px] text-black md:text-[30px]"
          style={{
            lineHeight: '1.2',
            fontWeight: 600,
            marginBottom: 'clamp(14px, 1.4vw, 20px)',
          }}
        >
          {item.title}
        </h3>
        <p
          className="font-metro text-[10px] text-black md:text-[18px]"
          style={{
            lineHeight: '1.72',
            maxWidth: '34ch',
            opacity: 0.82,
          }}
        >
          {item.description}
        </p>
      </div>
    </article>
  );
}

function PlatformAdvantageCard({ item }) {
  return (
    <article
      className="relative h-full"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0.5 0.5H99.5V88L88 99.5H0.5Z"
          fill="rgba(77, 214, 196, 0.06)"
          stroke="#9D9D9D"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div
        className="relative z-10 flex h-full flex-col md:min-h-[180px]"
        style={{
          padding: '22px 22px 20px 22px',
        }}
      >
        <img
          src={item.icon}
          alt=""
          aria-hidden="true"
          className="mb-3 block object-contain md:mb-5"
          style={{ width: '18px', height: '18px' }}
        />
        <h3
          className="mb-2.5 font-nexa md:mb-4"
          style={{
            color: '#1863DA',
            fontSize: '16px',
            lineHeight: '1.18',
            fontWeight: 600,
          }}
        >
          <span className="md:hidden">{item.title}</span>
          <span className="hidden md:block">
            {item.titleLines.map((line) => (
              <span
                key={line}
                className="block whitespace-nowrap"
                style={{ fontSize: '25px' }}
              >
                {line}
              </span>
            ))}
          </span>
        </h3>
        <p
          className="font-metro text-black"
          style={{
            fontSize: '10px',
            lineHeight: '1.45',
            opacity: 0.82,
          }}
        >
          <span className="md:hidden">{item.description}</span>
          <span className="hidden pr-6 md:block">
            {item.descriptionLines.map((line) => (
              <span
                key={line}
                className="block whitespace-nowrap"
                style={{ fontSize: '16px' }}
              >
                {line}
              </span>
            ))}
          </span>
        </p>
      </div>
    </article>
  );
}

export default function TechPlatformSection() {
  return (
    <section
      className="w-full bg-white"
      style={{ paddingBottom: 'clamp(56px, 7vw, 96px)' }}
    >
      <div
        className="mx-auto flex flex-col items-center text-center"
        style={{
          maxWidth: '1120px',
          padding: 'clamp(56px, 7vw, 96px) clamp(24px, 4vw, 40px) clamp(56px, 7vw, 96px)',
        }}
      >
        <p
          className="font-metro uppercase text-[#5b6472]"
          style={{
            fontSize: '24px',
            lineHeight: '1.3',
            letterSpacing: '0.12em',
            marginBottom: 'clamp(16px, 1.3vw, 20px)',
          }}
        >
          Why Naxatra
        </p>
        <h2
          className="font-nexa text-[26px] text-black md:text-[50px]"
          style={{
            lineHeight: '1.18',
            fontWeight: 600,
            maxWidth: '1180px',
          }}
        >
          <span className="hidden md:block">
            <span>Antarix: A </span>
            <span style={{ color: '#1863da' }}>Configurable Motor Platform</span>
            <br />
            <span>Solving Tech, Supply Chain, And</span>
            <br />
            <span>Economics </span>
            <span style={{ color: '#1863da' }}>All At Once</span>
          </span>
          <span className="md:hidden">
            <span>Antarix: A </span>
            <span style={{ color: '#1863da' }}>Configurable</span>
            <br />
            <span style={{ color: '#1863da' }}>Motor Platform</span>
            <span> Solving</span>
            <br />
            <span>Tech, Supply Chain,</span>
            <br />
            <span>And Economics </span>
            <span style={{ color: '#1863da' }}>All At Once</span>
          </span>
        </h2>
      </div>

      <div className="w-full border-t border-b md:hidden" style={{ borderColor: 'rgba(15, 23, 42, 0.1)' }}>
        <div
          className="grid grid-cols-2 divide-x"
          style={{ borderColor: 'rgba(15, 23, 42, 0.1)' }}
        >
          {platformHighlights.map((item) => (
            <HighlightCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="hidden w-full border-t border-b md:block" style={{ borderColor: 'rgba(15, 23, 42, 0.1)' }}>
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'clamp(24px, 4vw, 60px) minmax(0, 1fr) clamp(24px, 4vw, 60px)',
          }}
        >
          <div />
          <div className="border-l border-r" style={{ borderColor: 'rgba(15, 23, 42, 0.1)' }}>
            <div
              className="grid grid-cols-2 divide-x xl:grid-cols-3"
              style={{ borderColor: 'rgba(15, 23, 42, 0.1)' }}
            >
              {platformHighlights.map((item) => (
                <HighlightCard key={item.title} item={item} />
              ))}
            </div>
          </div>
          <div />
        </div>
      </div>

      <div
        className="mx-auto px-4 md:px-[90px]"
        style={{
          maxWidth: '1920px',
          paddingTop: 'clamp(32px, 4vw, 52px)',
        }}
      >
        <div
          className="grid grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-4"
          style={{ columnGap: '30px', rowGap: '30px' }}
        >
          {platformCards.map((item) => (
            <PlatformAdvantageCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
