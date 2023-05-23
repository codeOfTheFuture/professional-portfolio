import Project from "./Project";
import { PreferredTheme, Project as ProjectType } from "types/typings";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Navigation } from "swiper";

import styles from "./scss/Carousel.module.scss";

import "swiper/scss";
import "swiper/scss/effect-cube";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { useTheme } from "../../context/ThemeContext";

interface Props {
	projects: ProjectType[];
}

const Carousel = ({ projects }: Props) => {
	const { preferredTheme }: { preferredTheme: PreferredTheme } = useTheme();

	return (
		<Swiper
			className={styles[`swiper--${preferredTheme}`]}
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
			speed={800}
			loop={true}
			modules={[EffectCube, Pagination, Navigation]}
		>
			{projects.map(project => (
				<SwiperSlide key={project._id} className={`${styles[`swiper__slide`]}`}>
					<Project project={project} />
				</SwiperSlide>
			))}
			<div className={`swiper-button-next ${styles[`swiper__chevron__next`]}`}></div>
			<div className={`swiper-button-prev ${styles[`swiper__chevron__prev`]}`}></div>
		</Swiper>
	);
};

export default Carousel;
