import Head from "next/head";
import styles from "../styles/Home.module.scss";

import SectionOne from "../components/sectionOne/SectionOne";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Jeff Oliver | Professional Portfolio</title>
      <link rel='icon' href='/favicon.ico' />

      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      ></meta>
    </Head>
    <SectionOne />
  </div>
);

export default Home;
