import React, {useState} from 'react';
import './navigationBar.css';
import { Link } from 'react-router-dom';
//import logo from '../assets/cynegetelogo3.png'
import cynegeteTitle from '../assets/cynegete-title.jpeg';
import cygenetelogo from '../assets/cygenetelogo0.png'
function NavigationBar() {

    const [searchInput, setSearch] = useState('');
    //get research input from input field
    // const getSearch = () =>{
    //     console.log(searchInput)
    // }

    // const isActive = document.getElementById('navs');
    

    // const is_active = ()=>{
    //     console.log(isActive);
    //     isActive.classList.remove('isInActive');
    //     isActive.classList.add('isActive');
    // }
  return (
        <>
            <div className="container-fluid d-flex barre-de-navigation">
                <div className="container d-flex align-items-center" style={{padding: 0}}>
                    <Link to='/cygenete' className='text-decoration-none text-center'>
                    {/* <h1 className='logo-name mb-0'>CYNEGETE</h1> */}
                    <img className='title-logo' src={cygenetelogo} alt="title" style={{width: '260px', height: '60px', objectFit: 'cover'}} srcset="" />
                        {/* <img src={cynegeteTitle} width={50} alt='title'/> */}
                    </Link>
                    {/* <Link to='/cygenete' className='text-decoration-none text-center ms-2'>
                        <img src={logo} alt='logo' style={{width:'64px', height: '64px'}}/>
                    </Link> */}
                </div>
                <div className="container d-flex align-items-center justify-content-center second-barre-de-navigation" style={{padding: 0}}>
                    <input type='text' className='research-input' placeholder='Recherchez votre article ' onClick={()=>{setSearch(searchInput)}}/>
                    <div className="container navBtn research-btn ms-2">
                    <a href="http://">Rechercher</a>
                    </div>
                    <div className="container navBtn ms-2">
                    <a cla href="http://">Menu</a>
                    </div>
                </div>
            </div>

            {/* <div className="container-fluid d-flex justify-content-center mt-5">
                <li className='' style={{listStyle: 'none'}}><Link to='/cygenete' className='isInActive' id='navs' >ACCEUIL</Link></li>
                <li className='ms-5' style={{listStyle: 'none'}}><Link to='/cygenete/e-boutique' className='isInActive' id='navs' >E-BOUTIQUE</Link></li>
                <li className='ms-5' style={{listStyle: 'none'}}><Link to='/cygenete/mode' className='isInActive' id='navs' >MODE</Link></li>
                <li className='ms-5' style={{listStyle: 'none'}}><Link to='/cygenete/cuisine' className='isInActive' id='navs' >CUISINE</Link></li>
                <li className='ms-5' style={{listStyle: 'none'}}><Link to='/cygenete/electronique' className='isInActive' id='navs' >ELECTRONIQUE</Link></li>
                <li className='ms-5' style={{listStyle: 'none'}}><Link to='/cygenete/maison' className='isInActive' id='navs' >MAISON</Link></li>
            </div> */}
            



        </>
  )
}

export default NavigationBar