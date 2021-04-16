const Experience = (props) => {
    return (
        // <div className="flex text-center md:text-left py-1 px-2 rounded-md border-2 border-gray-200 items-center cursor-pointer">
        <div className="items-center text-left p-2">
            <div className="flex flex-col md:flex-row justify-between w-full">
                <div>
                    <p className="text-md font-semibold main-text-color">
                        {props.position}
                    </p>
                    <p className="text-sm text-gray-500">
                        {props.company}, {props.city}
                    </p>
                </div>
                <div className="text-sm text-gray-500">
                    {props.date.from} - {props.date.to}
                </div>
            </div>
            <div className="mt-2">
                {props.desc}
            </div>
        </div>
    );
};

export default Experience;