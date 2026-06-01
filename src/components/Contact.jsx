import { useState } from 'react';
import emailjs from '@emailjs/browser';

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  background: 'var(--paper-deep)',
  border: '1px solid var(--line)',
  borderRadius: '2px',
  color: 'var(--ink)',
  fontFamily: 'inherit',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s',
};

function Field({ label, children }) {
  return (
    <div>
      <label className="block font-mono text-[0.68rem] tracking-[0.12em] uppercase mb-2" style={{ color: 'var(--ink-faint)' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', contactReason: 'collaboration' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, subject: formData.subject, message: formData.message, contact_reason: formData.contactReason, to_email: 'akhilkas2001@gmail.com' },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', contactReason: 'collaboration' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const socialLinks = [
    { name: 'Email',         value: 'akhilkas2001@gmail.com',      href: 'mailto:akhilkas2001@gmail.com' },
    { name: 'LinkedIn',      value: '/in/akhilesh-kasturi',        href: 'https://linkedin.com/in/akhilesh-kasturi' },
    { name: 'GitHub',        value: '/AkhilKas',                   href: 'https://github.com/AkhilKas' },
    { name: 'Google Scholar',value: 'Scholar Profile',             href: 'https://scholar.google.com/citations?user=2J9E164AAAAJ&hl=en' },
  ];

  return (
    <section className="py-24 border-t" style={{ borderColor: 'var(--line)' }} id="contact">
      <div className="max-w-[1180px] mx-auto px-8">

        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-14">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent">05</span>
          <h2 className="font-serif font-normal text-4xl tracking-tight text-ink">Contact</h2>
          <span className="flex-1 h-px self-center ml-2" style={{ background: 'var(--line)' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Form */}
          <div>
            <p className="font-serif text-2xl font-normal mb-8 text-ink">Send a Message</p>
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name">
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your name" style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent)'; }} onBlur={e => { e.target.style.borderColor = 'var(--line)'; }} />
                </Field>
                <Field label="Email">
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="your.email@example.com" style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent)'; }} onBlur={e => { e.target.style.borderColor = 'var(--line)'; }} />
                </Field>
              </div>

              <Field label="Subject">
                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Brief subject line" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'var(--accent)'; }} onBlur={e => { e.target.style.borderColor = 'var(--line)'; }} />
              </Field>

              <Field label="Message">
                <textarea id="message" aria-label="Message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} placeholder="Tell me about your research interests, project, or question…" style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => { e.target.style.borderColor = 'var(--accent)'; }} onBlur={e => { e.target.style.borderColor = 'var(--line)'; }} />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-mono text-[0.76rem] tracking-[0.08em] uppercase py-3.5 rounded-sm border transition-all duration-200"
                style={isSubmitting
                  ? { background: 'var(--paper-deep)', color: 'var(--ink-faint)', borderColor: 'var(--line)', cursor: 'not-allowed' }
                  : { background: 'var(--ink)', color: 'var(--paper)', borderColor: 'var(--ink)' }}
                onMouseEnter={e => { if (!isSubmitting) { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; } }}
                onMouseLeave={e => { if (!isSubmitting) { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)'; } }}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="font-mono text-[0.72rem] tracking-wide" style={{ color: 'var(--accent)' }}>
                  ✓ Message sent. I'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="font-mono text-[0.72rem] tracking-wide" style={{ color: 'var(--accent)' }}>
                  ✗ Something went wrong. Try emailing me directly.
                </p>
              )}
            </form>
          </div>

          {/* Social links */}
          <div>
            <p className="font-serif text-2xl font-normal mb-8 text-ink">Get in Touch</p>
            <div className="space-y-3">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border rounded-sm group transition-all duration-200"
                  style={{ borderColor: 'var(--line)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--paper-deep)'; e.currentTarget.style.borderColor = 'var(--ink-faint)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--line)'; }}
                >
                  <div>
                    <p className="font-mono text-[0.72rem] tracking-[0.1em] uppercase mb-0.5" style={{ color: 'var(--ink-faint)' }}>{link.name}</p>
                    <p className="text-[0.95rem] text-ink">{link.value}</p>
                  </div>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--ink-faint)' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
