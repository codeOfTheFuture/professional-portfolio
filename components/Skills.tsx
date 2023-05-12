import React from "react";
import { useTheme } from "../context/ThemeContext";
import { skills, skillsLt, skillsBl, skillsGn, skillsPl } from "../styles/Skills.module.scss";

const Skills = ({ skillsList }) => {
	const { theme } = useTheme();

	let currentTheme;

	switch (theme) {
		case "lightMode":
			currentTheme = skillsLt;
			break;
		case "blueMode":
			currentTheme = skillsBl;
			break;
		case "greenMode":
			currentTheme = skillsGn;
			break;
		case "purpleMode":
			currentTheme = skillsPl;
	}

	return (
		<div className={currentTheme}>
			<ul className={skills}>
				{skillsList.map(skill => (
					<li key={skill._id}>{skill.title}</li>
				))}
			</ul>
		</div>
	);
};

export default Skills;
