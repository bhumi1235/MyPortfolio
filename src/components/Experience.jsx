import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '60px 0' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="sec-index mono">03</span>
          <h2>Experience</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {experience.map((job, idx) => (
            <div key={idx} className="panel">
              <span className="corner-bl" /><span className="corner-br" />

              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '17px', color: 'var(--ink)' }}>
                  {job.role} — {job.company}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-muted)', whiteSpace: 'nowrap' }}>
                  {job.period}
                </span>
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-muted)', marginBottom: '10px' }}>
                {job.location}
              </div>

              {/* Tech stack */}
              <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '16px' }}>
                {job.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>

              {/* Bullets */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 0 }}>
                {job.bullets.map((b, i) => (
                  <li key={i} className="highlight-li">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
