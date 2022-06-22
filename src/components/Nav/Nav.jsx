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
                        <a href="https://docs.google.com/document/d/1S9RU3scZyjFcD91g1vVpjavVcvp9GqvFuitpEzQ5CCA/edit" target="_blank">Resume</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Nav;