import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./pageInfo";
import project from "./project";
import skill from "./skill";
import social from "./social";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [pageInfo, project, skill, social],
};
