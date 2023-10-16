import styles from './Blocos.module.css'

function Blocos({pergunta}){
    return(  
        <div className={styles.bloco}>
            <p>{pergunta}</p>
            <input type="text" placeholder=" Escreva sua resposta aqui" className={styles.text}/>
        </div>
    )
}

export default Blocos