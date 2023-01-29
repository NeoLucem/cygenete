import { Route, Routes } from 'react-router-dom';
import './App.css';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Error from './pages/error';
import Header from './components/header';
import Eboutique from './pages/eboutique';
import Mode from './pages/mode';
import Cuisine from './pages//cuisine';
import Electronique from './pages/electronique';
import Maison from './pages/maison';
//import NavigationBar from './components/navigationBar';

function App() {
  return (
    <div className='app-header'>
      {/* <NavigationBar/> */}
      <Routes>
        <Route path='cynegete/' element={<Home/>}/>
        <Route path='cynegete/cart' element={<Cart/>}/>
        <Route path='cynegete/header' element={<Header/>}/>
        <Route path='cynegete/e-boutique' element={<Eboutique/>}/>
        <Route path='cynegete/mode' element={<Mode/>}/>
        <Route path='cynegete/cuisine' element={<Cuisine/>}/>
        <Route path='cynegete/electronique' element={<Electronique/>}/>
        <Route path='cynegete/maion' element={<Maison/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
