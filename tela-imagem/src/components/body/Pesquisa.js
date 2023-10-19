import styles from './Body.module.css'

function Pesquisa(){
    return(
        <>
            <input type="text" placeholder=" DIGITE AQUI" className={styles.pesquisa}/>
            <button className={styles.button}>Gerar</button>
        </>
    )
}

export default Pesquisa