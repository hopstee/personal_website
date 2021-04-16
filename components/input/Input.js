function Input(props) {
    let type;
    if(props.textarea) {
        type = <textarea className="w-full py-2 px-4 mt-2 border rounded-md main-border-color" onChange={props.onchange}
        name={props.title.toLowerCase()} placeholder={props.title}></textarea>
    } else {
        type = <input className="w-full py-2 px-4 mt-2 border rounded-md main-border-color" onChange={props.onchange}
        name={props.title.toLowerCase()} placeholder={props.title} />;
    }

    return (
        <div className="mt-4">
            <span className="mt-4">
                {props.title}
            </span>
            {type}
        </div>
    );
};

export default Input;