import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pageRoutes } from '../../routes/Routes';
import padlock from '../padlock.png';
import styles from '../SignInUp.module.css';

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <form onSubmit={handleSubmit} className={styles["signin-form"]}>
            <div className={styles["logo-wrapper"]}>
                <div className={styles.logo}>
                    <img src={padlock} alt="logo" width={20} />
                </div>
                <p>Sign in</p>
            </div>

            <input onChange={(e) => setEmail(e.target.value)} id="email" value={email}  type="email" placeholder="Email Address*" />

            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password*" />

            <div className={styles.checkbox}>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" >Remember me</label>
            </div>

            <button type="submit">SIGN IN</button>
            <div className={styles["btn-links"]}>
                <button onClick={() => alert("Check your email")}>Forgot password?</button>
                <button onClick={() => navigate(pageRoutes.signUp.path)}>Don't have an account? Sign Up</button>
            </div>
            
        </form>
    );
};

export default SignIn;