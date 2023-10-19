import styles from './Aside.module.css'

function Quadradinhos({numero}){
    return(
        <div className={styles.quadradinhos}>
            <p>{numero}</p>
        </div>
    )
}

export default Quadradinhos