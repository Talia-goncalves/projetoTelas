import styles from './Blocos.module.css'
import Blocos from './Blocos'

function ConjuntoBlocos(){
    return(
        <>
            <p className={styles.frase}>Você deseja uma imagem sobre?</p>
            <Blocos pergunta='Quem é o seu público-alvo?'/>
            <Blocos pergunta='Qual mensagem ou emoção você deseja transmitir com a imagem?'/>
            <Blocos pergunta='Qual é o objetivo principal da imagem publicitária que você deseja criar?'/>
            <Blocos pergunta='Você tem alguma preferência por imagens reais (fotografias) ou ilustrações gráficas?'/>        
        </>
    )
}

export default ConjuntoBlocos