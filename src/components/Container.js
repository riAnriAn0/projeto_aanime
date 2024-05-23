import style from './Container.module.css';

function Container({children}){
    return(
        <div> <div className={style.container} >{children}</div></div>
    )
}

export default Container