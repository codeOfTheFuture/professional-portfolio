interface Skill {
	title: string;
	order: number;
}

interface Social {
	title: string;
	url: string;
}

interface PageInfo {
	name: string;
	role: string;
	profilePic: string;
	whatIDo: string;
	aboutMe: string;
	topExpertise: string;
	resumeUrl: string;
	image: string;
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
