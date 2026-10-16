/**
 * Verifies CountUp keeps each metric's prefix, suffix and decimal precision.
 * A parsing regression would show wrong numbers (e.g. "0.9" instead of "0.87") on the live site.
 */
import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import CountUp from '../components/CountUp';

describe('CountUp', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it.each(['85%', '0.87', '50+', '300+', '7', '$150K'])(
    'shows the final value "%s" when IntersectionObserver is unavailable',
    (value) => {
      render(<CountUp value={value} />);
      expect(screen.getByText(value)).toBeTruthy();
    },
  );

  it('exposes the final value to screen readers while animating', () => {
    render(<CountUp value="85%" />);
    expect(screen.getByLabelText('85%')).toBeTruthy();
  });

  it('starts at zero and counts up once scrolled into view', () => {
    let trigger;
    vi.stubGlobal('IntersectionObserver', class {
      constructor(cb) { trigger = cb; }
      observe() {}
      unobserve() {}
      disconnect() {}
    });
    const frames = [];
    vi.stubGlobal('requestAnimationFrame', (cb) => frames.push(cb));

    render(<CountUp value="0.87" duration={1000} />);
    expect(screen.getByText('0.00')).toBeTruthy();

    const start = performance.now();
    act(() => { trigger([{ isIntersecting: true, target: document.body }]); });
    act(() => { frames.shift()(start + 1000); });
    expect(screen.getByText('0.87')).toBeTruthy();
  });
});
