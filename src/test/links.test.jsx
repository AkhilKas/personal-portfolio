/**
 * Site-wide checks on the fully rendered page: external links open safely,
 * images have alt text, and no in-page anchor points at a missing section.
 */
import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../App';

vi.mock('@emailjs/browser', () => ({ default: { send: vi.fn() } }));

describe('Rendered page', () => {
  let container;
  beforeEach(() => {
    ({ container } = render(<App />));
  });

  it('every new-tab link uses rel="noopener noreferrer"', () => {
    const unsafe = [...container.querySelectorAll('a[target="_blank"]')]
      .filter(a => !/noopener/.test(a.rel) || !/noreferrer/.test(a.rel))
      .map(a => a.href);
    expect(unsafe, `Links missing rel="noopener noreferrer": ${unsafe.join(', ')}`).toHaveLength(0);
  });

  it('every external link is https', () => {
    const insecure = [...container.querySelectorAll('a[href^="http:"]')].map(a => a.href);
    expect(insecure, `Non-https links: ${insecure.join(', ')}`).toHaveLength(0);
  });

  it('every image has alt text', () => {
    const missing = [...container.querySelectorAll('img')].filter(img => !img.getAttribute('alt'));
    expect(missing.map(img => img.src)).toHaveLength(0);
  });

  it('every in-page anchor points at an element that exists', () => {
    const broken = [...container.querySelectorAll('a[href^="#"]')]
      .map(a => a.getAttribute('href'))
      .filter(href => href.length > 1 && !container.querySelector(href));
    expect(broken, `Anchors with no target: ${broken.join(', ')}`).toHaveLength(0);
  });
});
