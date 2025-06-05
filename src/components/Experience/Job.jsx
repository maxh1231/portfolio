const Job = ({ title, company, beginDate, endDate, bulletpoint }) => {
    return (
        <div className='ml-4'>
            <div>
                <h2 className='md:text-2xl text-blue-white'>
                    {title}
                    <span className='text-light-blue'>@ {company}</span>
                </h2>
            </div>
            <div className='mb-6'>
                <p className='md:text-xl text-grey'>
                    {beginDate} - {endDate}
                </p>
            </div>
            <div>
                {bulletpoint.map((item, i) => (
                    <p className='md:text-xl text-grey mt-4' key={i}>
                        &#62;{item}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Job;
