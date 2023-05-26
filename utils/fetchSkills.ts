import { sanityClient } from "../sanity.config";
import { groq } from "next-sanity";
import { Skill } from "types/typings";

/**
 * Fetches skills from Sanity.
 *
 * @returns {Promise<Skill[]>} - Promise that resolves to an array of fetched skills.
 */
const fetchSkills = async (): Promise<Skill[]> => {
	const query = groq`
    *[_type == "skill"] | order(order) {
      _id,
      title,
      order
    }
  `;

	return await sanityClient.fetch(query);
};

export default fetchSkills;
