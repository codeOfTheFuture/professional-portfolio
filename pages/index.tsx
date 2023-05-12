import SectionMain from "../components/SectionMain";
import SectionAbout from "../components/SectionAbout";
import SectionPortfolio from "../components/SectionPortfolio";
import SectionContact from "../components/SectionContact";
import fetchPageInfo from "../utils/fetchPageInfo";
import fetchSocials from "../utils/fetchSocials";
import fetchProjects from "../utils/fetchProjects";
import fetchSkills from "../utils/fetchSkills";
import fetchResumeUrl from "../utils/fetchResumeUrl";
import Head from "next/head";
import { GetStaticProps } from "next";

interface Props {
	pageInfo: PageInfo;
	socials: Social[];
	projects: Project[];
	skills: Skill[];
	resumeUrl: string;
}

const Home = ({ pageInfo, projects, skills, socials, resumeUrl }: Props) => {
	const { name, profilePic, whatIDo, topExpertise, image } = pageInfo;

	return (
		<div>
			<Head>
				<title>Jeff Oliver | Professional Portfolio</title>

				<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
			</Head>
			<SectionMain name={name} profilePic={profilePic} whatIDo={whatIDo} />
			<SectionAbout
				topExpertise={topExpertise}
				resumeUrl={resumeUrl}
				skills={skills}
				image={image}
				socials={socials}
			/>
			<SectionPortfolio projects={projects} />
			<SectionContact />
		</div>
	);
};

export default Home;

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
