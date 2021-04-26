import Link_icon from '../../assets/svg/external_link.svg'

import useTranslation from "../../lib/language/useTranslation"

const Project = (props) => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col p-2">
            <p className="text-md font-semibold text-gray-900 dark:text-gray-200">
                {props.title}
            </p>
            <p className="text-sm text-gray-500 mb-3 dark:text-gray-400">
                {props.desc}
            </p>
            <div className="flex flex-wrap mb-3">
                {props.stack.map(e => (
                    <span className="text-xs text-gray-500 dark:text-gray-400 py-1 px-3 mr-1 mb-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                        {e}
                    </span>
                ))}
            </div>

            <div className="inline-flex space-x-1">
                {props.link !== '' ? (
                    <a href={props.link} target="blank" className="flex items-center text-sm text-blue-500 mr-4">
                        <Link_icon 
                            className="w-4 h-4 mr-1"
                        />
                        {t("visitSite")}
                    </a>
                ) : ""}
                
                {props.code !== '' ? (
                    <a href={props.code} target="blank" className="flex items-center text-sm text-blue-500">
                        <Link_icon 
                            className="w-4 h-4 mr-1"
                        />
                        {t("viewCode")}
                    </a>
                ) : ""}
            </div>
        </div>
    );
}

export default Project;