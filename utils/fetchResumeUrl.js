import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

const fetchResumeUrl = async () => {
  const query = groq`
    *[_type == "pageInfo"][0] {
  "resumeUrl":resume.asset->url
}
  `;

  return await sanityClient.fetch(query);
};

export default fetchResumeUrl;
