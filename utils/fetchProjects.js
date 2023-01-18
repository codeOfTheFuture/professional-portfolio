import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

const fetchProjects = async () => {
  const query = groq`
    *[_type == "project"] {
      ...,
      techStack[]->
    }
  `;

  return await sanityClient.fetch(query);
};

export default fetchProjects;
