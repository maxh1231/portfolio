import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

const Sider = () => {
    return (
        <section className="footer fixed bottom-[210px] h-[200px]">
            <div className='flex flex-col'>
                <a href="https://github.com/maxh1231" target="_blank">
                    <img src={github} alt="github" className='social-left github w-[32px] h-[32px] mb-4' />
                </a>
                <a href="https://www.linkedin.com/in/max-humpherys-040822219/" target="_blank">
                    <img src={linkedin} alt="github" className='social-left github w-[32px] h-[32px] mb-4' />
                </a>
            </div>
            <a href="mailto: maxhumpherys@gmail.com">
                <p className="social text-lg text-grey ">maxhumpherys@gmail.com</p>
            </a>
        </section>
    )
}

export default Sider;
