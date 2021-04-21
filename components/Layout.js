import Head from 'next/head';
import Navigation from './navigation/Navigation'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <html lang="en" />
                <meta name="twitter:card" content="summary" ></meta>
                <link rel="canonical" href="https://edkr.site"></link>
            </Head>
            <Navigation />
            <div className="pb-16 md:pb-0 md:pl-20 min-h-screen">
                { children }
            </div>
        </div>  
    );
}

export default Layout;