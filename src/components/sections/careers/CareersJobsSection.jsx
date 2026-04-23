import { useState } from 'react';

const JOBS = [
  {
    id: 1,
    title: 'Supply Chain Manager',
    location: 'Ahmedabad (Onsite)',
    type: 'Full-Time',
    description:
      'Lead end-to-end supply chain operations from sourcing to delivery. Ensure smooth material flow and operational efficiency.',
  },
  {
    id: 2,
    title: 'Marketing and Content Associate',
    location: 'Gurugram (Onsite)',
    type: 'Full-Time',
    description:
      'Support marketing strategy and execution with leadership and partners. Drive campaigns and on-ground initiatives.',
  },
  {
    id: 3,
    title: 'Design Engineer',
    location: 'Ahmedabad (Onsite)',
    type: 'Full-Time',
    description:
      'Design products from concept to realization. Support manufacturing and solve problems.',
  },
  {
    id: 4,
    title: 'Design and Development Engineer',
    location: 'Ahmedabad (Onsite)',
    type: 'Full-Time',
    description:
      'Translate requirements into manufacturable product solutions. Own end-to-end development from concept to validation.',
  },
  {
    id: 5,
    title: 'Mechanical Simulation Engineer',
    location: 'Ahmedabad (Onsite)',
    type: 'Full-Time',
    description:
      'Run simulations to optimize design, performance, and reliability. Apply insights to create practical, manufacturable solutions.',
  },
  {
    id: 6,
    title: 'Testing and Validation Engineer',
    location: 'Ahmedabad (Onsite)',
    type: 'Full-Time',
    description:
      'Plan and execute testing for motors and systems. Analyze failures and drive data-led improvements.',
  },
];

const LOCATIONS = ['All Locations', 'Ahmedabad', 'Gurugram'];
const ROLE_TYPES = ['All Roles', 'Engineering', 'Marketing', 'Operations'];
const TIME_TYPES = ['All Types', 'Full-Time', 'Part-Time', 'Contract'];

function FilterDropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 font-metro bg-white border border-[#9d9d9d] rounded-[4px]"
        style={{
          fontSize: 'clamp(13px, 1.04vw, 20px)',
          color: '#515151',
          padding: 'clamp(8px, 0.73vw, 14px) clamp(12px, 1.04vw, 20px)',
          whiteSpace: 'nowrap',
          minWidth: 'clamp(120px, 11vw, 210px)',
        }}
      >
        <span className="flex-1 text-left">{value || label}</span>
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}
        >
          <path d="M1 1L8 9L15 1" stroke="#515151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div
          className="absolute top-full left-0 mt-1 bg-white border border-[#d9d9d9] rounded-[4px] z-10 shadow-md"
          style={{ minWidth: '100%' }}
        >
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className="block w-full text-left font-metro px-4 py-2 hover:bg-[#f5f5f5] transition-colors"
              style={{ fontSize: 'clamp(12px, 0.83vw, 16px)', color: '#515151' }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CareersJobsSection() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [roleType, setRoleType] = useState('');
  const [timeType, setTimeType] = useState('');

  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto"
        style={{ maxWidth: '1920px', padding: 'clamp(48px, 5vw, 96px) clamp(24px, 9.3vw, 179px)' }}
      >
        {/* Heading */}
        <h2
          className="font-nexa capitalize"
          style={{ fontSize: 'clamp(28px, 3.54vw, 68px)', lineHeight: '1.15', fontWeight: 400, marginBottom: 'clamp(8px, 0.83vw, 16px)' }}
        >
          <span style={{ color: '#000' }}>We're </span>
          <span style={{ color: '#1863da' }}>Hiring</span>
        </h2>
        <p
          className="font-metro"
          style={{ fontSize: 'clamp(14px, 1.25vw, 24px)', color: '#515151', marginBottom: 'clamp(24px, 2.6vw, 50px)' }}
        >
          What are you looking for?
        </p>

        {/* Search bar */}
        <div
          className="flex flex-wrap items-center gap-3"
          style={{ marginBottom: 'clamp(16px, 1.56vw, 30px)' }}
        >
          <div
            className="flex items-center gap-2 flex-1 border border-[#9d9d9d] rounded-[4px]"
            style={{
              minWidth: 'clamp(200px, 35vw, 672px)',
              backgroundColor: 'rgba(217,217,217,0.23)',
              padding: 'clamp(8px, 0.73vw, 14px) clamp(12px, 1.04vw, 20px)',
            }}
          >
            {/* Search icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="11" cy="11" r="7" stroke="#9d9d9d" strokeWidth="2" />
              <path d="M16.5 16.5L21 21" stroke="#9d9d9d" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search for jobs or keywords"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent font-metro outline-none"
              style={{ fontSize: 'clamp(13px, 1.04vw, 20px)', color: '#515151' }}
            />
          </div>

          <button
            className="inline-flex items-center justify-center bg-[#1863da] text-white font-nexa capitalize rounded-[4px]"
            style={{
              fontSize: 'clamp(14px, 1.25vw, 24px)',
              paddingInline: 'clamp(20px, 1.67vw, 32px)',
              paddingBlock: 'clamp(10px, 0.83vw, 16px)',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            Search
          </button>
        </div>

        {/* Filters */}
        <div
          className="flex flex-wrap gap-3"
          style={{ marginBottom: 'clamp(20px, 2.08vw, 40px)' }}
        >
          <FilterDropdown label="Location" options={LOCATIONS} value={location} onChange={setLocation} />
          <FilterDropdown label="Role Type" options={ROLE_TYPES} value={roleType} onChange={setRoleType} />
          <FilterDropdown label="Time Type" options={TIME_TYPES} value={timeType} onChange={setTimeType} />
        </div>

        {/* Count */}
        <p
          className="font-nexa"
          style={{
            fontSize: 'clamp(14px, 1.04vw, 20px)',
            color: '#515151',
            marginBottom: 'clamp(20px, 2.08vw, 40px)',
          }}
        >
          10 Open Positions
        </p>

        {/* Job cards */}
        <div className="flex flex-col" style={{ gap: 'clamp(16px, 1.56vw, 30px)' }}>
          {JOBS.map((job) => (
            <div
              key={job.id}
              className="relative"
              style={{
                background: '#f2fbfb',
                border: '1px solid #d9e5e4',
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 34px), calc(100% - 34px) 100%, 0 100%)',
              }}
            >
              <div
                className="relative flex flex-wrap items-start justify-between"
                style={{
                  padding: 'clamp(20px, 2.35vw, 45px) clamp(24px, 2.7vw, 52px)',
                  gap: 'clamp(18px, 2vw, 36px)',
                }}
              >
                {/* Left: title + description + CTA */}
                <div
                  className="flex flex-col"
                  style={{ flex: '1 1 clamp(260px, 43vw, 820px)', gap: 'clamp(12px, 1.04vw, 20px)' }}
                >
                  <h3
                    className="font-nexa text-black"
                    style={{ fontSize: 'clamp(18px, 1.56vw, 30px)', fontWeight: 400, lineHeight: '1.2', margin: 0 }}
                  >
                    {job.title}
                  </h3>
                  <p
                    className="font-metro text-black"
                    style={{
                      fontSize: 'clamp(12px, 0.94vw, 18px)',
                      lineHeight: '1.6',
                      opacity: 0.75,
                      maxWidth: 'clamp(280px, 42vw, 810px)',
                      margin: 0,
                    }}
                  >
                    {job.description}
                  </p>
                  <button
                    className="inline-flex items-center justify-center font-metro rounded-[2px] border border-[#1863da] text-[#1863da] transition-colors"
                    style={{
                      fontSize: 'clamp(10px, 0.73vw, 14px)',
                      lineHeight: 1.2,
                      paddingInline: 'clamp(12px, 1.15vw, 22px)',
                      paddingBlock: 'clamp(7px, 0.73vw, 14px)',
                      whiteSpace: 'nowrap',
                      width: 'fit-content',
                    }}
                  >
                    Download Job Description
                  </button>
                </div>

                {/* Right: meta */}
                <div
                  className="flex flex-col items-start md:items-end"
                  style={{
                    flex: '0 0 auto',
                    gap: 'clamp(10px, 0.83vw, 16px)',
                    minWidth: 'clamp(180px, 16vw, 300px)',
                  }}
                >
                  <span
                    className="flex items-center gap-2 font-metro"
                    style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', color: '#111111', lineHeight: 1.35 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#1863da" strokeWidth="1.8" fill="none" />
                      <circle cx="12" cy="9" r="2.5" stroke="#1863da" strokeWidth="1.8" fill="none" />
                    </svg>
                    {job.location}
                  </span>
                  <span
                    className="flex items-center gap-2 font-metro"
                    style={{ fontSize: 'clamp(14px, 1.04vw, 20px)', color: '#111111', lineHeight: 1.35 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="12" cy="12" r="9" stroke="#1863da" strokeWidth="1.8" />
                      <path d="M12 7v5l3 3" stroke="#1863da" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {job.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
