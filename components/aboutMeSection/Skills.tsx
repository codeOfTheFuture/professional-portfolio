import { useTheme } from "../../context/ThemeContext";
import { PreferredTheme, Skill } from "types/typings";
import styles from "./scss/Skills.module.scss";

interface Props {
	skillsList: Skill[];
}

const Skills = ({ skillsList }: Props) => {
	const { preferredTheme }: { preferredTheme: PreferredTheme } = useTheme();

	return (
		<div className={styles[`skills__${preferredTheme}`]}>
			<ul className={styles.skills}>
				{skillsList.map((skill: Skill) => (
					<li key={skill._id}>{skill.title}</li>
				))}
			</ul>
		</div>
	);
};

export default Skills;
