export default {
  application: {
    locale: "en-GB",
    url: "https://indiekit.benjamin.parry.is",
  },
  publication: {
    locale: "en-GB",
    postTypes: {
      note: {
        post: {
          path: "collecting/thoughts/{yyyy}-{MM}-{dd}-{n}.md",
          url: "{yyyy}/{DDD}/n{n}/",
        },
      },
    },
  },
};
