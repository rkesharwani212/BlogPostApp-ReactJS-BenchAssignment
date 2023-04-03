import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <div className="col-md-12 bg-dark py-1">
            <nav className="navbar bg-dark navbar-dark">
                <Link to={"/"} className="navbar-brand ms-5">
                    Blog Post App
                </Link>
            </nav>
        </div>
      );
}

export default Navbar;