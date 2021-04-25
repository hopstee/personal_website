import { useContext } from 'react'

import { LanguageContext, defaultLocale } from './LanguageProvider'
import { Translations } from '../../translations/translations'

export default function useTranslation() {
    const [locale] = useContext(LanguageContext)

    function t(key) {
        if(!Translations[locale][key]) {
            console.warn(`No string '${key}' for locale '${locale}'`)
        }

        return Translations[locale][key] || Translations[defaultLocale][key] || ""
    }

    return { t, locale }
}