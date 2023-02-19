import React from 'react';
import NavigationBar from './navigationBar';
// import required modules
import { Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper style from header.css
import './header.css'
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";


function Header() {
  return (
    <div className='header'>
        <NavigationBar/>
        <div className='hero-section'>
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
  )
}

export default Header