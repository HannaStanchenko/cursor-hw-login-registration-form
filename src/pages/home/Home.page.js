import React from 'react';
import { useNavigate } from 'react-router-dom';
import { pageRoutes } from '../../routes/Routes';
import styles from './Home.module.css';

const Home = () => {
    const navigate = useNavigate();
    
    const navigateHandler = (el) => {
        navigate(pageRoutes[el].path)
    };

    return (
        <div className={styles["home-page"]}>
            WELCOME TO HOME PAGE
            <div className={styles.btns}>
                <button onClick={() => {
                    navigateHandler("signIn")
                }}>Sign in</button>

                <button onClick={() => {
                    navigateHandler("signUp")
                }}>Sign up</button>
            </div>

        </div>
    );
};

export default Home;