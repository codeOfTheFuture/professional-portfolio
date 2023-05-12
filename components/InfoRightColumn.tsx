import React from "react";
import { useTheme } from "../context/ThemeContext";
import styles, {
	previewShadowLt,
	previewShadowBl,
	previewShadowGn,
	previewShadowPl,
	previewLt,
	previewBl,
	previewGn,
	previewPl,
} from "../styles/InfoRightColumn.module.scss";

interface Props {
	whatIDo: string;
}

const InfoRightColumn = ({ whatIDo }: Props) => {
	let currentTheme = {};
	const { theme } = useTheme();

	switch (theme) {
		case "lightMode":
			currentTheme.previewShadow = previewShadowLt;
			currentTheme.preview = previewLt;
			break;
		case "blueMode":
			currentTheme.previewShadow = previewShadowBl;
			currentTheme.preview = previewBl;
			break;
		case "greenMode":
			currentTheme.previewShadow = previewShadowGn;
			currentTheme.preview = previewGn;
			break;
		case "purpleMode":
			currentTheme.previewShadow = previewShadowPl;
			currentTheme.preview = previewPl;
			break;
		default:
			currentTheme.previewShadow = previewShadowLt;
			currentTheme.preview = previewLt;
			break;
	}

	return (
		<div className={styles.rightColumn}>
			<div id={currentTheme.previewShadow}>
				<div id={currentTheme.preview}>
					<div id={styles.cornerTl} className={styles.corner}></div>
					<div id={styles.cornerTr} className={styles.corner}></div>
					<h3>What I Do</h3>
					<p>{whatIDo}</p>
					<div id={styles.cornerBr} className={styles.corner}></div>
					<div id={styles.cornerBl} className={styles.corner}></div>
				</div>
			</div>
		</div>
	);
};

export default InfoRightColumn;
