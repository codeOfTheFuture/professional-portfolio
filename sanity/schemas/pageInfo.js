export default {
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "whatIDo",
      title: "WhatIDo",
      type: "text",
    },
    {
      name: "aboutMe",
      title: "AboutMe",
      type: "text",
    },
    {
      name: "topExpertise",
      title: "TopExpertise",
      type: "text",
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
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
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
  ],
};
