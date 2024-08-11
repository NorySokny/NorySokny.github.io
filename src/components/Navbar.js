import { Link } from "react-router-dom"
import "../assets/css/navbar.css"

const Navbar = () => {

    var classLink = "nav-link";
    return (
        <>
        <nav className="narbar">
            <dir className="brand" >
                <a href="">
                    <img src="" alt="" />
                </a>
            </dir>
            <ul className="nav">
                <li className="nav-item home">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item blogs">
                    <Link to="/blogs" className={`nav-link ${classLink}`}>Blogs</Link>
                </li>
                <li className="nav-item contact">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/account/login" className="nav-link">Login</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Navbar;