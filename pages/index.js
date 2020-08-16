import Head from "next/head";
import styles from "../styles/Home.module.scss";

import SectionMain from "../components/sectionMain/SectionMain";
import SectionAbout from "../components/sectionAbout/SectionAbout";
import SectionPortfolio from "../components/sectionPortfolio/SectionPortfolio";
import SectionContact from "../components/sectionContact/SectionContact";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Jeff Oliver | Professional Portfolio</title>
      <link rel='icon' href='/favicon.ico' />

      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      ></meta>

      <link
        href='https://fonts.googleapis.com/css2?family=Russo+One&display=swap'
        rel='stylesheet'
      ></link>
    </Head>
    <SectionMain />
    <SectionAbout />
    <SectionPortfolio />
    <SectionContact />
  </div>
);

export default Home;
