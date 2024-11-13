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
    postTypes: {
      article: {
        post: {
          path: "articles/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "{yyyy}/{DDD}/a{n}/{slug}/",
        },
        media: {
          path: "media/{yyyy}/{DDD}/a{n}/{filename}",
          url: "media/{yyyy}/{DDD}/a{n}/{filename}",
        },
      },
      note: {
        post: {
          path: "source/collecting/thoughts/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "/collecting/thoughts/{yyyy}/{MM}/{slug}/",
        },
      },
      photo: {
        post: {
          path: "photos/{yyyy}-{MM}-{dd}-{n}.md",
          url: "{yyyy}/{DDD}/p{n}/",
        },
        media: {
          path: "media/{yyyy}/{DDD}/p{n}/{filename}",
          url: "media/{yyyy}/{DDD}/p{n}/{filename}",
        },
      },
      bookmark: {
        post: {
          path: "bookmarks/{yyyy}-{MM}-{dd}-{slug}.md",
          url: "{yyyy}/{DDD}/b{n}/{slug}/",
        },
      },
      reply: {
        post: {
          path: "replies/{yyyy}-{MM}-{dd}-{n}.md",
          url: "{yyyy}/{DDD}/r{n}/",
        },
      },
    },
    slugSeparator: "-",
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