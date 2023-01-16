import React, {useState, useEffect} from 'react';
import './navigationBar.css'
import { Link } from 'react-router-dom';

function NavigationBar() {

    const [searchInput, setSearch] = useState('');
    //get research input from input field
    const getSearch = () =>{
        console.log(searchInput)
    }
  return (
<>
    <div className='container-fluid' style={{position: 'fixed'}}>
        <div className='container-fluid nav navbar bg-white px-4 py-3 d-flex justify-content-between'>
            <div className='navbar-menu'>
                <i class="fa-sharp fa-solid fa-bars" style={{cursor: 'pointer'}}></i>
            </div>
            <div className='navbar-brand'>
                <Link to='/' className='text-decoration-none text-center'>CYGENETE</Link>
            </div>
            <div className='navbar-search d-flex justify-content-between'>
                <input type='text' placeholder='Rechercher un produit, une maque'value={searchInput} onChange={(e)=>setSearch(e.target.value)}/>
                <div className='btn btn-dark ms-2' onClick={getSearch}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
        <div className='container-fluid menu d-flex justify-content-evenly pt-4 pb-3'>
            <Link to='/' className='text-decoration-none text-center menu_link'>Acceuil</Link>
            <Link to='/cart' className='text-decoration-none text-center menu_link'>Mode</Link>
            <Link to='/h' className='text-decoration-none text-center menu_link'>Restaurant</Link>
            <Link to='/' className='text-decoration-none text-center menu_link'>CYGENETE</Link>
            <Link to='/' className='text-decoration-none text-center menu_link'>CYGENETE</Link>
            <Link to='/' className='text-decoration-none text-center menu_link'>CYGENETE</Link>
        </div>
    </div>

    
    </>
  )
}

export default NavigationBar