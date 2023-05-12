import { sanityClient } from "../sanity.config";
import { groq } from "next-sanity";

const fetchResumeUrl = async (): Promise<string> => {
	const query = groq`
    *[_type == "pageInfo"][0] {
      "resumeUrl":resume.asset->url
    }
  `;

	return await sanityClient.fetch(query);
};

export default fetchResumeUrl;
