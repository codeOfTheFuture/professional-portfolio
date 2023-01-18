import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

const fetchSocials = async () => {
  const query = groq`
    *[_type == "social"]
  `;

  return await sanityClient.fetch(query);
};

export default fetchSocials;
