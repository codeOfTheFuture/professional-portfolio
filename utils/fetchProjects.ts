import { sanityClient } from "../sanity.config";
import { groq } from "next-sanity";

const fetchProjects = async (): Promise<Project[]> => {
	const query = groq`
    *[_type == "project"] {
      ...,
      techStack[]->
    }
  `;

	return await sanityClient.fetch(query);
};

export default fetchProjects;
