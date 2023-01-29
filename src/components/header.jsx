import React from 'react';
import NavigationBar from './navigationBar';
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper style from header.css
import './header.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function Header() {
  return (
    <div className='app-header'>
        <NavigationBar/>
        <div className='hero-section'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='container slider-card'>
                        <p style={{display: 'inline-block'}}>
                            <h4 style={{display: 'inline-block'}}>
                                CYNEGETE est votre plateforme d'affiliation
                                    et d'exposition numerique.
                            </h4>
                            <br/>
                            <span style={{lineheight: '2'}}>
                                Faites vos placements de produits ou d'idee sur notre
                                site internet et sur nos reseaux sociaux Gratuitement 
                                pour les premiers mois dde lancement.
                            </span>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='container slider-card'>
                        <p>
                            <h4>2023</h4>
                            <span>Cynegete est votre plateforme d'affiliation, et d'exposition numerique de vos annonces les plus importantes.</span>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='container slider-card'>
                        <p style={{display: 'inline-block'}}>
                        <h4 style={{display: 'inline-block'}}>CYNEGETE est votre plateforme d'affiliation et d'exposition numerique.</h4><br/>
                        Faites vos placements de produits ou d'idee sur notre site internet et sur nos reseaux sociaux Gratuitement pour les premiers mois dde lancement.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='container slider-card'>
                        <p>
                            <h4>2023</h4>
                            Cynegete est votre plateforme d'affiliation, et d'exposition numerique de vos annonces les plus importantes.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='container slider-card'>
                        <p style={{display: 'inline-block'}}>
                        <h4 style={{display: 'inline-block'}}>CYNEGETE est votre plateforme d'affiliation et d'exposition numerique.</h4><br/>
                        Faites vos placements de produits ou d'idee sur notre site internet et sur nos reseaux sociaux Gratuitement pour les premiers mois dde lancement.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='container slider-card'>
                        <p>
                            <h4>2023</h4>
                            Cynegete est votre plateforme d'affiliation, et d'exposition numerique de vos annonces les plus importantes.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Header