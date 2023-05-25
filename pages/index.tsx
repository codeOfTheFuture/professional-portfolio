import { GetStaticProps } from "next";
import HeroSection from "../components/heroSection/HeroSection";
import AboutMeSection from "../components/aboutMeSection/AboutMeSection";
import SectionPortfolio from "../components/projectSection/ProjectsSection";
import SectionContact from "../components/contactSection/ContactSection";
import fetchPageInfo from "../utils/fetchPageInfo";
import fetchSocials from "../utils/fetchSocials";
import fetchProjects from "../utils/fetchProjects";
import fetchSkills from "../utils/fetchSkills";
import fetchResumeUrl from "../utils/fetchResumeUrl";
import Head from "next/head";
import { PageInfo, Project, Skill, Social } from "types/typings";

import styles from "./styles/index.module.scss";

interface Props {
	pageInfo: PageInfo;
	socials: Social[];
	projects: Project[];
	skills: Skill[];
	resumeUrl: File;
}

const HomePage = ({ pageInfo, projects, skills, socials, resumeUrl }: Props) => {
	const { name, profilePic, whatIDo, topExpertise, image } = pageInfo;

	return (
		<>
			<Head>
				<title>Jeff Oliver | Professional Portfolio</title>

				<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
			</Head>
			<HeroSection name={name} profilePic={profilePic} whatIDo={whatIDo} />
			<AboutMeSection
				topExpertise={topExpertise}
				resumeUrl={resumeUrl}
				skills={skills}
				image={image}
				socials={socials}
			/>
			<SectionPortfolio projects={projects} />
			<SectionContact />
		</>
	);
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
	const pageInfo = await fetchPageInfo();
	const socials = await fetchSocials();
	const projects = await fetchProjects();
	const skills = await fetchSkills();
	const resumeUrl = await fetchResumeUrl();

	return {
		props: {
			pageInfo,
			socials,
			projects,
			skills,
			resumeUrl,
		},
		revalidate: 30,
	};
};
