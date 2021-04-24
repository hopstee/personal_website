import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

import '../styles/globals.css'

import Layout from '../components/Layout'

const progress = new ProgressBar({
    size: 2,
    className: "bg-blue-500",
    delay: 100
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp
