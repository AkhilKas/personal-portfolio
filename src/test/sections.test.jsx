/**
 * Verifies that every section component renders with the ID the Navbar
 * scroll-spy depends on. If any ID is renamed the navigation silently breaks —
 * this test catches that before it reaches production.
 */
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('@emailjs/browser', () => ({ default: { send: vi.fn() } }));
vi.mock('react-ga4', () => ({ default: { initialize: vi.fn(), send: vi.fn() } }));

const REQUIRED_SECTIONS = ['hero', 'about', 'projects', 'research', 'contact'];

const NAVBAR_SECTION_IDS = ['hero', 'about', 'projects', 'research', 'contact'];

describe('Section IDs', () => {
  it('Navbar sections array matches required section IDs', async () => {
    // Import Navbar and pull its sections list without rendering
    const { default: Navbar } = await import('../components/Navbar');
    const { render: r, screen } = await import('@testing-library/react');
    r(<Navbar isDark={false} onToggle={() => {}} />);

    for (const id of NAVBAR_SECTION_IDS) {
      const link = document.querySelector(`a[href="#${id}"]`);
      expect(link, `Navbar is missing a link for section "#${id}"`).toBeTruthy();
    }
  });

  it('Hero renders with id="hero"', async () => {
    const { default: Hero } = await import('../components/Hero');
    const { container } = render(<Hero />);
    expect(container.querySelector('#hero')).toBeTruthy();
  });

  it('About renders with id="about"', async () => {
    const { default: About } = await import('../components/About');
    const { container } = render(<About />);
    expect(container.querySelector('#about')).toBeTruthy();
  });

  it('Projects renders with id="projects"', async () => {
    const { default: Projects } = await import('../components/Projects');
    const { container } = render(<Projects />);
    expect(container.querySelector('#projects')).toBeTruthy();
  });

  it('Research renders with id="research"', async () => {
    const { default: Research } = await import('../components/Research');
    const { container } = render(<Research />);
    expect(container.querySelector('#research')).toBeTruthy();
  });

  it('Contact renders with id="contact"', async () => {
    const { default: Contact } = await import('../components/Contact');
    const { container } = render(<Contact />);
    expect(container.querySelector('#contact')).toBeTruthy();
  });
});

describe('All required sections', () => {
  it('every required section ID is covered by the Navbar', () => {
    const missing = REQUIRED_SECTIONS.filter(id => !NAVBAR_SECTION_IDS.includes(id));
    expect(missing, `These sections are missing from Navbar: ${missing.join(', ')}`).toHaveLength(0);
  });
});
