import Navbar from "./components/elements/Navbar";
import "./App.css";
function App() {
    return (
        <div>
            <Navbar />
            <body>
                <div className="container">
                    <div className="left-column">
                        <h1>Hi there,</h1>
                        <h1>
                            I'm <span className="name">Dawid Puszka</span>
                        </h1>
                        <h2>Programmer | Game Enthusiast</h2>
                        <div className="social-media">
                            <a href="https://github.com/Pucha10">
                                <img src="/images/GitHub.png" alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/dawid-puszka-a208a7281/">
                                <img
                                    src="/images/LinkedIn.png"
                                    alt="LinkedIn"
                                />
                            </a>
                            <a href="https://twitter.com/Dawid1003">
                                <img src="/images/X.png" alt="X" />
                            </a>
                        </div>
                    </div>
                    <div className="right-column">
                        <img src="/images/me.png" alt="Me" />
                    </div>
                </div>
            </body>
        </div>
    );
}

export default App;
