import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

const fetchSkills = async () => {
  const query = groq`
    *[_type == "skill"] | order(order)
  `;

  return await sanityClient.fetch(query);
};

export default fetchSkills;
