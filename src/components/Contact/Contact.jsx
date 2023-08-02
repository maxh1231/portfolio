import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const [view, setView] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const form = useRef();

    const sendEmail = (e) => {

        emailjs.sendForm('service_zirnhu8', 'template_z5s2y9b', form.current, 'user_MiPMA7RruofT1yJEswkdw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });

        setView(true);
    };

    if (view) {
        return (
            <div className="flex flex-col justify-center items-center h-screen text-4xl text-grey">
                <h3>Thank you! I will be in contact.</h3>
            </div>
        )
    }

    return (
        <section id="contact" className="mt-72 w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] mx-auto pb-36 z-[100]">
            <div className="hidden sm:inline text-2xl md:text-4xl text-left mb-12">
                <h3 className='text-blue-white'><span className="text-lg md:text-xl text-light-blue">04. </span>Contact <span className="relative hidden sm:inline top-6 left-4 text-dark-blue border-t border-grey">___________________</span></h3>
            </div>

            <div className="inline sm:hidden text-2xl md:text-4xl text-center mb-12">
                <h3 className='text-blue-white'><span className="text-lg md:text-xl text-light-blue">03. </span>Contact <span className="relative hidden sm:inline top-6 left-4 text-dark-blue border-t border-grey">___________________</span></h3>
            </div>
            <div className='mt-24'>
                <p className="text-2xl text-grey">Let's collaborate, my inbox is always open.</p>
            </div>
            <div>
                <form ref={form} onSubmit={handleSubmit(sendEmail)} className='flex flex-col'>
                    <div className='mt-8'>
                        <input
                            {...register('from_name', { required: true })}
                            type="text"
                            placeholder='Name'
                            className='sm:w-1/2 pl-2 h-[35px] text-grey bg-light-grey outline-none border-2 border-grey rounded'>
                        </input>
                        {errors.from_name && <span className="block text-grey">This field is required.</span>}
                    </div>
                    <div className='mt-2'>
                        <input
                            {...register('from_email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                            type='email'
                            placeholder='Email'
                            className='sm:w-1/2 pl-2 h-[35px] text-grey bg-light-grey outline-none border-2 border-grey rounded'>
                        </input>
                        {errors.from_email && <span className="block text-grey">Must be a valid email address.</span>}
                    </div>
                    <div className='mt-4'>
                        <textarea
                            {...register('message', { required: true })}
                            placeholder='Message'
                            className='sm:w-1/2 h-[80px] pl-2 text-grey bg-light-grey outline-none border-2 border-grey rounded'></textarea>
                        {errors.message && <span className="block text-grey">Please provide a message.</span>}
                    </div>
                    <div>
                        <input type="submit" value="Submit" className="my-12 text-2xl px-2 py-2 text-light-blue border-2 border-light-blue rounded-md hover:text-light-blue hover:bg-light-grey hover:cursor-pointer"></input>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;