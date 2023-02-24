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

    // const header = document.querySelector('.nav-header');
    // const sectionOne = document.querySelector('.hero-section');

    // const sectionOneOptions = {
    //     rootMargin: '-200px 0px 0px 0px'
    // };

    // const sectionOneObserver = new IntersectionObserver(
    //     function(entries, sectionOneObserver){
    //         entries.forEach(enttry=>{
    //             if(!enttry.isIntersecting){
    //                 header.classList.add('')
    //             }else{
    //                 header.classList.remove('')
    //             }
    //         })
    //     }, sectionOneOptions);

    //     sectionOneObserver.observe(sectionOne);

  return (
    <div className='header'>
        <NavigationBar className='nav-header'/>
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
                            <h1 style={{display: 'inline-block', fontSize: '48px'}}>
                                Cynegete est votre plateforme d'affiliation
                                    et d'exposition numerique.
                            </h1>
                            <span style={{lineheight: '2', fontSize: '24px'}}>
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
                            <h1 style={{fontSize: '48px'}}>En 2023,</h1>
                            <span style={{lineheight: '2', fontSize: '32px'}}>Cynegete est votre plateforme d'affiliation, et d'exposition numerique de vos annonces les plus importantes.</span>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='container slider-card'>
                        <p style={{display: 'inline-block'}}>
                            <h1 style={{display: 'inline-block', fontSize: '48px'}}>
                                CYNEGETE est votre plateforme d'affiliation
                                    et d'exposition numerique.
                            </h1>
                            <span style={{lineheight: '2', fontSize: '24px'}}>
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
                            <h1 style={{fontSize: '48px'}}>2023</h1>
                            <span style={{lineheight: '2', fontSize: '24px'}}>Cynegete est votre plateforme d'affiliation, et d'exposition numérique de vos annonces les plus importantes.</span>
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Header