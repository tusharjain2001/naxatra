import { useState, useRef } from 'react';
import careersPhoto from '../../../assets/images/careers-photo.png';
import submitEnquiry from '../../../assets/images/submit-enquiry.png';

function TextField({ label, type = 'text', value, onChange, required, fullWidth = false }) {
  return (
    <div
      className="flex flex-col"
      style={{ gap: '4px', flex: fullWidth ? '1 1 100%' : '1 1 clamp(180px, 23vw, 445px)' }}
    >
      <label
        className="font-metro max-[768px]:!text-[9px]"
        style={{ fontSize: 'clamp(11px, 0.73vw, 14px)', color: '#515151', fontWeight: 500 }}
      >
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-metro outline-none max-[768px]:!h-[30px] max-[768px]:!px-[10px] max-[768px]:!py-[8px] max-[768px]:!text-[10px]"
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
    <section className="w-full bg-white mb-20">
      <div
        className="mx-auto md:hidden"
        style={{ maxWidth: '460px', padding: '26px 16px 18px' }}
      >
        <div style={{ marginBottom: '24px' }}>
          <h2
            className="font-nexa text-center"
            style={{ fontSize: '26px', fontWeight: 400, lineHeight: '1.2', marginBottom: '6px' }}
          >
            <span style={{ color: '#000' }}>Share Your Details With Us. </span>
            <br />
            <span style={{ color: '#1863da' }}>We Will Get Back To You.</span>
          </h2>
          <p className="font-metro text-center" style={{ fontSize: '15px', color: '#b3b3b3' }}>
            <span style={{ color: 'red' }}>*</span> marked fields are mandatory
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: '14px' }}>
          <div className="grid grid-cols-2" style={{ gap: '10px' }}>
            <TextField label="Full Name (Required)" value={form.fullName} onChange={set('fullName')} required />
            <TextField label="Email ID (Required)" type="email" value={form.email} onChange={set('email')} required />
          </div>

          <TextField label="Contact Number" type="tel" value={form.phone} onChange={set('phone')} required fullWidth />
          <TextField label="Applying for which role?" value={form.role} onChange={set('role')} required fullWidth />

          <div className="flex flex-col" style={{ gap: '4px' }}>
            <label className="font-metro" style={{ fontSize: '9px', color: '#515151', fontWeight: 500 }}>
              Attach Resume <span style={{ color: 'red' }}>*</span>
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="font-metro flex-shrink-0"
                style={{
                  height: '24px',
                  backgroundColor: '#d9d9d9',
                  border: '1px solid #9d9d9d',
                  borderRadius: '2px',
                  padding: '0 10px',
                  fontSize: '8px',
                  color: '#515151',
                }}
              >
                Choose File
              </button>
              <span className="font-metro" style={{ fontSize: '8px', color: '#9d9d9d' }}>
                {fileName}
              </span>
              <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
            </div>
          </div>

          <TextField label="LinkedIn Link" type="url" value={form.linkedin} onChange={set('linkedin')} required fullWidth />

          <div className="flex justify-center" style={{ marginTop: '10px' }}>
            <button type="submit" aria-label="Submit Enquiry" className="block">
              <img
                src={submitEnquiry}
                alt="Submit Enquiry"
                className="block h-auto object-contain"
                style={{ width: '170px' }}
              />
            </button>
          </div>
        </form>

        <div className="mx-auto" style={{ width: '231px', marginTop: '42px' }}>
          <div
            style={{
              width: '100%',
              overflow: 'hidden',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%)',
              borderRadius: '4px',
            }}
          >
            <img
              src={careersPhoto}
              alt="Join Naxatra Labs"
              className="block w-full h-auto object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div
        className="mx-auto hidden md:flex md:flex-wrap items-stretch"
        style={{ maxWidth: '1920px', padding: '0 clamp(24px, 9.3vw, 179px)' }}
      >
        {/* Left: form */}
        <div
          className="flex flex-col"
          style={{
            flex: '1 1 58%',
            padding: '28px 32px 34px 0',
            gap: '24px',
            justifyContent: 'space-between',
          }}
        >
          {/* Heading */}
          <div>
            <h2
              className="font-nexa"
              style={{ fontSize: '32px', fontWeight: 400, lineHeight: '1.2', marginBottom: '6px' }}
            >
              <span style={{ color: '#000' }}>Share Your Details With Us. </span>
              <span style={{ color: '#1863da' }}>We Will Get Back To You.</span>
            </h2>
            <p className="font-metro" style={{ fontSize: '16px', color: '#b3b3b3' }}>
              <span style={{ color: 'red' }}>*</span> marked fields are mandatory
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: '18px', flex: 1 }}>
            {/* Row 1: Full Name + Email */}
            <div className="flex flex-wrap" style={{ gap: '10px 16px' }}>
              <TextField label="Full Name (Required)" value={form.fullName} onChange={set('fullName')} required />
              <TextField label="Email ID (Required)" type="email" value={form.email} onChange={set('email')} required />
            </div>

            {/* Row 2: Contact Number full-width */}
            <TextField label="Contact Number" type="tel" value={form.phone} onChange={set('phone')} required fullWidth />

            {/* Row 3: Role full-width */}
            <TextField label="Applying for which role?" value={form.role} onChange={set('role')} required fullWidth />

            {/* Row 4: Attach Resume */}
            <div className="flex flex-col" style={{ gap: '4px' }}>
              <label className="font-metro" style={{ fontSize: '11px', color: '#515151', fontWeight: 500 }}>
                Attach Resume <span style={{ color: 'red' }}>*</span>
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="font-metro flex-shrink-0"
                  style={{
                    height: '30px',
                    backgroundColor: '#d9d9d9',
                    border: '1px solid #9d9d9d',
                    borderRadius: '2px',
                    padding: '0 10px',
                    fontSize: '11px',
                    color: '#515151',
                  }}
                >
                  Choose File
                </button>
                <span className="font-metro" style={{ fontSize: '11px', color: '#9d9d9d' }}>
                  {fileName}
                </span>
                <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
              </div>
            </div>

            {/* Row 5: LinkedIn full-width */}
            <TextField label="LinkedIn Link" type="url" value={form.linkedin} onChange={set('linkedin')} required fullWidth />

            {/* Submit */}
            <div className="flex justify-end" style={{ marginTop: 'auto' }}>
              <button type="submit" aria-label="Submit Enquiry" className="block">
                <img
                  src={submitEnquiry}
                  alt="Submit Enquiry"
                  className="block h-auto object-contain"
                  style={{ width: '170px' }}
                />
              </button>
            </div>
          </form>
        </div>

        {/* Right: photo */}
        <div
          className="flex-shrink-0 hidden lg:block"
          style={{ width: 'clamp(320px, 31vw, 520px)', padding: '20px 0 20px 18px' }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 34px), calc(100% - 34px) 100%, 0 100%)',
              borderRadius: '4px',
            }}
          >
            <img
              src={careersPhoto}
              alt="Join Naxatra Labs"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
