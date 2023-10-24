
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            if (response.data.success) {
                console.log('Login successful');
                navigate('/'); // Redirect to main page
            } else {
                console.error('Login failed:', response.data.error);
            }
        } catch (error) {
            console.error('API call failed:', error);
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit} className="login-container">
                <h2 className="login">Login</h2>
                <div class="container">
                    <label className="login-email">
                        <b>Email</b>
                        <input className="input-email"
                               type="email"
                               placeholder="Enter email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label className="login-password">
                        <b>Password</b>
                        <input className="input-password"
                               type="password"
                               placeholder="Enter password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <label className="login-remeber">
                        Remember me
                        <input type="checkbox"/>
                    </label>
                    <span className="password">Forgot <a href="#">password?</a></span>
                    <button className="login-submit" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}