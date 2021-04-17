import Input from '../components/input/Input'

const Mail = () => {
    const submitForm = async (e) => { 
        e.preventDefault()
        
        let name = '';
        if(typeof(e.target.name) !== 'undefined') {
            name = e.target.name.value
        }
        
        let email = '';
        if(typeof(e.target.email) !== 'undefined') {
            email = e.target.email.value
        }
        
        let message = '';
        if(typeof(e.target.message) !== 'undefined') {
            message = e.target.message.value
        }

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
            }
        )
    
        const result = await res.json()

        let all_inputs = document.getElementsByClassName('input_error')
        for(let i = 0; i < all_inputs.length; i++) {
            all_inputs[i].querySelector('.error-message').innerHTML = ''
        }

        if(result.success) {
            e.target.reset()

            let submit_btn = document.getElementById('email_submit_btn');
            submit_btn.innerHTML = 'Email sent!'
            submit_btn.classList.add('success-bg-color')

            setTimeout(function () {
                submit_btn.innerHTML = 'Send'
                submit_btn.classList.remove('success-bg-color')
            }, 2000);
        }

        if(!result.success) {
            let el = document.getElementById(result.field)

            el.querySelector('.error-message').innerHTML = result.message
        }
    }

    return (
        <div className="w-full h-full md:h-screen">
            <div className="flex items-center w-full h-full">
                <div className="w-full p-3 sm:p-6 md:p-0">
                    <div className="relative bg-white md:w-2/3 lg:w-1/3 rounded-xl mx-auto">
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
    );
};

export default Mail;