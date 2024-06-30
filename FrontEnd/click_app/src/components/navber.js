import React from "react";
import { Link } from "react-router-dom";
import '../Designs/navber.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li ><Link to="/"><img src="/Practicum.png" alt="Logo" /></Link></li>
                <li className="navItem"><Link to="/add-list">Add a list</Link></li>
                <li className="navItem"><Link to="/about">About</Link></li>
                {/* <li className="navItem"><Link to="/">Search by string</Link></li> */}
                <li className="navItem"><Link to="/">Search</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
