import { useEffect, useRef, useState } from 'react';

function parseMetric(str) {
  const match = String(str).match(/^([^\d\-.]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: '', number: 0, suffix: String(str), decimals: 0 };
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return { prefix, number: parseFloat(numStr), suffix, decimals };
}

// Animate a numeric metric from 0 to its final value when it scrolls into view.
// Preserves suffixes/prefixes (%, +, K, $, …) and matches the source string's decimal precision.
export default function CountUp({ value, duration = 1100 }) {
  const ref = useRef(null);
  const parsed = useRef(parseMetric(value));
  const { prefix, number, suffix, decimals } = parsed.current;
  const finalText = `${prefix}${number.toFixed(decimals)}${suffix}`;
  const [display, setDisplay] = useState(`${prefix}${(0).toFixed(decimals)}${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallbacks: reduced motion, or environments without IntersectionObserver (e.g. jsdom).
    const reduced = typeof window !== 'undefined'
      && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setDisplay(finalText);
      return;
    }

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);

      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setDisplay(`${prefix}${(number * eased).toFixed(decimals)}${suffix}`);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    io.observe(el);
    return () => io.disconnect();
  }, [prefix, number, suffix, decimals, duration, finalText]);

  return (
    <span ref={ref} aria-label={finalText} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {display}
    </span>
  );
}
