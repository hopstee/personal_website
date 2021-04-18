import Head from 'next/head'
import Image from 'next/image'

import Info from '../components/info/Info'
import Level from '../components/level/Level'
import Text from '../components/text/Text'

import EmailIcon from '../assets/svg/email.svg';
import TimeIcon from '../assets/svg/time.svg';
import External_link from '../assets/svg/external_link.svg';
import DownloadIcon from '../assets/svg/download.svg';

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
    const resume = require('../data/personal_data.json')
    
    const date = new Date().getTime() - new Date(resume.personal.start_work).getTime();
    const till_today = new Date(date);
    const years = till_today.getFullYear() - 1970;
    const months = till_today.getMonth();

    return (
        <>
            <Head>
                <title>Resume</title>
                <meta name="keywords" content="HTML, CSS, JavaScript, Resume"></meta>
                <meta name="description" content="Personal website"></meta>
                <meta name="author" content="Eduard Krivovyashchuk"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="wrapper">
                <div className="flex flex-col justify-between md:flex-row m-3 md:m-6 lg:w-4/5 xl:w-4/6 2xl:w-1/2 lg:mx-auto">
                    <div className="md:w-3/5 md:max-h-full md:mr-3">
                        <div className="card-wrapper relative">
                            {/* <div className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 cursor-pointer text-gray-700 hover:text-gray-900">
                                <DownloadIcon className="w-6 h-6" onClick={downloadResume} />
                            </div> */}
                            <div className="card p-4">
                                <div className="flex justify-center rounded-2xl">
                                    <Image
                                        src="/img/me.png"
                                        alt="personal photo"
                                        width="150"
                                        height="150"
                                        className="w-32 h-32 rounded-full mx-auto object-cover bg-gray-100"
                                    />
                                </div>
                                <div className="text-center pt-6">
                                    <p className="uppercase text-lg font-semibold main-text-color">
                                        {resume.personal.name}
                                    </p>
                                    <p className="text-lg font-semibold text-gray-700">
                                        {resume.personal.bio}
                                    </p>
                                    <p className="mt-2 text-gray-500">
                                        {resume.about}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-header">
                                    Experience
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
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-header">
                                    Studies
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
                    </div>
                    <div className="md:w-2/5 md:max-h-full md:ml-3">
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-header">
                                    Common
                                </div>
                                <div className="card-body">
                                    <div className="flex flex-wrap">
                                        <Info 
                                            key="common-0"
                                            icon={<EmailIcon className="w-6 h-6 main-text-color" />} 
                                            value={resume.personal.email} 
                                            name="Email"
                                        />
                                        <Info 
                                            key="common-1" 
                                            icon={<TimeIcon className="w-6 h-6 main-text-color" />} 
                                            value={`${years} years, ${months} months`} 
                                            name="Experience" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-header">
                                    Links
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
                        <div className="flex flex-col sm:flex-row md:flex-col">
                            <div className="w-full sm:w-1/2 md:w-full sm:mr-3 m-0 md:m-0">
                                <div className="card-wrapper ">
                                    <div className="card">
                                        <div className="card-header">
                                            Skills
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
                            <div className="w-full sm:w-1/2 md:w-full sm:ml-3 m-0 md:m-0">
                                <div className="card-wrapper">
                                    <div className="card">
                                        <div className="card-header">
                                            Languages
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
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home