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
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "linkToGithub",
      title: "Link to Github",
      type: "url",
    },
    {
      name: "linkToBuild",
      title: "Link to Build",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "bulletPoints",
      title: "Bullet Points",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Specify the order in which the project should be displayed",
    },
  ],
};
