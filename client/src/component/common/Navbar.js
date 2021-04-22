import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = ({icon,title}) => {
  return (  
        <div>
            <div className="navbar bg-primary">
            <h1>
                <i className={icon}>   {title}</i>
            </h1>
                <ul>
                    <li><Link to="/" className="btn-btn primary">Home</Link></li>
                    <li><Link to="About" className="btn-btn primary">About</Link></li>
                    <li><Link to="Register" className="btn-btn primary">Register</Link></li>
                    <li><Link to="Login" className="btn-btn primary">Login</Link></li>
                </ul>
            </div>
        </div>
    )
    
}

Navbar.defaultProps = {
    title: "Contact Keeper",
    icon:"fas fa-id-card-alt"
}


export default Navbar;
