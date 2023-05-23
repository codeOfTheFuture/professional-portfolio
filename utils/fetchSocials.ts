import { sanityClient } from "../sanity.config";
import { groq } from "next-sanity";
import { Social } from "types/typings";

/**
 * Fetches socials links from Sanity.
 *
 * @returns {Promise<Social[]>} - Promise that resolves to an array of fetched socials.
 */
const fetchSocials = async (): Promise<Social[]> => {
	const query = groq`
    *[_type == "social"]
  `;

	return await sanityClient.fetch(query);
};

export default fetchSocials;
