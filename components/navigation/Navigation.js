import Link from '../Link'

import { useEffect, useState, useContext } from "react";
import { useTheme } from "next-themes"

import Modal from '../modal/modal';

import DocumentIcon from '../../assets/svg/document.svg';
import ProjectsIcon from '../../assets/svg/projects.svg';
import MailIcon from '../../assets/svg/mail.svg';
import SunIcon from '../../assets/svg/sun.svg';
import MoonIcon from '../../assets/svg/moon.svg';
import SettingsIcon from '../../assets/svg/settings.svg';
import GlobeIcon from '../../assets/svg/globe.svg';
import DownloadIcon from '../../assets/svg/download.svg';
import CheckIcon from '../../assets/svg/check.svg';

import { LanguageContext, locales } from '../../lib/language/LanguageProvider'
import useTranslation from "../../lib/language/useTranslation"
import { set } from 'react-hook-form';

function Navigation(props) {

    const { t } = useTranslation()

    const [locale, setLocale] = useContext(LanguageContext);
    const { theme, setTheme } = useTheme();
    console.log(theme)
    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // const settings_block = document.getElementById('settings_block');
    
    const switchTheme = () => {
        if (isMounted) {
            setTheme(theme === "light" ? "dark" : "light");
        }
    };

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    const showLangs = () => {
        let langs = document.getElementById('langs');
        // let settings_block = document.getElementById('settings_block');
        // settings_block.classList.toggle('translate-x-full');
        langs.classList.toggle('left-full')
    }

    const switchLang = (lang) => {
        if(!window) {
            return;
        }

        localStorage.setItem('lang', lang);
        setLocale(lang);
    }

    useEffect(() => {
        setIsMounted(true);

        if(theme !== "light" && theme !== "dark") {
            setTheme("light");
        }
    }, []);

    return (
        <>
            {isOpen ? (
                <Modal
                    header={t("settings")}
                    body={
                        <div className="relative overflow-x-hidden">
                            <div className="inline-block space-y-2 w-full h-48 transition-all duration-150" id="settings_block">
                                <div onClick={switchTheme}>
                                    {theme === "light" ? (
                                        <div className="settings-item dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100">
                                            <MoonIcon className="h-8 w-8 mr-4" />
                                            <span>{t("darkMode")}</span>
                                        </div>
                                    ) : (
                                        <div className="settings-item dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100">
                                            <SunIcon className="h-8 w-8 mr-4" />
                                            <span>{t("lightMode")}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="settings-item dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100" onClick={showLangs}>
                                    <GlobeIcon className="h-8 w-8 mr-4" />
                                    <span>{t("languages")}</span>
                                </div>
                                {/* <div className="settings-item dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100">
                                    <DownloadIcon className="h-8 w-8 mr-4" />
                                    <span>Download resume</span>
                                </div> */}
                            </div>

                            <div className="absolute top-0 left-0 left-full inline-block space-y-2 w-full h-full bg-white dark:bg-gray-800 cursor-default overflow-auto transition-all duration-150" id="langs"  onClick={showLangs}>
                                {locales.map(el => (
                                    <div className="settings-item dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100" key={el.abr} onClick={() => switchLang(el.abr)}>
                                        {el.abr === locale ? (
                                            <CheckIcon className="w-6 h-6 mr-2" />
                                        ) : ""}
                                        {el.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                    onclick={handleModal}
                />
            ) : ""}
            <div className="fixed bottom-0 md:top-0 left-0 h-auto w-full md:w-auto z-40">
                <div className="md:h-full w-full flex md:flex-col bg-white dark:bg-gray-800 p-2 border-t md:border-r md:border-t-0 border-gray-200 dark:border-gray-700">
                    <div className="flex md:inline-flex flex-row md:flex-col justify-evenly space-x-2 md:space-x-0 md:space-y-2 w-full">
                        <Link href="/">
                            <a className="nav-link dark:hover:bg-gray-700">
                                <DocumentIcon className="h-8 w-8 text-gray-700 dark:text-gray-100" />
                                <span className="tooltip dark:dark-tooltip">{t("resume")}</span>
                            </a>
                        </Link>
                        <Link href="/projects">
                            <a className="nav-link dark:hover:bg-gray-700">
                                <ProjectsIcon className="h-8 w-8 text-gray-700 dark:text-gray-100" />
                                <span className="tooltip dark:dark-tooltip">{t("projects")}</span>
                            </a>
                        </Link>
                        <Link href="/mail">
                            <a className="nav-link dark:hover:bg-gray-700">
                                <MailIcon className="h-8 w-8 text-gray-900 dark:text-gray-100" />
                                <span className="tooltip dark:dark-tooltip">{t("sendEmail")}</span>
                            </a>
                        </Link>
                        <a className="nav-link dark:hover:bg-gray-700" onClick={handleModal}>
                            <SettingsIcon className="h-8 w-8 text-gray-900 dark:text-gray-100" />
                            <span className="tooltip dark:dark-tooltip">{t("settings")}</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation;