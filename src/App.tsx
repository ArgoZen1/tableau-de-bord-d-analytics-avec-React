import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Profil from './Pages/Profil';


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Profil />}></Route>
        <Route path='/user/:id' element={<Home />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
