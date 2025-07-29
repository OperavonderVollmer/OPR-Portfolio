function Project({ classlist, title, description, link, demo }) {
  return (
    <div className={`${classlist} project`} id="project">
      <div className="flex flex-row project-demo-div">
        <img src={demo} alt="Demonstration" />
      </div>
      <h1 className="primary">{title}</h1>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Link to repository
      </a>
    </div>
  );
}

export default Project;
