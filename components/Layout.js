import Head from 'next/head';
import Navigation from './navigation/Navigation'

const Layout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <div className="pb-16 md:pb-0 md:pl-20 min-h-screen bg-gray-100 dark:bg-gray-800">
                { children }
            </div>
        </div>  
    );
}

export default Layout;