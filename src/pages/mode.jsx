import React from 'react'
// import NavigationBar from '../components/navigationBar';
// import logo from '../assets/cynegetelogo3.png';
import { Link } from 'react-router-dom';
import './mode.css';
// import required modules
import { Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper style from header.css
// import './header.css'
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";


function Mode() {

  const navBar = document.getElementById('barre-de-navigation');

  window.addEventListener('scroll', ()=>{
    //window.alert('scrolling')
    console.log('scrolling')
    navBar.style.background='red'
  })
  return (
    <>
      <section className='header'>
        
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

        <div className="container">
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='container slider-card'>
                        <p style={{display: 'inline-block'}}>
                            <h1 style={{display: 'inline-block', fontSize: '32px'}}>
                                CYNEGETE est votre plateforme d'affiliation
                                    et d'exposition numerique.
                            </h1>
                            <br/>
                            <br/>
                            <span style={{lineheight: '2', fontSize: '16px'}}>
                                Faites vos placements de produits ou d'idée sur notre
                                site internet et sur nos réseaux sociaux Gratuitement 
                                pour les premiers mois de lancement.
                            </span>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='container slider-card'>
                        <p>
                            <h1 style={{fontSize: '32px'}}>En 2023,</h1>
                            <span style={{lineheight: '2', fontSize: '32px'}}>Cynegete est votre plateforme d'affiliation, et d'exposition numerique de vos annonces les plus importantes.</span>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='container slider-card'>
                        <p style={{display: 'inline-block'}}>
                            <h1 style={{display: 'inline-block', fontSize: '32px'}}>
                                CYNEGETE est votre plateforme d'affiliation
                                    et d'exposition numerique.
                            </h1>
                            <br/>
                            <br/>
                            <span style={{lineheight: '2', fontSize: '16px'}}>
                                Faites vos placements de produits ou d'idée sur notre
                                site internet et sur nos réseaux sociaux Gratuitement 
                                pour les premiers mois de lancement.
                            </span>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='container slider-card'>
                        <p>
                            <h1 >2023</h1>
                            <span style={{lineheight: '2', fontSize: '32px'}}>Cynegete est votre plateforme d'affiliation, et d'exposition numérique de vos annonces les plus importantes.</span>
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
      </section>
      
      <section className="section-2">

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

export default Mode