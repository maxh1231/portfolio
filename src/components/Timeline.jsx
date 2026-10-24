// A to-scale chart of each role's span, from the first role to today.
const now = new Date();
const today = now.getFullYear() + now.getMonth() / 12;

const Timeline = ({ jobs }) => {
    const from = Math.floor(Math.min(...jobs.map((job) => job.start)));
    const span = today - from;
    const at = (year) => `${((year - from) / span) * 100}%`;
    const years = Array.from(
        { length: Math.floor(today) - from + 1 },
        (_, i) => from + i
    );

    return (
        <figure data-reveal>
            <div className='grid gap-5' aria-hidden='true'>
                {jobs.map((job) => {
                    const current = job.end === undefined;
                    return (
                        <div key={job.company}>
                            <p
                                className='relative mb-2 w-max text-small'
                                style={{
                                    left: `min(${at(job.start)}, calc(100% - 9em))`,
                                }}
                            >
                                {job.company}
                            </p>
                            <div className='relative h-4'>
                                <div
                                    className={`absolute inset-y-0 ${
                                        current ? 'bg-paper' : 'bg-paper/45'
                                    }`}
                                    style={{
                                        left: at(job.start),
                                        right: current
                                            ? 0
                                            : `calc(100% - ${at(job.end)})`,
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
                <div className='relative h-5 text-small text-paper/80'>
                    {years.map((year) => (
                        <span
                            key={year}
                            className='absolute top-0'
                            style={{
                                left: `min(${at(year)}, calc(100% - 3em))`,
                            }}
                        >
                            {year}
                        </span>
                    ))}
                </div>
            </div>
            <figcaption className='mt-4 text-small text-paper/80'>
                Roles to scale, {from} to today. Lighter bars have ended.
            </figcaption>
        </figure>
    );
};

export default Timeline;
