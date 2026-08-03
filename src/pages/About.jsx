import { Link } from 'react-router-dom'
import data from '../content/projects.json'

export default function About() {
  const { designer, about } = data

  return (
    <>
      <section className="page-head" aria-label="About header">
        <nav className="crumb" aria-label="Breadcrumb">
          <Link to="/">home</Link>
          <span className="sep" aria-hidden="true">/</span>
          <span className="here">about</span>
        </nav>
        <h1 className="display page-title page-title--long">Spatial data scientist and urban planner passionate about understanding how cities work through data.</h1>
      </section>

      <div className="about-wrap" aria-label="About body">
        <div className="about-prose">
          {about.prose.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <div className="human">
            <span className="label">off the clock</span>
            {about.human}
          </div>

          <div className="about-cta">
            <a className="btn" href={`mailto:${designer.email}?subject=Hello`}>
              {designer.email} <span className="ar" aria-hidden="true">⧉</span>
            </a>
            <Link className="btn btn-ghost" to="/work">see the work</Link>
          </div>

          <img
            className="figimg r-3-2 about-prose-fig"
            src="/images/projects/aboutme/DSC_9295.jpg"
            alt="Nadia Cabrera Salazar trail running in the mountains"
          />
        </div>

        <aside className="about-side">
          <img
            className="figimg r-3-4 about-portrait"
            src="/images/projects/aboutme/FotoNadia_sat.png"
            alt="Portrait of Nadia Cabrera Salazar"
          />
          <dl className="facts" aria-label="At a glance">
            {about.facts.map((f) => (
              <div className="facts__row" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </>
  )
}
