const nameValidator = (name) => {
    const name_regexp = /^([a-zA-Z]+?\s?)+$/

    if(name == '') {
        return { 
            success: false, 
            field: 'name',
            message: 'Name is required'
        }
    }

    if(!name_regexp.test(name)) {
        return { 
            success: false, 
            field: 'name',
            message: 'Please enter a valid name'
        }
    }

    return { 
        success: true,
        field: 'name'
    }
}

export default nameValidator;