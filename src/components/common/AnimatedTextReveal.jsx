import { useEffect, useState } from 'react';

export function countAnimatedCharacters(text = '') {
  return Array.from(text.replace(/\s+/g, '')).length;
}

function renderCharacter(char, key, style) {
  return (
    <span key={key} aria-hidden="true" className="animated-letter inline-block" style={style}>
      {char}
    </span>
  );
}

export default function AnimatedTextReveal({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = 0.03,
  duration = 0.58,
  repeatInterval = 5000,
}) {
  const [cycleKey, setCycleKey] = useState(0);
  const words = text.trim().split(/\s+/).filter(Boolean);
  let characterIndex = 0;

  useEffect(() => {
    if (!repeatInterval || repeatInterval <= 0) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCycleKey((currentKey) => currentKey + 1);
    }, repeatInterval);

    return () => window.clearInterval(intervalId);
  }, [repeatInterval]);

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      {/* data-nosnippet keeps the per-letter spans out of Google's titles/snippets */}
      <span key={cycleKey} aria-hidden="true" data-nosnippet="">
        {words.map((word, wordIndex) => (
          <span key={`${word}-${wordIndex}`}>
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, charIndex) => {
                const currentIndex = characterIndex;
                characterIndex += 1;

                return renderCharacter(char, `${char}-${wordIndex}-${charIndex}`, {
                  animationDelay: `${delay + currentIndex * stagger}s`,
                  animationDuration: `${duration}s`,
                });
              })}
            </span>
            {wordIndex < words.length - 1 ? ' ' : null}
          </span>
        ))}
      </span>
    </Tag>
  );
}
