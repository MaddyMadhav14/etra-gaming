"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a href="#" className="logo">
          <span>E</span>TRA
          <small>animation & game development</small>
        </a>

        <nav className={`nav-menu ${open ? "show-menu" : ""}`}>
          <a href="#" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Technology</a>
          <a href="#">Contact</a>
          <a href="#" className="mobile-nav-button">Let&apos;s Talk</a>
        </nav>

        <a href="#" className="nav-button">Let&apos;s Talk</a>

        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}