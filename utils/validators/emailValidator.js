const emailValidator = (email) => {
    const email_regexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if(email == '') {
        return { 
            success: false, 
            field: 'email',
            message: 'Email is required'
        }
    }

    if(!email_regexp.test(email)) {
        return { 
            success: false, 
            field: 'email',
            message: 'Please enter a valid email'
        }
    }

    return { 
        success: true,
        field: 'email'
    }
}

export default emailValidator;