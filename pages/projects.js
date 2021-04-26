import Head from 'next/head'

import Project from '../components/project/Project'

import useTranslation from "../lib/language/useTranslation"

// import { server } from '../config/index'

// export async function getServerSideProps() {
//     const res = await fetch(`${server}/api/projects`)
//     const projects_data = await res.json();
//     const projects = projects_data.data;

//     return {
//         props: {
//             projects
//         }
//     }
// }

export default function Projects() {
    const { locale } = useTranslation()

    const projects = require('../data/projects.json')
    
    return (
        <>
            <Head>
                <html lang="en" />
                <title>Projects</title>
                <meta name="keywords" content="HTML, CSS, JavaScript, resume developing, experience, github, developer, knowledge, projects"></meta>
                <meta name="description" content="List of my own projects and projects wich I participated"></meta>
                <meta name="author" content="Eduard Krivovyashchuk | Эдуард Кривовящук"></meta>
                <meta name="twitter:card" content="summary" ></meta>
                <meta name="twitter:description" content="List of my own projects and projects wich I participated"></meta> 
                <meta name="twitter:title" content="Projects" ></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="canonical" href="https://edkr.site"></link>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="wrapper">
                <div className="inline-flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row justify-between m-3 md:m-6 lg:w-4/5 xl:w-4/6 2xl:w-1/2 lg:mx-auto">
                    {projects.map(el => (
                        <div className="card-wrapper" key={el[locale].title}>
                            <div className="card dark:bg-gray-800 dark:border-gray-700">
                                <div className="card-header dark:border-gray-700 dark:text-gray-100">
                                    {el[locale].title}
                                </div>
                                <div className="card-body inline-flex flex-col space-y-3">
                                    {el[locale].projects.map(pr => (
                                        <Project key={pr.title} {...pr} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
