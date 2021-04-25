import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '../lib/language/LanguageProvider'

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
        <ThemeProvider attribute="class">
            <LanguageProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default MyApp
