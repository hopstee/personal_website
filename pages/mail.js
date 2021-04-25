import Head from 'next/head'
import Input from '../components/input/Input'

import emailValidator from '../utils/validators/emailValidator'
import nameValidator from '../utils/validators/nameValidator'
import messageValidator from '../utils/validators/messageValidator'

import SettingsIcon from '../assets/svg/settings.svg';

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
        let dataIsValid = false

        let submit_btn = document.getElementById('email_submit_btn')
        let btn_text = submit_btn.querySelector('.btn-text')
        
        // check if all fields are valid
        dataIsValid = updateValidationMessages(nameValidator(name)) &&
                      updateValidationMessages(emailValidator(email)) &&
                      updateValidationMessages(messageValidator(message))


        if(dataIsValid) {
            submit_btn.classList.add('btn-loader')
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

            submit_btn.classList.remove('btn-loader')

            if(result.success) {
                e.target.reset()
    
                btn_text.innerHTML = 'Email sent!'
                submit_btn.classList.add('success-bg-color')
                // submit_btn.classList.add('dark:bg-green-700')
                // submit_btn.classList.add('dark:hover:bg-green-700')
    
                setTimeout(function () {
                    submit_btn.classList.remove('success-bg-color')
                    // submit_btn.classList.remove('dark:bg-green-700')
                    // submit_btn.classList.remove('dark:hover:bg-green-700')
                    btn_text.innerHTML = 'Send'
                }, 2000);
                
            } else if(!result.success) {
                btn_text.innerHTML = 'Error'
                submit_btn.classList.add('error-bg-color')
                submit_btn.classList.add('dark:bg-red-700')
                submit_btn.classList.add('dark:hover:bg-red-800')
    
                setTimeout(function () {
                    submit_btn.classList.remove('error-bg-color')
                    submit_btn.classList.remove('dark:bg-red-700')
                    submit_btn.classList.remove('dark:hover:bg-red-800')
                    btn_text.innerHTML = 'Send'
                }, 2000);
            }
        }
    }

    return (
        <>
            
            <Head>
                <html lang="en" />
                <title>Send Email</title>
                <meta name="keywords" content="HTML, CSS, JavaScript, resume developing, experience, github, developer, knowledge, projects"></meta>
                <meta name="description" content="Contact me if you would like to work with me, say Hi, or ask a question."></meta>
                <meta name="author" content="Eduard Krivovyashchuk | Эдуард Кривовящук"></meta>
                <meta name="twitter:card" content="summary" ></meta>
                <meta name="twitter:description" content="Contact me if you would like to work with me, say Hi, or ask a question."></meta> 
                <meta name="twitter:title" content="Send Email" ></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="canonical" href="https://edkr.site"></link>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full h-full md:h-screen">
                <div className="flex items-center w-full h-full">
                    <div className="w-full p-3 sm:p-6 md:p-0">
                        <div className="relative bg-white md:w-2/3 xl:w-1/3 rounded-xl mx-auto">
                            <div className="card dark:bg-gray-800 dark:border-gray-700">
                                <div className="card-body">
                                    <form onSubmit={submitForm} className="p-2">
                                        <h1 className="w-full text-center mt-4 uppercase text-lg font-semibold main-text-color">
                                            Email me
                                        </h1>
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
                                            <button type="submit" id="email_submit_btn" className="relative px-4 py-2 w-full md:w-auto bg-blue-500 hover:bg-blue-600 rounded-lg focus:outline-none text-gray-100 transition-all duration-100">
                                                <span className="hidden btn-icon absolute top-0 left-0 rounded-lg flex items-center justify-center w-full h-full bg-blue-500 hover:bg-blue-600">
                                                    <SettingsIcon className="w-6 h-6 animate-spin text-gray-100" />
                                                </span>
                                                <span className="btn-text">
                                                    Send
                                                </span>
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
