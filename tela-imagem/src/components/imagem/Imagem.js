import styles from './Imagem.module.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tela2 from '../../Tela2';
import { useNavigate } from 'react-router-dom';


const Imagem = () => {
  const [imagemVisivel, setImagemVisivel] = useState(true);
  const navigateTo = useNavigate()

  const alternarImagem = () => {
    setImagemVisivel(!imagemVisivel);
  };

  return (
    <>
      <div className={styles.quadrado}>
        {imagemVisivel ? (
          <img className={styles.imagem} src='https://cdn-icons-png.flaticon.com/128/739/739249.png'/>
        ) : (
          <img className={styles.publi} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFfwOebiWUyruboGquwXKFwa-1o8mX1CM0zg&usqp=CAU' alt="Imagem 2" />
        )}
      </div>
      <div>
        <button className={styles.button} onClick={alternarImagem}>Gerar</button>
      </div>
      <div>
        
        <button className={styles.buttonEnviar} onClick={()=>{
          navigateTo("/Tela2")
        }}>Enviar</button>


      </div>
    </>
  );
}

export default Imagem;
