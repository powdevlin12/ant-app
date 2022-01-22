import React from "react";
import style from "./intro.module.css";
import { Row, Col } from "antd";
import Main from "../components/Main";

const Intro = () => {
  return (
    <>
      <Col md={6} xs={24}>
          <div className={style.cover_main}>
        <Main></Main>
          </div>
      </Col>
      <Col md={8} xs={24}>
        <div className={style.intro}>
          <div className={style.intro_nav}>
            <p>Giới thiệu</p>
          </div>
          <div className={style.intro_overview}>
            <p className={style.intro_p}>Họ và Tên : Trần Thư Đạt</p>
            <p className={style.intro_p}>Quê quán : Hà Tĩnh</p>
            <p className={style.intro_p}>Sinh năm : 2001</p>
            <p className={style.intro_p}>Học tại : PTIT HCM</p>
            <p className={style.intro_p}>
              Mong muốn tương lai : Full-stack developer
            </p>
            <p className={style.intro_p}>Sở thích :</p>
            <div className="intro__favourite">
              <ul>
                <li>Code.</li>
                <li>Đá bóng.</li>
                <li>Tìm hiểu kinh doanh, lịch sử.</li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Intro;
