import './App.css';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Pesquisa from './components/body/Pesquisa';
import Imagens from './components/body/Imagens';

function Tela2() {
  return (
    <div className="Tela2">
      <Header/>
      <div className="Conjunto">
        <Aside/>
        <div className="Body">
          <Pesquisa/>
          <div className="ConjuntoImagens">
            <div className="fila5">
              <Imagens/>
              <Imagens/>
              <Imagens/>
            </div>
            <div className="fila6">
              <Imagens/>
              <Imagens/>
              <Imagens/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tela2;
