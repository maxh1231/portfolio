import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

const Sider = () => {
    return (
        <section className="footer fixed bottom-[210px] h-[200px]">
            <div className='flex flex-col'>
                <img src={github} alt="github" className='social-left github w-[32px] h-[32px] mb-4' />
                <img src={linkedin} alt="github" className='social-left github w-[32px] h-[32px] mb-4' />
            </div>
            <p className="social text-lg text-grey ">maxhumpherys@gmail.com</p>
        </section>
    )
}

export default Sider;
