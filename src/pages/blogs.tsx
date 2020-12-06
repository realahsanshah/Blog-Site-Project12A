import * as React from 'react';
import Layout from '../Layout/Layout';
import { graphql } from 'gatsby';
import { Card, CardMedia, Grid, makeStyles, CardActionArea,
     CardContent, Typography,CardActions,Button} from '@material-ui/core';
// import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import {navigate} from 'gatsby';

export interface BlogListProps {
    data: any
}

const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
        marginLeft:'20px',
        marginTop:'20px',
    },
});


const renderBlog = (data: any) => {
    const classes = useStyles();
    const blog = data.node;
    const link:string=blog.title;
    return (
        <div>
            <Grid container>
                <Grid container xs={12}>
                    <Grid item xs={12}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="400"
                                    image={blog.featuredImage.file.url}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {blog.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {blog.excerpt.excerpt}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={()=>{
                                    navigate(link);
                                }}>
                                    Read Full Article
                                </Button>
                            </CardActions>

                        </Card>
                    </Grid>
                    {/* <Grid item xs={12} md={6} >
                        <h1>
                           {blog.title}
                        </h1>
                        <h4>
                            {blog.excerpt.excerpt}
                        </h4>
                    </Grid> */}
                </Grid>
            </Grid>
        </div>
    );
}

const BlogList: React.SFC<BlogListProps> = ({ data }) => {
    // console.log("blogs",data.allContentfulBlogPost.edges[0].node);
    const blogs = data.allContentfulBlogPost.edges;
    console.log('blogs', blogs);

    // blogs.forEach((data:any)=>{
    //     console.log('data',data.node.title);
    // })

    return (
        <Layout title="Blogs">
            <h1>Blogs</h1>
            {blogs.map((blog: any) => {
                return (renderBlog(blog));
            })}
        </Layout>
    );
}

export default BlogList;


export const query = graphql`
query MyQuery {
                    allContentfulBlogPost {
                    edges {
                    node {
                    title
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
`;