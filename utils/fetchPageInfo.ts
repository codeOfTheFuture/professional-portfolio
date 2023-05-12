import { sanityClient } from "../sanity.config";
import { groq } from "next-sanity";

const fetchPageInfo = async (): Promise<PageInfo> => {
	const query: string = groq`
    *[_type == "pageInfo"][0]
  `;

	return await sanityClient.fetch(query);
};

export default fetchPageInfo;
