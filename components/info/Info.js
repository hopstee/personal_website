const Info = (props) => {
    return (
        <div className="relative w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center p-2">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-xl">
                    {props.icon}
                </div>
                <div className="flex sm:block flex-col items-center sm:ml-2">
                    <p className="text-gray-700 dark:text-gray-200">
                        {props.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {props.value}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Info;