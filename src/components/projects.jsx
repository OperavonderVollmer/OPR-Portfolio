import React from "react";
import Project from "./project.jsx";
import header from "../assets/header.jpg";

function Projects() {
  const projectData = [
    {
      title: "onScythe",
      description: "Automation visual interaction tool",
      link: "https://github.com/OperavonderVollmer/onScythe",
      demo: header,
    },
    {
      title: "2nd project",
      description: "Automation visual interaction tool",
      link: "https://github.com/OperavonderVollmer/onScythe",
      demo: header,
    },
    {
      title: "3rd project",
      description: "Automation visual interaction tool",
      link: "https://github.com/OperavonderVollmer/onScythe",
      demo: header,
    },
    // Add more here later
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = React.useState(0);
  const [prevProjectIndex, setPrevProjectIndex] = React.useState(
    projectData.length - 1
  );
  const [nextProjectIndex, setNextProjectIndex] = React.useState(1);

  function handlePrevClick() {
    setCurrentProjectIndex((curr) =>
      curr === 0 ? projectData.length - 1 : curr - 1
    );
    setPrevProjectIndex((curr) =>
      curr === 0 ? projectData.length - 1 : curr - 1
    );
    setNextProjectIndex((curr) =>
      curr === 0 ? projectData.length - 1 : curr - 1
    );
  }

  function handleNextClick() {
    setCurrentProjectIndex((curr) =>
      curr === projectData.length - 1 ? 0 : curr + 1
    );
    setPrevProjectIndex((curr) =>
      curr === projectData.length - 1 ? 0 : curr + 1
    );
    setNextProjectIndex((curr) =>
      curr === projectData.length - 1 ? 0 : curr + 1
    );
  }

  return (
    <div className="projects" id="projects">
      <h1 className="accent">Projects</h1>
      <div className="relative w-full">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full w-[15vw]"
          onClick={handlePrevClick}
        >
          {"<"}
        </button>
        <div className="projects-list">
          <Project
            classlist={"previous-project side-project"}
            title={projectData[prevProjectIndex].title}
            description={projectData[prevProjectIndex].description}
            link={projectData[prevProjectIndex].link}
            demo={projectData[prevProjectIndex].demo}
          />
          <Project
            classlist={"current-project"}
            title={projectData[currentProjectIndex].title}
            description={projectData[currentProjectIndex].description}
            link={projectData[currentProjectIndex].link}
            demo={projectData[currentProjectIndex].demo}
          />
          <Project
            classlist={"next-project side-project"}
            title={projectData[nextProjectIndex].title}
            description={projectData[nextProjectIndex].description}
            link={projectData[nextProjectIndex].link}
            demo={projectData[nextProjectIndex].demo}
          />
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full w-[15vw]"
          onClick={handleNextClick}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Projects;
