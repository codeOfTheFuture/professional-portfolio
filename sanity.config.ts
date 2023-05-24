/**
 * @file_overview Sanity configuration file for Next.js app
 * @module sanity.config
 */

import { Config, ImageUrlBuilder, defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { SanityClient, createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemas/schema";
import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

/**
 * Configuration object for Sanity CMS.
 * @type {Config}
 */
const config: Config = defineConfig({
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
 * Instance of the Sanity client for querying and mutating data.
 * @type {SanityClient}
 */
const sanityClient: SanityClient = createClient(config);

/**
 * Helper function to build URLs for Sanity images.
 * @param {SanityImageSource} source - The source of the image.
 * @returns {ImageUrlBuilder} - Image URL builder instance.
 */
const urlFor = (source: SanityImageSource): ImageUrlBuilder =>
	createImageUrlBuilder(config).image(source);

export { config, sanityClient, urlFor };
