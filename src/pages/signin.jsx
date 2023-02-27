import React from 'react';
// import NavigationBar from '../components/navigationBar';
import './signin.css';
import { Link } from 'react-router-dom';
import googleLogo from '../assets/google.png';
import facebookLogo from '../assets/facebook.png';


function Signin() {
  return (
    <>
        <div className="container-fluid d-flex barre-de-navigation" id='barre-de-navigation'>
            <div className="container d-flex align-items-center">
                <Link to='/cygenete' className='text-decoration-none text-center'>
                <h1 className='logo-name mb-0'>CYNEGETE</h1>
                </Link>
                {/* <Link to='/cygenete' className='text-decoration-none text-center ms-2'>
                    <img src={logo} alt='logo' style={{width:'64px', height: '64px'}}/>
                </Link> */}
            </div>
            <div className="container d-flex align-items-center justify-content-center second-barre-de-navigation">
                {/* <input type='text' className='research-input' placeholder='Recherchez votre article ' /> */}
                <div className="container ms-2">
                <Link to='/cygenete/log-in' className='navBtn1'>Login</Link>
                </div>
                {/* <div className="container navBtn ms-2">
                <Link to="/cygenete/sign-in">S'inscrire</Link>
                </div> */}
            </div>
        </div>

            <div className="container">
                <div class="row mt-5">
                    <div className="col-md-6 d-flex justify-content-center align-itens-center left-form">
                        <div className="container left-p d-flex justify-content-center align-items-center flex-column">
                            <h3 className='text-center pt-5'>Inscrivez vous dès maintenant!</h3>
                            <span className='text-center mb-3 d-inline-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quia eos illo harum necessitatibus, nobis quo sint dolor! Reprehenderit, sapiente vel, temporibus veritatis vero est in recusandae voluptatum enim, consequuntur nulla et quaerat quidem officiis.<br/><br/>Vous avez deja un compte? Connectez vous</span>
                            <span className='mb-3 d-inline-block text-center'></span>
                            <Link to='/cygente/sign-in' class="btn btn-outline-success rounded-pill px-4 py-2 mb-3 text-center">
                                Se connecter
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 justify-content-center form-right">
                        <form action="" className='d-flex justify-content-center flex-column w-45 mt-5'>
                            <label htmlFor="Nom complet">Nom complet</label>
                            <input  type="text" name="name" id="name" className='input mb-2' placeholder='Nom complet'/>
                            <label htmlFor="Nom complet">Email</label>
                            <input  type="email" name="email" id="email" className='input mb-2' placeholder='exemple@mail.com'/>
                            <label htmlFor="Nom complet">Password</label>
                            <input  type="password" name="password" id="password" className='input mb-2' placeholder='**********'/>
                            <label htmlFor="Nom complet">Confirm password</label>
                            <input  type="password" name="confirmPassword" id="confirmPassword" className='input mb-3'placeholder='**********'/>
                            <div className="btn btn-success rounded-pill">Submit</div>
                        </form>
                        <hr />
                        <div className="container d-flex flex-column">
                            <h5 className='text-center'>Ou inscrivez vous avec</h5>
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
                </div>
            </div>
    </>
  )
}

export default Signin