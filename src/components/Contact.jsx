import { personal } from '../data/portfolio'

const contactLinks = [
  { label: 'Email',    value: personal.email,       href: `mailto:${personal.email}` },
  { label: 'GitHub',   value: personal.github.replace('https://', ''),  href: personal.github,   external: true },
  { label: 'LinkedIn', value: personal.linkedin.replace('https://', ''), href: personal.linkedin, external: true },
  { label: 'LeetCode', value: personal.leetcode.replace('https://', ''), href: personal.leetcode, external: true },
]

export default function Contact() {
  return (
    <footer id="contact" style={{ padding: '70px 0 50px' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="sec-index mono">05</span>
          <h2>Get In Touch</h2>
        </div>

        <p style={{ color: 'var(--ink-muted)', maxWidth: '480px', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
          Open to backend engineering, systems, and applied ML roles. Reach out — happiest talking through architecture decisions and scaling tradeoffs.
        </p>

        {/* Contact cards */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          {contactLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                flex: 1, minWidth: '160px', padding: '18px', textAlign: 'center',
                border: '1px solid var(--grid)', background: 'var(--white)',
                fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink)',
                transition: 'border-color 0.15s ease, transform 0.15s ease',
                display: 'block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--signal)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--grid)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span style={{ display: 'block', color: 'var(--ink-muted)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                {link.label}
              </span>
              <span style={{ wordBreak: 'break-all', fontSize: '12px' }}>{link.value}</span>
            </a>
          ))}
        </div>

        {/* Footer fine print */}
        <div style={{
          marginTop: '56px',
          paddingTop: '24px',
          borderTop: '1px solid var(--grid)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.02em', color: 'var(--ink)' }}>
            BHUMIKA<span style={{ color: 'var(--signal)' }}>.</span>SAXENA
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-muted)' }}>
            BUILT WITH INTENT · BANGALORE-READY · REMOTE-FRIENDLY
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-muted)' }}>
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  )
}
