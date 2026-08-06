import { useCallback, useState } from 'react';

// Ambiguous characters are left out on purpose — nothing frustrates a real
// visitor more than failing a captcha because O looked like 0.
const CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function generateCode(length) {
  let code = '';
  for (let i = 0; i < length; i += 1) {
    code += CHARSET[Math.floor(Math.random() * CHARSET.length)];
  }
  return code;
}

/**
 * Holds the captcha state for one form.
 *
 * The code is regenerated on mount, on every submit attempt (successful or
 * not) and whenever the visitor asks for a new one. Regenerating on failure
 * matters — otherwise the same code can be retried indefinitely.
 */
export function useCaptcha(length = 5) {
  const [code, setCode] = useState(() => generateCode(length));
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const regenerate = useCallback(() => {
    setCode(generateCode(length));
    setInput('');
    setError('');
  }, [length]);

  /** Returns true when the typed value matches. Always issues a fresh code. */
  const validate = useCallback(() => {
    const isMatch = input.trim().toUpperCase() === code.toUpperCase();

    setCode(generateCode(length));
    setInput('');
    setError(isMatch ? '' : 'Incorrect captcha. Please try again.');

    return isMatch;
  }, [code, input, length]);

  return { code, input, setInput, error, setError, regenerate, validate };
}
