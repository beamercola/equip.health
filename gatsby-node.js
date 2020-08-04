const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const articles = await graphql(`
    query loadArticlesQuery {
      takeshape {
        getArticleList {
          items {
            _id
            contentHtml
            title
            slug
            date
            photo {
              path
            }
            category {
              _id
              name
              slug
            }
            author {
              name
            }
          }
        }
      }
    }
  `)
  articles.data.takeshape.getArticleList.items.forEach(article => {
    createPage({
      path: `/articles/${article.slug}`,
      component: path.resolve(`src/templates/article.js`),
      context: {
        ...article,
      },
    })
  })

  const pages = await graphql(`
    query loadPages {
      takeshape {
        getPageList {
          items {
            _id
            contentHtml
            title
            slug
          }
        }
      }
    }
  `)
  pages.data.takeshape.getPageList.items.forEach(page => {
    createPage({
      path: `/${page.slug}`,
      component: path.resolve(`src/templates/page.js`),
      context: {
        ...page,
      },
    })
  })

  const articleCategories = await graphql(`
    query loadArticleCategoriesQuery {
      takeshape {
        getArticleCategoryList {
          items {
            _id
            name
            slug
            articleSet {
              items {
                _id
                contentHtml
                title
                slug
                date
                photo {
                  path
                }
              }
            }
          }
        }
      }
    }
  `)
  articleCategories.data.takeshape.getArticleCategoryList.items.forEach(
    category => {
      createPage({
        path: `/articles/category/${category.slug}`,
        component: path.resolve(`src/templates/article_category.js`),
        context: {
          ...category,
        },
      })
    }
  )
}
