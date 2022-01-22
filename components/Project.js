import React from "react";
import ProjectItem from "./ProjectItem";
import styles from "./project.module.css";
import { Col, Row } from "antd";
import Main from "./Main";

const Project = () => {
  const projects = [
    {
      id: 0,
      name: "Quản lý sinh viên hệ tín chỉ. ",
      desc: "Cho phép đăng kí môn, hủy môn, nhập điểm cho sinh viên.",
      language: "C++",
      img: "https://github.com/tranthudat2k1/doan-ctdl-qlsv/raw/main/img/demo2.jpg",
      link: "https://github.com/tranthudat2k1/doan-ctdl-qlsv",
    },
    {
      id: 1,
      name: "Game nhập chữ.",
      desc: "Chương trình random hiện chữ, người chơi gõ đúng sẽ có điểm.",
      language: "ReactJS",
      img: "https://github.com/tranthudat2k1/typing-game-reactjs/raw/main/intro.jpg",
      link: "https://github.com/tranthudat2k1/typing-game-reactjs",
    },
    {
      id: 2,
      name: "Thống kê Covid.",
      desc: "Cho phép tra cứu tình hình covid trên các quốc gia.",
      language: "Javascript",
      img: "https://github.com/tranthudat2k1/CovidJS/raw/main/img/demo1.jpg",
      link: "https://github.com/tranthudat2k1/CovidJS",
    },
  ];
  return (
    <Row justify="center">
      <Col md={6} xs={24}>
        <div className={styles.cover_main}>
        <Main></Main>
        </div>
      </Col>
      <Col md={8} xs={24}>
        <div className={styles.project}>
          <p className={styles.intro_nav}>Dự án</p>
          <div className={styles.project_container}>
            <ul className={styles.project_list}>
              {projects.map((project, index) => {
                return (
                  <ProjectItem project={project} key={index}></ProjectItem>
                );
              })}
              <li className={styles.project_item}>
                Xem thêm tại -
                <a href="https://github.com/tranthudat2k1" target="_blank">
                  https://github.com/tranthudat2k1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Project;
