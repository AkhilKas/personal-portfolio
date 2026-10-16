/**
 * Verifies the interactive pieces outside the contact form: the mobile menu,
 * the theme toggle button, and the Research "Cite" button.
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../components/Navbar';
import Research from '../components/Research';

describe('Navbar', () => {
  it('calls onToggle when the theme button is clicked', async () => {
    const onToggle = vi.fn();
    const user = userEvent.setup();
    render(<Navbar isDark={false} onToggle={onToggle} />);

    await user.click(screen.getAllByRole('button', { name: /toggle theme/i })[0]);

    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('opens the mobile menu and closes it after a link is chosen', async () => {
    const user = userEvent.setup();
    render(<Navbar isDark={false} onToggle={() => {}} />);
    const linkCount = () => screen.getAllByRole('link', { name: /^projects$/i }).length;

    expect(linkCount()).toBe(1); // desktop link only
    await user.click(screen.getByRole('button', { name: /open menu/i }));
    expect(linkCount()).toBe(2); // desktop + mobile

    await user.click(screen.getAllByRole('link', { name: /^projects$/i })[1]);
    expect(linkCount()).toBe(1);
  });
});

describe('Research', () => {
  it('copies the citation to the clipboard and confirms it', async () => {
    const user = userEvent.setup();
    const writeText = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue(undefined);
    render(<Research />);

    await user.click(screen.getByRole('button', { name: /cite/i }));

    expect(writeText).toHaveBeenCalledWith(expect.stringContaining('Proof-of-Trust-in-Expertise'));
    expect(await screen.findByRole('button', { name: /copied/i })).toBeTruthy();
  });
});
