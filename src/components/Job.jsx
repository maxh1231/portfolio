const Job = ({ title, company, startDate, endDate, summary, highlights, stack }) => {
    return (
        <article className='grid gap-8 lg:grid-cols-12 lg:gap-x-10'>
            <div className='lg:sticky lg:top-12 lg:col-span-4 lg:self-start' data-reveal>
                <h3 className='heading text-head'>{company}</h3>
                <p className='mt-3 text-lead leading-snug'>{title}</p>
                <p className='mt-1 text-small text-paper/80'>
                    {startDate} to {endDate}
                </p>
            </div>
            <div className='lg:col-span-7 lg:col-start-6 lg:pt-3'>
                <p
                    className='max-w-[44ch] text-lead leading-snug'
                    data-reveal
                    style={{ '--delay': '70ms' }}
                >
                    {summary}
                </p>
                <ul
                    className='mt-6 grid max-w-[60ch] list-[square] gap-3 pl-5 marker:text-paper/60'
                    data-reveal
                    style={{ '--delay': '140ms' }}
                >
                    {highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <ul
                    aria-label={`${company} tools and skills`}
                    className='mt-6 flex flex-wrap gap-2'
                    data-reveal
                    style={{ '--delay': '210ms' }}
                >
                    {stack.map((item) => (
                        <li
                            key={item}
                            className='bg-moss px-3 py-1 text-small text-paper'
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default Job;
