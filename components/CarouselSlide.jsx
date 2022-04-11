import React from "react";
import { SwiperSlide } from "swiper/react";

import styles, {
  projectLt,
  projectBl,
  projectGn,
  projectPl,
} from "./project/Project.module.scss";

import "swiper/css";
// import "swiper/css/effect-cube";
// import "swiper/css/pagination";

const CarouselSlide = ({ colorMode, project }) => {
  let mode;
  if (colorMode === "lightMode") mode = projectLt;
  if (colorMode === "blueMode") mode = projectBl;
  if (colorMode === "greenMode") mode = projectGn;
  if (colorMode === "purpleMode") mode = projectPl;

  return (
    <SwiperSlide className={styles.project}>
      <div className={styles.projectMain}>
        <h4>{project.title}</h4>
        <a target='_blank' href={project.link}>
          <img src={project.image} alt={project.title} />
        </a>
        <a className={styles.githubLink} target='_blank' href={project.github}>
          View Github
        </a>
      </div>

      <div className={`${styles.projectAbout} ${mode}`}>
        <h5 className={styles.projectDesc}> {project.about.projectDesc}</h5>
        <p className={styles.projectDescText}>
          {project.about.projectDescText}
        </p>
        <h5 className={styles.techStack}>{project.about.techStack}</h5>
        <p className={styles.techStackList}>{project.about.techStackList}</p>
        <ul className={styles.bulletPoints}>
          {project.about.bulletPoints.map((bPoint, index) => (
            <li className={styles.bPoint} key={index}>
              {bPoint}
            </li>
          ))}
        </ul>
      </div>
    </SwiperSlide>
  );
};

export default CarouselSlide;
