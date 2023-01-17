import { Route, Routes } from 'react-router-dom';
import './App.css';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Error from './pages/error';
//import NavigationBar from './components/navigationBar';

function App() {
  return (
    <div className='app-header'>
      {/* <NavigationBar/> */}
      <Routes>
        <Route path='cygenete/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
