import React from "react"

export default function Header(){
    return(
        <nav className="nav-bar-out">
            <div className="nav-bar-in">
                <a href="#"><h1 className="title current-page">Timekeeper</h1></a>
                <a href="#" className="left current-page">Home</a>
                
                <a href="#" >Login</a>
                <a href="#">Register</a>   
            </div>
        </nav>  
    )
}