import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const [view, setView] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });
    const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_ID,
            'template_z5s2y9b',
            form.current,
            import.meta.env.VITE_EMAIL_KEY
        );
        setView(true);
    };

    return (
        <section
            id='contact'
            className='mt-72 px-4 xs:px-8 mx-auto max-w-[800px] min-h-[465px] mb-24 xs:mb-0'
        >
            {view ? (
                <div className='text-3xl md:text-4xl text-center text-blue-white'>
                    <h3>Thank you! I will be in contact.</h3>
                </div>
            ) : (
                <>
                    <h3 className='text-3xl md:text-4xl text-left text-blue-white'>
                        <span className='text-lg md:text-xl text-light-blue'>
                            04.{' '}
                        </span>
                        Contact
                        <span className='relative hidden sm:inline top-6 left-4 text-dark-blue border-t border-grey'>
                            ___________________
                        </span>
                    </h3>
                    <p className='text-xl text-grey my-6'>
                        Let's collaborate, my inbox is always open.
                    </p>
                    <form
                        ref={form}
                        onSubmit={handleSubmit(sendEmail)}
                        className='flex flex-col'
                    >
                        <div className=''>
                            <input
                                {...register('from_name', { required: true })}
                                type='text'
                                placeholder='Name'
                                className={`h-[40px] p-2 text-blue-white text-lg bg-light-grey outline-none border-2 ${errors.from_name ? 'border-rose-800' : 'border-grey'} rounded w-full`}
                            ></input>
                        </div>
                        <div className='my-3'>
                            <input
                                {...register('from_email', {
                                    required: true,
                                    pattern: /\S+@\S+\.\S+/,
                                })}
                                type='text'
                                placeholder='Email'
                                className={`h-[40px] p-2 text-blue-white text-lg bg-light-grey outline-none border-2 border-grey rounded ${errors.from_email ? 'border-rose-800' : 'border-grey'} w-full`}
                            ></input>
                        </div>
                        <div className='mb-3'>
                            <textarea
                                {...register('message', { required: true })}
                                placeholder='Message'
                                className={`h-[160px] p-2 text-blue-white text-lg bg-light-grey outline-none border-2 border-grey rounded ${errors.message ? 'border-rose-800' : 'border-grey'} w-full`}
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            className='max-w-[250px] text-xl midsm:text-2xl px-8 py-2 text-light-blue border-2 border-light-blue rounded-md hover:bg-light-grey hover:cursor-pointer'
                        >
                            Submit
                        </button>
                    </form>
                </>
            )}
        </section>
    );
};

export default Contact;
