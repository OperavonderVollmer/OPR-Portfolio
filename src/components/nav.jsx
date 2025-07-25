import React from "react";

function Nav() {
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="nav">
      <div className="nav-inner">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("aboutme")}>About Me</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
    </div>
  );
}

export default Nav;
