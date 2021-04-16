import Head from 'next/head'
import Image from 'next/image'

import Info from '../components/info/Info'
import Level from '../components/level/Level'
import Experience from '../components/experience/Experience'
import Studies from '../components/studies/Studies'

import EmailIcon from '../assets/svg/email.svg';
import TimeIcon from '../assets/svg/time.svg';
import External_link from '../assets/svg/external_link.svg';

import resume from '../data/personal_data.json'

function Home() {
    const date = new Date().getTime() - new Date(resume.personal.start_work).getTime();
    const till_today = new Date(date);
    const years = till_today.getFullYear() - 1970;
    const months = till_today.getMonth();

    return (
        <>
            <Head>
                <title>Resume</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="min-h-full flex flex-col">
                    <div className="flex flex-col justify-between md:flex-row m-3 md:m-6">
                        <div className="md:w-3/5 md:max-h-full md:mr-3">
                            <div className="card-wrapper">
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
                                            <Experience  
                                                key={item.id}
                                                position={item.position}
                                                company={item.company}
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
                                            <Studies 
                                                key={item.id}
                                                grade={item.grade}
                                                university={item.university}
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
                                                <a href={item.link} target="blank">
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
            </main>
        </>
    )
}

export default Home