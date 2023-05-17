/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\pages\studio\[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemas/schema";
import { ClientConfig, SanityClient, createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { SanityClientLike, SanityImageSource } from "@sanity/image-url/lib/types/types";

/**
 * config is the configuration object for the Sanity client.
 * @type {ClientConfig}
 */
const config: ClientConfig = defineConfig({
	basePath: "/studio",
	projectId,
	dataset,
	// Add and edit the content schema in the './sanity/schemas' folder
	schema,
	plugins: [
		deskTool(),
		// Vision is a tool that lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({ defaultApiVersion: apiVersion }),
	],
});

/**
 * sanityClient is an instance of the SanityClient used to interact with the Sanity API.
 * @type {SanityClient}
 */
const sanityClient: SanityClient = createClient(config);

/**
 * urlFor is a function that generates an image URL from a SanityImageSource.
 * @param {SanityImageSource} source - The source of the image.
 * @returns {string} The generated image URL.
 */
const urlFor = (source: SanityImageSource) =>
	createImageUrlBuilder(config as SanityClientLike).image(source);

export { config, sanityClient, urlFor };
