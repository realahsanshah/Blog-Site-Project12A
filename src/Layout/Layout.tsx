import * as React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
export interface LayoutProps {
    children:React.ReactNode,
    title:string
}
 
const Layout: React.SFC<LayoutProps> = ({children,title}) => {
    return ( 
        <div>
        
            <title>Gatsby Blogs</title>
             <Navbar title={title} />
             {children}
             <Footer />
        </div>
     );
}
 
export default Layout;