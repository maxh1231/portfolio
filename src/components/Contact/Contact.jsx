const Contact = () => {
    return (
        <section id="contact" className="mt-72 w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] mx-auto pb-36">
            <div className="text-4xl text-left mb-12">
                <h3 className='text-blue-white'><span className="text-xl text-light-blue">04. </span>Contact</h3>
            </div>
            <div>
                <p className="text-2xl text-grey">Let's collaborate, my inbox is always open.</p>
            </div>
            <div>
                <button className="my-12 text-2xl px-2 py-2 text-light-blue border-2 border-light-blue rounded-md hover:bg-light-grey">
                    Email
                </button>
            </div>
        </section>
    )
}

export default Contact;