exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      allContentfulBlogPost {
        edges {
          node {
            title
            miniTitle
            body {
              raw
            }
            excerpt {
              excerpt
            }
            slug
            publishedDate
            featuredImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  const path=require('path');
  console.log("result", result);
  const blogs=result.data.allContentfulBlogPost.edges;

    console.log(blogs);

  blogs.forEach((blog)=>{
      const blogPost=blog.node;
      console.log('blogpost',blogPost);
      createPage({
        path:`/blogs/${blogPost.miniTitle}`,
        component:path.resolve('./src/templates/blog.tsx'),
        context:{
            title:blogPost.title,
            publishedDate:blogPost.publishedDate,
            body:blogPost.body.raw,
            imageUrl:blogPost.featuredImage.file.url,
        }
    });
});
};
