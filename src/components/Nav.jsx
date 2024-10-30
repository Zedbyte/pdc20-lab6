import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">React JS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profile" className="nav-link" activeClassName="active">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text text-white-50">
                        {/* Settings */}
                    </span>
                </div>
            </div>
        </nav>                  
    );
}

export default Nav;
