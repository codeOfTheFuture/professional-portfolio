import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCube, Pagination, Navigation } from "swiper";

import projectData from "../projectData";

import {
  carouselWrapper,
  projectWrapper,
  projectWrapperLt,
  projectWrapperBl,
  projectWrapperGn,
  projectWrapperPl,
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

const Carousel = ({ colorMode }) => {
  let mode = {};
  if (colorMode === "lightMode") {
    mode.projectWrapper = projectWrapperLt;
    mode.project = projectLt;
  }
  if (colorMode === "blueMode") {
    mode.projectWrapper = projectWrapperBl;
    mode.project = projectBl;
  }
  if (colorMode === "greenMode") {
    mode.projectWrapper = projectWrapperGn;
    mode.project = projectGn;
  }
  if (colorMode === "purpleMode") {
    mode.projectWrapper = projectWrapperPl;
    mode.project = projectPl;
  }

  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      loop={true}
      modules={[EffectCube, Pagination, Navigation]}
      className={`${projectWrapper} ${mode.projectWrapper}`}
    >
      {projectData.map((project, index) => (
        <SwiperSlide
          key={index}
          className={`${mode.project} ${styles.project}`}
        >
          <div className={styles.projectMain}>
            <h4>{project.title}</h4>
            <a target='_blank' href={project.link}>
              <img src={project.image} alt={project.title} />
            </a>
            <a
              className={styles.githubLink}
              target='_blank'
              href={project.github}
            >
              View Github
            </a>
          </div>

          <div className={`${styles.projectAbout} ${mode}`}>
            <h5 className={styles.projectDesc}> {project.about.projectDesc}</h5>
            <p className={styles.projectDescText}>
              {project.about.projectDescText}
            </p>
            <h5 className={styles.techStack}>{project.about.techStack}</h5>
            <p className={styles.techStackList}>
              {project.about.techStackList}
            </p>
            <ul className={styles.bulletPoints}>
              {project.about.bulletPoints.map((bPoint, index) => (
                <li className={styles.bPoint} key={index}>
                  {bPoint}
                </li>
              ))}
            </ul>
          </div>
        </SwiperSlide>
      ))}
      <div className='swiper-button-next'></div>
      <div className='swiper-button-prev'></div>
    </Swiper>
  );
};

export default Carousel;
