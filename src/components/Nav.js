import styles from './Nav.module.css'

function Nav(){

    const logo = <img src="https://i.ibb.co/j6pBfTP/7-Sem-T-tulo-20240522155740.png" alt="7-Sem-T-tulo-20240522155740" border="0"></img>

    return(
        <nav className={styles.nav} >{logo}</nav>
    )
}

export default Nav