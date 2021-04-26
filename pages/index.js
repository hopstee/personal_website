import Head from 'next/head'
import Image from 'next/image'

import Info from '../components/info/Info'
import Level from '../components/level/Level'
import Text from '../components/text/Text'

import EmailIcon from '../assets/svg/email.svg';
import TimeIcon from '../assets/svg/time.svg';
import External_link from '../assets/svg/external_link.svg';
import DownloadIcon from '../assets/svg/download.svg';

import useTranslation from "../lib/language/useTranslation"

// import { server } from '../config/index'
// import resume from '../data/personal_data.json'

// export async function getServerSideProps() {
//     const res = await fetch(`${server}/api/personal`)
//     const resume_data = await res.json();
    
//     return {
//         props: {
//             resume: resume_data.data
//         }
//     }
// }

function Home() {
    const { t, locale } = useTranslation()

    const resume = require('../data/personal_data.json')[locale]
    
    const date = new Date().getTime() - new Date(resume.personal.start_work).getTime();
    const till_today = new Date(date);
    const years = till_today.getFullYear() - 1970;
    const months = till_today.getMonth();

    const experience_string = years + " " + t("years") + (months > 0 ? ", " + months + " " + t("months") : "")
    
    return (
        <>
            <Head>
                <html lang="en" />
                <title>Eduard Krivovyashchuk</title>
                <meta name="keywords" content="HTML, CSS, JavaScript, resume developing, experience, github, developer, knowledge, projects"></meta>
                <meta name="description" content="Personal resume website about my skills, education, career, own projects and projects in which I participated"></meta>
                <meta name="author" content="Eduard Krivovyashchuk | Эдуард Кривовящук"></meta>
                <meta name="twitter:card" content="summary" ></meta>
                <meta name="twitter:description" content="Personal website about my skills, education, career, own projects and projects in which I participated"></meta> 
                <meta name="twitter:title" content="Eduard Krivovyashchuk" ></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="canonical" href="https://edkr.site"></link>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="wrapper">
                <div className="flex flex-col justify-between md:flex-row m-3 md:m-6 lg:w-4/5 xl:w-4/6 2xl:w-1/2 lg:mx-auto">
                    <div className="inline-flex flex-col space-y-3 md:space-y-6 md:w-3/5 md:max-h-full mb-3 md:mb-0 md:mr-3">
                        <div className="card-wrapper relative">
                            {/* <div className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 cursor-pointer text-gray-700 hover:text-gray-900">
                                <DownloadIcon className="w-6 h-6" onClick={downloadResume} />
                            </div> */}
                            <div className="card p-4 dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-center rounded-2xl">
                                    <Image
                                        src="/img/me.png"
                                        alt="personal photo"
                                        width="150"
                                        height="150"
                                        className="w-32 h-32 rounded-full mx-auto object-cover bg-gray-100 dark:bg-gray-700"
                                    />
                                </div>
                                <div className="text-center pt-6">
                                    <h1 className="uppercase text-lg font-semibold main-text-color">
                                        {resume.personal.name}
                                    </h1>
                                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-100">
                                        {resume.personal.bio}
                                    </p>
                                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                                        {resume.about}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {resume.experience.length !== 0 ? (
                            <div className="card-wrapper">
                                <div className="card dark:bg-gray-800 dark:border-gray-700">
                                    <div className="card-header dark:border-gray-700 dark:text-gray-100">
                                        {t("experience")}
                                    </div>
                                    <div className="card-body">
                                        {resume.experience.map(item => (
                                            <Text  
                                                key={item.id}
                                                position={item.position}
                                                institution={item.company}
                                                city={item.city}
                                                date={item.time}
                                                desc={item.about}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : ""}
                        {resume.certificates.length !== 0 ? (
                            <div className="card-wrapper">
                                <div className="card dark:bg-gray-800 dark:border-gray-700">
                                    <div className="card-header dark:border-gray-700 dark:text-gray-100">
                                        {t("certificates")}
                                    </div>
                                    <div className="card-body">
                                        {resume.certificates.map(item => (
                                            <Text 
                                                key={item.id}
                                                position={item.grade}
                                                institution={item.university}
                                                city={item.city}
                                                date={item.time}
                                                desc={item.about}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : ""}
                        {resume.studies.length !== 0 ? (
                            <div className="card-wrapper">
                                <div className="card dark:bg-gray-800 dark:border-gray-700">
                                    <div className="card-header dark:border-gray-700 dark:text-gray-100">
                                        {t("studies")}
                                    </div>
                                    <div className="card-body">
                                        {resume.studies.map(item => (
                                            <Text 
                                                key={item.id}
                                                position={item.grade}
                                                institution={item.university}
                                                city={item.city}
                                                date={item.time}
                                                desc={item.about}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : ""}
                    </div>
                    <div className="inline-flex flex-col space-y-3 md:space-y-6 md:w-2/5 md:max-h-full md:ml-3">
                        <div className="card-wrapper">
                            <div className="card dark:bg-gray-800 dark:border-gray-700">
                                <div className="card-header dark:border-gray-700 dark:text-gray-100">
                                    {t("common")}
                                </div>
                                <div className="card-body">
                                    <div className="flex flex-wrap">
                                        {resume.personal.email !== "" ? (
                                            <Info 
                                                key="common-0"
                                                icon={<EmailIcon className="w-6 h-6 main-text-color" />} 
                                                value={resume.personal.email} 
                                                name={t("email")}
                                            />
                                        ) : ""}
                                        {resume.personal.email !== "" ? (
                                            <Info 
                                                key="common-1" 
                                                icon={<TimeIcon className="w-6 h-6 main-text-color" />} 
                                                value={experience_string} 
                                                name={t("experience")} 
                                            />
                                        ) : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {resume.links.length !== 0 ? (
                            <div className="card-wrapper">
                                <div className="card dark:bg-gray-800 dark:border-gray-700">
                                    <div className="card-header dark:border-gray-700 dark:text-gray-100">
                                        {t("links")}
                                    </div>
                                    <div className="card-body">
                                        <div className="flex flex-wrap">
                                            {resume.links.map(item => (
                                                <a href={item.link} target="blank" className="relative w-full sm:w-auto">
                                                    <Info
                                                        key={item.id}
                                                        icon={<External_link className="w-6 h-6 main-text-color" />}
                                                        name={item.title}
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : ""}
                        <div className="inline-flex flex-col space-y-3 md:space-y-6 sm:space-y-0 sm:flex-row md:flex-col">
                            {resume.skills.length !== 0 ? (
                                <div className="w-full sm:w-1/2 md:w-full sm:mr-1.5 m-0 md:m-0">
                                    <div className="card-wrapper ">
                                        <div className="card dark:bg-gray-800 dark:border-gray-700">
                                            <div className="card-header dark:border-gray-700 dark:text-gray-100">
                                                {t("skills")}
                                            </div>
                                            <div className="card-body">
                                                <div className="flex flex-wrap ">
                                                    {resume.skills.map(item => (
                                                        <Level key={item.id} title={item.title} level={item.level} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : ""}
                            {resume.languages.length !== 0 ? (
                                <div className="w-full sm:w-1/2 md:w-full sm:ml-1.5 m-0 md:m-0">
                                    <div className="card-wrapper">
                                        <div className="card dark:bg-gray-800 dark:border-gray-700">
                                            <div className="card-header dark:border-gray-700 dark:text-gray-100">
                                                {t("languages")}
                                            </div>
                                            <div className="card-body">
                                                <div className="flex flex-wrap ">
                                                    {resume.languages.map(item => (
                                                        <Level key={item.id} title={item.title} level={item.level} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : ""}
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home