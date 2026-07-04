import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = id => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" style={{ padding: '88px 0 70px' }}>
      <div className="wrap">
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>

          {/* Eyebrow */}
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.12em',
            color: 'var(--teal)', textTransform: 'uppercase', marginBottom: '18px',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{
              width: '8px', height: '8px', background: 'var(--signal)', borderRadius: '50%',
              boxShadow: '0 0 0 3px rgba(232,121,58,0.18)', display: 'inline-block', flexShrink: 0,
            }} />
            status: open to work · batch 2027
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-head)', fontWeight: 700,
            fontSize: 'clamp(34px, 6vw, 58px)', lineHeight: 1.05, letterSpacing: '-0.02em',
            maxWidth: '680px', color: 'var(--ink)',
          }}>
            Building systems that{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--signal)' }}>move data</em>
            {' '}without missing a beat.
          </h1>

          <p style={{ marginTop: '20px', maxWidth: '540px', fontSize: '17px', color: 'var(--ink-muted)', lineHeight: 1.7 }}>
            Software engineer specializing in backend architecture, async pipelines, and applied ML — the kind of infrastructure that sits quietly underneath and just works.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '14px', marginTop: '32px', flexWrap: 'wrap' }}>
            <a href="#projects" onClick={e => { e.preventDefault(); scrollTo('#projects') }} className="btn-primary">
              View Systems Built ↓
            </a>
            <a href={personal.resumePath} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Resume ↗
            </a>
            <a href={`mailto:${personal.email}`} className="btn-outline">
              Get In Touch
            </a>
          </div>

          {/* Pipeline SVG */}
          <div style={{ marginTop: '56px' }}>
            <svg viewBox="0 0 900 140" style={{ display: 'block', width: '100%', height: 'auto' }}>
              {/* Dashed flow lines */}
              {[
                'M110,70 L230,70',
                'M340,70 L460,70',
                'M570,70 L690,70',
                'M800,70 L860,70',
              ].map((d, i) => (
                <path key={i} d={d} stroke="var(--ink-muted)" strokeWidth="1.4" fill="none" strokeDasharray="5 4" />
              ))}

              {/* INGEST */}
              <g>
                <rect x="10" y="45" width="100" height="50" fill="var(--white)" stroke="var(--ink-muted)" strokeWidth="1.4" />
                <text fontFamily="'IBM Plex Mono',monospace" fontSize="11" fill="var(--ink)" x="60" y="66" textAnchor="middle">INGEST</text>
                <text fontFamily="'IBM Plex Mono',monospace" fontSize="9" fill="var(--ink-muted)" x="60" y="80" textAnchor="middle">raw input</text>
              </g>
              {/* PROCESS (active) */}
              <g>
                <rect x="230" y="45" width="110" height="50" fill="var(--white)" stroke="var(--signal)" strokeWidth="2" />
                <text fontFamily="'IBM Plex Mono',monospace" fontSize="11" fill="var(--ink)" x="285" y="66" textAnchor="middle">PROCESS</text>
                <text fontFamily="'IBM Plex Mono',monospace" fontSize="9" fill="var(--ink-muted)" x="285" y="80" textAnchor="middle">FastAPI · Celery</text>
              </g>
              {/* PERSIST */}
              <g>
                <rect x="460" y="45" width="110" height="50" fill="var(--white)" stroke="var(--ink-muted)" strokeWidth="1.4" />
                <text fontFamily="'IBM Plex Mono',monospace" fontSize="11" fill="var(--ink)" x="515" y="66" textAnchor="middle">PERSIST</text>
                <text fontFamily="'IBM Plex Mono',monospace" fontSize="9" fill="var(--ink-muted)" x="515" y="80" textAnchor="middle">Postgres · Mongo</text>
              </g>
              {/* SERVE */}
              <g>
                <rect x="690" y="45" width="110" height="50" fill="var(--white)" stroke="var(--ink-muted)" strokeWidth="1.4" />
                <text fontFamily="'IBM Plex Mono',monospace" fontSize="11" fill="var(--ink)" x="745" y="66" textAnchor="middle">SERVE</text>
                <text fontFamily="'IBM Plex Mono',monospace" fontSize="9" fill="var(--ink-muted)" x="745" y="80" textAnchor="middle">REST · UI</text>
              </g>

              {/* Animated dot */}
              <circle r="5" fill="var(--signal)">
                <animateMotion dur="4s" repeatCount="indefinite"
                  path="M15,70 L230,70 L340,70 L460,70 L570,70 L690,70 L800,70 L855,70" />
              </circle>
            </svg>
          </div>

          {/* Quick stats */}
          <div style={{ display: 'flex', gap: '36px', marginTop: '44px', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid var(--grid)' }}>
            {[
              { value: '50+',   label: 'Production APIs shipped' },
              { value: '65.5%', label: 'LLM token reduction' },
              { value: '8.5',   label: 'CGPA / 10' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--signal)', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-muted)', marginTop: '5px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
