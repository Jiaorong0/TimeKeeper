import React , { useState, useEffect  } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const fetchUsers = () => {
        axios.get('http://localhost:5000/users')
            .then(response => {
                setUsers(response.data.users);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }

    useEffect(() => {
        // Fetch all users when the component mounts
        fetchUsers();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form behavior

        // Send the data to your backend
        try {
            const response = await axios.post('http://localhost:5000/register', {
                username,
                email,
                password
            });

            if (response.data.success) {
                console.log('User registered successfully');
                navigate('/'); // Redirect to main page
                // Fetch users again to update the list in real-time
                fetchUsers();

                // Optionally, redirect the user to a login page or show a success message.
            } else {
                console.error('Error registering the user:', response.data.error);
            }
        } catch (error) {
            console.error('API call failed:', error);
        }
    };

    return(
        <div>

            <form action="" method="post" className="login-container" onSubmit={handleSubmit}>
                <h2 className="login">Sign up</h2>
                    <div className="container">
                        <label className="login-email">
                                <b>Username</b>
                                <input className="input-email"
                                       type="text"
                                       placeholder="Enter username"
                                       value={username}
                                       onChange={(e) => setUsername(e.target.value)}
                                />
                        </label>
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

                            <button className="login-submit" type="submit">
                                Sign up
                            </button>
                        <tbody>
                        {users.map(user => (
                            <tr key={user.username}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))}
                        </tbody>
                    </div>
            </form>
        </div>
    )
}