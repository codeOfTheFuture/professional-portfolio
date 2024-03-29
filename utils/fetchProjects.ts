import { sanityClient } from "../sanity.config";
import { groq } from "next-sanity";
import { Project } from "types/typings";

/**
 * Fetches projects from Sanity.
 * @returns {Promise<Project[]>} - Promise that resolves to an array of fetched projects.
 */
const fetchProjects = async (): Promise<Project[]> => {
	const query = groq`
    *[_type == "project"] {
      _id,
      title,
      image,
      linkToGithub,
      linkToBuild,
      description,
      bulletPoints,
      order,
      techStack[]->{
        _id,
        order,
        title
      }
    }
  `;

	return await sanityClient.fetch(query);
};

export default fetchProjects;
