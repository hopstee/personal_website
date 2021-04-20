const messageValidator = (message) => {
    if(message == '') {
        return { 
            success: false, 
            field: 'message',
            message: 'Message is required'
        }
    }

    return { 
        success: true,
        field: 'message'
    }
}

export default messageValidator;