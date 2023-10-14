import styles from './Blocos.module.css'

function Blocos({pergunta}){
    return(  
        <div className={styles.bloco}>
            <p>{pergunta}</p>
            <input type="text" className={styles.text}/>
        </div>
    )
}

export default Blocos