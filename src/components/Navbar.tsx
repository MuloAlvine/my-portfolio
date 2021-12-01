import React from 'react'
import "../assets/css/main.css"

const Navbar = () => {
    return (
        <nav className="nav" id="nav">
                <div className="nav-center">
                {/* //<!-- nav header --> */}
                    <div className="nav-header">
                        {/* <!--<img src="./images/logo.svg" class="nav-logo" alt="nav logo" / --> */}
                        <h4>ElvisMulo</h4>
                        <button className="nav-btn" id="nav-btn">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    {/* <!-- nav-links --> */}
                    <ul className="nav-links">
                        <li>
                        <a href="index.html">home</a>
                        </li>
                        <li>
                        <a href="about.html">about</a>
                        </li>
                        <li>
                        <a href="projects.html">projects</a>
                        </li>
                        <li>
                        <a href="contact.html">contact</a>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar
