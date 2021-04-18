import Head from 'next/head'

import Project from '../components/project/Project'

import { server } from '../config/index'

export async function getServerSideProps() {
    const res = await fetch(`${server}/api/projects`)
    const projects_data = await res.json();
    const projects = projects_data.data;

    return {
        props: {
            projects
        }
    }
}

export default function Projects({ projects }) {
    return (
        <>
            <Head>
                <title>Projects</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="wrapper">
                <div className="inline-flex flex-col md:space-y-0 md:space-x-6 md:flex-row justify-between m-3 md:m-6 lg:w-4/5 xl:w-4/6 2xl:w-1/2 lg:mx-auto">
                    {projects.map(el => (
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-header">
                                    {el.title}
                                </div>
                                <div className="card-body inline-flex flex-col space-y-3">
                                    {el.projects.map(pr => (
                                        <Project {...pr} />
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
