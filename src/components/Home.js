import { useEffect, useState } from "react";
import Card from "./Card";
import styles from './Home.module.css';
import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate()

    const [animes, setAnimes] = useState([])

    useEffect(() => {
        fetch("https://json-server-opal-eta.vercel.app/produtos")
        .then((resp) => resp.json())
        .then((data) => {
        console.log();
        setAnimes(data)
        })
        .catch((error) => console.error('Error fetching data:', error));
    },[])

    function redrect(id){
        navigate(`/infocard/${id}`)
    }

    return(     
        <div className={styles.container_cards} >
            { animes.length > 0 && (
                    animes.map((anime) => (
                            <Card
                                nome={anime.categoria}
                                img={anime.poster}
                                key={anime.id}
                                id={anime.id}
                                redrectInfo={redrect}
                            />
                        )
                    )
                )
            }
        </div>
    )
}

export default Home