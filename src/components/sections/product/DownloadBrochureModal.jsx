import { useState } from 'react';

export default function DownloadBrochureModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
  });

  if (!isOpen) return null;

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up actual submission / PDF download
    onClose();
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(2px)' }}
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full bg-white"
        style={{
          maxWidth: '936px',
          borderRadius: '20px',
          boxShadow: '0px 4px 24px 0px rgba(0,0,0,0.18)',
          padding: 'clamp(28px, 4vw, 48px) clamp(24px, 5.5vw, 62px)',
          margin: '0 16px',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '18px',
            right: '22px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#666',
            fontSize: '22px',
            lineHeight: 1,
            padding: '4px 8px',
          }}
        >
          &#x2715;
        </button>

        <form onSubmit={handleSubmit}>
          {/* Header */}
          <div style={{ borderBottom: '1px solid #d9d9d9', paddingBottom: '12px', marginBottom: '20px' }}>
            <h2
              className="font-nexa"
              style={{ fontSize: '24px', lineHeight: '32px', color: '#0a1553', fontWeight: 600 }}
            >
              Download Brochure
            </h2>
          </div>

          {/* First / Last Name row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
              marginBottom: '14px',
            }}
          >
            <Field label="First Name" name="firstName" value={form.firstName} placeholder="First name" onChange={handleChange} />
            <Field label="Last Name" name="lastName" value={form.lastName} placeholder="Last name" onChange={handleChange} />
          </div>

          {/* Company Name */}
          <div style={{ marginBottom: '14px' }}>
            <Field label="Company Name" name="companyName" value={form.companyName} placeholder="Company name" onChange={handleChange} />
          </div>

          {/* Email */}
          <div style={{ marginBottom: '20px' }}>
            <Field label="Email" name="email" type="email" value={form.email} placeholder="you@example.com" onChange={handleChange} />
          </div>

          {/* Submit */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="submit"
              className="font-nexa capitalize"
              style={{
                background: '#1863da',
                color: '#fff',
                border: 'none',
                padding: '14px 32px',
                fontSize: '20px',
                lineHeight: '20px',
                letterSpacing: '0.01em',
                cursor: 'pointer',
                fontWeight: 400,
                clipPath:
                  'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 10px) 100%, 0 100%)',
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, name, type = 'text', value, placeholder, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <label
        htmlFor={name}
        style={{ fontSize: '14px', lineHeight: '26px', color: '#666', fontFamily: 'Montserrat, sans-serif' }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={{
          background: '#ececec',
          border: 'none',
          borderRadius: '5px',
          height: '56px',
          padding: '0 18px',
          fontSize: '16px',
          lineHeight: '26px',
          color: '#333',
          fontFamily: 'Montserrat, sans-serif',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
}
