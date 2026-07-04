import { skills } from '../data/portfolio'

const sections = [
  { key: 'Languages',           label: 'Languages' },
  { key: 'Backend & Databases', label: 'Backend & Data' },
  { key: 'AI / ML',             label: 'Machine Learning' },
  { key: 'Core CS',             label: 'Core CS' },
  { key: 'Developer Tools',     label: 'Tools' },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '60px 0' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="sec-index mono">02</span>
          <h2>Toolkit</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {sections.map(sec => {
            const items = skills[sec.key] || []
            return (
              <div key={sec.key} className="panel" style={{ padding: '22px 24px' }}>
                <span className="corner-bl" /><span className="corner-br" />
                <h3 style={{
                  fontFamily: 'var(--font-mono)', fontSize: '12px',
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                  color: 'var(--teal)', marginBottom: '12px',
                }}>
                  {sec.label}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--ink-muted)', lineHeight: 1.7 }}>
                  {items.join(', ')}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
