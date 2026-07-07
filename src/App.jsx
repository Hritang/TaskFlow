import "./App.css";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Board from "./components/Board";

function App() {

    const [darkMode, setDarkMode] = useState(() => {

        return localStorage.getItem("theme") === "dark";

    });

    useEffect(() => {

        if (darkMode) {

            document.body.classList.add("dark");

            localStorage.setItem("theme", "dark");

        } else {

            document.body.classList.remove("dark");

            localStorage.setItem("theme", "light");

        }

    }, [darkMode]);

    return (

        <>

            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <Board />

        </>

    );

}

export default App;