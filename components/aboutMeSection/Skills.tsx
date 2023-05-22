import { useTheme } from "../../context/ThemeContext";
import { PreferredTheme, Skill } from "types/typings";
import styles from "./scss/Skills.module.scss";

interface Props {
	skillsList: Skill[];
}

const Skills = ({ skillsList }: Props) => {
	const { preferredTheme }: { preferredTheme: PreferredTheme } = useTheme();

	return (
		<ul className={styles[`about__me__section__content__info__skills--${preferredTheme}`]}>
			{skillsList.map((skill: Skill) => (
				<li key={skill._id}>{skill.title}</li>
			))}
		</ul>
	);
};

export default Skills;
