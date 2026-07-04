import Nav        from './components/Nav'
import Hero       from './components/Hero'
import Projects   from './components/Projects'
import Skills     from './components/Skills'
import Experience from './components/Experience'
import Education  from './components/Education'
import Contact    from './components/Contact'

function Divider() {
  return <div className="divider" />
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
    </div>
  )
}
