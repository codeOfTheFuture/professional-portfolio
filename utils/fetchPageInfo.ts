import { sanityClient } from "../sanity.config";
import { groq } from "next-sanity";
import { PageInfo } from "types/typings";

/**
 * Fetches page information from Sanity.
 * @returns {Promise<PageInfo>} - Promise that resolves to the fetched page information.
 */
const fetchPageInfo = async (): Promise<PageInfo> => {
	const query: string = groq`
    *[_type == "pageInfo"][0]
  `;

	return await sanityClient.fetch(query);
};

export default fetchPageInfo;
