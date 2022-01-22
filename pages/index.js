import Head from "next/head";
import "antd/dist/antd.css";
import Main from "../components/Main";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <div style={{position:"relative",top:"150px"}}>
          <Main></Main>
        </div>
      </Layout>
    </>
  );
}
