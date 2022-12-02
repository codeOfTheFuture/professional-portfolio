export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the project",
      type: "string",
    },
    {
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "linkToGithub",
      title: "LinkToGithub",
      type: "url",
    },
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "techStack",
      title: "TechStack",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "bulletPoints",
      title: "BulletPoints",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
