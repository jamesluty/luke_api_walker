import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Home from './Home';
import styles from './styles.module.css'

const People = () => {
    const {search, id} = useParams();
    const [response, setResponse] = useState([]);
    const [homeworld, setHomeworld] = useState("");
    const [errResponse, setErrResponse] = useState(false)

    useEffect(() => {
        axios.get("https://swapi.dev/api/" + search + "/" + id)
            .then(response => {
                setResponse(response.data)
                setErrResponse(false)
            })
            .catch(err => {
                console.log(err)
                setErrResponse(true)
            })
        axios.get(response.homeworld)
            .then(response => {
                setHomeworld(response.data.name)
            })
            .catch(err2 => {
                console.log(err2)
            })
    }, [search, response.homeworld, id])

    if (errResponse){
        return (
            <div>
                <Home/>
                <h1>These aren't the droids you are looking for.</h1>
                <img className={styles.img} src="https://i.kym-cdn.com/entries/icons/original/000/018/682/obi-wan.jpg" alt="" />
            </div>
        )
    } else if(search === "people" && errResponse === false){
        return (
            <div className={styles.results}>
                <Home/>
                <div className={styles.output}>
                    <h1>{response.name}</h1>
                    <p><span>Height: </span>{response.height} cm</p>
                    <p><span>Mass: </span>{response.mass} kg</p>
                    <p><span>Hair Color: </span>{response.hair_color}</p>
                    <p><span>Skin Color: </span>{response.skin_color}</p>
                    <p><span>Homeworld: </span>{homeworld}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.results}>
                <Home/>
                <div className={styles.output}>
                    <h1>{response.name}</h1>
                    <p><span>Climate: </span>{response.climate}</p>
                    <p><span>Terrain: </span>{response.terrain}</p>
                    <p><span>Surface Water: </span>{response.surface_water}</p>
                    <p><span>Population: </span>{response.population}</p>
                </div>
            </div>
        )
    }
}

export default People