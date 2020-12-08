import * as React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AuthProvider from '../context/AuthContext.js';

export interface LayoutProps {
    children:React.ReactNode,
    title:string
}
 
const Layout: React.SFC<LayoutProps> = ({children,title}) => {
    return ( 
        <AuthProvider>
        <div>
            <title>Gatsby Blogs</title>
             <Navbar title={title} />
             {children}
             <Footer />
        </div>
        </AuthProvider>
     );
}
 
export default Layout;