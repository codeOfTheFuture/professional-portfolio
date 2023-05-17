import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type PreferredTheme = "light__theme" | "blue__theme" | "green__theme" | "purple__theme";
type SelectTheme = (theme: PreferredTheme) => void;

interface ThemeContext {
	preferredTheme: PreferredTheme;
	selectTheme: SelectTheme;
}

interface Skill {
	_id: string;
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	_type: string;
	title: string;
	order: number;
}

interface Social {
	_id: string;
	_rev: string;
	_type: string;
	_createdAt: string;
	_updatedAt: string;
	title: string;
	url: string;
}

interface PageInfo {
	name: string;
	role: string;
	profilePic: SanityImageSource;
	whatIDo: string;
	aboutMe: string;
	topExpertise: string;
	resumeUrl: string;
	image: SanityImageSource;
	socials: Social[];
}

interface Project {
	title: string;
	image: string;
	linkToGithub: string;
	linkToBuild: string;
	description: string;
	techStack: Skill[];
	bulletPoints: string[];
	order: number;
}

export { PreferredTheme, SelectTheme, ThemeContext, PageInfo, Project, Skill, Social };
