import styles from './Aside.module.css'
import Quadradinhos from './Quadradinhos'
import Dimensao from './Dimensao'
import Cores from './Cores'
import Foto from './Foto'

function Aside(){
    return(
        <div className={styles.aside}>
            <p className={styles.title}>Número de Imagens</p>
            <div className={styles.conjuntoDiv}>    
                <div className={styles.fila1}>
                    <Quadradinhos numero='1'/>
                    <Quadradinhos numero='2'/>
                    <Quadradinhos numero='3'/>
                    <Quadradinhos numero='4'/>
                </div>
                <div className={styles.fila2}>
                    <Quadradinhos numero='5'/>
                    <Quadradinhos numero='6'/>
                    <Quadradinhos numero='7'/>
                    <Quadradinhos numero='8'/>
                </div>
            </div>
            <p className={styles.title}>Dimensão das Imagens</p>
            <div className={styles.dimensoesDiv}>    
                <div className={styles.fila3}>
                    <Dimensao dimensao='512 x 512'/>
                    <Dimensao dimensao='512 x 1024'/>
                    <Dimensao dimensao='1024 x 768'/>
                </div>
                <div className={styles.fila4}>
                    <Dimensao dimensao='768 x 768'/>
                    <Dimensao dimensao='768 x 1024'/>
                    <Dimensao dimensao='1024 x 1024'/>
                </div>
            </div>
            <p className={styles.title}>Escola a sua paleta de cores</p>
            <Cores/>
            <p className={styles.title}>Envie uma imagem</p>
            <Foto/>
        </div>
    )
}

export default Aside