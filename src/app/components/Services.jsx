const services = [
  "3D Animation",
  "Game Development",
  "Pre-Visualization",
  "Game Art & Design",
  "VFX & CGI",
  "XR & Interactive",
];
import "../styles/services.css";
export default function Services() {
  return (
    
    <section className="services-section">
      <div className="section-title">
       <p>What We Do</p>
       <h2>Our Services</h2>
      </div>

       <div className="services-grid">
          {services.map((item, index) => (
          <div className="service-card" key={item}>
          <div className="service-icon">
          {["◈", "🎮", "▣", "🎨", "✦", "▭"][index]}
          </div>
          <h3>{item}</h3>
          <p>
          High-quality creative solutions built with modern technology and
          production-ready workflow.
        </p>
      </div>
      ))}
      </div>
    </section>

  );
}