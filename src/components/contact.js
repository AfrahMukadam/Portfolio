// src/components/Contact.js
import { PROFILE } from "../data";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section text-center text-light py-3"
      data-aos="fade-up"
    >
      <div className="container py-3">
        <h2 className="display-6 fw-bold mb-2">Let's Create Something Amazing 🚀</h2>
        <p className="lead mb-5 text-light-50">
          Whether you want to collaborate, discuss ideas, or just say hello — my inbox is always open.
        </p>

        <div className="contact-info mb-5">
          <div className="d-flex flex-column align-items-center gap-3">
            <a href={`mailto:${PROFILE.email}`} className="contact-link">
              <FaEnvelope className="me-2" /> {PROFILE.email}
            </a>
            <a href={`tel:${PROFILE.phone}`} className="contact-link">
              <FaPhoneAlt className="me-2" /> {PROFILE.phone}
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <a
          href={`mailto:${PROFILE.email}`}
          className="btn btn-light btn-lg px-4 py-3 fw-semibold shadow-sm send-btn"
        >
          <FaPaperPlane className="me-2" /> Send a Message
        </a>

        {/* Social Icons */}
        <div className="social-links mt-5 d-flex justify-content-center gap-4">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            className="social-icon github"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-icon linkedin"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="social-icon email"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        
      </div>
    </section>
  );
}
