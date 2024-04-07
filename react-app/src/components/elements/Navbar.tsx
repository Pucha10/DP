import "./Navbar.css"; // Importuj plik CSS
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div id="topLabel">
            <Link to="/">Home</Link>
            <Link to="/AboutMe">About</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    );
}

export default Navbar;
