// library import
import {BrowserRouter, Routes, Route } from 'react-router-dom';


// components import
import Home from './pages/Home.js'
import Menu from './pages/Menu.js'
import DetailList from './pages/DetailList.js';

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/detaillist" element={<DetailList />} />
        </Routes>
      </BrowserRouter>
        <h1>pokedex</h1>
    </div>
  );
}

export default App;
