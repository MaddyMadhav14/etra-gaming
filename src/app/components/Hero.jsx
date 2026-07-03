const services = [
  "3D Animation",
  "Game Development",
  "Pre-Visualization",
  "Game Art & Design",
  "VFX & CGI",
  "XR & Interactive",
];

const projects = [
  "Cinematic Trailer",
  "Racing Legends",
  "Cyber City",
  "Lost Realms",
];

  import Image from "next/image";

export default function Hero() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tag">We Create</p>

          <h1>
            Imagination <br />
            <span>in Motion</span>
          </h1>

          <p className="hero-desc">
            ETRA Animation & Game Development crafts immersive experiences that
            entertain, inspire and leave a lasting impact.
          </p>

          <div className="hero-buttons">
            <a href="#" className="hero-primary">Explore Our Work →</a>
            <a href="#" className="hero-secondary">Our Services ▦</a>
          </div>
        </div>

      <div className="hero-art">
         <div className="shape shape-one"></div>
         <div className="shape shape-two"></div>
         <div className="shape shape-three"></div>

         <div className="art-card">
        <Image
         src="/images/hero/gaming-girl-removebg-preview.png"
          alt="ETRA Gaming Character"
          width={900}
          height={1100}
          className="hero-image"
           priority
         />
        </div>
       </div>
      </section>

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

{/* Featured Projects */}
<section className="projects-section">
  <div className="projects-head">
    <div>
      <p>OUR WORK</p>
      <h2>FEATURED PROJECTS</h2>
    </div>
    <a href="#">View All Projects →</a>
  </div>

  <div className="projects-grid">
    <div className="project-card">
      <div className="project-thumb"
      style={{ backgroundImage: "url('/images/hero/cyber-arena.jpg..png')" }}
      ></div>
      <h3>Cyber Arena</h3>
      <span>Game Development</span>
    </div>

    <div className="project-card">
      <div
  className="project-thumb"
  style={{ backgroundImage: "url('/images/hero/VR.jpg')" }}
></div>
      <h3>VR Experience</h3>
      <span>Virtual Reality</span>
    </div>

    <div className="project-card">
      <div
  className="project-thumb"
  style={{ backgroundImage: "url('/images/hero/AN.jpg')" }}
></div>
      <h3>3D Animation</h3>
      <span>Animation</span>
    </div>

    <div className="project-card">
      <div
  className="project-thumb"
  style={{ backgroundImage: "url('/images/hero/cgi-studio.jpg')" }}
></div>
      <h3>CGI Studio</h3>
      <span>CGI</span>
    </div>
  </div>
 </section>

    </main>
  );
}