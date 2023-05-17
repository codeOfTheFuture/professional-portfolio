import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCube, Pagination, Navigation } from "swiper";

import {
	carouselWrapper,
	swiperBtnNext,
	swiperBtnPrev,
	lightMode,
	blueMode,
	greenMode,
	purpleMode,
} from "./scss/Carousel.module.scss";

import styles, { projectLt, projectBl, projectGn, projectPl } from "../scss/Project.module.scss";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Project from "./Project";
import { useTheme } from "../../context/ThemeContext";

interface Props {
	projects: Project[];
}

const Carousel = ({ projects }: Props) => {
	const { theme } = useTheme();

	let currentTheme = {};

	switch (theme) {
		case "lightMode":
			currentTheme.carousel = lightMode;
			currentTheme.project = projectLt;
			break;
		case "blueMode":
			currentTheme.carousel = blueMode;
			currentTheme.project = projectBl;
			break;
		case "greenMode":
			currentTheme.carousel = greenMode;
			currentTheme.project = projectGn;
			break;
		case "purpleMode":
			currentTheme.carousel = purpleMode;
			currentTheme.project = projectPl;
			break;
		default:
			currentTheme.carousel = lightMode;
			currentTheme.project = projectLt;
			break;
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
			className={`${carouselWrapper} ${currentTheme.carousel}`}
		>
			{projects.map(project => (
				<SwiperSlide key={project._id} className={`${currentTheme.project} ${styles.project}`}>
					<Project project={project} />
				</SwiperSlide>
			))}
			<div className={`${swiperBtnNext} swiper-button-next`}></div>
			<div className={`${swiperBtnPrev} swiper-button-prev`}></div>
		</Swiper>
	);
};

export default Carousel;
