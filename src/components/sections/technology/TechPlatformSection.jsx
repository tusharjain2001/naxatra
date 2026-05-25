import { useState } from 'react';
import controllerIcon from '../../../assets/new-tech-sections/controller.svg';
import customerValueIcon from '../../../assets/new-tech-sections/customer-value.svg';
import defensibilityIcon from '../../../assets/new-tech-sections/defensibility.svg';
import threeYearWarrantyIcon from '../../../assets/new-tech-sections/3 year warranty.svg';
import araiIcon from '../../../assets/new-tech-sections/arai.svg';
import designDbIcon from '../../../assets/new-tech-sections/designdb.svg';
import emCoreIcon from '../../../assets/new-tech-sections/emcore.svg';
import economicsIcon from '../../../assets/new-tech-sections/economics.svg';
import fasterTurnaroundIcon from '../../../assets/new-tech-sections/faster-turnaround.svg';
import hardToReplicaeIcon from '../../../assets/new-tech-sections/hard to replicae.svg';
import indiaFirstSupplyIcon from '../../../assets/new-tech-sections/india first supply.svg';
import integrationMethodIcon from '../../../assets/new-tech-sections/integrationmethod.svg';
import iatfIcon from '../../../assets/new-tech-sections/iatf.svg';
import ip67Icon from '../../../assets/new-tech-sections/ip67.svg';
import isoIcon from '../../../assets/new-tech-sections/iso.svg';
import madeInIndiaIcon from '../../../assets/new-tech-sections/madeinindia.svg';
import magnetIcon from '../../../assets/new-tech-sections/magnet.svg';
import mechAndThermalIcon from '../../../assets/new-tech-sections/mechandthermal.svg';
import newMarketsIcon from '../../../assets/new-tech-sections/new markets.svg';
import senseAndControlIcon from '../../../assets/new-tech-sections/senseandcontrol.svg';
import supplyChainIcon from '../../../assets/new-tech-sections/supply-chain.svg';
import testAndAnalyticsIcon from '../../../assets/new-tech-sections/testandanalytics.svg';
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

const certificationHighlights = [
  {
    title: 'ISO 9001:2015',
    description: 'Certified quality management system covering design, production, QC, and customer support.',
    icon: isoIcon,
  },
  {
    title: 'ARAI Recognised',
    description: 'Automotive Research Association of India - credibility for EV and automotive applications.',
    icon: araiIcon,
  },
  {
    title: 'IATF 16949 In Progress',
    description: 'Automotive-grade QMS initiated for Tier-1 and OEM supplier readiness.',
    icon: iatfIcon,
  },
  {
    title: 'IP67 - H-Class Insulation',
    description: 'Full submersion rated H-class insulation validated for sustained high-temperature operation.',
    icon: ip67Icon,
  },
  {
    title: '3-Year Motor Warranty',
    description: 'On every unit shipped, covering manufacturing and material defects - not just paper coverage.',
    icon: threeYearWarrantyIcon,
  },
  {
    title: '100% Made In India',
    description: '85% localised supply chain. PLM-qualifying. Every motor designed, built, and tested in Ahmedabad.',
    icon: madeInIndiaIcon,
  },
];

const customisableLayers = [
  {
    id: 'design-db',
    label: 'Design DB And EM Maps',
    layer: 'Layer 01',
    title: 'Design DB & EM Maps',
    description:
      'Years of accumulated material, winding, magnet, performance, and thermal data - every motor we build draws from this library. It means faster design cycles and fewer unknowns before a prototype is even made.',
    chips: ['Thermal data', 'Winding maps', 'Performance library', 'Material data'],
    icon: designDbIcon,
  },
  {
    id: 'em-cores',
    label: 'EM Cores',
    layer: 'Layer 02',
    title: 'EM Cores',
    description:
      'Axial and radial flux orientations available in a single platform. Motor designs spanning 100 W to 10 kW across 48, 72, and 96 V - without starting from scratch each time.',
    chips: ['Axial flux', 'Radial flux', '100 W - 10 kW', '48 / 72 / 96 V'],
    icon: emCoreIcon,
  },
  {
    id: 'magnet-systems',
    label: 'Magnet Systems',
    layer: 'Layer 03',
    title: 'Magnet Systems',
    description:
      'NdFeB HRE and HRE-free variants, ferrite, and multiple placement patterns - each matched to thermal limits, cost targets, and supply chain risk. You choose the trade-off; we engineer it in.',
    chips: ['NdFeB HRE', 'HRE-free', 'Ferrite', 'Multiple patterns'],
    icon: magnetIcon,
  },
  {
    id: 'mech-thermal',
    label: 'Mech & Thermal Modules',
    layer: 'Layer 04',
    title: 'Mech & Thermal Modules',
    description:
      'Housings, bearings, IP ratings, and air or liquid cooling methods - engineered for the environment your motor actually operates in. Indian summers, monsoon flooding, and dusty industrial sites are the baseline, not the edge case.',
    chips: ['IP67', 'H-class insulation', 'Air cooling', 'Liquid cooling'],
    icon: mechAndThermalIcon,
  },
  {
    id: 'sense-control',
    label: 'Sense & Control',
    layer: 'Layer 05',
    title: 'Sense & Control',
    description:
      'Hall, encoder, resolver, and FOC-sensorless sensing options. Controller-agnostic tuning means you keep your existing control architecture - Naxatra fits into your system, not the other way around.',
    chips: ['Hall sensor', 'FOC sensorless', 'Encoder', 'Resolver', 'Controller agnostic'],
    icon: senseAndControlIcon,
  },
  {
    id: 'integration',
    label: 'Integration Methods',
    layer: 'Layer 06',
    title: 'Integration Methods',
    description:
      'Customised gear and spline interfaces, connectors, and harnesses configured per application. Whether it is a cargo trike, an agricultural implement, or a floor sweeper - the motor mounts as if it was designed for it. Because it was.',
    chips: ['Gear interfaces', 'Spline shafts', 'Custom harness', 'App-specific connectors'],
    icon: integrationMethodIcon,
  },
  {
    id: 'test-analytics',
    label: 'Test & Analytics',
    layer: 'Layer 07',
    title: 'Test & Analytics',
    description:
      'In-house FMEA, EOL maps, field data-loggers, and OTA controller tuning. Performance is measured at every stage - not assumed. Every number in our spec sheets is backed by test data from our own lab.',
    chips: ['FMEA', 'EOL maps', 'Data loggers', 'OTA tuning'],
    icon: testAndAnalyticsIcon,
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
          style={{ width: '44px', height: '44px', marginBottom: 'clamp(18px, 1.8vw, 26px)' }}
        />
        <h3
          className="font-nexa text-[16px] text-black md:text-[24px]"
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

function CertificationCard({ item }) {
  return (
    <article className="border-b bg-white" style={{ borderColor: 'rgba(15, 23, 42, 0.1)' }}>
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
          className="font-metro text-black"
          style={{
            fontSize: 'clamp(10px, 0.84vw, 16px)',
            lineHeight: '1.65',
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
  const outerClipPath = 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)';
  const innerClipPath = 'polygon(0 0, 100% 0, 100% calc(100% - 11px), calc(100% - 11px) 100%, 0 100%)';
  const mobileCardStyle = {
    clipPath: outerClipPath,
    background: '#F4FCFB',
    border: '1px solid #9D9D9D',
    padding: '22px 22px 20px 22px',
  };
  const desktopShellStyle = {
    clipPath: outerClipPath,
    background: 'linear-gradient(93deg, #F0F0F0 0.83%, #C3C3C3 44.19%, #F0F0F0 98.87%)',
  };
  const desktopInnerStyle = {
    clipPath: innerClipPath,
    background: '#F4FCFB',
    padding: '22px 22px 20px 22px',
  };

  return (
    <>
      <article
        className="h-full p-[1px] md:hidden"
        style={{
          clipPath: outerClipPath,
          background: '#9D9D9D',
        }}
      >
        <div
          className="flex h-full flex-col"
          style={{
            ...mobileCardStyle,
            clipPath: innerClipPath,
            border: 'none',
          }}
        >
          <img
            src={item.icon}
            alt=""
            aria-hidden="true"
            className="mb-3 block object-contain"
            style={{ width: '18px', height: '18px' }}
          />
          <h3
            className="mb-2.5 font-nexa"
            style={{
              color: '#1863DA',
              fontSize: '16px',
              lineHeight: '1.18',
              fontWeight: 600,
            }}
          >
            {item.title}
          </h3>
          <p
            className="font-metro text-black"
            style={{
              fontSize: '10px',
              lineHeight: '1.45',
              opacity: 0.82,
            }}
          >
            {item.description}
          </p>
        </div>
      </article>

      <article
        className="relative hidden h-full p-[1px] md:block"
        style={desktopShellStyle}
      >
        <div
          className="flex h-full flex-col md:min-h-[180px]"
          style={desktopInnerStyle}
        >
          <img
            src={item.icon}
            alt=""
            aria-hidden="true"
            className="mb-5 block object-contain"
            style={{ width: '18px', height: '18px' }}
          />
          <h3
            className="mb-4 font-nexa"
            style={{
              color: '#1863DA',
              fontSize: '16px',
              lineHeight: '1.18',
              fontWeight: 600,
            }}
          >
            <span className="block">
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
            <span className="pr-6">
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
    </>
  );
}

export default function TechPlatformSection() {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const activeLayer = customisableLayers[activeLayerIndex];

  const goToPreviousLayer = () => {
    setActiveLayerIndex((current) => (current - 1 + customisableLayers.length) % customisableLayers.length);
  };

  const goToNextLayer = () => {
    setActiveLayerIndex((current) => (current + 1) % customisableLayers.length);
  };

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

      <div
        className="mx-auto"
        style={{
          maxWidth: '1440px',
          padding: 'clamp(56px, 7vw, 96px) clamp(16px, 4vw, 90px) clamp(56px, 7vw, 96px)',
        }}
      >
        <div
          className="mx-auto flex flex-col items-center text-center"
          style={{ maxWidth: '860px', marginBottom: 'clamp(28px, 3vw, 40px)' }}
        >
          <h2
            className="font-nexa text-black"
            style={{
              fontSize: 'clamp(26px, 3.1vw, 42px)',
              lineHeight: '1.1',
              fontWeight: 600,
              marginBottom: 'clamp(18px, 1.8vw, 24px)',
            }}
          >
            <span className="hidden md:block">
              <span className="block">Deeper Customisable Layers Deliver</span>
              <span className="block">
                The Exact <span style={{ color: '#1863DA' }}>Torque, Thermal, And</span>
              </span>
              <span className="block" style={{ color: '#1863DA' }}>Control Profile</span>
            </span>
            <span className="md:hidden" style={{ fontSize: '26px', lineHeight: '1.08' }}>
              <span className="block whitespace-nowrap">Deeper Customisable Layers</span>
              <span className="block">
                Deliver <span style={{ color: '#1863DA' }}>The Exact Torque,</span>
              </span>
              <span className="block" style={{ color: '#1863DA' }}>Thermal, And Control Profile</span>
            </span>
          </h2>
          <p
            className="font-metro text-black"
            style={{
              fontSize: 'clamp(12px, 1vw, 16px)',
              lineHeight: '1.65',
              maxWidth: '48ch',
              opacity: 0.82,
            }}
          >
            Seven independent layers - each tunable to your application without redesigning the motor from scratch.
            Click any layer to explore what it controls.
          </p>
        </div>

        <div
          className="mx-auto grid grid-cols-[132px_minmax(0,1fr)] gap-3 md:grid-cols-1 lg:grid-cols-[380px_minmax(0,760px)] lg:gap-[40px]"
          style={{ width: '100%', maxWidth: '1180px' }}
        >
          <div
            className="self-start overflow-hidden"
            style={{
              background: 'rgba(77, 214, 196, 0.06)',
            }}
          >
            {customisableLayers.map((layer, index) => {
              const isActive = index === activeLayerIndex;

              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActiveLayerIndex(index)}
                  className="flex w-full items-center text-left transition-colors md:px-[10px] md:py-[12px]"
                  style={{
                    padding: '10px 8px',
                    gap: '8px',
                    background: isActive ? '#E9FAF7' : '#F8FEFD',
                    color: isActive ? '#1863DA' : '#3d4653',
                    borderBottom: index === customisableLayers.length - 1 ? 'none' : '1px solid rgba(15, 23, 42, 0.06)',
                  }}
                >
                  <img
                    src={layer.icon}
                    alt=""
                    aria-hidden="true"
                    className="block object-contain"
                    style={{ width: '18px', height: '18px', flexShrink: 0 }}
                  />
                  <span
                    className="font-metro text-[8px] leading-[1.2] md:text-[20px] md:leading-[1.35]"
                    style={{ fontWeight: isActive ? 600 : 400 }}
                  >
                    {layer.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="flex flex-col"
            style={{
              minHeight: 'clamp(250px, 26vw, 400px)',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(180deg, #9D9D9D 0%, #FFFFFF 100%)',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                padding: '1px 1px 0',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  background: 'linear-gradient(180deg, #F3FCFB 0%, #FFFFFF 100%)',
                  borderTopLeftRadius: '7px',
                  borderTopRightRadius: '7px',
                  padding: 'clamp(14px, 2vw, 30px)',
                }}
              >
                <div
                  className="flex items-start gap-[10px] md:gap-4"
                  style={{ paddingBottom: 'clamp(14px, 1.8vw, 24px)', borderBottom: '1px solid rgba(15, 23, 42, 0.08)' }}
                >
                  <img
                    src={activeLayer.icon}
                    alt=""
                    aria-hidden="true"
                    className="block object-contain"
                    style={{ width: 'clamp(26px, 2.8vw, 52px)', height: 'clamp(26px, 2.8vw, 52px)', flexShrink: 0, marginTop: '2px' }}
                  />
                  <div>
                    <p
                      className="font-metro uppercase text-[#7a7f87]"
                      style={{ fontSize: '8px', letterSpacing: '0.08em', lineHeight: '1.2', marginBottom: '4px' }}
                    >
                      {activeLayer.layer}
                    </p>
                    <h3
                      className="font-nexa text-[#1863DA]"
                      style={{ fontSize: 'clamp(14px, 2vw, 36px)', lineHeight: '1.14', fontWeight: 600 }}
                    >
                      {activeLayer.title}
                    </h3>
                  </div>
                </div>

                <div style={{ paddingTop: 'clamp(16px, 2vw, 28px)' }}>
                  <p
                    className="font-metro text-black"
                    style={{
                      fontSize: 'clamp(10px, 1vw, 16px)',
                      lineHeight: '1.45',
                      maxWidth: '68ch',
                      opacity: 0.82,
                      marginBottom: 'clamp(14px, 1.8vw, 26px)',
                    }}
                  >
                    {activeLayer.description}
                  </p>
                  <div className="flex flex-wrap gap-[8px] md:gap-2">
                    {activeLayer.chips.map((chip) => (
                      <span
                        key={chip}
                        className="font-metro whitespace-nowrap text-[8px] md:text-[16px]"
                        style={{
                          border: '1px solid rgba(15, 23, 42, 0.12)',
                          borderRadius: '999px',
                          padding: '5px 10px',
                          lineHeight: '1.2',
                          color: '#7a7f87',
                          background: '#fff',
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto flex justify-end gap-3 md:gap-4" style={{ padding: 'clamp(10px, 2vw, 18px) 4px 0 0' }}>
              <button
                type="button"
                onClick={goToPreviousLayer}
                aria-label="Previous layer"
                className="flex items-center justify-center rounded-full"
                style={{ width: '36px', height: '32px', color: '#A9C7FF' }}
              >
                <svg viewBox="0 0 32 24" aria-hidden="true" style={{ width: '30px', height: '18px' }}>
                  <path d="M13 5 6 12l7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 12h18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNextLayer}
                aria-label="Next layer"
                className="flex items-center justify-center rounded-full"
                style={{ width: '36px', height: '32px', color: '#1863DA' }}
              >
                <svg viewBox="0 0 32 24" aria-hidden="true" style={{ width: '30px', height: '18px' }}>
                  <path d="m19 5 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12h18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto flex flex-col items-center text-center"
        style={{
          maxWidth: '1120px',
          padding: 'clamp(56px, 7vw, 96px) clamp(24px, 4vw, 40px) clamp(40px, 5vw, 60px)',
        }}
      >
        <p
          className="font-metro uppercase text-[#5b6472]"
          style={{
            fontSize: 'clamp(11px, 0.9vw, 13px)',
            lineHeight: '1.3',
            letterSpacing: '0.12em',
            marginBottom: 'clamp(16px, 1.3vw, 20px)',
          }}
        >
          Validated & Certified
        </p>
        <h2
          className="font-nexa text-black"
          style={{
            fontSize: 'clamp(26px, 3.2vw, 42px)',
            lineHeight: '1.18',
            fontWeight: 600,
            maxWidth: '820px',
          }}
        >
          <span className="hidden md:block">
            Quality Systems <span style={{ color: '#1863DA' }}>You Can Audit</span>
          </span>
          <span className="md:hidden">
            <span className="block">Quality Systems</span>
            <span className="block" style={{ color: '#1863DA' }}>You Can Audit</span>
          </span>
        </h2>
      </div>

      <div className="w-full border-t border-b md:hidden" style={{ borderColor: 'rgba(15, 23, 42, 0.1)' }}>
        <div className="grid grid-cols-2 divide-x" style={{ borderColor: 'rgba(15, 23, 42, 0.1)' }}>
          {certificationHighlights.map((item) => (
            <CertificationCard key={item.title} item={item} />
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
            <div className="grid grid-cols-2 divide-x xl:grid-cols-3" style={{ borderColor: 'rgba(15, 23, 42, 0.1)' }}>
              {certificationHighlights.map((item) => (
                <CertificationCard key={item.title} item={item} />
              ))}
            </div>
          </div>
          <div />
        </div>
      </div>
    </section>
  );
}
