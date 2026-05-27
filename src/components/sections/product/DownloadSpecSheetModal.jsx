import { useState } from 'react';
import toast from 'react-hot-toast';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000').replace(/\/$/, '');

export default function DownloadSpecSheetModal({ isOpen, onClose, productInterestedIn = '' }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
  });
  const [submitState, setSubmitState] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.companyName || !form.email) {
      setSubmitState({ type: 'error', message: 'Please fill all fields.' });
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitState({ type: '', message: '' });

      const response = await fetch(`${API_BASE_URL}/api/spec-sheet/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          productInterestedIn,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit spec sheet request.');
      }

      setForm({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
      });
      toast.success('Spec sheet requested successfully.');
      onClose();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to submit spec sheet request.';
      setSubmitState({
        type: 'error',
        message,
      });
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
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
          <div style={{ borderBottom: '1px solid #d9d9d9', paddingBottom: '12px', marginBottom: '20px' }}>
            <h2
              className="font-nexa"
              style={{ fontSize: '24px', lineHeight: '32px', color: '#0a1553', fontWeight: 600 }}
            >
              Download Spec Sheet
            </h2>
          </div>

          <div
            className="grid-cols-1 md:grid-cols-2"
            style={{
              display: 'grid',
              gap: '14px',
              marginBottom: '14px',
            }}
          >
            <Field label="First Name" name="firstName" value={form.firstName} placeholder="First name" onChange={handleChange} />
            <Field label="Last Name" name="lastName" value={form.lastName} placeholder="Last name" onChange={handleChange} />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <Field label="Company Name" name="companyName" value={form.companyName} placeholder="Company name" onChange={handleChange} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <Field label="Email" name="email" type="email" value={form.email} placeholder="you@example.com" onChange={handleChange} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="submit"
              className="font-nexa capitalize"
              disabled={isSubmitting}
              style={{
                background: '#1863da',
                color: '#fff',
                border: 'none',
                padding: 'clamp(12px, 2.5vw, 14px) clamp(28px, 6vw, 32px)',
                fontSize: 'clamp(16px, 4.2vw, 20px)',
                lineHeight: '1',
                letterSpacing: '0.01em',
                cursor: 'pointer',
                fontWeight: 400,
                opacity: isSubmitting ? 0.75 : 1,
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 10px) 100%, 0 100%)',
              }}
            >
              Submit
            </button>
          </div>

          {submitState.message && (
            <p
              style={{
                marginTop: '12px',
                fontSize: '14px',
                color: submitState.type === 'success' ? '#1c7c54' : '#d92d20',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              {submitState.message}
            </p>
          )}
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
        style={{ fontSize: 'clamp(14px, 3.7vw, 14px)', lineHeight: '26px', color: '#666', fontFamily: 'Montserrat, sans-serif' }}
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
          height: 'clamp(56px, 14.5vw, 56px)',
          padding: '0 18px',
          fontSize: 'clamp(16px, 4.2vw, 16px)',
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
