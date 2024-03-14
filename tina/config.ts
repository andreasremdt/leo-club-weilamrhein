import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
          {
            type: "datetime",
            name: "created_at",
            label: "Created at",
            required: true,
          },
          {
            type: "object",
            name: "images",
            label: "Images",
            list: true,
            fields: [
              {
                label: "URL",
                name: "src",
                type: "string",
                required: true,
              },
              {
                label: "Description",
                name: "alt",
                type: "string",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});
