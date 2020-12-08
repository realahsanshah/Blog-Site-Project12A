import * as React from 'react';
import {Link} from 'gatsby';
import * as moment from 'moment';
import Layout from '../Layout/Layout';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import { navigate } from 'gatsby';

export interface BlogProps {
    pageContext:any
}
 
const Blog: React.SFC<BlogProps> = ({pageContext}) => {
    
    const blog=pageContext;
    console.log("body",JSON.parse(blog.body));
    return ( 
        <div>
            <Layout title="Gatsby Blog">
            <Link to="/blogs">All Blogs</Link>
            <h1>{blog.title}</h1>
            <p>{moment(blog.publishedDate,'YYYY MM DD hh:mm').fromNow()}</p>
            <img src={blog.imageUrl} height="400" alt={blog.title}/>
            {/* <p>{blog.body}</p> */}
            <p>{documentToReactComponents(JSON.parse(blog.body))}</p> 
            </Layout>
        </div>
     );
}
 
export default Blog;