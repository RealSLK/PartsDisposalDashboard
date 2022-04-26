import React, { useState } from 'react';
import Navbar from './Navbar';
import App from './App';
import Axios from 'axios';

const Login = () => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [user, setUser] = useState();
    const [success, setSuccess] = useState(false);
    const [loginStatus, setLoginStatus] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        Axios.post("https://www.waidler.co.za/collectionPortal/api/post/login.php", {
            userName: userName,
            userPassword: userPassword,
        }).then((response) => {
            console.log(response.data);
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setSuccess(true);
            }
        });
    };


    return ( 
        <>
        {success ? (
            <App />
                ) : (
            <div className="login">
            <Navbar />
            <div className="loginForm">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>Username:</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required/>
                <label>Password:</label>
                <input type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} required/>
                    <div>
                    <button className="btnLogin">Login</button>
                    </div>
            </form>
            <h5>{loginStatus}</h5>
            </div>
            </div>
            )}
        </>
    )
};

export default Login;