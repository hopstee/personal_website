import Link from '../Link'

import DocumentIcon from '../../assets/svg/document.svg';
import ProjectsIcon from '../../assets/svg/projects.svg';
import MailIcon from '../../assets/svg/mail.svg';
import DownloadIcon from '../../assets/svg/download.svg';

const Navigation = () => {
    return (
        <div className="fixed bottom-0 md:top-0 left-0 h-auto w-full md:w-auto z-50">
            <div className="md:h-full w-full flex md:flex-col justify-center bg-gray-700 p-2">
                <div className="grid gap-2 grid-cols-4 md:grid-cols-1 md:grid-rows-4">
                    <Link href="/">
                        <a className="nav-link">
                            <DocumentIcon className="h-8 w-8" />
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className="nav-link">
                            <ProjectsIcon className="h-8 w-8" />
                        </a>
                    </Link>
                    <Link href="/mail">
                        <a className="nav-link">
                            <MailIcon className="h-8 w-8" />
                        </a>
                    </Link>
                    <div>
                        <a className="nav-link">
                            <DownloadIcon className="h-8 w-8" />
                        </a>
                    </div>
                </div>
             </div>
         </div>
    );
}

export default Navigation;