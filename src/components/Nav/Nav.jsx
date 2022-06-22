const Nav = () => {
    return (
        <header className="flex justify-between">
            <div>
                <span>Max Humpherys</span>
            </div>

            <div>
                <ul className="flex" >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#exp">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Nav;