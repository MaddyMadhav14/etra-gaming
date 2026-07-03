export default function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a href="#" className="logo">
          <span>E</span>TRA
          <small>animation & game development</small>
        </a>

        <nav className="nav-menu">
          <a href="#" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Technology</a>
          <a href="#">Contact</a>
        </nav>

        <a href="#" className="nav-button">Let&apos;s Talk</a>
      </div>
    </header>
  );
}