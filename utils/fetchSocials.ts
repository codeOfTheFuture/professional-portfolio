import { sanityClient } from "../sanity.config";
import { groq } from "next-sanity";

const fetchSocials = async (): Promise<Social[]> => {
	const query = groq`
    *[_type == "social"]
  `;

	return await sanityClient.fetch(query);
};

export default fetchSocials;
