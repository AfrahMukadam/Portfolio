// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="footer text-center text-light py-3">
      <div className="container">
        <p className="mb-0 small">
          © {new Date().getFullYear()} Afrah Mukadam 
        </p>
      </div>
    </footer>
  );
}
