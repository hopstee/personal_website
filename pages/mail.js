import Head from 'next/head'
import Input from '../components/input/Input'

import emailValidator from '../utils/validators/emailValidator'
import nameValidator from '../utils/validators/nameValidator'
import messageValidator from '../utils/validators/messageValidator'

const updateValidationMessages = (toValidate) => {

    let el = document.getElementById(toValidate.field)
    let errorField = el.querySelector('.error-message')
    
    if(!toValidate.success) {
        errorField.innerHTML = toValidate.message
        return toValidate.success
    }

    errorField.innerHTML = ""
    return toValidate.success
}

const Mail = () => {
    const submitForm = async (e) => { 
        e.preventDefault()

        let name = e.target.name.value
        let email = e.target.email.value
        let message = e.target.message.value
        let dataIsValid = false;
        
        // check if all fields are valid
        dataIsValid = updateValidationMessages(nameValidator(name)) &&
                      updateValidationMessages(emailValidator(email)) &&
                      updateValidationMessages(messageValidator(message))


        if(dataIsValid) {
            const res = await fetch('/api/sendmail', {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        
            const result = await res.json()

            if(result.success) {
                e.target.reset()
    
                let submit_btn = document.getElementById('email_submit_btn');
                submit_btn.innerHTML = 'Email sent!'
                submit_btn.classList.add('success-bg-color')
    
                setTimeout(function () {
                    submit_btn.innerHTML = 'Send'
                    submit_btn.classList.remove('success-bg-color')
                }, 2000);
                
            } else if(!result.success) {
                let submit_btn = document.getElementById('email_submit_btn');
                submit_btn.innerHTML = 'Error'
                submit_btn.classList.add('error-bg-color')
    
                setTimeout(function () {
                    submit_btn.innerHTML = 'Send'
                    submit_btn.classList.remove('error-bg-color')
                }, 2000);
            }
        }
    }

    return (
        <>
            
            <Head>
                <title>Resume</title>
                <meta name="keywords" content="HTML, CSS, JavaScript, Send email"></meta>
                <meta name="description" content="Contact me if you would like to work with me, say Hi, or ask a question."></meta>
                <meta name="author" content="Eduard Krivovyashchuk"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full h-full md:h-screen">
                <div className="flex items-center w-full h-full">
                    <div className="w-full p-3 sm:p-6 md:p-0">
                        <div className="relative bg-white md:w-2/3 xl:w-1/3 rounded-xl mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={submitForm} className="p-2">
                                        <div className="w-full text-center mt-4 uppercase text-lg font-semibold main-text-color">
                                            Email me
                                        </div>
                                        <div>
                                            <Input 
                                                title="Name" 
                                                placeholder="Ivan Ivanov"
                                            />
                                            <Input 
                                                title="Email" 
                                                placeholder="your@email.com"
                                            />
                                            <Input 
                                                title="Message" 
                                                placeholder="I would like..."
                                                textarea={true} 
                                            />
                                        </div>
                                        <div className="mt-8 flex justify-end">
                                            <button type="submit" id="email_submit_btn" className="px-4 py-2 w-full md:w-auto main-btn-color rounded-lg focus:outline-none text-white transition-all duration-100">
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mail;
