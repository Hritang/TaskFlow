function Navbar({ darkMode, setDarkMode }) {

    return (

        <nav>

            <div className="navbar-content">

                <div>

                    <h1>📋 TaskFlow</h1>

                    <p>
                        Organize your work efficiently
                    </p>

                </div>

                <button
                    className="theme-toggle"
                    onClick={() => setDarkMode(!darkMode)}
                >

                    {darkMode ? "☀️" : "🌙"}

                </button>

            </div>

        </nav>

    );

}

export default Navbar;