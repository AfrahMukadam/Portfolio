import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="h3 fw-bold mb-4">Projects</h2>

      <div className="row g-4">
        {PROJECTS.map((p) => (
         <div className="col-12 col-md-6 col-lg-4" key={p.name} data-aos="zoom-in">
            <div className="card h-100">
              <img src={p.image} alt={p.name} className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start">
                  <h3 className="h5 card-title mb-1">{p.name}</h3>
                  <span className="badge text-bg-primary">{p.tagline}</span>
                </div>
                <p className="card-text text-secondary mt-4 px-2" style={{ textAlign: "justify" }}>{p.description}</p>
                <div className="mt-auto">
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {p.tech.map((t) => (
                      <span key={t} className="badge text-bg-light border">{t}</span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    {p.live && (
                      <a className="btn btn-sm btn-primary" href={p.live} target="_blank" rel="noreferrer">
                        <i className="bi me-1" />
                        Live
                      </a>
                    )}
                    {p.repo && (
                      <a className="btn btn-sm btn-outline-dark" href={p.repo} target="_blank" rel="noreferrer">
                        <i className="bi bi-github me-1" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
