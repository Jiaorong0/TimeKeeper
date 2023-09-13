import React from "react";

export default function Register(){
    return(
        <div>

<form action="" method="post" className="login-container">
            <h2 className="login">Sign up</h2>
                <div class="container">
                <label className="login-email">
                        <b>Username</b>
                        <input className="input-email" type="text" placeholder="Enter username" />
                    </label>
                    <label className="login-email">
                        <b>Email</b>
                        <input className="input-email" type="email" placeholder="Enter email" />
                    </label>

                    <label className="login-password">
                        <b>Password</b>
                        <input className="input-password" type="password" placeholder="Enter password" />
                    </label>
                    
                    <button className="login-submit" type="submit">Sign up</button>
                    
                </div>
                
            </form>
        </div>
    )
}