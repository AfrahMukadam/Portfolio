import { PROFILE } from "../data";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          {PROFILE.name}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              ["About", "about"],
              ["Experience", "experience"],
              ["Projects", "projects"],
              ["Certifications", "certifications"],
              ["Education","education"],
              ["Skills", "skills"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <li className="nav-item" key={id}>
                <a className="nav-link" href={`#${id}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ms-lg-3 d-none d-lg-flex gap-2">
            {PROFILE.links.github && (
              <a
                className="btn btn-outline-dark btn-sm"
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github me-1" />
                GitHub
              </a>
            )}
            {PROFILE.links.linkedin && (
              <a
                className="btn btn-primary btn-sm"
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin me-1" />
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
