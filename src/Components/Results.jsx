import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Home from './Home';
import styles from './styles.module.css'

const People = () => {
    const {search, id} = useParams();
    const [response, setResponse] = useState(false);
    const [homeworld, setHomeworld] = useState("");
    const [errResponse, setErrResponse] = useState(false)
    const navigate = useNavigate("");

    useEffect(() => {
        axios.get("https://swapi.dev/api/" + search + "/" + id)
            .then(response => {
                setResponse(response.data)
                setErrResponse(false)
            })
            .then(
                axios.get(response.homeworld)
                    .then(response => {
                        console.log(response.data.name)
                        setHomeworld(response.data.name)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            )
            .catch(err => {
                console.log(err)
                setErrResponse(true)
            })
    }, [search, response.homeworld, id])

    const goToHomeworld = () => {
        let homeworldPage = response.homeworld.replace("https://swapi.dev/api", "");
        navigate(homeworldPage)
    }

    if (errResponse){
        return (
            <div>
                <Home/>
                <h1>These aren't the droids you are looking for.</h1>
                <img className={styles.img} src="https://i.kym-cdn.com/entries/icons/original/000/018/682/obi-wan.jpg" alt="" />
            </div>
        )
    } else {
        switch(search){
            case "people":
                return (
                    <div>
                        <Home/>
                        { response ? (
                            <div>
                                <div className={styles.output}>
                                <h1>{response.name}</h1>
                                <p><span>Height: </span>{response.height} cm</p>
                                <p><span>Mass: </span>{response.mass} kg</p>
                                <p><span>Hair Color: </span>{response.hair_color}</p>
                                <p><span>Skin Color: </span>{response.skin_color}</p>
                                <p><span>Homeworld: </span>{homeworld}</p>
                                <button className={styles.homeworldButton} onClick={goToHomeworld}>Homeworld</button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h1>Loading...</h1>
                            </div>
                        )}
                    </div>
                )
            case "planets":
                return (
                    <div>
                        <Home/>
                        { response ? (
                            <div>
                                <div className={styles.output}>
                                    <h1>{response.name}</h1>
                                    <p><span>Climate: </span>{response.climate}</p>
                                    <p><span>Terrain: </span>{response.terrain}</p>
                                    <p><span>Surface Water: </span>{response.surface_water}</p>
                                    <p><span>Population: </span>{response.population}</p>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h1>Loading...</h1>
                            </div>
                        )}
                    </div>
                )
            case "starships":
                return (
                    <div>
                        <Home/>
                        { response ? (
                            <div className={styles.output}>
                                <h1>{response.name}</h1>
                                <p><span>Model: </span>{response.model}</p>
                                <p><span>Manufacturer: </span>{response.manufacturer}</p>
                                <p><span>Crew: </span>{response.crew}</p>
                                <p><span>Class: </span>{response.starship_class}</p>
                                <p><span>Hyper Drive Rating: </span>{response.hyperdrive_rating}</p>
                                <p><span>Length: </span>{response.length} km</p>
                            </div>
                        ) : (
                            <div>
                                <h1>Loading...</h1>
                            </div>
                        )}
                    </div>
                )
            default:
                <Home/>
        }
    }
}

export default People