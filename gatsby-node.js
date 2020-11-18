const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const articles = await graphql(`
    query loadArticlesQuery {
      takeshape {
        getArticleList {
          items {
            _id
            slug
          }
        }
      }
    }
  `)
  articles.data.takeshape.getArticleList.items.forEach(article => {
    createPage({
      path: `/articles/${article.slug}`,
      component: path.resolve(`src/templates/Article.js`),
      context: {
        id: article._id,
      },
    })
  })

  const pages = await graphql(`
    query loadPages {
      takeshape {
        getPageList {
          items {
            _id
            slug
          }
        }
      }
    }
  `)
  pages.data.takeshape.getPageList.items.forEach(page => {
    createPage({
      path: `/${page.slug}`,
      component: path.resolve(`src/templates/Page.js`),
      context: {
        id: page._id,
      },
    })
  })

  const articleCategories = await graphql(`
    query loadArticleCategoriesQuery {
      takeshape {
        getArticleCategoryList {
          items {
            _id
            slug
          }
        }
      }
    }
  `)
  articleCategories.data.takeshape.getArticleCategoryList.items.forEach(
    category => {
      createPage({
        path: `/articles/category/${category.slug}`,
        component: path.resolve(`src/templates/ArticleCategory.js`),
        context: {
          id: category._id,
        },
      })
    }
  )
}
