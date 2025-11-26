import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="container py-5">
      <h2 className="h3 fw-bold mb-4">EXPERIENCE</h2>

      <div className="row g-4">
        {EXPERIENCE.map((job) => (
          <div className="col-12" key={job.company} data-aos="fade-up">

            <div className="border rounded-3 p-3 p-md-4">
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                <h3 className="h5 mb-0">
                  {job.title} · <span className="text-primary">{job.company}</span>
                </h3>
                <div className="text-nowrap text-muted small">
                  {job.period} · {job.location}
                </div>
              </div>

              <ul className="mt-3 mb-2">
                {job.bullets.map((b, i) => (
                  <li key={i} className="text-secondary">{b}</li>
                ))}
              </ul>

              <div className="d-flex flex-wrap gap-2">
                {job.skills.map((s) => (
                  <span key={s} className="badge text-bg-light border badge-skill">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
