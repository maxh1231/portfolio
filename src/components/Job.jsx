const Job = ({ title, company, startDate, endDate, bullets }) => {
    return (
        <div className='flex flex-col min-h-[566px]'>
            <div className='my-6'>
                <h2 className='text-xl md:text-2xl text-blue-white'>
                    {title}
                    <span className='text-light-blue'> @ {company}</span>
                </h2>
                <p className='md:text-xl text-grey'>
                    {startDate} - {endDate}
                </p>
            </div>
            {bullets.map((item, i) => (
                <p className='md:text-xl text-grey mb-4' key={i}>
                    &#62; {item}
                </p>
            ))}
        </div>
    );
};

export default Job;
