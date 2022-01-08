const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const receptTemplate = path.resolve(`./src/templates/recept.js`);
  const res = await graphql(`
    query {
      allSanityRecept {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  const receptek = res.data.allSanityRecept.nodes;

  receptek.forEach((recept, index) => {
    const previousSlug = index === 0 ? null : receptek[index - 1].slug.current;
    const nextSlug =
      index === receptek.length - 1 ? null : receptek[index + 1].slug.current;

    createPage({
      component: receptTemplate,
      path: `/recept/${recept.slug.current}`,
      context: {
        slug: recept.slug.current,
        previousSlug,
        nextSlug,
      },
    });
  });
};
