import Link from '../Link'

import { useEffect, useState } from "react";
import { useTheme } from "next-themes"

import DocumentIcon from '../../assets/svg/document.svg';
import ProjectsIcon from '../../assets/svg/projects.svg';
import MailIcon from '../../assets/svg/mail.svg';
import SunIcon from '../../assets/svg/sun.svg';
import MoonIcon from '../../assets/svg/moon.svg';

function Navigation() {
    
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);
    
    const switchTheme = () => {
        if (isMounted) {
            setTheme(theme === "light" ? "dark" : "light");
        }
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="fixed bottom-0 md:top-0 left-0 h-auto w-full md:w-auto z-50">
            <div className="md:h-full w-full flex md:flex-col bg-white dark:bg-gray-800 p-2 border-t md:border-r md:border-t-0 border-gray-200 dark:border-gray-700">
                <div className="flex md:inline-flex flex-row md:flex-col justify-evenly space-x-2 md:space-x-0 md:space-y-2 w-full">
                    <Link href="/">
                        <a className="nav-link dark:hover:bg-gray-700">
                            <DocumentIcon className="h-8 w-8 text-gray-700 dark:text-gray-100" />
                            <span className="tooltip dark:dark-tooltip">Resume</span>
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className="nav-link dark:hover:bg-gray-700">
                            <ProjectsIcon className="h-8 w-8 text-gray-700 dark:text-gray-100" />
                            <span className="tooltip dark:dark-tooltip">Projects</span>
                        </a>
                    </Link>
                    <Link href="/mail">
                        <a className="nav-link dark:hover:bg-gray-700">
                            <MailIcon className="h-8 w-8 text-gray-900 dark:text-gray-100" />
                            <span className="tooltip dark:dark-tooltip">Send email</span>
                        </a>
                    </Link>
                    <a className="nav-link dark:hover:bg-gray-700" onClick={switchTheme}>
                        {theme === "light" ? (
                            <div>
                                <SunIcon className="h-8 w-8 text-gray-900" />
                                <span className="tooltip dark:dark-tooltip">Dark mode</span>
                            </div>
                        ) : (
                            <div>
                                <MoonIcon className="h-8 w-8 text-gray-900 dark:text-gray-100" />
                                <span className="tooltip dark:dark-tooltip">Light mode</span>
                            </div>
                        )}
                    </a>
                </div>
             </div>
         </div>
    );
}

export default Navigation;