import React from "react";
import { Row, Col, Avatar } from "antd";
import styles from "./main.module.css";
import { UserOutlined, CodeSandboxOutlined } from "@ant-design/icons";
import Link from "next/link";
import style from "./test.module.css";
import {
  GithubOutlined,
  GooglePlusOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
const Main = () => {
  return (
    <Row justify="center">
      <Col md={6} xs={24}>
        <div className={styles.card}>
          <Row>
            <Col span={24}>
              <div className={styles.avatar}>
                <Avatar src="/images/avatar.jpg" size={100} />
              </div>
              <h2>Trần Thư Đạt</h2>
              <p className={styles.card_name}>PTIT HCM</p>
            </Col>
          </Row>
          <Row justify="space-around">
            <Col span={6}>
              <a
                className={styles.btn}
                href="https://github.com/"
                target="_blank"
              >
                <GithubOutlined style={{ fontSize: "22px" }} />
              </a>
            </Col>
            <Col span={6}>
              <a
                className={styles.btn}
                href="https://mail.google.com/mail/u/0/"
                target="_blank"
              >
                <GooglePlusOutlined style={{ fontSize: "22px" }} />
              </a>
            </Col>
            <Col span={6}>
              <a
                className={styles.btn}
                href="https://www.instagram.com/"
                target="_blank"
              >
                <InstagramOutlined style={{ fontSize: "22px" }} />
              </a>
            </Col>
          </Row>
          <Row style={{ marginTop: "12px" }}>
            <Col span={8} push={3}>
              <Link href="/intro" target="_blank">
                <a className={styles.btn}>
                  <UserOutlined style={{ fontSize: "22px" }} />
                  Intro
                </a>
              </Link>
            </Col>
            <Col span={8} push={6}>
              <Link href="/project" target="_blank">
                <a className={styles.btn}>
                  <CodeSandboxOutlined style={{ fontSize: "22px" }} />
                  Project
                </a>
              </Link>
            </Col>
          </Row>
        </div>
      </Col>
      <Col md={8} xs={24} >
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
    </Row>
  );
};

export default Main;
