import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
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
//import iframe resizer
import IframeResizer from 'iframe-resizer-react';




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
  

  //edit iframe 
  const myIframe = document.querySelector('#myIframe');
  console.log(myIframe);

  // const iframeWindow = myIframe.querySelector("#document");
  // const iframeDocument = iframeWindow.querySelector('a');
  
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
        <IframeResizer
  log
  src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=FR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=arteindaffili-21&language=fr_FR&marketplace=amazon&region=FR&placement=B075L6TBZ5&asins=B075L6TBZ5&linkId=d713fd441f142a6cefc2ccd0fba28e08&show_border=true&link_opens_in_new_window=true"
  style={{ width: '630px', height: '240px'}}
/>
          <div class="row g-5">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div className="container card-container">
                <div class="card" style={{width: 'auto'}}>
                <iframe id='myIframe' sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"  marginwidth="0" marginheight="0"  frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=FR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=arteindaffili-21&language=fr_FR&marketplace=amazon&region=FR&placement=B075L6TBZ5&asins=B075L6TBZ5&linkId=d713fd441f142a6cefc2ccd0fba28e08&show_border=true&link_opens_in_new_window=true" title='hello'></iframe>
                
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
            <Link  to='/cygenete/sign-in' className="btn btn-outline-light btn-lg d-inline-block"> S'inscrire</Link>
            <Link  to='/cygenete/sign-in' className="btn btn-outline-light btn-lg d-inline-block"> Se connecter</Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home