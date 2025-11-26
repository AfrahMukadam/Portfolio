import { CERTIFICATIONS } from "../data";

export default function Certifications() {
  

return (
    <section id="certifications" className="container py-5" data-aos="fade-up">
      <h2 className="h3 fw-bold mb-4">Certifications</h2>

      <div className="row">
        {CERTIFICATIONS.map((cert, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card border-1 h-100 p-4">
              <div className="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <h5 className="fw-bold mb-1">{cert.title}</h5>
                  <p className="text-muted mb-1">{cert.issuer}</p>
                  <small className="text-secondary">{cert.year}</small>
                </div>
                <a
                  href={cert.link}
                  className="btn btn-primary btn-sm mt-2 mt-md-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi me-1"></i> View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
