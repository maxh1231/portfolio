const Nav = () => {
    return (
        <header className="flex justify-between">
            <div>
                <span className="text-4xl">Max Humpherys</span>
            </div>

            <div>
                <ul className="flex" >
                    <li>
                        <a href="#about" className="text-2xl">About</a>
                    </li>
                    <li>
                        <a href="#exp" className="text-2xl">Experience</a>
                    </li>
                    <li>
                        <a href="#projects" className="text-2xl">Projects</a>
                    </li>
                    <li>
                        <a href="https://docs.google.com/document/d/1S9RU3scZyjFcD91g1vVpjavVcvp9GqvFuitpEzQ5CCA/edit" target="_blank" className="text-2xl">Resume</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Nav;