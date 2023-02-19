import React, {useState} from 'react';
import './navigationBar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/cynegetelogo3.png'

function NavigationBar() {

    const [searchInput, setSearch] = useState('');
    //get research input from input field
    const getSearch = () =>{
        console.log(searchInput)
    }

    const navBarMenu = document.getElementById('navbar-menu');
    const smallContainer = document.getElementsByClassName('navBarMenu')

    const removeDisplay = () =>{
        console.log('helo');
        navBarMenu.style.visibility='hidden'
    }
  return (
        <>
        <div className="container-fluid d-flex barre-de-navigation">
          <div className="container d-flex align-items-center">
            <Link to='/cygenete' className='text-decoration-none text-center'>
              <h1 className='logo-name mb-0'>CYNEGETE</h1>
            </Link>
            {/* <Link to='/cygenete' className='text-decoration-none text-center ms-2'>
                <img src={logo} alt='logo' style={{width:'64px', height: '64px'}}/>
            </Link> */}
          </div>

          <div className="container d-flex align-items-center justify-content-center">
            <input type='text' className='research-input' placeholder='Recherchez votre article '/>
            <div className="container navBtn research-btn ms-2">
              <a href="http://">Rechercher</a>
            </div>
            <div className="container navBtn ms-2">
              <a cla href="http://">Menu</a>
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex justify-content-center mt-5">
          <li className='' style={{listStyle: 'none'}}><Link to='/cygenete' className='navs'>ACCEUIL</Link></li>
          <li className='ms-5' style={{listStyle: 'none'}}><Link to='/cygenete/e-boutique' className='navs'>E-BOUTIQUE</Link></li>
          <li className='ms-5' style={{listStyle: 'none'}}><Link to='/cygenete/mode' className='navs'>MODE</Link></li>
          <li className='ms-5' style={{listStyle: 'none'}}><Link to='/cygenete/cuisine' className='navs'>CUISINE</Link></li>
          <li className='ms-5' style={{listStyle: 'none'}}><Link to='/cygenete/electronique' className='navs'>ELECTRONIQUE</Link></li>
          <li className='ms-5' style={{listStyle: 'none'}}><Link to='/cygenete/maison' className='navs'>MAISON</Link></li>
        </div>
            



        </>
  )
}

export default NavigationBar