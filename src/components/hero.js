import { PROFILE } from "../data";
import Typewriter from "typewriter-effect";



export default function Hero() {
  return (
    <header id="home" className="hero">
      
      <div className="container py-5" style={{ paddingTop: "6rem" }}>
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-7">
            <h1 className="display-5 fw-bold mb-2">{PROFILE.name}</h1>

            {/* 🔥 Typewriter effect added here */}
            <h2 className="h5 text-info mb-3">
              <Typewriter
                options={{
                  strings: [
                    //PROFILE.title,
                   "Frontend Developer ",
      "React Enthusiast ⚛️",
      "Problem Solver ",
      "Tech Explorer ",
      "Full Stack Web Developer ",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h2>

            <p className="mb-4">{PROFILE.about}</p>
<p className="text-muted mb-3">
  <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
  {PROFILE.location}
</p>

            <div className="d-flex gap-2 flex-wrap">
               
              
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
            
              <a className="btn btn-primary"
   href={"/Afrah Mukadam_Full Stack Developer.pdf"}
   target="_blank"
   rel="noreferrer">
   <i className="bi bi-file-earmark-person me-1"></i>
   Download CV

                </a>
              
            </div>
          </div>

          <div className="col-12 col-md-5 text-center text-md-end">
            <img
              src={PROFILE.avatar}
              alt="Avatar"
              className="rounded-4 shadow-sm img-fluid"
              style={{ maxHeight: 260, objectFit: "fill", borderRadius: "10%" , maxWidth: 400}}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
