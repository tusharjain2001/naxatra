import { useEffect, useRef } from 'react';

// Kept dark and high contrast — light inks are what make a captcha unreadable.
const INK_COLORS = ['#0a1553', '#1863da', '#243b7a', '#11266b'];

function CaptchaCanvas({ code, width, height, cssHeight, radius, background, className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Always render at 2x or better. On a 1x display the browser would
    // otherwise draw rotated glyphs straight to the pixel grid, which is what
    // makes a canvas captcha look soft.
    const ratio = Math.max(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);

    const ctx = canvas.getContext('2d');
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    // Noise sits behind the text and stays faint — it should suggest a captcha,
    // not compete with the characters.
    for (let i = 0; i < 3; i += 1) {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(24, 99, 218, ${0.08 + Math.random() * 0.07})`;
      ctx.lineWidth = 1;
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.lineTo(Math.random() * width, Math.random() * height);
      ctx.stroke();
    }

    for (let i = 0; i < 16; i += 1) {
      ctx.fillStyle = `rgba(81, 81, 81, ${0.08 + Math.random() * 0.1})`;
      ctx.fillRect(Math.random() * width, Math.random() * height, 1.5, 1.5);
    }

    // Characters spread evenly with padding, so nothing crowds the edges.
    const padding = width * 0.08;
    const step = (width - padding * 2) / code.length;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    code.split('').forEach((char, index) => {
      const fontSize = height * (0.58 + Math.random() * 0.08);
      const x = padding + step * (index + 0.5);
      const y = height / 2 + (Math.random() * 4 - 2);

      ctx.save();
      ctx.translate(x, y);
      // Gentle tilt only — heavy rotation hurts real users far more than bots.
      ctx.rotate(Math.random() * 0.34 - 0.17);
      ctx.font = `700 ${fontSize}px Montserrat, Arial, sans-serif`;
      ctx.fillStyle = INK_COLORS[Math.floor(Math.random() * INK_COLORS.length)];
      ctx.fillText(char, 0, 0);
      ctx.restore();
    });
  }, [code, width, height, background]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Captcha verification image"
      className={className}
      style={{
        width: `${width}px`,
        height: cssHeight,
        borderRadius: radius,
        border: '1px solid #dcdcdc',
        flexShrink: 0,
        userSelect: 'none',
      }}
    />
  );
}

function RefreshIcon({ color }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The visible captcha: image, refresh control and the answer input.
 *
 * Every colour, size and font is a prop so the same component can sit inside
 * forms with different design languages without looking bolted on. The
 * `*ClassName` props exist for the responsive forms, which drive their mobile
 * sizes through Tailwind overrides rather than inline styles.
 */
export default function CaptchaBox({
  captcha,
  id = 'captcha-answer',
  label = 'Enter Captcha',
  required = false,
  fontFamily = 'Montserrat, sans-serif',
  labelColor = '#666',
  labelSize = '14px',
  labelClassName = '',
  inputBackground = '#ececec',
  inputColor = '#333',
  inputBorder = 'none',
  inputClassName = '',
  radius = '5px',
  height = 56,
  inputHeight,
  fontSize = '16px',
  canvasWidth = 190,
  canvasBackground = '#fbfbfc',
  canvasClassName = '',
  buttonWidth = 44,
  buttonClassName = '',
  errorColor = '#d92d20',
  errorSize = '13px',
  accentColor = '#1863da',
  gap = '10px',
}) {
  const { code, input, setInput, error, regenerate } = captcha;
  const resolvedHeight = inputHeight || `${height}px`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
      <label
        htmlFor={id}
        className={labelClassName}
        style={{ fontFamily, fontSize: labelSize, color: labelColor, fontWeight: 500, textAlign: 'left' }}
      >
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </label>

      <div style={{ display: 'flex', alignItems: 'center', gap, flexWrap: 'wrap' }}>
        <CaptchaCanvas
          code={code}
          width={canvasWidth}
          height={height}
          cssHeight={resolvedHeight}
          radius={radius}
          background={canvasBackground}
          className={canvasClassName}
        />

        <button
          type="button"
          onClick={regenerate}
          aria-label="Get a new captcha code"
          title="Get a new code"
          className={buttonClassName}
          style={{
            width: `${buttonWidth}px`,
            height: resolvedHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: '1px solid #dcdcdc',
            borderRadius: radius,
            cursor: 'pointer',
            flexShrink: 0,
            padding: 0,
          }}
        >
          <RefreshIcon color={accentColor} />
        </button>

        <input
          id={id}
          name="captcha"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          placeholder="Enter code"
          autoComplete="off"
          spellCheck="false"
          maxLength={code.length + 2}
          className={inputClassName}
          style={{
            flex: '1 1 140px',
            minWidth: '110px',
            background: inputBackground,
            border: inputBorder,
            borderRadius: radius,
            height: resolvedHeight,
            padding: '0 18px',
            fontFamily,
            fontSize,
            color: inputColor,
            letterSpacing: '0.12em',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {error && (
        <p style={{ fontFamily, fontSize: errorSize, color: errorColor, marginTop: '2px' }}>
          {error}
        </p>
      )}
    </div>
  );
}
