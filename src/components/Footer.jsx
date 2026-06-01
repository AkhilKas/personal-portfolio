export default function Footer() {
  return (
    <footer className="border-t py-7" style={{ borderColor: 'var(--line)' }}>
      <div className="max-w-[1180px] mx-auto px-8 flex justify-between items-center flex-wrap gap-3">
        <span className="font-mono text-[0.68rem] tracking-[0.1em] uppercase" style={{ color: 'var(--ink-faint)' }}>
          © {new Date().getFullYear()} Akhilesh Kasturi
        </span>
        <span className="font-mono text-[0.68rem] tracking-[0.1em] uppercase" style={{ color: 'var(--ink-faint)' }}>
          Designed &amp; built for the work ahead
        </span>
      </div>
    </footer>
  );
}
