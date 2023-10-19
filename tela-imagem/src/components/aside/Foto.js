import styles from './Aside.module.css'

function Foto(){
    return(
        <div className={styles.foto}>
            <img className={styles.img} src='https://cdn-icons-png.flaticon.com/128/152/152555.png'/>
            <p className={styles.frase1}>Carregue ou Araste e solte</p>
            <p className={styles.frase2}>Uma imagem aqui</p>
        </div>
    )
}

export default Foto