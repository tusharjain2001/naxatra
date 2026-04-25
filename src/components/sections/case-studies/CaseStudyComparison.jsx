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

const TH = ({ children }) => (
  <th
    className="font-nexa"
    style={{
      textAlign: 'left',
      fontSize: 'clamp(12px, 0.94vw, 18px)',
      lineHeight: '1.45',
      fontWeight: 400,
      color: '#000',
      padding: 'clamp(12px, 1.15vw, 22px) clamp(14px, 1.25vw, 24px)',
      border: '1px solid #dce4e2',
      whiteSpace: 'normal',
      verticalAlign: 'top',
    }}
  >
    {children}
  </th>
);

const TD = ({ children, blue }) => (
  <td
    className="font-metro capitalize"
    style={{
      fontSize: 'clamp(11px, 0.83vw, 16px)',
      lineHeight: '1.35',
      color: blue ? '#1863da' : '#515151',
      padding: 'clamp(9px, 0.82vw, 16px) clamp(14px, 1.25vw, 24px)',
      border: '1px solid #edf0f0',
      fontWeight: blue ? 500 : 400,
      verticalAlign: 'top',
    }}
  >
    {children}
  </td>
);

export default function CaseStudyComparison() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto"
        style={{ maxWidth: '1840px', padding: 'clamp(36px, 4.6vw, 88px) clamp(20px, 4.2vw, 80px)' }}
      >
        <h2
          className="font-nexa capitalize"
          style={{ fontSize: 'clamp(24px, 2.34vw, 45px)', lineHeight: '1.24', fontWeight: 400, marginBottom: 'clamp(28px, 2.8vw, 54px)' }}
        >
          <span style={{ color: '#1863da' }}>Performance </span>
          <span style={{ color: '#000' }}>Comparison</span>
        </h2>

        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse" style={{ minWidth: '760px', tableLayout: 'fixed' }}>
            <colgroup>
              <col style={{ width: '24%' }} />
              <col style={{ width: '24%' }} />
              <col style={{ width: '24%' }} />
              <col style={{ width: '28%' }} />
            </colgroup>
            <thead>
              <tr style={{ background: '#f2fbf9' }}>
                <TH>Feature</TH>
                <TH>Traditional Brushed DC Motor (Previous)</TH>
                <TH>Naxatra Labs' BLDC (New)</TH>
                <TH>Improvement</TH>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} style={{ background: '#fff' }}>
                  <TD blue>{row.feature}</TD>
                  <TD>{row.brushed}</TD>
                  <TD>{row.bldc}</TD>
                  <TD>{row.improvement}</TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
