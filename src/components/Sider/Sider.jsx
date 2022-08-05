import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

const Sider = () => {
    return (
        <section className="footer fixed bottom-[210px] h-[200px]">
            <img src={github} alt="github" className='social-left github w-[32px] h-[32px]' />
            <p className="social text-lg text-grey ">maxhumpherys@gmail.com</p>
        </section>
    )
}

export default Sider;
