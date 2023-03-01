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
// import IframeResizer from 'iframe-resizer-react';
import pic from '../assets/product.jpg';
import durex from '../assets/durex.jpg';
import iphone from '../assets/iphone1.jpg';


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
  




  
  return (
    <>
      <Header/>
      
      {/* main */}
      <main className='main'>

        <section className="section-1">
          <h1 className='text-center mt-5'>Nouveautés</h1>
          <h5 className="text-center mb-5">Lorem ipsum dolor sit amet consectetur.</h5>

          <div className="container">

            <div className="row gy-5">

              <div className="col-md-4 col-sm-2 col-lg-3 col-xl-2">
                <div class="card card-nouveautes" style={{backgroundColor: '', border: 'none', borderRadius: 'none', cursor: 'pointer'}}>
                  <img src='https://m.media-amazon.com/images/I/41o-Z4nZA+L._AC_.jpg' class="card-img-top" alt="..." style={{objectFit: 'cover'}}/>
                  <div class="card-body" style={{paddingLeft: '0px'}}>
                    <p class="card-text">
                      <span className=" fw-bold d-inline-block" style={{fontSize: '16px', lineHeight: '16px'}}>
                        PUMA Chaussettes de Sport (Lot de 6) Homme
                      </span>
                    </p>
                    <p><Link to='https://amzn.to/3Zuo8gw' className="fw-blod fs-5 card-text text-decoration-none text-bg-success text-light">12.99 €</Link></p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-2 col-lg-3 col-xl-2">
                <div class="card" style={{backgroundColor: '', border: 'none', borderRadius: 'none'}}>
                  <img src={iphone} class="card-img-top" alt="..." style={{objectFit: 'cover'}}/>
                  <div class="card-body" style={{paddingLeft: '0px'}}>
                    <p class="card-text">
                      Lorem, ipsum dolor.
                    </p>
                    <p><span className="fw-blod fs-5 card-tex">22.43$</span></p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-2 col-lg-3 col-xl-2">
                <div class="card" style={{backgroundColor: '', border: 'none', borderRadius: 'none'}}>
                  <img src={iphone} class="card-img-top" alt="..." style={{objectFit: 'cover'}}/>
                  <div class="card-body" style={{paddingLeft: '0px'}}>
                    <p class="card-text">
                      Lorem, ipsum dolor.
                    </p>
                    <p><span className="fw-blod fs-5 card-tex">22.43$</span></p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-2 col-lg-3 col-xl-2">
                <div class="card" style={{backgroundColor: '', border: 'none', borderRadius: 'none'}}>
                  <img src={iphone} class="card-img-top" alt="..."  style={{objectFit: 'cover'}}/>
                  <div class="card-body" style={{paddingLeft: '0px'}}>
                    <p class="card-text">
                      Lorem, ipsum dolor.
                    </p>
                    <p><span className="fw-blod fs-5 card-tex">22.43$</span></p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-2 col-lg-3 col-xl-2">
                <div class="card" style={{backgroundColor: '', border: 'none', borderRadius: 'none'}}>
                  <img src={iphone} class="card-img-top" alt="..."  style={{objectFit: 'cover'}}/>
                  <div class="card-body" style={{paddingLeft: '0px'}}>
                    <p class="card-text">
                      Lorem, ipsum dolor.
                    </p>
                    <p><span className="fw-blod fs-5 card-tex">22.43$</span></p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-2 col-lg-3 col-xl-2">
                <div class="card" style={{backgroundColor: '', border: 'none', borderRadius: 'none'}}>
                  <img src={iphone} class="card-img-top" alt="..."  style={{objectFit: 'cover'}}/>
                  <div class="card-body" style={{paddingLeft: '0px'}}>
                    <p class="card-text">
                      Lorem, ipsum dolor.
                    </p>
                    <p><span className="fw-blod fs-5 card-tex">22.43$</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-4">
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
            </div>
          </div>

          <h1 className='text-center mt-5'>Produits populaires</h1>
          <h5 className="text-center mb-5">Lorem ipsum dolor sit amet consectetur.</h5>

          <div className="container mt-5">
            <div className="row gy-5">
              <div className="col-sm-8 col-lg-3 col-xl-3 col-md-6">
                <div class="card" style={{backgroundColor: '', border: 'none', borderRadius: 'none'}}>
                  <img src={iphone} class="card-img-top" alt="..."  style={{objectFit: 'cover'}}/>
                  <div class="card-body" style={{paddingLeft: '0px'}}>
                    <p class="card-text">
                      Lorem, ipsum dolor.
                    </p>
                    <p><span className="fw-blod fs-5 card-tex">22.43$</span></p>
                  </div>
                </div>
              </div>

              <div className="col-sm-8 col-lg-3 col-xl-3 col-md-6">
                <div class="card" style={{backgroundColor: '', border: 'none', borderRadius: 'none'}}>
                  <img src={iphone} class="card-img-top" alt="..."  style={{objectFit: 'cover'}}/>
                  <div class="card-body" style={{paddingLeft: '0px'}}>
                    <p class="card-text">
                      Lorem, ipsum dolor.
                    </p>
                    <p><span className="fw-blod fs-5 card-tex">22.43$</span></p>
                  </div>
                </div>
              </div>

              <div className="col-sm-8 col-lg-3 col-xl-3 col-md-6">
                <div class="card" style={{backgroundColor: '', border: 'none', borderRadius: 'none'}}>
                  <img src={iphone} class="card-img-top" alt="..."  style={{objectFit: 'cover'}}/>
                  <div class="card-body" style={{paddingLeft: '0px'}}>
                    <p class="card-text">
                      Lorem, ipsum dolor.
                    </p>
                    <p><span className="fw-blod fs-5 card-tex">22.43$</span></p>
                  </div>
                </div>
              </div>

              <div className="col-sm-8 col-lg-3 col-xl-3 col-md-6">
                <div class="card" style={{backgroundColor: '', border: 'none', borderRadius: 'none'}}>
                  <img src={iphone} class="card-img-top" alt="..."  style={{objectFit: 'cover'}}/>
                  <div class="card-body" style={{paddingLeft: '0px'}}>
                    <p class="card-text">
                      Lorem, ipsum dolor.
                    </p>
                    <p><span className="fw-blod fs-5 card-tex">22.43$</span></p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <h1 className='text-center mt-5'>Nos derniers articles</h1>
          <h5 className="text-center mb-5">Lorem ipsum dolor sit amet consectetur.</h5>

          <div className="container mt-5">
            <div className="row gy-5">
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div class="card" style={{backgroundColor: '', border: 'none', borderRadius: 'none'}}>
                  <img src={iphone} class="card-img-top" alt="..."  style={{objectFit: 'cover'}}/>
                </div>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div class="card" style={{backgroundColor: '', border: 'none', borderRadius: 'none'}}>
                  <img src={iphone} class="card-img-top" alt="..."  style={{objectFit: 'cover'}}/>
                </div>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div class="card" style={{backgroundColor: '', border: 'none', borderRadius: 'none'}}>
                  <img src={iphone} class="card-img-top" alt="..."  style={{objectFit: 'cover'}}/>
                </div>
              </div>

            </div>
          </div>

          <hr />
          <h1 className='text-center'  style={{marginTop: '8rem'}}>Souscrivez à notre Newsletter</h1>
          <h5 className="text-center mb-5">Lorem ipsum dolor sit amet consectetur.</h5>

          <div className="container  d-flex justify-content-center">
            <form action="">
              <input type="email" name="email" id="email" className='email-newsletter  p-2 research-input' placeholder='exemple@mail.com'/>
              <span className="btn btn-success rounded-pill ms-4 p-2 fw-bold">Continuer</span>
            </form>
          </div>

        </section>
        

        {/* Login et sign up section */}
        <div className="container-fluid login-signup_section sign-up-banner" style={{marginTop: '8rem'}}>
          <div className="container ">
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
                <span className='fw-bold fs-3'>
                  "La surprise c'est notre quotidien"
                </span>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="container">
                <span className='fw-bold fs-3'>
                  "Cygenete c'est vous, et vous c'est nous"
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="container">
              <span className='fw-bold fs-3'>
                  Rejoigner nous
                </span>
              </div>
            </SwiperSlide>
            </Swiper>
          </div>
          <div className="container btn-flex pb-5">
            <Link  to='/cygenete/sign-in' className="btn btn-outline-light rounded-pill btn-lg d-inline-block"> S'inscrire</Link>
            <Link  to='/cygenete/log-in' className="btn btn-light rounded-pill btn-lg d-inline-block"> Se connecter</Link>
          </div>
        </div>

      </main>
      <footer>
        
      </footer>
    </>
  )
}

export default Home