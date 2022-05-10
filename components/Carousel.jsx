import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCube, Pagination, Navigation } from "swiper";

import projectData from "../projectData";

import {
  carouselWrapper,
  swiperBtnNext,
  swiperBtnPrev,
  lightMode,
  blueMode,
  greenMode,
  purpleMode,
} from "../styles/Carousel.module.scss";

import styles, {
  projectLt,
  projectBl,
  projectGn,
  projectPl,
} from "../styles/Project.module.scss";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Project from "./Project";

const Carousel = ({ colorMode }) => {
  let mode = {};
  if (colorMode === "lightMode") {
    mode.carousel = lightMode;
    mode.project = projectLt;
  }
  if (colorMode === "blueMode") {
    mode.carousel = blueMode;
    mode.project = projectBl;
  }
  if (colorMode === "greenMode") {
    mode.carousel = greenMode;
    mode.project = projectGn;
  }
  if (colorMode === "purpleMode") {
    mode.carousel = purpleMode;
    mode.project = projectPl;
  }

  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: false,
        shadowOffset: 10,
        shadowScale: 0.94,
      }}
      pagination={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      loop={true}
      modules={[EffectCube, Pagination, Navigation]}
      className={`${carouselWrapper} ${mode.carousel}`}
    >
      {projectData.map((project, index) => (
        <SwiperSlide
          key={index}
          className={`${mode.project} ${styles.project}`}
        >
          <Project project={project} colorMode={colorMode} />
        </SwiperSlide>
      ))}
      <div className={`${swiperBtnNext} swiper-button-next`}></div>
      <div className={`${swiperBtnPrev} swiper-button-prev`}></div>
    </Swiper>
  );
};

export default Carousel;
