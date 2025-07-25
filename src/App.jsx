import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import Projects from "./components/projects";
import Aboutme from "./components/aboutme";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Home />
        <Projects />
        <Aboutme />
        <Contact />
      </div>
    </div>
  );
}

export default App;
