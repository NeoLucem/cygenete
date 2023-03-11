import React, { useEffect } from 'react';
import './eboutiquetest.css';
import profilePic from '../assets/image4.jpg';
import { Link } from 'react-router-dom';

import cygenetelogo from '../assets/cygenetelogo0.png'


function Eboutiquetest() {

    useEffect(()=>{
        const navigationLeft = document.querySelector('.navigation-left');
        const navToogle = document.querySelector('.mobile-nav-toogle');

        navToogle.addEventListener('click', ()=>{
            const visibility = navigationLeft.getAttribute('data-visible');
            // console.log(visibility);
            if(visibility === "false"){
                navigationLeft.setAttribute("data-visible", true);
                navToogle.setAttribute("aria-expanded", true);
                console.log(visibility);
            }else if(visibility === "true"){
                navigationLeft.setAttribute("data-visible", "false")
                navToogle.setAttribute("aria-expanded", "false");
                console.log(visibility);
            }
        })
    })

  return (
    <div className='body-eboutique'>
        <header className='header-eboutique d-flex text-light'>
            <nav>
                <ul id='navigation-left' data-visible="false" aria-expanded='false' className='d-flex gap-4 navigation-left'>
                    <li className=''><a href="##"><span>Acceuil</span></a></li>
                    <li className=''><a href="##"><span>Mode</span></a></li>
                    <li className=''><a href="##"><span>Account</span></a></li>
                </ul>
            </nav>
            <button aria-controls='navigation-left' className='mobile-nav-toogle'><span className='sr-only'><i class="fa-solid fa-bars"></i></span></button>

            <div className="">
            <Link to='/cygenete' className='text-decoration-none text-center'>
                    {/* <h1 className='logo-name mb-0'>CYNEGETE</h1> */}
                    <img className='title-logo' src={cygenetelogo} alt="title" style={{width: '12em', height: '60px', objectFit: 'cover'}} srcset="" />
                        {/* <img src={cynegeteTitle} width={50} alt='title'/> */}
                    </Link>
            </div>

            <nav>
                <ul className='d-flex gap-4 navigation-right'>
                    <li><a href="##"><span>hello</span></a></li>
                    <li><a href="##"><span>hello</span></a></li>
                    <li><a href="##"><span>hello</span></a></li>
                </ul>
            </nav>

            <div  className='mobile-nav-toogle-right'>
                <img src={profilePic} alt="proile" srcset="" className='img' />
            </div>
        </header>
    </div>
  )
}

export default Eboutiquetest