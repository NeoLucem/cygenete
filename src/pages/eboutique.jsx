import React from 'react';
import NavigationBar from '../components/navigationBar';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import cygenetelogo from '../assets/cygenetelogo0.png'

function Eboutique() {
  return (
    <>
        <header className='header'>

        <Header/>
        </header>
        <section className="section-2">

        <div className="container mt-5 mini-nav-laptop">
            <ul className='d-flex justify-content-between myslider' style={{paddingLeft: 0}}>
              <li style={{listStyle: 'none'}}>
                <Link to='/cygenete' className='text-decoration-none btn btn-outline-success rounded-pill active'>Acceuil</Link>
              </li>
              <li style={{listStyle: 'none'}}>
                <Link to='/cygenete/e-boutique' className='text-decoration-none btn btn-outline-success rounded-pill'>E-boutiques</Link>
              </li>
              <li style={{listStyle: 'none'}}>
                <Link to='/cygenete/mode' className='text-decoration-none btn btn-outline-success rounded-pill'>Mode</Link>
              </li>
              <li style={{listStyle: 'none'}}>
                <Link to='/cygenete/cuisine' className='text-decoration-none btn btn-outline-success rounded-pill'>Cuisine</Link>
              </li>
              <li style={{listStyle: 'none'}}>
                <Link to='/cygenete/electronique' className='text-decoration-none btn btn-outline-success rounded-pill'>Electronique</Link>
              </li>
              <li style={{listStyle: 'none'}}>
                <Link to='/cygenete/maison' className='text-decoration-none btn btn-outline-success rounded-pill'>Maison</Link>
              </li>
            </ul>
          </div>

          <div className="container mt-5 mini-nav-mobile">
            <ul className='d-flex justify-content-between myslider' style={{paddingLeft: 0}}>
              <li style={{listStyle: 'none'}}>
                <Link to='/cygenete' className='text-decoration-none btn btn-outline-success rounded-pill active'>
                  <i className="fa fa-bag"></i>
                </Link>
              </li>
              <li style={{listStyle: 'none'}}>
                <Link to='/cygenete/e-boutique' className='text-decoration-none btn btn-outline-success rounded-pill'>
                  <i className="fa fa-bag"></i>
                </Link>
              </li>
              <li style={{listStyle: 'none'}}>
                <Link to='/cygenete/mode' className='text-decoration-none btn btn-outline-success rounded-pill'>
                  <i className="fa fa-bag"></i>
                </Link>
              </li>
              <li style={{listStyle: 'none'}}>
                <Link to='/cygenete/cuisine' className='text-decoration-none btn btn-outline-success rounded-pill'>
                  <i className="fa fa-bag"></i>
                </Link>
              </li>
              <li style={{listStyle: 'none'}}>
                <Link to='/cygenete/electronique' className='text-decoration-none btn btn-outline-success rounded-pill'>
                  <i className="fa fa-bag"></i>
                </Link>
              </li>
              <li style={{listStyle: 'none'}}>
                <Link to='/cygenete/maison' className='text-decoration-none btn btn-outline-success rounded-pill'>
                  <i className="fa fa-bag"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="container mt-4">
            
          <h1 className='text-center mt-5'>Nouveautés</h1>
          <h5 className="text-center mb-5">Lorem ipsum dolor sit amet consectetur.</h5>

            <div className="row gy-3">

              <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                <div class="card card-ads-bg" style={{height: '42vh'}}>
                  <div class="card-body" style={{border: 'none', borderRadius: 'none'}}>
                    <p class="card-text-ads-1 fs-3 fw-bold">
                     Lorem ipsum dolor sit amet consectetur.
                    </p><br />
                    <span className="text-ads-link"><a href="www.google.com">Acheter</a></span>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                <div class="card card-ads-bg-1" style={{height: '42vh'}}>
                  <div class="card-body" style={{border: 'none', borderRadius: 'none'}}>
                    <p class="card-text-ads-1 fs-3 fw-bold">
                     Lorem ipsum dolor sit amet consectetur. 
                    </p><br />
                    <span className="text-ads-link"><a href="www.google.com">Acheter</a></span>
                  </div>
                </div>
              </div>
              
              <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                <div class="card card-ads-bg-1" style={{height: '42vh'}}>
                  <div class="card-body" style={{border: 'none', borderRadius: 'none'}}>
                    <p class="card-text-ads-1 fs-3 fw-bold">
                     Lorem ipsum dolor sit amet consectetur. 
                    </p><br />
                    <span className="text-ads-link"><a href="www.google.com">Acheter</a></span>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                <div class="card card-ads-bg-1" style={{height: '42vh'}}>
                  <div class="card-body" style={{border: 'none', borderRadius: 'none'}}>
                    <p class="card-text-ads-1 fs-3 fw-bold">
                     Lorem ipsum dolor sit amet consectetur. 
                    </p><br />
                    <span className="text-ads-link"><a href="www.google.com">Acheter</a></span>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                <div class="card card-ads-bg-1" style={{height: '42vh'}}>
                  <div class="card-body" style={{border: 'none', borderRadius: 'none'}}>
                    <p class="card-text-ads-1 fs-3 fw-bold">
                     Lorem ipsum dolor sit amet consectetur. 
                    </p><br />
                    <span className="text-ads-link"><a href="www.google.com">Acheter</a></span>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                <div class="card card-ads-bg-1" style={{height: '42vh'}}>
                  <div class="card-body" style={{border: 'none', borderRadius: 'none'}}>
                    <p class="card-text-ads-1 fs-3 fw-bold">
                     Lorem ipsum dolor sit amet consectetur. 
                    </p><br />
                    <span className="text-ads-link"><a href="www.google.com">Acheter</a></span>
                  </div>
                </div>
              </div>

            </div>
          </div>
      </section>
    </>
  )
}

export default Eboutique