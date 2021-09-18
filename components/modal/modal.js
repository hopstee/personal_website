import CloseIcon from '../../assets/svg/close.svg'

function Modal( props ) {
    return (
        <div className="fixed top-0 left-0 w-full h-full backdrop-filter backdrop-blur-md backdrop-brightness-95 z-50 shadow-2xl">
            <div className="w-full h-full flex items-end md:items-center">
                <div className="card-wrapper p-3">
                    <div className="card sm:w-80 mx-auto dark:bg-gray-800 dark:border-gray-700">
                        <div className="card-header dark:border-gray-700 dark:text-gray-100 flex justify-between">
                            {props.header}
                            <CloseIcon className="w-6 h-6 cursor-pointer" onClick={props.onclick} />
                        </div>
                        <div className="card-body">
                            {props.body}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;