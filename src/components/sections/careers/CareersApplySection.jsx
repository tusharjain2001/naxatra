import { useState, useRef } from 'react';
import careersPhoto from '../../../assets/images/careers-photo.png';

function TextField({ label, type = 'text', value, onChange, required, fullWidth = false }) {
  return (
    <div
      className="flex flex-col"
      style={{ gap: '4px', flex: fullWidth ? '1 1 100%' : '1 1 clamp(180px, 23vw, 445px)' }}
    >
      <label
        className="font-metro"
        style={{ fontSize: 'clamp(11px, 0.73vw, 14px)', color: '#515151', fontWeight: 500 }}
      >
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-metro outline-none"
        style={{
          height: 'clamp(42px, 3.7vw, 71px)',
          backgroundColor: '#eeeeee',
          border: '1px solid #d9d9d9',
          borderRadius: '4px',
          padding: 'clamp(10px, 1.04vw, 20px) clamp(12px, 1.25vw, 24px)',
          fontSize: 'clamp(12px, 0.83vw, 16px)',
        }}
      />
    </div>
  );
}

export default function CareersApplySection() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    linkedin: '',
  });
  const [fileName, setFileName] = useState('No file chosen');
  const fileRef = useRef(null);

  const set = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));

  const handleFile = (e) => {
    setFileName(e.target.files[0]?.name || 'No file chosen');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto flex flex-wrap items-stretch"
        style={{ maxWidth: '1920px' }}
      >
        {/* Left: form */}
        <div
          className="flex flex-col"
          style={{
            flex: '1 1 clamp(280px, 57vw, 1100px)',
            padding: 'clamp(40px, 4.8vw, 92px) clamp(24px, 9.3vw, 179px)',
            gap: 'clamp(20px, 2.08vw, 40px)',
          }}
        >
          {/* Heading */}
          <div>
            <h2
              className="font-nexa"
              style={{ fontSize: 'clamp(20px, 1.67vw, 32px)', fontWeight: 400, lineHeight: '1.25', marginBottom: 'clamp(4px, 0.42vw, 8px)' }}
            >
              <span style={{ color: '#000' }}>Share your details with us. </span>
              <span style={{ color: '#1863da' }}>We will get back to you.</span>
            </h2>
            <p className="font-metro" style={{ fontSize: 'clamp(11px, 0.73vw, 14px)', color: '#b3b3b3' }}>
              <span style={{ color: 'red' }}>*</span> marked fields are mandatory
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 'clamp(14px, 1.46vw, 28px)' }}>
            {/* Row 1: Full Name + Email */}
            <div className="flex flex-wrap" style={{ gap: 'clamp(12px, 1.25vw, 24px)' }}>
              <TextField label="Full Name (Required)" value={form.fullName} onChange={set('fullName')} required />
              <TextField label="Email ID (Required)" type="email" value={form.email} onChange={set('email')} required />
            </div>

            {/* Row 2: Contact Number full-width */}
            <TextField label="Contact Number" type="tel" value={form.phone} onChange={set('phone')} required fullWidth />

            {/* Row 3: Role full-width */}
            <TextField label="Applying for which role?" value={form.role} onChange={set('role')} required fullWidth />

            {/* Row 4: Attach Resume */}
            <div className="flex flex-col" style={{ gap: '4px' }}>
              <label className="font-metro" style={{ fontSize: 'clamp(11px, 0.73vw, 14px)', color: '#515151', fontWeight: 500 }}>
                Attach Resume <span style={{ color: 'red' }}>*</span>
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="font-metro flex-shrink-0"
                  style={{
                    height: 'clamp(40px, 2.71vw, 52px)',
                    backgroundColor: '#d9d9d9',
                    border: '1px solid #9d9d9d',
                    borderRadius: '4px',
                    padding: '0 clamp(12px, 1.04vw, 20px)',
                    fontSize: 'clamp(12px, 0.83vw, 16px)',
                    color: '#515151',
                  }}
                >
                  Choose File
                </button>
                <span className="font-metro" style={{ fontSize: 'clamp(11px, 0.73vw, 14px)', color: '#9d9d9d' }}>
                  {fileName}
                </span>
                <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
              </div>
            </div>

            {/* Row 5: LinkedIn full-width */}
            <TextField label="LinkedIn Link" type="url" value={form.linkedin} onChange={set('linkedin')} required fullWidth />

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#1863da] text-white font-nexa capitalize rounded-[4px]"
                style={{
                  fontSize: 'clamp(14px, 1.25vw, 24px)',
                  paddingInline: 'clamp(16px, 1.25vw, 24px)',
                  paddingBlock: 'clamp(10px, 0.83vw, 16px)',
                  letterSpacing: '0.01em',
                }}
              >
                Submit Enquiry
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 3H13M13 3V13M13 3L3 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Right: photo */}
        <div
          className="flex-shrink-0 hidden lg:block"
          style={{ width: 'clamp(240px, 34.3vw, 658px)' }}
        >
          <img
            src={careersPhoto}
            alt="Join Naxatra Labs"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
