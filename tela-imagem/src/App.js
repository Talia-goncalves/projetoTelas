import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Tela1 from './Tela1';
import Tela2 from './Tela2';



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Tela1/>}/>
            <Route path='/Tela2' element={<Tela2/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;