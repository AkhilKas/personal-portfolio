/**
 * Verifies the Contact form actually sends through EmailJS and reports the result.
 * Catches regressions where the form renders but messages never arrive.
 */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import emailjs from '@emailjs/browser';
import Contact from '../components/Contact';

vi.mock('@emailjs/browser', () => ({ default: { send: vi.fn() } }));

async function fillAndSubmit(user) {
  await user.type(screen.getByPlaceholderText(/your name/i), 'Ada Lovelace');
  await user.type(screen.getByPlaceholderText(/your.email@example.com/i), 'ada@example.com');
  await user.type(screen.getByPlaceholderText(/brief subject line/i), 'Hello');
  await user.type(screen.getByRole('textbox', { name: /message/i }), 'Nice portfolio');
  await user.click(screen.getByRole('button', { name: /send message/i }));
}

describe('Contact form submission', () => {
  beforeEach(() => {
    emailjs.send.mockReset();
  });

  it('sends the form values to EmailJS and shows a success message', async () => {
    emailjs.send.mockResolvedValue({ status: 200 });
    const user = userEvent.setup();
    render(<Contact />);

    await fillAndSubmit(user);

    expect(await screen.findByText(/message sent/i)).toBeTruthy();
    expect(emailjs.send).toHaveBeenCalledTimes(1);
    const params = emailjs.send.mock.calls[0][2];
    expect(params).toMatchObject({
      from_name: 'Ada Lovelace',
      from_email: 'ada@example.com',
      subject: 'Hello',
      message: 'Nice portfolio',
    });
  });

  it('clears the form after a successful send', async () => {
    emailjs.send.mockResolvedValue({ status: 200 });
    const user = userEvent.setup();
    render(<Contact />);

    await fillAndSubmit(user);

    await waitFor(() => expect(screen.getByPlaceholderText(/your name/i).value).toBe(''));
  });

  it('shows an error message when EmailJS fails', async () => {
    emailjs.send.mockRejectedValue(new Error('network'));
    const user = userEvent.setup();
    render(<Contact />);

    await fillAndSubmit(user);

    expect(await screen.findByText(/something went wrong/i)).toBeTruthy();
  });

  it('does not send when required fields are empty', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(emailjs.send).not.toHaveBeenCalled();
  });
});
