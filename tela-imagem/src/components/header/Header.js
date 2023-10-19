import React, { useState } from 'react';

import styles from '../header/Header.module.css'
import logo from '../imgs/pernambucanas.png'
import imMenu from '../imgs/barrademenu.png'
import imUser from '../imgs/usuario.png'
import logout from '../imgs/sair2.png'
import configuracao from '../imgs/configuracoes.png'

function Header() {
    const [menuVisivel, setMenuVisivel] = useState(false);
    const [userVisivel,setUserVisivel] = useState(false);
  
    function MostraMenu() {
        console.log('MostraMenu foi chamado');
        setMenuVisivel(!menuVisivel);
      }
      
      function MostraUser() {
        console.log('MostraUser foi chamado');
        setUserVisivel(!userVisivel);
      }
      
      

    return(
        <>
            <div className={styles.barrasuperior}>
                <img className={styles.imMenu} onClick={MostraMenu} src={imMenu} alt="imMenu" />
                <img src={logo} alt="pernambucanas.png" />
                <div className={styles.usuario}>
                    <img src={imUser} alt="imUser" onClick={MostraUser} />
                    <h2>Usuário</h2>

                </div>
            </div>
            <div className={`${styles.menuNavegacao} ${menuVisivel ? 'visivel' : 'oculto'}`}>
                <nav>
                        <button >Home</button>
                        <button >Histórico</button>
                        <button >Texto</button>
                        <button >Imagem</button>
                        <button >HTML</button>
                </nav>
            <img src={logo}></img>
                    
            </div>
            <div className={`${styles.menuUser} ${userVisivel ? 'visivel' : 'oculto'}`}>
                <nav>
                    <div className={styles.saindo}>
                        <img src={logout} alt='sair'></img>
                        <h4>Sair</h4>

                    </div>
                    <div className={styles.saindo}>
                        <img src={configuracao} alt='Configurações'></img>
                        <h4>Configurações</h4>

                    </div>
                </nav>

            </div>

        </>
    )
}

export default Header