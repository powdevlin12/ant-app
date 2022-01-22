import React from "react";
import { Row, Col, Avatar} from "antd";
import styles from "./main.module.css";
import { UserOutlined, CodeSandboxOutlined } from "@ant-design/icons";
import Link from "next/link";
import {
  GithubOutlined,
  GooglePlusOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
const Main = () => {
  return (
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
        <Row style={{marginTop:"12px"}}>
          <Col span={8} push={3}>
            <Link href="/intro" target="_blank" passHref>
              <a className={styles.btn}>
                <UserOutlined style={{ fontSize: "22px" }} />
                Intro
              </a>
            </Link>
          </Col>
          <Col span={8} push={6}>
            <Link href="/project" target="_blank" passHref>
              <a className={styles.btn}>
                <CodeSandboxOutlined style={{ fontSize: "22px" }} />
                Project
              </a>
            </Link>
          </Col>
        </Row>
      </div>
  );
};

export default Main;
