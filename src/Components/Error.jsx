import React from 'react';
import Home from './Home';
import styles from './styles.module.css';

const Error = () => {
    return (
        <div>
            <Home/>
            <h1>These aren't the droids you are looking for.</h1>
                    <img className={styles.img} src="https://i.kym-cdn.com/entries/icons/original/000/018/682/obi-wan.jpg" alt="" />
        </div>
    )
}

export default Error