import Input from '../components/input/Input'
import { useState } from 'react'

function Mail() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')

        let data = {
            name,
            email,
            subject,
            message
        }

        fetch('/sendmail', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')

            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setSubject('')
                setMessage('')
            }
        })
    }

    return (
        <div className="w-full h-full md:h-screen">
            <div className="flex items-center w-full h-full">
                <div className="w-full p-3 sm:p-6 md:p-0">
                    <div className="relative bg-white md:w-2/3 lg:w-1/3 rounded-xl p-3 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="w-full text-center mt-4 uppercase text-lg font-semibold main-text-color">
                                        Email me
                                    </div>
                                    <div>
                                        <Input title="Name" onchange={(e) => {setName(e.target.value)}} />
                                        <Input title="Email" onchange={(e) => {setEmail(e.target.value)}} />
                                        <Input title="Subject" onchange={(e) => {setSubject(e.target.value)}} />
                                        <Input title="Message" onchange={(e) => {setMessage(e.target.value)}} textarea={true} />
                                    </div>
                                    <div className="mt-8 flex justify-end">
                                        <button type="submit" className="px-4 py-2 w-full md:w-auto main-btn-color rounded-lg focus:outline-none text-white"
                                            onClick={(e)=>{handleSubmit(e)}}>
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