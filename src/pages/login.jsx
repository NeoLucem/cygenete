import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../assets/google.png';
import facebookLogo from '../assets/facebook.png';
import './login.css';
import cygenetelogo from '../assets/cygenetelogo0.png';


function Login() {
  return (
    <>
        <div className="container-fluid d-flex py-2 justify-content-between" id='barre-de-navigation'>
            <div className="container d-flex align-items-center" style={{padding: 0}}>
                <Link to='/cygenete' className='text-decoration-none text-center'>
                {/* <h1 className='logo-name mb-0'>CYNEGETE</h1> */}
                <img className='title-logo' src={cygenetelogo} alt="title" style={{width: '260px', height: '60px', objectFit: 'cover'}} srcset="" />

                </Link>
                {/* <Link to='/cygenete' className='text-decoration-none text-center ms-2'>
                    <img src={logo} alt='logo' style={{width:'64px', height: '64px'}}/>
                </Link> */}
            </div>
            <div className="container d-flex align-items-center justify-content-center second-barre-de-navigation" style={{padding: 0}}>
                {/* <input type='text' className='research-input' placeholder='Recherchez votre article ' /> */}
                <div className="container ms-2">
                <Link to='/cygenete/sign-in' className='navBtn1'>Signin</Link>
                </div>
                {/* <div className="container navBtn ms-2">
                <Link to="/cygenete/sign-in">S'inscrire</Link>
                </div> */}
            </div>
        </div>

        <section className="container d-flex justify-content-center align-items-center" style={{height: '90vh'}}>
                <div className="container text-center log-container"  style={{width: '500px'}}>
                    <h5 className='mb-5 fw-lighter'>Connectez vous à Cynegete</h5>

                    <form action="" className='d-flex justify-content-center align-items-center flex-column'>
                        <input className='mb-2 input-field' type="email" name="email" id="email" placeholder='exemple@mail.com'/>
                        <input className='mb-2 input-field' type="password" name="password" id="password" placeholder='Mot de passe' />
                        <div className="btn btn-success rounded-pill" style={{width: '15rem'}}>Continuer</div>
                    </form>

                    <div className="container w-50">
                        <hr />
                        <h5>Connectez vous avec</h5>
                        <div type="button" class="btn btn-outline-success rounded-pill px-4 py-2 d-flex justify-content-center mb-3">
                            <img src={googleLogo} width={22} alt="google" srcset="" />
                                <span className='ms-2'>Google</span>
                        </div>
                        
                        <div type="button" class="btn btn-outline-success rounded-pill px-4 py-2 d-flex justify-content-center">
                            <img src={facebookLogo} width={22} alt="google" srcset="" />
                                <span className='ms-2'>Facebook</span>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Login