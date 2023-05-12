import { sanityClient } from "../sanity.config";
import { groq } from "next-sanity";

const fetchSkills = async (): Promise<Skill[]> => {
	const query = groq`
    *[_type == "skill"] | order(order)
  `;

	return await sanityClient.fetch(query);
};

export default fetchSkills;
