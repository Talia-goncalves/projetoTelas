import styles from './Aside.module.css'

function Dimensao({dimensao}){
    return(
        <div className={styles.dimensao}>
            <p>{dimensao}</p>
        </div>
    )
}

export default Dimensao