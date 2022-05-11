import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Home = () => {
    const [searchType, setSearchType] = useState("people");
    const [idNum, setIdNum] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/" + searchType + "/" + idNum);
    }

    return (
        <div>
            <h1>Luke APIwalker</h1>
            <div className={styles.searchWrapper}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.searchLabel} htmlFor="select">Search for: </label>
                    <select className={styles.select} name="select" onChange={e => setSearchType(e.target.value)} value={searchType}>
                        <option className={styles.options} value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="starships">Starships</option>
                    </select>
                    <label className={styles.idLabel} htmlFor="">Id: </label>
                    <input className={styles.inputNum} type="number" min="1" onChange={ e => setIdNum(e.target.value)} value={idNum}/>
                    <button className={styles.button}>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Home