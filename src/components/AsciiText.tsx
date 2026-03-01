import { useState, useRef, useCallback, useMemo } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
const CHARS_LEN = CHARS.length;

interface AsciiTextProps {
  text: string;
  className?: string;
  mobileBreakBefore?: string;
}

export function AsciiText({ text, className = '', mobileBreakBefore }: AsciiTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const breakIndex = useMemo(
    () => (mobileBreakBefore ? text.indexOf(mobileBreakBefore) : -1),
    [text, mobileBreakBefore]
  );

  const hasAt = text.includes('@');

  const startScramble = useCallback(() => {
    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const arr = text.split('');
      for (let i = Math.floor(iteration); i < arr.length; i++) {
        arr[i] = CHARS[Math.floor(Math.random() * CHARS_LEN)];
      }
      setDisplayText(arr.join(''));

      if (iteration >= text.length) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      }

      iteration += 0.5;
    }, 30);
  }, [text]);

  return (
    <span
      onMouseEnter={startScramble}
      className={`inline-block cursor-pointer ${hasAt ? "font-['Redaction_50']" : ""} ${className}`}
    >
      {displayText.split('').map((char, index) => (
        <span key={index} className="contents">
          {index === breakIndex && <br className="sm:hidden" />}
          <span className="inline-block w-[1ch] text-center">{char}</span>
        </span>
      ))}
    </span>
  );
}
