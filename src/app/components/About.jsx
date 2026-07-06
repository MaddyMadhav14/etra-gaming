
import "../styles/about.css";
export default function About() {
  return (
  <section className="about-section">
    <div className="about-card">
    <div className="about-visual"></div>

    <div className="about-content">
      <p>About ETRA</p>
      <h2>Passion. Creativity. Technology.</h2>
      <span>
        ETRA Animation & Game Development is a creative studio driven by
        passion and powered by technology. We partner with global clients to
        deliver immersive experiences that entertain, inspire and leave a
        lasting impact.
      </span>

      <div className="stats-grid">
        <div><strong>10+</strong><small>Years Experience</small></div>
        <div><strong>100+</strong><small>Projects Completed</small></div>
        <div><strong>50+</strong><small>Happy Clients</small></div>
        <div><strong>40+</strong><small>Skilled Artists</small></div>
      </div>
    </div>
  </div>
  </section>
  );
}