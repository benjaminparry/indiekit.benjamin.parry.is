import process from "node:process";

export default {
  application: {
    locale: "en-GB",
    mongodbUrl: process.env.MONGO_URL,
    timeZone: process.env.TZ,
    url: "https://indiekit.benjamin.parry.is",
  },
  plugins: [
    "@indiekit/preset-eleventy",
    "@indiekit/store-github",
    "@indiekit/syndicator-mastodon",
  ],
  publication: {
    locale: "en-GB",
    me: "https://benjamin.parry.is",
    storeMessageTemplate: (metaData) =>
        `🤖<(BLEEP! BOOP! … I ${metaData.result} a ${metaData.postType} ${metaData.fileType})`,
    postTypes: {
      article: {
        post: {
          path: "source/writing/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "writing/{yyyy}/{MM}/{slug}/",
        },
        media: {
          path: "source/assets/images/writing/{yyyy}/{MM}/{filename}",
          url: "assets/images/writing/{yyyy}/{MM}/{filename}",
        },
      },
      note: {
        name: "Thought",
        post: {
          path: "source/collecting/thoughts/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "collecting/thoughts/{yyyy}/{MM}/{slug}/",
        },
        media: {
          path: "source/assets/images/collecting/thoughts/{yyyy}/{MM}/{filename}",
          url: "assets/images/collecting/thoughts/{yyyy}/{MM}/{filename}",
        },
      },
      bookmark: {
        name: "Link",
        post: {
          path: "source/collecting/links/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "collecting/links/{yyyy}/{MM}/{slug}/",
        },
      },
      reply: {
        name: "Reply",
        post: {
          path: "source/collecting/replies/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "collecting/replies/{yyyy}/{MM}/{slug}/",
        },
      },
    },
    slugSeparator: "-",
  },
  "@indiekit/post-type-note": {
    fields: {
      name: { required: true },
      content: { required: true },
      category: {},
      published: { required: true },
      visibility: {},
    },
  },
  "@indiekit/store-github": {
    user: "benjaminparry",
    repo: "benjamin.parry.is",
    token: process.env.GITHUB_TOKEN,
  },
  "@indiekit/syndicator-mastodon": {
    checked: false,
    url: "https://mastodon.social",
    user: "benjaminparry",
  },
};