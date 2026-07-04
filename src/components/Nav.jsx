import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'

const links = [
  { label: 'Systems Built', href: '#projects' },
  { label: 'Toolkit',       href: '#skills' },
  { label: 'Experience',    href: '#experience' },
  { label: 'Contact',       href: '#contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLink = href => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(238,243,248,0.92)',
      backdropFilter: 'blur(6px)',
      borderBottom: '1px solid var(--grid)',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 2.5rem',
      }}>
        {/* Brand */}
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '18px', letterSpacing: '-0.02em', color: 'var(--ink)' }}>
          BHUMIKA<span style={{ color: 'var(--signal)' }}>.</span>SAXENA
        </a>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={e => { e.preventDefault(); handleLink(l.href) }}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-muted)', transition: 'color 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--signal)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-muted)' }}>
              {l.label}
            </a>
          ))}
          <a href={personal.resumePath} target="_blank" rel="noopener noreferrer"
            className="btn-primary" style={{ padding: '8px 16px', fontSize: '12px' }}>
            Resume
          </a>
        </nav>

        {/* Mobile button */}
        <button onClick={() => setMenuOpen(o => !o)} className="mobile-menu-btn"
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)', display: 'none', padding: '4px' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(238,243,248,0.98)', backdropFilter: 'blur(6px)', borderTop: '1px solid var(--grid)', padding: '12px 2.5rem 20px' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {links.map(l => (
              <a key={l.href} href={l.href}
                onClick={e => { e.preventDefault(); handleLink(l.href) }}
                style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-muted)', padding: '10px 0', borderBottom: '1px solid var(--paper-2)' }}>
                {l.label}
              </a>
            ))}
            <a href={personal.resumePath} target="_blank" rel="noopener noreferrer"
              className="btn-primary" style={{ marginTop: '14px', justifyContent: 'center' }}>
              Resume
            </a>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
