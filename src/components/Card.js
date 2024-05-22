import styles from './Card.module.css';

function Card({nome, img, redrectInfo, id, custom }){
    
    function redirect(e){
        e.preventDefault()
        redrectInfo(id)
    }

    return(
        <div onClick={redirect} className={styles.card} >.
            <img src={img} alt={nome} />
            <p>{nome}</p>
        </div>
    )
}

export default Card