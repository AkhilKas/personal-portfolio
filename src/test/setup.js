import '@testing-library/jest-dom';

// matchMedia not available in jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// clipboard not available in jsdom
Object.defineProperty(navigator, 'clipboard', {
  writable: true,
  configurable: true, // user-event replaces it with its own stub
  value: { writeText: vi.fn().mockResolvedValue(undefined) },
});
