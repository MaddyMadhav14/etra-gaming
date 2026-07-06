const projects = [
  "Cinematic Trailer",
  "Racing Legends",
  "Cyber City",
  "Lost Realms",
];
import "../styles/projects.css";

export default function Projects() {
  return (
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
      <div className="project-thumb"
       style={{ backgroundImage: "url('/images/hero/VR.jpg')" }}
      >
      </div>
      <h3>VR Experience</h3>
      <span>Virtual Reality</span>
     </div>

     <div className="project-card">
      <div className="project-thumb"
      style={{ backgroundImage: "url('/images/hero/AN.jpg')" }}
      ></div>
      <h3>3D Animation</h3>
      <span>Animation</span>
     </div>

     <div className="project-card">
      <div className="project-thumb"
      style={{ backgroundImage: "url('/images/hero/cgi-studio.jpg')" }}
     ></div>
      <h3>CGI Studio</h3>
      <span>CGI</span>
    </div>
  </div>
 </section>
  );
}

