import { useEffect, useRef, useState } from 'react';
import submitEnquiry from '../../../assets/images/submit-enquiry.png';
import careersPhoto from '../../../assets/images/careers-photo.png';

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

export default function CareersApplicationFormPanel({
  initialRole = '',
  desktopSubmitAlign = 'end',
  mobileCenteredHeading = false,
  mobileSubmitAlign = 'center',
  mobileLeadImage = false,
}) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: initialRole,
    linkedin: '',
  });
  const [fileName, setFileName] = useState('No file chosen');
  const fileRef = useRef(null);

  useEffect(() => {
    setForm((current) => ({ ...current, role: initialRole }));
  }, [initialRole]);

  const set = (key) => (val) => setForm((current) => ({ ...current, [key]: val }));

  const handleFile = (e) => {
    setFileName(e.target.files[0]?.name || 'No file chosen');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <h2
          className={`font-nexa ${mobileCenteredHeading ? 'text-center md:text-left' : ''}`}
          style={{ fontSize: 'clamp(26px, 2.29vw, 44px)', fontWeight: 400, lineHeight: '1.2', marginBottom: '6px' }}
        >
          <span style={{ color: '#000' }}>Share Your Details With Us. </span>
          {mobileCenteredHeading && <br className="md:hidden" />}
          <span style={{ color: '#1863da' }}>We Will Get Back To You.</span>
        </h2>
        <p className={`font-metro ${mobileCenteredHeading ? 'text-center md:text-left' : ''}`} style={{ fontSize: 'clamp(13px, 0.83vw, 16px)', color: '#b3b3b3' }}>
          <span style={{ color: 'red' }}>*</span> marked fields are mandatory
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 'clamp(14px, 0.94vw, 18px)', flex: 1 }}>
        <div className={`${mobileLeadImage ? 'hidden md:flex' : 'grid md:flex'} grid-cols-1 md:flex md:flex-wrap`} style={{ gap: '10px 16px' }}>
          <TextField label="Full Name" value={form.fullName} onChange={set('fullName')} required />
          <TextField label="Email ID" type="email" value={form.email} onChange={set('email')} required />
        </div>

        {mobileLeadImage && (
          <div className="md:hidden flex items-start" style={{ gap: '12px' }}>
            <div
              className="flex-shrink-0"
              style={{
                width: '121px',
                overflow: 'hidden',
                borderRadius: '4px',
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)',
              }}
            >
              <img
                src={careersPhoto}
                alt="Join Naxatra Labs"
                className="block w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col flex-1" style={{ gap: '10px' }}>
              <TextField label="Full Name (Required)" value={form.fullName} onChange={set('fullName')} required fullWidth />
              <TextField label="Email ID (Required)" type="email" value={form.email} onChange={set('email')} required fullWidth />
              <TextField label="Contact Number" type="tel" value={form.phone} onChange={set('phone')} required fullWidth />
            </div>
          </div>
        )}

        {!mobileLeadImage && <TextField label="Contact Number" type="tel" value={form.phone} onChange={set('phone')} required fullWidth />}
        <TextField label="Applying for which role?" value={form.role} onChange={set('role')} required fullWidth />

        <div className="flex flex-col" style={{ gap: '4px' }}>
          <label className="font-metro max-[768px]:!text-[9px]" style={{ fontSize: 'clamp(11px, 0.73vw, 14px)', color: '#515151', fontWeight: 500 }}>
            Attach Resume <span style={{ color: 'red' }}>*</span>
          </label>
          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="font-metro flex-shrink-0"
              style={{
                height: 'clamp(24px, 1.56vw, 30px)',
                backgroundColor: '#d9d9d9',
                border: '1px solid #9d9d9d',
                borderRadius: '2px',
                padding: '0 10px',
                fontSize: 'clamp(8px, 0.57vw, 11px)',
                color: '#515151',
              }}
            >
              Choose File
            </button>
            <span className="font-metro" style={{ fontSize: 'clamp(8px, 0.57vw, 11px)', color: '#9d9d9d' }}>
              {fileName}
            </span>
            <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
          </div>
        </div>

        <TextField label="LinkedIn Link" type="url" value={form.linkedin} onChange={set('linkedin')} required fullWidth />

        <div
          className={`flex ${
            mobileSubmitAlign === 'right' ? 'justify-end md:justify-end' : 'justify-center md:justify-end'
          } ${desktopSubmitAlign === 'center' ? 'md:justify-center' : 'md:justify-end'}`}
          style={{ marginTop: '10px' }}
        >
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
    </>
  );
}
