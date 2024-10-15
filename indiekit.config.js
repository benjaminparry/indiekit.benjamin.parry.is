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
          path: "notes/{yyyy}-{MM}-{dd}-{n}.markdown",
          url: "{yyyy}/{DDD}/n{n}/",
        },
      },
    },
  },
};
