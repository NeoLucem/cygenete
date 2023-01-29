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
  return (
        <>
            {/* nouvelle  navbar  */}
            <nav className="navbar navbar-expand-lg">
                <div className="container py-3">
                    <div className="container">
                        <i class="fa-sharp fa-solid fa-bars fa-2x" style={{cursor: 'pointer', color: 'white'}}></i>
                    </div>
                    <div className="container text-center">
                        <Link to='/cynegete' className='text-decoration-none text-center'>
                            <img src={logo} alt='logo' style={{width:'64px', height: '64px'}}/>
                        </Link>
                    </div>
                    <div className="container">
                        <div className='navbar-search d-flex justify-content-center'>
                            <input type='text' placeholder='Rechercher un produit, une maque'value={searchInput} onChange={(e)=>setSearch(e.target.value)}/>
                            <div className='btn btn-dark ms-2' onClick={getSearch}>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                </div>        
                
            </nav>
            <div className="container-fluid bottom-navbar d-flex justify-content-around" style={{fontSize: '24px'}}>
                <Link to='/cynegete'>Acceuil</Link>
                <Link to='/cynegete/e-boutique'>E-Boutique</Link>
                <Link to='/cynegete/mode'>Mode</Link>
                <Link to='/cynegete/cuisine'>Cuisine</Link>
                <Link to='/cynegete/electronique'>Electronique</Link>
                <Link to='/cynegete/maison'>Maison</Link>
            </div>
        </>
  )
}

export default NavigationBar