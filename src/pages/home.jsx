import React, {useEffect, useState} from 'react'
import NavigationBar from '../components/navigationBar';
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
      <NavigationBar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <div className='container '>
        <div className="container">
          <h2 className='d-block text-center'>NOUVEAUTES DU JOUR</h2>
          <h5 className='d-block text-center'>Les ventes qui ouvrent aujourd'hui.</h5>
        </div>
        <div className='row gy-5 mt-5'>
          {/* {imageList.map((url)=>{
            return <div className='col-lg-6'>
                      <div className="container d-block">
                        <img src={url} alt='' style={{ height: '182px'}}/>
                        <span className='d-block p-2 bg-black text-light'style={{ cursor: 'pointer'}}>
                          <a href='' className='text-decoration-none'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, debitis? Facere, maiores.
                          </a>
                        </span>
                    </div>
          </div>
          })} */}
          <div className='col-lg-6'>
            <div className="container container_card">
              <img className='img' src='https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f' alt='' style={{ height: '182px'}}/>
              <span className='d-block span p-2 bg-black text-light'style={{ cursor: 'pointer'}}>
                <a href='https://www.google.com' className='text-decoration-none'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, debitis? Facere, maiores.
                </a>
              </span>
            </div>
          </div>
          
          
          <div className='col-lg-6'>
            <div className="container container_card">
              <img className='img' src='https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f' alt='' style={{ height: '182px'}}/>
              <span className='d-block span p-2 bg-black text-light'style={{ cursor: 'pointer'}}>
                <a href='https://www.google.com' className='text-decoration-none'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, debitis? Facere, maiores.
                </a>
              </span>
            </div>
          </div>
          
          
          <div className='col-lg-6'>
            <div className="container container_card">
              <img className='img' src='https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f' alt='' style={{ height: '182px'}}/>
              <span className='d-block span p-2 bg-black text-light'style={{ cursor: 'pointer'}}>
                <a href='https://www.google.com' className='text-decoration-none'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, debitis? Facere, maiores.
                </a>
              </span>
            </div>
          </div>
          
          
          <div className='col-lg-6'>
            <div className="container container_card">
              <img className='img' src='https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f' alt='' style={{ height: '182px'}}/>
              <span className='d-block span p-2 bg-black text-light'style={{ cursor: 'pointer'}}>
                <a href='https://www.google.com' className='text-decoration-none'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, debitis? Facere, maiores.
                </a>
              </span>
            </div>
          </div>
          
          
          <div className='col-lg-6'>
            <div className="container container_card">
              <img className='img' src='https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f' alt='' style={{ height: '182px'}}/>
              <span className='d-block span p-2 bg-black text-light'style={{ cursor: 'pointer'}}>
                <a href='https://www.google.com' className='text-decoration-none'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, debitis? Facere, maiores.
                </a>
              </span>
            </div>
          </div>
          
          
          <div className='col-lg-6'>
            <div className="container container_card">
              <img className='img' src='https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f' alt='' style={{ height: '182px'}}/>
              <span className='d-block span p-2 bg-black text-light'style={{ cursor: 'pointer'}}>
                <a href='https://www.google.com' className='text-decoration-none'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, debitis? Facere, maiores.
                </a>
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Plus belles marques */}
      <div className='container' style={{marginTop: '12rem', marginBottom: '6rem'}}>
        <div className="container">
          <h2 className='d-block text-center'>NOUVEAUTES DU JOUR</h2>
          <h5 className='d-block text-center'>Les ventes qui ouvrent aujourd'hui.</h5>
        </div>
        <div className='row gy-5 mt-5'>
          {/* {imageList.map((url)=>{
            return <div className='col-lg-6'>
                      <div className="container d-block">
                        <img src={url} alt='' style={{ height: '182px'}}/>
                        <span className='d-block p-2 bg-black text-light'style={{ cursor: 'pointer'}}>
                          <a href='' className='text-decoration-none'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, debitis? Facere, maiores.
                          </a>
                        </span>
                    </div>
          </div>
          })} */}
          <div className='col-lg-6'>
            <div className="container container_card">
              <img className='img' src='https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f' alt='' style={{ height: '182px'}}/>
              <span className='d-block span p-2 bg-black text-light'style={{ cursor: 'pointer'}}>
                <a href='https://www.google.com' className='text-decoration-none'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, debitis? Facere, maiores.
                </a>
              </span>
            </div>
          </div>
          
          
          <div className='col-lg-6'>
            <div className="container container_card">
              <img className='img' src='https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f' alt='' style={{ height: '182px'}}/>
              <span className='d-block span p-2 bg-black text-light'style={{ cursor: 'pointer'}}>
                <a href='https://www.google.com' className='text-decoration-none'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, debitis? Facere, maiores.
                </a>
              </span>
            </div>
          </div>
          
          
          <div className='col-lg-6'>
            <div className="container container_card">
              <img className='img' src='https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f' alt='' style={{ height: '182px'}}/>
              <span className='d-block span p-2 bg-black text-light'style={{ cursor: 'pointer'}}>
                <a href='https://www.google.com' className='text-decoration-none'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, debitis? Facere, maiores.
                </a>
              </span>
            </div>
          </div>
          
          
          <div className='col-lg-6'>
            <div className="container container_card">
              <img className='img' src='https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f' alt='' style={{ height: '182px'}}/>
              <span className='d-block span p-2 bg-black text-light'style={{ cursor: 'pointer'}}>
                <a href='https://www.google.com' className='text-decoration-none'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, debitis? Facere, maiores.
                </a>
              </span>
            </div>
          </div>
          
          
          <div className='col-lg-6'>
            <div className="container container_card">
              <img className='img' src='https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f' alt='' style={{ height: '182px'}}/>
              <span className='d-block span p-2 bg-black text-light'style={{ cursor: 'pointer'}}>
                <a href='https://www.google.com' className='text-decoration-none'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, debitis? Facere, maiores.
                </a>
              </span>
            </div>
          </div>
          
          
          <div className='col-lg-6'>
            <div className="container container_card">
              <img className='img' src='https://firebasestorage.googleapis.com/v0/b/cygenete.appspot.com/o/test%2F6.png?alt=media&token=6a44177f-f415-45f9-abb1-0ce7fdd1856f' alt='' style={{ height: '182px'}}/>
              <span className='d-block span p-2 bg-black text-light'style={{ cursor: 'pointer'}}>
                <a href='https://www.google.com' className='text-decoration-none'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, debitis? Facere, maiores.
                </a>
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* login sign up section */}
      <div className="container-fluid mb-5 logsection">
        <>
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
          >
            <SwiperSlide>
              <div className="container">
                <h1>La surprise c'est notre quotidien</h1>
                <span>Si, seulement 10% des ventes du jour<br/>
                  Rejoigner nous
                </span>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="container">
                <h1>La surprise c'est notre quotidien</h1>
                <span>Si, seulement 10% des ventes du jour<br/>
                  Rejoigner nous
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="container">
                <h1>La surprise c'est notre quotidien</h1>
                <span>Si, seulement 10% des ventes du jour<br/>
                  Rejoigner nous
                </span>
              </div>
            </SwiperSlide>

            </Swiper>
        </>

        <br/>
        <div className="container btn-flex pb-5">
          <a href="https://www.google.com" className="btn btn-danger d-inline-block">S'inscrire</a>
          <a href="https://www.google.com" className="btn btn-danger d-inline-block">Se connecter</a>
        </div>
      </div>
    </>
  )
}

export default Home