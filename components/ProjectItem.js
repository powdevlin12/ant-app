import React, { useState } from "react";
import styles from "./project.module.css";
const ProjectItem = ({ project }) => {
  const [isModal, setIsModal] = useState(false);
  const handleProject = (id) => {
    console.log(id);
    setIsModal(true);
  };
  return (
    <>
      <li
        className={styles.project_item}
        key={project.id}
        onClick={() => handleProject(project.id)}
      >
        {project.name}
      </li>
      <div className={isModal ? styles.popup : styles.popup_hide}>
        <h1 className="">{project.name}</h1>
        <p>Chi tiết về project : {project.desc}</p>
        <p>Ngôn ngữ : {project.language}</p>
        <p>
          Link code -
          <a href={project.link} target="_blank">
            {project.link}
          </a>
        </p>
        <img src={project.img} alt="img_demo" />
      </div>
      <div
        className={isModal ? styles.project_modal : " "}
        onClick={() => setIsModal(false)}
      ></div>
    </>
  );
};

export default ProjectItem;
