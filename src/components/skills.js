import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="container py-5" data-aos="fade-up">
      <h2 className="h3 fw-bold mb-4">SKILLS</h2>
      <div className="row g-3">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="col-6 col-md-3 col-lg-2 text-center">
            <div className="p-3 border rounded-4 shadow-sm bg-light h-100 d-flex flex-column align-items-center justify-content-center">
              <div style={{ fontSize: "2rem" }}>{skill.icon}</div>
              <p className="mt-2 mb-0 small fw-medium">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
