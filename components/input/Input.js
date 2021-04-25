function Input(props) {
    let type;
    if(props.textarea) {
        type = <textarea className="w-full py-2 px-4 mt-2 border rounded-md main-border-color dark:border-gray-700 dark:focus:border-blue-500 dark:bg-gray-800 transition-all duration-100 input" 
            onChange={props.onchange} name={props.title.toLowerCase()} placeholder={props.placeholder}></textarea>
    } else {
        type = <input className="w-full py-2 px-4 mt-2 border rounded-md main-border-color dark:border-gray-700 dark:focus:border-blue-500 dark:bg-gray-800 transition-all duration-100 input" 
            onChange={props.onchange} name={props.title.toLowerCase()} placeholder={props.placeholder} autoComplete="off"/>;
    }

    return (
        <div className="mt-4 input_error" id={props.title.toLowerCase()}>
            <span className="mt-4">
                {props.title}
            </span>
            {type}
            <div className="pt-2 pl-2 text-sm text-red-400 error-message"></div>
        </div>
    );
};

export default Input;