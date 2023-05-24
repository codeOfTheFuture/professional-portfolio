import { sanityClient } from "../sanity.config";
import { groq } from "next-sanity";

/**
 * Fetches the resume URL from Sanity.
 *
 * @returns {Promise<string>} - Promise that resolves to the fetched resume URL.
 */
const fetchResumeUrl = async (): Promise<string> => {
	const query = groq`
    *[_type == "pageInfo"][0] {
      "resumeUrl": resume.asset->url
    }
  `;

	return await sanityClient.fetch(query);
};

export default fetchResumeUrl;
