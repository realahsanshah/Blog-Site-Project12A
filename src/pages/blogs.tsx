import * as React from 'react';
import Layout from '../Layout/Layout';
import { graphql } from 'gatsby';
import {
    Card, CardMedia, Grid, makeStyles, CardActionArea,
    CardContent, Typography, CardActions, Button
} from '@material-ui/core';
import { navigate } from 'gatsby';
import * as moment from 'moment';

export interface BlogListProps {
    data: any
}

const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
        marginLeft: '20px',
        marginTop: '20px',
    },
});


const renderBlog = (data: any) => {
    

    const classes = useStyles();
    const blog = data.node;
    const link: string = blog.miniTitle;
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
                                        {moment(blog.publishedDate,'YYYY MM DD hh:mm').fromNow()}<br/>
                                        {blog.excerpt.excerpt}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => {
                                    navigate(link);
                                }}>
                                    Read Full Article
                                </Button>
                            </CardActions>

                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

const BlogList: React.SFC<BlogListProps> = ({ data }) => {
    
    const blogs = data.allContentfulBlogPost.edges;
    return (
        <Layout title="Gatsby Blogs">
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
`;