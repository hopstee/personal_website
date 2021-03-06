import { createContext, useEffect, useState } from 'react'

export const defaultLocale = "en"
export const locales = require('../../data/locales.json')
export const LanguageContext = createContext([])

export const LanguageProvider = ({ children }) => {
    const [locale, setLocale] = useState("en")

    useEffect(() => {
        if(!window) {
            return;
        }

        const language = localStorage.getItem('lang') || locale;
        setLocale(language);
    }, [locale]);

    return (
        <LanguageContext.Provider value={[locale, setLocale]}>
            { children }
        </LanguageContext.Provider>
    );
}