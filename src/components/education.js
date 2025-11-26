import { EDUCATION } from "../data";

export default function Education() {
  return (
    <section id="education" className="container py-5">
      <h2 className="h3 fw-bold mb-4 ">Education</h2>

      <div className="row g-4">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="col-12 mb-2" data-aos="fade-up">
            <div className="border rounded-3 p-3 p-md-4">
              <h5 className="fw-bold mb-2">{edu.degree}</h5>

              <p className="text-muted mb-2">
                {edu.institution} • {edu.location}
              </p>


              <p className="text-secondary mb-2">{edu.period}</p>
              <p className="text-secondary mb-2">{edu.details}</p>


              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
