import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { links } from '../constants';

const fieldClass = (invalid) =>
    `mt-2 block w-full bg-paper px-4 py-3 text-ink outline-none focus-visible:outline-none focus:ring-2 focus:ring-inset ${
        invalid ? 'ring-2 ring-inset ring-error' : 'focus:ring-moss'
    }`;

const FieldError = ({ id, show, children }) =>
    show ? (
        <p id={id} className='mt-2 text-small text-error'>
            {children}
        </p>
    ) : null;

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
            aria-labelledby='contact-title'
            className='grid gap-16 bg-sand-deep px-gutter py-section lg:grid-cols-12 lg:gap-x-10'
        >
            <div className='lg:col-span-5'>
                <h2
                    id='contact-title'
                    className='heading text-head'
                    data-reveal
                >
                    Contact
                </h2>
                <p className='mt-6 text-lead leading-snug' data-reveal>
                    <span className='block text-muted'>
                        Let&apos;s collaborate,
                    </span>
                    my inbox is always open.
                </p>
                <dl className='mt-12 grid gap-4' data-reveal>
                    <div>
                        <dt className='text-small text-muted'>Email</dt>
                        <dd>
                            <a href={`mailto:${links.email}`} className='link'>
                                {links.email}
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt className='text-small text-muted'>GitHub</dt>
                        <dd>
                            <a
                                href={links.github}
                                target='_blank'
                                rel='noreferrer'
                                className='link'
                            >
                                github.com/maxh1231
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt className='text-small text-muted'>LinkedIn</dt>
                        <dd>
                            <a
                                href={links.linkedin}
                                target='_blank'
                                rel='noreferrer'
                                className='link'
                            >
                                linkedin.com/in/max-humpherys
                            </a>
                        </dd>
                    </div>
                </dl>
            </div>

            <div className='lg:col-span-6 lg:col-start-7' aria-live='polite'>
                {view ? (
                    <p className='heading text-head'>
                        Thank you! I will be in contact.
                    </p>
                ) : (
                    <form
                        ref={form}
                        onSubmit={handleSubmit(sendEmail)}
                        noValidate
                        className='grid gap-6'
                    >
                        <label className='block'>
                            Name
                            <input
                                {...register('from_name', { required: true })}
                                type='text'
                                autoComplete='name'
                                aria-invalid={!!errors.from_name}
                                aria-describedby='from_name-error'
                                className={fieldClass(errors.from_name)}
                            />
                            <FieldError
                                id='from_name-error'
                                show={errors.from_name}
                            >
                                Please enter your name.
                            </FieldError>
                        </label>
                        <label className='block'>
                            Email
                            <input
                                {...register('from_email', {
                                    required: true,
                                    pattern: /\S+@\S+\.\S+/,
                                })}
                                type='text'
                                inputMode='email'
                                autoComplete='email'
                                aria-invalid={!!errors.from_email}
                                aria-describedby='from_email-error'
                                className={fieldClass(errors.from_email)}
                            />
                            <FieldError
                                id='from_email-error'
                                show={errors.from_email}
                            >
                                Please enter a valid email address.
                            </FieldError>
                        </label>
                        <label className='block'>
                            Message
                            <textarea
                                {...register('message', { required: true })}
                                rows={6}
                                aria-invalid={!!errors.message}
                                aria-describedby='message-error'
                                className={`${fieldClass(errors.message)} resize-y`}
                            />
                            <FieldError
                                id='message-error'
                                show={errors.message}
                            >
                                Please write a message.
                            </FieldError>
                        </label>
                        <div>
                            <button
                                type='submit'
                                className='button bg-moss px-8 py-3 text-paper'
                            >
                                Send message
                            </button>
                            <p className='mt-4 text-small text-muted'>
                                Your message goes straight to my inbox.
                            </p>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
