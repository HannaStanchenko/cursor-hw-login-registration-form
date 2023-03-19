import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pageRoutes } from '../../routes/Routes';
import { validation } from '../../validationHelper';
import padlock from '../padlock.png';
import styles from '../SignInUp.module.css';


const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    let [initialEmail, setInitialEmail] = useState("");
    let [initialPassword, setInitialPassword] = useState("");
    
    const [formValues, setFormValues] = useState([]);

    const submitForm = () => {
        setFormValues(() => [initialEmail, initialPassword]);
        
    };
    useEffect(() => {
        localStorage.setItem("formValues", JSON.stringify(formValues));
    }, [formValues]);
    
    
    return (
        <form onSubmit={handleSubmit} className={styles["signin-form"]}>
            <div className={styles["logo-wrapper"]}>
                <div className={styles.logo}>
                    <img src={padlock} alt="logo" width={20} />
                </div>
                <p>Sign up</p>
            </div>

            <div className={styles["names-inputs"]}>
                <input value={firstName} onChange={(e) => {
                    setFirstName(e.target.value);
                    validation(e)
                }} type="text" placeholder="First Name*" required />

                <input value={lastName} onChange={(e) => {
                    setLastName(e.target.value);
                    validation(e)
                }} type="text" placeholder="Last Name*" required />
            </div>

            <input value={email} onChange={(e) => {
                setEmail(e.target.value);
                validation(e)
                setInitialEmail(initialEmail = e.target.value)
            }}  type="email" placeholder="Email Address*" required/>

            <input value={password} onChange={(e) => {
                setPassword(e.target.value)
                validation(e)
                setInitialPassword(initialPassword = e.target.value)
                }} type="password" placeholder="Password*" required/>

            <div className={styles.checkbox}>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" >I want to receive inspiration, marketing promotionsand updates via email</label>
            </div>

            <button onClick={submitForm} id="btn-submit" type="submit">SIGN UP</button>

            <div className={styles["btn-links"]}>
                <button onClick={() => navigate(pageRoutes.signIn.path)}>Already have an account? Sign In</button>
            </div>
            
        </form>
    );
};

export default SignUp;