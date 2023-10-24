import React from "react"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <nav className="nav-bar-out">
            <div className="nav-bar-in">
                <Link to="/Preview"><h1 className="title current-page">Timekeeper</h1></Link>
                <Link to="/" className="left current-page">Home</Link>
                <Link to="/Login" >Login</Link>
                <Link to="/Register">Register</Link>
            </div>
        </nav>  
    )
}