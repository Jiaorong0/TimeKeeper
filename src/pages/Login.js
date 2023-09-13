import React from "react";

export default function Login(){
    return(
        <div>
            
            <form action="" method="post" className="login-container">
            <h2 className="login">Login</h2>
                <div class="container">
                    <label className="login-email">
                        <b>Email</b>
                        <input className="input-email" type="email" placeholder="Enter email" />
                    </label>

                    <label className="login-password">
                        <b>Password</b>
                        <input className="input-password" type="password" placeholder="Enter password" />
                    </label>
                    <label className="login-remeber">
                        Remember me 
                        <input type="checkbox" checked="checked" />
                    </label> 
                    <span className="password">Forgot <a href="#">password?</a></span>
                    <button className="login-submit" type="submit">Login</button>
                    
                </div>
                
            </form>
        </div>
    )
}