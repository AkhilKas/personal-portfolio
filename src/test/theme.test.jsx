import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import App from '../App';

// Mock all child components so this test only covers theme logic
vi.mock('../components/ProgressTitle', () => ({ default: () => null }));
vi.mock('../components/Navbar', () => ({
  default: ({ isDark, onToggle }) => (
    <button data-testid="theme-toggle" data-dark={isDark} onClick={onToggle}>
      Toggle
    </button>
  ),
}));
vi.mock('../components/Hero', () => ({ default: () => <section id="hero" /> }));
vi.mock('../components/About', () => ({ default: () => <section id="about" /> }));
vi.mock('../components/Projects', () => ({ default: () => <section id="projects" /> }));
vi.mock('../components/Research', () => ({ default: () => <section id="research" /> }));
vi.mock('../components/Contact', () => ({ default: () => <section id="contact" /> }));

describe('Theme system', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('defaults to light mode when no localStorage value is set', () => {
    render(<App />);
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('initialises to dark mode when localStorage has "dark"', () => {
    localStorage.setItem('theme', 'dark');
    render(<App />);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(document.documentElement.classList.contains('light')).toBe(false);
  });

  it('toggles from light to dark when the toggle is clicked', () => {
    render(<App />);
    const toggle = screen.getByTestId('theme-toggle');
    expect(toggle.dataset.dark).toBe('false');
    fireEvent.click(toggle);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(document.documentElement.classList.contains('light')).toBe(false);
  });

  it('saves the chosen theme to localStorage', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('theme-toggle'));
    expect(localStorage.getItem('theme')).toBe('dark');
    fireEvent.click(screen.getByTestId('theme-toggle'));
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('never has both .dark and .light on <html> simultaneously', () => {
    render(<App />);
    const toggle = screen.getByTestId('theme-toggle');
    for (let i = 0; i < 4; i++) {
      fireEvent.click(toggle);
      const html = document.documentElement;
      const hasBoth = html.classList.contains('dark') && html.classList.contains('light');
      expect(hasBoth).toBe(false);
    }
  });
});
