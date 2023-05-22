import React from "react";
import Skills from "./Skills";
import styles from "./scss/AboutMeInfo.module.scss";
import { Skill } from "types/typings";

interface Props {
	topExpertise: string;
	resumeUrl: File;
	skills: Skill[];
}

const AboutMeInfo = ({ topExpertise, resumeUrl, skills }: Props) => {
	return (
		<div className={styles[`about__me__section__content__info`]}>
			<h4>More about me</h4>

			<p>
				My most recent position was team lead for the computer science unit at Lambda School. This
				was a contract role where I mentored a team of 8 students in an agile environment.
			</p>

			<p>
				I am a fully endorsced graduate of Lambda Schools Full-Stack Web Development program which
				included 8 weeks of computer science study in python. I am very interested in learning new
				technologies and strengthening my skills as a developer.
			</p>

			<hr />

			<h4>Top Expertise</h4>

			<p>
				{topExpertise} <br />
				{/* <a target="_blank" href={resumeUrl.resumeUrl}>
          Download Resume
        </a> */}
			</p>

			<Skills skillsList={skills} />
		</div>
	);
};

export default AboutMeInfo;
