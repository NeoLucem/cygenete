import React, {useEffect, useState} from 'react'
import { storage, db} from '../firebaseConfig';
import { listAll, ref, getDownloadURL} from 'firebase/storage';
import {collection, getDocs} from "firebase/firestore"
import './home.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";
import Header from '../components/header';




function Home() {
  //Get image list
  const [imageList, setImageList] = useState([]);
  
  //Get link list
  const [urlList, setUrls] = useState([]);

  //Create collection reference
  const urlCollectionRef = collection(db, "test");

  // Create list of object
  const objList = [];

  // Get file ref
  const imagesRef = ref(storage, "test/");

  // Get links from firestore 
  useEffect(()=>{

    const getUrl = async () =>{
      const data = await getDocs(urlCollectionRef);
      //console.log(data.docs.map((doc)=>({...doc.data, id:doc.id})));
      setUrls(data.docs.map((doc)=>({...doc.data, id:doc.id})))
    }

    getUrl()

    listAll(imagesRef).then((response) => {
      console.log(response);
      response.items.map((item)=>{
        getDownloadURL(item).then((url) => {
          console.log(url);
          setImageList((prev)=>[...prev, url])
        })
      })
    })

    //Create the function addList
    function addList(){
      // Loops through the two arrays 
      for (let undex = 0; undex < imageList.length; undex++){
        for (let index = 0; index < urlList.length; index++) {
          objList.push({'image':imageList[undex], 'url': urlList[index]});

          console.log(objList);
        }
      }
    }
    
    addList()

  },[])
  

  //Create the objList var
  


  return (
    <>
      <Header/>
      
      {/* main */}
      <main className='main'>

        {/* Titre nouveautes du jour */}
        <div className="container text-center" style={{marginBottom: '8rem'}}>
          <h1 style={{paddingTop: '8rem'}}>NOUVEAUTES DU JOUR</h1>
          <span className='span-style'>Les ventes qui ouvrent aujourd'hui</span>
        </div>

        {/* First container */}
        <div class="container text-center" style={{padding: 0}}>
          <div class="row g-5">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div className="container card-container">
                <div class="card" style={{width: 'auto'}}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f" class=" img-card" alt="description"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="www.google.com" class="btn btn-success">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div className="container card-container">
                <div class="card" style={{width: 'auto'}}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f" class=" img-card" alt="description"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="www.google.com" class="btn btn-success">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div className="container card-container">
                <div class="card" style={{width: 'auto'}}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f" class=" img-card" alt="description"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="www.google.com" class="btn btn-success">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div className="container card-container">
                <div class="card" style={{width: 'auto'}}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f" class=" img-card" alt="description"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="www.google.com" class="btn btn-success">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Titre numero deux __________ */}
        <div className="container text-center" style={{marginBottom: '8rem'}}>
          <h1 style={{marginTop: '8rem'}}>PLUS BELLES MARQUES</h1>
          <span className='span-style'>Les ventes qui ouvrent aujourd'hui</span>
        </div>

        {/* Second container */}
        <div class="container text-center" style={{padding: 0}}>
          <div class="row g-5">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div className="container card-container">
                <div class="card" style={{width: 'auto'}}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f" class=" img-card" alt="description"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="www.google.com" class="btn btn-success">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div className="container card-container">
                <div class="card" style={{width: 'auto'}}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f" class=" img-card" alt="description"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="www.google.com" class="btn btn-success">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div className="container card-container">
                <div class="card" style={{width: 'auto'}}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f" class=" img-card" alt="description"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="www.google.com" class="btn btn-success">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div className="container card-container">
                <div class="card" style={{width: 'auto'}}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f" class=" img-card" alt="description"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="www.google.com" class="btn btn-success">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Login et sign up section */}
        <div className="container-fluid login-signup_section" style={{marginTop: '8rem'}}>
          <div className="container">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay]}
            className="mySwiper"
            style={{padding: '3rem'}}
          >
            <SwiperSlide>
              <div className="container">
                <h1>La surprise c'est notre quotidien</h1>
                <span className='span-style'>Si, seulement 10% des ventes du jour<br/>
                  Rejoigner nous
                </span>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="container">
                <h1>La surprise c'est notre quotidien</h1>
                <span className='span-style'>Si, seulement 10% des ventes du jour<br/>
                  Rejoigner nous
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="container">
                <h1>La surprise c'est notre quotidien</h1>
                <span className='span-style'>Si, seulement 10% des ventes du jour<br/>
                  Rejoigner nous
                </span>
              </div>
            </SwiperSlide>
            </Swiper>
          </div>
          <div className="container btn-flex pb-5">
            <a href="https://www.google.com" className="btn btn-outline-light btn-lg d-inline-block">S'inscrire</a>
            <a href="https://www.google.com" className="btn btn-outline-light btn-lg d-inline-block">Se connecter</a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home