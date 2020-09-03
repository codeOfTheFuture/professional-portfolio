import React, { useState } from "react";

import Head from "next/head";
import SectionMain from "../components/sectionMain/SectionMain";
import SectionAbout from "../components/sectionAbout/SectionAbout";
import SectionPortfolio from "../components/sectionPortfolio/SectionPortfolio";
import SectionContact from "../components/sectionContact/SectionContact";

const Home = () => {
  const [colorModeOptions] = useState([
    "lightMode",
    "blueMode",
    "greenMode",
    "purpleMode",
  ]);

  const [colorMode, setColorMode] = useState("lightMode");

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
      <SectionMain
        setColorMode={setColorMode}
        colorModeOptions={colorModeOptions}
        colorMode={colorMode}
      />
      <SectionAbout colorMode={colorMode} />
      <SectionPortfolio colorMode={colorMode} />
      <SectionContact colorMode={colorMode} />
    </div>
  );
};

export default Home;
