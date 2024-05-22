import styles from './InfoCard.module.css';
// import Card from "./Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function InfoCard(){

    const {id} = useParams()

    const [animes, setAnimes] = useState([])


    useEffect(() => {
        fetch(`https://json-server-opal-eta.vercel.app/produtos/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setAnimes(data)
        })
        .catch((error) => console.error('Error fetching data:', error));
    },[id])

    return(
        <div className={styles.container} >
            <div className={styles.container_info} >
                <h1>{animes.categoria}</h1>
                <div className={styles.info} >
                    <div className={styles.card_info} ><img src={animes.poster} alt={animes.categoria} />
                    </div>
                    <div>
                        <p>{animes.descricao}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard