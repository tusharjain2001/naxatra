const ITEMS = [
  {
    label: 'enquiry@naxatralabs.com',
    href: 'mailto:enquiry@naxatralabs.com',
    target: '_blank',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    label: '+91 9266030266',
    href: 'tel:+919266030266',
    target: '_self',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/naxatra-labs/',
    target: '_blank',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="white" fillOpacity="0.15" />
        <path
          d="M7.5 9.5H5V19H7.5V9.5ZM6.25 8.5C7.08 8.5 7.75 7.83 7.75 7C7.75 6.17 7.08 5.5 6.25 5.5C5.42 5.5 4.75 6.17 4.75 7C4.75 7.83 5.42 8.5 6.25 8.5ZM19 19H16.5V14.25C16.5 13.15 16.48 11.75 14.98 11.75C13.46 11.75 13.22 12.94 13.22 14.17V19H10.72V9.5H13.11V10.75H13.15C13.49 10.1 14.33 9.38 15.58 9.38C18.1 9.38 19 11.02 19 13.18V19Z"
          fill="white"
        />
      </svg>
    ),
  },
];

export default function StickyContactSidebar() {
  return (
    <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end overflow-hidden rounded-l-lg">
      {ITEMS.map((item) => {
        const Tag = item.href ? 'a' : 'div';
        const linkProps = item.href
          ? { href: item.href, target: item.target, rel: 'noopener noreferrer' }
          : {};
        return (
        <Tag
          key={item.label}
          {...linkProps}
          className="group flex items-stretch"
          aria-label={item.label}
        >
          {/* Label — slides out to the left on hover */}
          <div className="overflow-hidden max-w-0 group-hover:max-w-[260px] transition-all duration-300 ease-in-out">
            <div
              className="flex h-full items-center gap-2 whitespace-nowrap bg-[#1863DA] px-4 text-sm font-semibold text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {item.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Icon box */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#1863DA] transition-colors duration-200 group-hover:bg-[#1456c0]">
            {item.icon}
          </div>
        </Tag>
        );
      })}
    </div>
  );
}
