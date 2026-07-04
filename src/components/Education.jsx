import { education, achievements } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" style={{ padding: '60px 0' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="sec-index mono">04</span>
          <h2>Education & Achievements</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>

          {/* Education card */}
          <div className="panel">
            <span className="corner-bl" /><span className="corner-br" />
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
              Education
            </div>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '16px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>
              {education.degree}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--ink-muted)', marginBottom: '12px' }}>
              {education.institution}
            </div>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '3px' }}>Duration</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink)', fontWeight: 500 }}>{education.period}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '3px' }}>CGPA</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--signal)', fontWeight: 700 }}>{education.cgpa}</div>
              </div>
            </div>
            <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--ink-muted)', borderTop: '1px solid var(--grid)', paddingTop: '12px' }}>
              Specialization: <span style={{ color: 'var(--teal)', fontWeight: 500 }}>{education.specialization}</span>
            </div>
          </div>

          {/* Achievement cards */}
          {achievements.map((a, i) => (
            <div key={i} className="panel">
              <span className="corner-bl" /><span className="corner-br" />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--signal)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                {a.icon === 'trophy' ? '🏆 Achievement' : '⭐ Leadership'}
              </div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3 }}>
                {a.title}
              </div>
              <p style={{ fontSize: '14px', color: 'var(--ink-muted)', lineHeight: 1.65 }}>
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
