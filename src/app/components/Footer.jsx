
import "../styles/footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h2>ETRA</h2>
          <p>
            We create immersive worlds through animation,
            games and interactive experiences.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>3D Animation</li>
            <li>Game Development</li>
            <li>CGI & VFX</li>
            <li>XR Experience</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>hello@etra.com</p>
          <p>+91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ETRA Animation & Game Development. All Rights Reserved.
      </div>
    </footer>
  );
}