import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

const fetchPageInfo = async () => {
  const query = groq`
    *[_type == "pageInfo"][0]
  `;

  return await sanityClient.fetch(query);
};

export default fetchPageInfo;
