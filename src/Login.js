import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import App from './App';
import Axios from 'axios';

const Login = () => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [loginStatus, setLoginStatus] = useState('');

    useEffect(() => {
        if(!localStorage.getItem('token')){
            setSuccess(false);
        } else {
            setSuccess(true);
        }
      }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        Axios.post("https://waidlerdev.com/partsDisposalBackend/api/post/login.php", {
            userName: userName,
            userPassword: userPassword,
        }).then((response) => {
            if (response.data === "Incorrect") {
                setLoginStatus("User authentication failed. \n Please try again.")
            } else {
                setSuccess(true);
                console.log(response.data);
                localStorage.setItem('token', JSON.stringify(response.data));
            }
        }).catch((err) => { 
            console.log(err)
        });;
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
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required autoComplete="username"/>
                <label>Password:</label>
                <input type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} required autoComplete="current-password"/>
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