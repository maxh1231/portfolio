import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

const Sider = () => {
    return (
        <section className="footer fixed bottom-[210px] h-[200px]">
            <div className='flex flex-col'>
                <a href="https://github.com/maxh1231" target="_blank" className='w-[32px] h-[32px] mb-4'>
                    <img src={github} alt="github" className='social-left github ' />
                </a>
                <a href="https://www.linkedin.com/in/max-humpherys-040822219/" target="_blank" className='w-[32px] h-[32px] mb-4'>
                    <img src={linkedin} alt="github" className='social-left github' />
                </a>
            </div>
            <a href="mailto: maxhumpherys@gmail.com" className='social'>
                <span className=" text-lg text-grey ">maxhumpherys@gmail.com</span>
            </a>
        </section>
    )
}

export default Sider;
