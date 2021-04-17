const Level = (props) => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between flex-wrap w-full w-52 text-center lg:text-left text-left p-2">
            <div className="text-md text-gray-900 font-semibold">
                {props.title}
            </div>
            <div className="text-sm text-gray-500">
                {props.level}
            </div>
        </div>
    );
};

export default Level;