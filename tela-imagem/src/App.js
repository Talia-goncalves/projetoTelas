import styles from './App.css';
import Header from './components/header/Header';
import ConjuntoBlocos from './components/blocos/ConjuntoBlocos';
import Imagem from './components/imagem/Imagem';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className={styles.conjunto}>
        <div><ConjuntoBlocos/></div>
        <div><Imagem/></div>
      </div>
      
    </div>
  );
}

export default App;
