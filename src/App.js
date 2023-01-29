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
        <Route path='cygenete/' element={<Home/>}/>
        <Route path='cygenete/cart' element={<Cart/>}/>
        <Route path='cygenete/header' element={<Header/>}/>
        <Route path='cygenete/e-boutique' element={<Eboutique/>}/>
        <Route path='cygenete/mode' element={<Mode/>}/>
        <Route path='cygenete/cuisine' element={<Cuisine/>}/>
        <Route path='cygenete/electronique' element={<Electronique/>}/>
        <Route path='cygenete/maion' element={<Maison/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
