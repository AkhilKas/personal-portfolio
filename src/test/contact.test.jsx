/**
 * Verifies the Contact form has the required fields and submit button.
 * Catches accidental removal of required inputs that would silently break EmailJS.
 */
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('@emailjs/browser', () => ({ default: { send: vi.fn() } }));

import Contact from '../components/Contact';

describe('Contact form', () => {
  it('renders a name input', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/your name/i)).toBeTruthy();
  });

  it('renders an email input', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/your.email@example.com/i)).toBeTruthy();
  });

  it('renders a subject input', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/brief subject line/i)).toBeTruthy();
  });

  it('renders a message textarea', () => {
    render(<Contact />);
    expect(screen.getByRole('textbox', { name: /message/i })).toBeTruthy();
  });

  it('renders the send button', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeTruthy();
  });

  it('renders all four contact reason options', () => {
    render(<Contact />);
    expect(screen.getByText('Research Collaboration')).toBeTruthy();
    expect(screen.getByText('Academic Discussion')).toBeTruthy();
    expect(screen.getByText('Project Inquiry')).toBeTruthy();
    expect(screen.getByText('Other')).toBeTruthy();
  });
});
