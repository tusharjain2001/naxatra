import { useState } from 'react';
import submitEnquiry from '../../../assets/images/submit-enquiry.png';

const CATEGORIES = [
  {
    id: 'motors',
    title: 'Motors Enquiry',
    description: 'Make an enquiry for our motors.',
  },
  {
    id: 'investment',
    title: 'Investment',
    description: "If you're looking to invest.",
  },
  {
    id: 'partnership',
    title: 'Partnership',
    description: "If you're looking to partner with us.",
  },
  {
    id: 'other',
    title: 'Other',
    description: 'For any other kind of information you need.',
  },
];

const MOTOR_APPLICATIONS = ['Industrial', 'E-Mobility', 'Power Tools', 'Robotics', 'Other'];
const POWER_RANGES = ['< 500W', '500W – 2kW', '2kW – 5kW', '5kW – 15kW', '> 15kW'];

function SelectField({ label, options, value, onChange, required }) {
  return (
    <div className="flex flex-col" style={{ gap: '4px', flex: '1 1 clamp(200px, 25.6vw, 491px)' }}>
      <label
        className="font-metro"
        style={{ fontSize: 'clamp(12px, 0.83vw, 16px)', color: '#515151', fontWeight: 500 }}
      >
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none font-metro"
          style={{
            height: 'clamp(44px, 3.7vw, 71px)',
            backgroundColor: '#eeeeee',
            border: '1px solid #d9d9d9',
            borderRadius: '4px',
            padding: 'clamp(10px, 1.09vw, 21px) clamp(14px, 1.46vw, 28px)',
            fontSize: 'clamp(13px, 0.94vw, 18px)',
            color: value ? '#000' : '#b3b3b3',
          }}
        >
          <option value="" disabled>Select</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {/* Chevron */}
        <span
          className="absolute pointer-events-none"
          style={{ right: 'clamp(12px, 1.04vw, 20px)', top: '50%', transform: 'translateY(-50%)' }}
        >
          <svg width="15" height="8" viewBox="0 0 15 8" fill="none">
            <path d="M1 1L7.5 7L14 1" stroke="#515151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function TextField({ label, type = 'text', value, onChange, required, fullWidth = false }) {
  return (
    <div
      className="flex flex-col"
      style={{ gap: '4px', flex: fullWidth ? '1 1 100%' : '1 1 clamp(200px, 25.6vw, 491px)' }}
    >
      <label
        className="font-metro"
        style={{ fontSize: 'clamp(12px, 0.83vw, 16px)', color: '#515151', fontWeight: 500 }}
      >
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-metro"
        style={{
          height: 'clamp(44px, 3.7vw, 71px)',
          backgroundColor: '#eeeeee',
          border: '1px solid #d9d9d9',
          borderRadius: '4px',
          padding: 'clamp(10px, 1.09vw, 21px) clamp(14px, 1.46vw, 33px)',
          fontSize: 'clamp(13px, 0.94vw, 18px)',
          outline: 'none',
        }}
      />
    </div>
  );
}

export default function ContactFormSection() {
  const [activeCategory, setActiveCategory] = useState('motors');
  const [form, setForm] = useState({
    motorApplication: '',
    powerRange: '',
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const set = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto"
        style={{ maxWidth: '1920px', padding: 'clamp(40px, 4.2vw, 80px) clamp(24px, 10.4vw, 200px)' }}
      >
        {/* Top heading */}
        <h2
          className="font-nexa"
          style={{
            fontSize: 'clamp(24px, 3.54vw, 68px)',
            lineHeight: '1.15',
            fontWeight: 400,
            marginBottom: 'clamp(8px, 0.83vw, 16px)',
          }}
        >
          <span style={{ color: '#000' }}>If you're here, </span>
          <span style={{ color: '#1863da' }}>we need to talk.</span>
        </h2>
        <p
          className="font-metro"
          style={{
            fontSize: 'clamp(14px, 1.25vw, 24px)',
            color: '#515151',
            marginBottom: 'clamp(28px, 2.6vw, 50px)',
          }}
        >
          What are you looking for?
        </p>

        {/* Two-column layout */}
        <div className="flex flex-wrap items-start" style={{ gap: 'clamp(24px, 2.6vw, 50px)' }}>
          {/* Left: category cards */}
          <div
            className="flex flex-col flex-shrink-0"
            style={{ width: 'clamp(220px, 22.9vw, 440px)', gap: 'clamp(12px, 1.04vw, 20px)' }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="text-left rounded flex flex-col items-start"
                  style={{
                    width: '100%',
                    padding: 'clamp(16px, 1.46vw, 28px) clamp(16px, 2.19vw, 42px)',
                    backgroundColor: isActive ? 'rgba(77,214,196,0.12)' : 'rgba(77,214,196,0.04)',
                    borderBottom: isActive ? '2px solid #4dd6c4' : '2px solid transparent',
                    transition: 'background-color 0.2s, border-color 0.2s',
                    gap: 'clamp(4px, 0.42vw, 8px)',
                  }}
                >
                  <span
                    className="font-nexa"
                    style={{
                      fontSize: 'clamp(14px, 1.04vw, 20px)',
                      color: isActive ? '#1863da' : '#000',
                      fontWeight: 400,
                    }}
                  >
                    {cat.title}
                  </span>
                  <span
                    className="font-metro"
                    style={{ fontSize: 'clamp(11px, 0.73vw, 14px)', color: '#515151' }}
                  >
                    {cat.description}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col"
            style={{ flex: '1 1 clamp(280px, 52.3vw, 1005px)', gap: 'clamp(24px, 2.5vw, 48px)' }}
          >
            {/* Form title */}
            <div>
              <h3
                className="font-nexa"
                style={{ fontSize: 'clamp(18px, 1.67vw, 32px)', fontWeight: 400, lineHeight: '1.25', marginBottom: 'clamp(4px, 0.42vw, 8px)' }}
              >
                <span style={{ color: '#000' }}>Make an enquiry </span>
                <span style={{ color: '#1863da' }}>for our motors.</span>
              </h3>
              <p
                className="font-metro"
                style={{ fontSize: 'clamp(11px, 0.73vw, 14px)', color: '#515151' }}
              >
                <span style={{ color: 'red' }}>*</span> marked fields are mandatory
              </p>
            </div>

            {/* Section: Define motor type */}
            <div className="flex flex-col" style={{ gap: 'clamp(14px, 1.46vw, 28px)' }}>
              <div className="flex items-center" style={{ gap: '12px' }}>
                <span
                  className="font-metro flex-shrink-0"
                  style={{ fontSize: 'clamp(13px, 1.25vw, 24px)', color: '#9d9d9d' }}
                >
                  Define motor type
                </span>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#d9d9d9' }} />
              </div>

              <div className="flex flex-wrap" style={{ gap: 'clamp(12px, 1.25vw, 24px)' }}>
                <SelectField
                  label="Motor Application"
                  options={MOTOR_APPLICATIONS}
                  value={form.motorApplication}
                  onChange={set('motorApplication')}
                  required
                />
                <SelectField
                  label="Power Range (Nominal)"
                  options={POWER_RANGES}
                  value={form.powerRange}
                  onChange={set('powerRange')}
                  required
                />
              </div>
            </div>

            {/* Section: Contact Information */}
            <div className="flex flex-col" style={{ gap: 'clamp(14px, 1.46vw, 28px)' }}>
              <div className="flex items-center" style={{ gap: '12px' }}>
                <span
                  className="font-metro flex-shrink-0"
                  style={{ fontSize: 'clamp(13px, 1.25vw, 24px)', color: '#9d9d9d' }}
                >
                  Contact Information
                </span>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#d9d9d9' }} />
              </div>

              <div className="flex flex-wrap" style={{ gap: 'clamp(12px, 1.25vw, 24px)' }}>
                <TextField
                  label="Full Name (Required)"
                  value={form.fullName}
                  onChange={set('fullName')}
                  required
                />
                <TextField
                  label="Business Email ID"
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  required
                />
                <TextField
                  label="Contact Number"
                  type="tel"
                  value={form.phone}
                  onChange={set('phone')}
                  required
                />
                <TextField
                  label="Company Name (N/A if you do not belong to any company)"
                  value={form.company}
                  onChange={set('company')}
                  required
                />
              </div>

              {/* Textarea */}
              <div className="flex flex-col" style={{ gap: '4px' }}>
                <label
                  className="font-metro"
                  style={{ fontSize: 'clamp(12px, 0.83vw, 16px)', color: '#515151', fontWeight: 500 }}
                >
                  Your Question or Inquiry. <span style={{ color: 'red' }}>*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full font-metro resize-none"
                  style={{
                    height: 'clamp(140px, 18.75vw, 360px)',
                    backgroundColor: '#eeeeee',
                    border: '1px solid #d9d9d9',
                    borderRadius: '4px',
                    padding: 'clamp(12px, 1.09vw, 21px) clamp(14px, 1.46vw, 33px)',
                    fontSize: 'clamp(13px, 0.94vw, 18px)',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                aria-label="Submit Enquiry"
                className="block"
              >
                <img
                  src={submitEnquiry}
                  alt="Submit Enquiry"
                  className="block"
                  style={{ width: 'clamp(140px, 12.5vw, 240px)', height: 'auto' }}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
