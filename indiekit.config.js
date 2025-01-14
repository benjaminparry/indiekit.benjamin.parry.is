import path from "node:path";
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
    "@indiekit/post-type-event",
    "@indiekit/post-type-reply",
    "@indiekit/post-type-like",
    "@indiekit/post-type-photo",
    "@paulrobertlloyd/tags-input",
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
        fields: {
            "bookmark-of": { required: true },
            name: {},
            content: {},
            tags: {},
            category: {},
            "post-status": {},
            published: { required: true },
            visibility: {},
        }
      },
      reply: {
        name: "Reply",
        post: {
          path: "source/sending/replies/{yyyy}-{MM}-{dd}-reply_{yyyy}{MM}{dd}{HH}{mm}{ss}.md",
          url: "sending/replies/{yyyy}/{MM}/reply_{yyyy}{MM}{dd}{HH}{mm}{ss}/",
        },
      },
      like: {
        name: "Like",
        post: {
          path: "source/sending/likes/{yyyy}-{MM}-{dd}-like_{yyyy}{MM}{dd}{HH}{mm}{ss}.md",
          url: "sending/likes/{yyyy}/{MM}/like_{yyyy}{MM}{dd}{HH}{mm}{ss}/",
        },
      },
      event: {
        name: "Attending",
        post: {
            path: "source/attending/{yyyy}-{MM}-{dd}-{slug}.md",
            url: "attending/{yyyy}/{MM}/{slug}/",
        }
      },
      photo: {
        name: "Photo",
        post: {
          path: "source/collecting/photos/{yyyy}-{MM}-{dd}-photo_{yyyy}{MM}{dd}{HH}{mm}{ss}.md",
          url: "collecting/photos/{yyyy}/{MM}/photo_{yyyy}{MM}{dd}{HH}{mm}{ss}/",
        },
        media: {
            path: "source/assets/images/collecting/photos/{yyyy}/{MM}/{filename}",
            url: "assets/images/collecting/photos/{yyyy}/{MM}/{filename}",
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
  "@indiekit/post-type-event": {
    name: "Attending"
  },
  "@indiekit/syndicator-mastodon": {
    checked: false,
    url: "https://mastodon.social",
    user: "benjaminparry",
  },
};