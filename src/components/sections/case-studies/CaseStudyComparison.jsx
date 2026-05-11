import { useState } from 'react';
import expandButton from '../../../assets/socialhandles/expand.png';

const rows = [
  { feature: 'Peak Efficiency', brushed: '~70%', bldc: '90%', improvement: '+29%' },
  { feature: 'Battery Runtime', brushed: 'Baseline(1.0X cycles/charge)', bldc: '1.2X cycles/charge', improvement: '+20%' },
  { feature: 'Est. Motor Lifespan', brushed: '~2000-4000 hrs.', bldc: '>10,000 hrs.', improvement: '+2.5x' },
  { feature: 'Heat Generation', brushed: 'High (>100degC)', bldc: 'Lower (<85degC)', improvement: 'Significantly Less' },
  { feature: 'Noise Level', brushed: 'Higher (>85 dBA)', bldc: 'Lower (e.g., <65 dBA)', improvement: 'Noticeably Quieter' },
  { feature: 'Maintenance', brushed: 'Regular Brush Replacement Required', bldc: 'Virtually Maintenance-Free', improvement: 'Eliminated' },
  { feature: 'Arcing Effect', brushed: 'High (due to brushed)', bldc: 'None', improvement: 'Improved Safety' },
  { feature: 'Initial Cost', brushed: 'Low', bldc: 'High', improvement: '-' },
  { feature: 'Total Cost Of Ownership', brushed: 'High', bldc: 'Low', improvement: 'Savings Due To Energy Efficiency And Lower Maintenance' },
];

const TH = ({ children, compact = false }) => (
  <th
    className="font-nexa"
    style={{
      textAlign: 'left',
      fontSize: compact ? '6.5px' : 'clamp(12px, 0.94vw, 18px)',
      lineHeight: compact ? '1.2' : '1.45',
      fontWeight: 400,
      color: '#000',
      padding: compact ? '6px 5px' : 'clamp(12px, 1.15vw, 22px) clamp(14px, 1.25vw, 24px)',
      border: '1px solid #dce4e2',
      whiteSpace: 'normal',
      verticalAlign: 'top',
    }}
  >
    {children}
  </th>
);

const TD = ({ children, blue, compact = false }) => (
  <td
    className="font-metro capitalize"
    style={{
      fontSize: compact ? '6.5px' : 'clamp(11px, 0.83vw, 16px)',
      lineHeight: compact ? '1.2' : '1.35',
      color: blue ? '#1863da' : '#515151',
      padding: compact ? '5px' : 'clamp(9px, 0.82vw, 16px) clamp(14px, 1.25vw, 24px)',
      border: '1px solid #edf0f0',
      fontWeight: blue ? 500 : 400,
      verticalAlign: 'top',
    }}
  >
    {children}
  </td>
);

function ComparisonTable({ compact = false }) {
  return (
    <table
      className="w-full border-collapse"
      style={{
        minWidth: compact ? '0' : '760px',
        tableLayout: 'fixed',
      }}
    >
      <colgroup>
        <col style={{ width: '24%' }} />
        <col style={{ width: '24%' }} />
        <col style={{ width: '24%' }} />
        <col style={{ width: '28%' }} />
      </colgroup>
      <thead>
        <tr style={{ background: '#f2fbf9' }}>
          <TH compact={compact}>Feature</TH>
          <TH compact={compact}>Traditional Brushed DC Motor (Previous)</TH>
          <TH compact={compact}>Naxatra Labs' BLDC (New)</TH>
          <TH compact={compact}>Improvement</TH>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.feature} style={{ background: '#fff' }}>
            <TD blue compact={compact}>{row.feature}</TD>
            <TD compact={compact}>{row.brushed}</TD>
            <TD compact={compact}>{row.bldc}</TD>
            <TD compact={compact}>{row.improvement}</TD>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function CaseStudyComparison() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-white">
      <section className="px-4 pt-5 pb-6 md:hidden">
        <div className="mx-auto max-w-[560px]">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '14px',
            }}
          >
            <h2
              className="font-nexa capitalize"
              style={{ fontSize: '18px', lineHeight: '1.24', fontWeight: 600, margin: 0, textAlign: 'center' }}
            >
              <span style={{ color: '#1863da' }}>Performance </span>
              <span style={{ color: '#000' }}>Comparison</span>
            </h2>
          </div>

          <div
            style={{
              position: 'relative',
              overflowX: 'auto',
              paddingTop: '0',
            }}
          >
            <button
              type="button"
              onClick={() => setExpanded(true)}
              aria-label="Expand performance comparison"
              style={{
                position: 'absolute',
                right: '6px',
                top: '6px',
                width: '20px',
                height: '20px',
                border: 'none',
                background: 'transparent',
                padding: 0,
                cursor: 'pointer',
                zIndex: 2,
              }}
            >
              <img
                src={expandButton}
                alt=""
                style={{ width: '20px', height: '20px', objectFit: 'contain', display: 'block' }}
              />
            </button>
            <ComparisonTable compact />
          </div>
        </div>
      </section>

      <div
        className="mx-auto hidden md:block"
        style={{ maxWidth: 'min(1600px, 83vw)', padding: 'clamp(36px, 4.6vw, 88px) clamp(20px, 4.2vw, 80px)' }}
      >
        <h2
          className="font-nexa capitalize"
          style={{ fontSize: 'clamp(24px, 2.34vw, 45px)', lineHeight: '1.24', fontWeight: 600, marginBottom: 'clamp(28px, 2.8vw, 54px)' }}
        >
          <span style={{ color: '#1863da' }}>Performance </span>
          <span style={{ color: '#000' }}>Comparison</span>
        </h2>

        <div className="w-full overflow-x-auto">
          <ComparisonTable />
        </div>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-[120] bg-[rgba(0,0,0,0.35)] md:hidden"
          onClick={() => setExpanded(false)}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              position: 'absolute',
              left: '12px',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#fff',
              borderRadius: '10px',
              padding: '16px 12px 14px',
              maxHeight: '78vh',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
              }}
            >
              <p
                className="font-nexa capitalize"
                style={{ fontSize: '20px', lineHeight: '1.24', fontWeight: 600, margin: 0 }}
              >
                <span style={{ color: '#1863da' }}>Performance </span>
                <span style={{ color: '#000' }}>Comparison</span>
              </p>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                aria-label="Close expanded performance comparison"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#515151',
                  fontSize: '20px',
                  lineHeight: 1,
                  cursor: 'pointer',
                }}
              >
                ×
              </button>
            </div>
            <div style={{ maxHeight: 'calc(78vh - 48px)', overflow: 'auto' }}>
              <ComparisonTable />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
