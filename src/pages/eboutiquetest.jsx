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

        <section className="section-1">

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h3 className='text-center text-light fs-6 mb-4' style={{width: '50%'}}>
                    <span>Faites vos achats et expositions sans inquiétude</span>
                </h3>
            </div>

            <div className="container d-flex justify-content-center mb-3">
                <form action="">
                    <input type="text" name="recherche" id="search" className='search-bar' placeholder='Recherche'/>
                </form>
            </div>

            <h4 className="text-center fs-6 text-light">PARTICIER A VOS ACHATS</h4>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <hr style={{width: '50%', borderTop: '2px solid #fffff'}} />
            </div>

            <div className='container mb-4'>
                <ul className='primary-navigation d-flex' style={{}}>
                    <li><a href="#" className='active'><span>Mode</span></a></li>
                    <li><a href="#"><span>Electronique</span></a></li>
                    <li><a href="#"><span>Maison</span></a></li>
                    <li><a href="#"><span>E-boutique</span></a></li>
                </ul>
            </div>

            <div className="container mb-3">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div class="card card-ads-bg" style={{height: '32vh'}}>
                            {/* <div class="card-body" style={{border: 'none', borderRadius: 'none'}}>
                                <p class="card-text-ads-1 fs-3 fw-bold">
                                Lorem ipsum dolor sit amet consectetur.
                                </p><br />
                                <span className="text-ads-link"><a href="www.google.com">Acheter</a></span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mb-3' style={{display: 'flex', justifyContent: 'center'}}>
                <h3 className='text-center text-light fs-6 mb-4' style={{width: '50%'}}>
                    <span>La mode est tout ce qui nous fait vivre textillement</span>
                </h3>
            </div>

            <div className='container mb-3' style={{display: 'flex', justifyContent: 'center'}}>
                <h2 className='text-center text-light mb-4' >
                    <span>
                        Produits inédits de l'année 2023
                    </span>
                </h2>
            </div>

            <div className="container mb-3">
                <div className="row gy-2">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div class="card card-ads-bg" style={{height: '32vh'}}>
                            {/* <div class="card-body" style={{border: 'none', borderRadius: 'none'}}>
                                <p class="card-text-ads-1 fs-3 fw-bold">
                                Lorem ipsum dolor sit amet consectetur.
                                </p><br />
                                <span className="text-ads-link"><a href="www.google.com">Acheter</a></span>
                            </div> */}
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div class="card card-ads-bg" style={{height: '32vh'}}>
                            {/* <div class="card-body" style={{border: 'none', borderRadius: 'none'}}>
                                <p class="card-text-ads-1 fs-3 fw-bold">
                                Lorem ipsum dolor sit amet consectetur.
                                </p><br />
                                <span className="text-ads-link"><a href="www.google.com">Acheter</a></span>
                            </div> */}
                        </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div class="card card-ads-bg" style={{height: '32vh'}}>
                            {/* <div class="card-body" style={{border: 'none', borderRadius: 'none'}}>
                                <p class="card-text-ads-1 fs-3 fw-bold">
                                Lorem ipsum dolor sit amet consectetur.
                                </p><br />
                                <span className="text-ads-link"><a href="www.google.com">Acheter</a></span>
                            </div> */}
                        </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div class="card card-ads-bg" style={{height: '32vh'}}>
                            {/* <div class="card-body" style={{border: 'none', borderRadius: 'none'}}>
                                <p class="card-text-ads-1 fs-3 fw-bold">
                                Lorem ipsum dolor sit amet consectetur.
                                </p><br />
                                <span className="text-ads-link"><a href="www.google.com">Acheter</a></span>
                            </div> */}
                        </div>
                    </div>
                    
                </div>
            </div>

        </section>
    </div>
  )
}

export default Eboutiquetest