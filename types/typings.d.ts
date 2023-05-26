import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { File } from "sanity";

/**
 * Represents the preferred theme.
 * @typedef {("light__theme" | "blue__theme" | "green__theme" | "purple__theme")} PreferredTheme
 */
type PreferredTheme = "light__theme" | "blue__theme" | "green__theme" | "purple__theme";

/**
 * Represents the function to select a theme.
 * @typedef {(theme: PreferredTheme) => void} SelectTheme
 */
type SelectTheme = (theme: PreferredTheme) => void;

/**
 * Interface representing the theme context.
 *
 * @typedef {object} ThemeContext
 * @property {PreferredTheme} preferredTheme - The preferred theme.
 * @property {SelectTheme} selectTheme - Function to select a theme.
 */
interface ThemeContext {
	preferredTheme: PreferredTheme;
	selectTheme: SelectTheme;
}

/**
 * Interface representing the page information object.
 * @interface
 */
interface PageInfo {
	name: string;
	role: string;
	profilePic: SanityImageSource;
	whatIDo: string;
	aboutMe: string;
	topExpertise: string;
	resumeUrl: string;
	image: SanityImageSource;
}

/**
 * Interface representing a skill object.
 * @interface
 */
interface Skill {
	_id: string;
	title: string;
	order: number;
}

/**
 * Interface representing a skill object.
 * @interface
 */
interface Social {
	_id: string;
	title: string;
	url: string;
}

/**
 * Interface representing a project object.
 * @interface
 */
interface Project {
	_id: string;
	title: string;
	image: SanityImageSource;
	linkToGithub: string;
	linkToBuild: string;
	description: string;
	techStack: Skill[];
	bulletPoints: string[];
	order: number;
}

export { PreferredTheme, SelectTheme, ThemeContext, PageInfo, Project, Skill, Social };
