import React, { useState, useEffect } from "react";

import Head from "next/head";
import SectionMain from "../components/sectionMain/SectionMain";
import SectionAbout from "../components/sectionAbout/SectionAbout";
import SectionPortfolio from "../components/sectionPortfolio/SectionPortfolio";
import SectionContact from "../components/sectionContact/SectionContact";

const Home = () => {
  const [colorMode, setColorMode] = useState("lightMode");

  useEffect(() => {
    if (localStorage.getItem("mode"))
      setColorMode(localStorage.getItem("mode"));
  }, []);

  const chooseColorMode = (mode) => {
    if (localStorage.getItem(mode)) {
      let currentMode = localStorage.getItem("mode");
      currentMode = mode;
      localStorage.setItem("mode", currentMode);
    } else {
      localStorage.setItem("mode", mode);
    }
    setColorMode(mode);
  };

  return (
    <div>
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
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Roboto:wght@500&family=Russo+One&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <SectionMain chooseColorMode={chooseColorMode} colorMode={colorMode} />
      <SectionAbout colorMode={colorMode} />
      <SectionPortfolio colorMode={colorMode} />
      <SectionContact colorMode={colorMode} />
    </div>
  );
};

export default Home;
