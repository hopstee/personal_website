import Link from '../Link'

import DocumentIcon from '../../assets/svg/document.svg';
import ProjectsIcon from '../../assets/svg/projects.svg';
import MailIcon from '../../assets/svg/mail.svg';

const Navigation = () => {
    return (
        <div className="fixed bottom-0 md:top-0 left-0 h-auto w-full md:w-auto z-50">
            <div className="md:h-full w-full flex md:flex-col justify-center bg-gray-700 p-2">
                <div className="inline-flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2">
                    <Link href="/">
                        <a className="nav-link">
                            <DocumentIcon className="h-8 w-8" />
                            <span className="tooltip">Resume</span>
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className="nav-link">
                            <ProjectsIcon className="h-8 w-8" />
                            <span className="tooltip">Projects</span>
                        </a>
                    </Link>
                    <Link href="/mail">
                        <a className="nav-link">
                            <MailIcon className="h-8 w-8" />
                            <span className="tooltip">Send email</span>
                        </a>
                    </Link>
                </div>
             </div>
         </div>
    );
}

export default Navigation;