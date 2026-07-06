
  import Image from "next/image";
  import "../styles/hero.css";

export default function Hero() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tag">We Create</p>

          <h1 className="hero-title">
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
</main>
  );
}