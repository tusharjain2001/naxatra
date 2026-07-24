import { Link } from 'react-router-dom';

/**
 * Breadcrumb trail, e.g. Home // Product // Antarix RF 22
 * items: [{ label, to }] — the last item (current page) renders in blue without a link.
 * The whole trail sits on a gradient underline (teal → blue, fading at both ends),
 * per Figma: border-bottom 0.5px, gradient #4DD6C4 0% → #4DD6C4 → #1863DA → #1863DA 0%.
 */
export default function Breadcrumbs({ items, align = 'center', style = {} }) {
  const justify =
    align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center';

  return (
    <nav
      aria-label="Breadcrumb"
      style={{ display: 'flex', justifyContent: justify, ...style }}
    >
      <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
        <ol
          className="font-metro capitalize"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            listStyle: 'none',
            margin: 0,
            padding: '12px',
            fontSize: 'clamp(11px, 0.94vw, 18px)',
            lineHeight: '1.4',
          }}
        >
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li
                key={idx}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                {idx > 0 && (
                  <span aria-hidden="true" style={{ color: '#1863da' }}>
                    //
                  </span>
                )}
                {isLast || !item.to ? (
                  <span
                    aria-current={isLast ? 'page' : undefined}
                    style={{ color: '#1863da' }}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.to}
                    style={{ color: '#000', textDecoration: 'none' }}
                    onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
        {/* Gradient underline */}
        <div
          aria-hidden="true"
          style={{
            height: '1px',
            width: '100%',
            background:
              'linear-gradient(90deg, rgba(77,214,196,0) 0%, #4dd6c4 30%, #1863da 70%, rgba(24,99,218,0) 100%)',
          }}
        />
      </div>
    </nav>
  );
}
