import Head from 'next/head';
import Navigation from './navigation/Navigation'

const Layout = ( props ) => {
    return (
        <div>
            <Navigation />
            <div className="pb-16 md:pb-0 md:pl-20 min-h-screen bg-gray-100 dark:bg-gray-900">
                { props.children }
            </div>
        </div>  
    );
}

export default Layout;