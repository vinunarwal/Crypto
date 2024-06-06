import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <>
         <header className="navigation">
            <nav className="navbar navbar-expand-xl text-center py-md-3">
               <div className="container">
                  <Link to='' className="navbar-brand">
                     <img loading="prelaod" decoding="async"
                        className="img-fluid"
                        src="https://crypcet.com/wp-content/themes/crypcet/images/logo.svg"
                        alt="Crypcet"
                     />
                  </Link>
                  <button className="navbar-toggler"
                     type="button" data-bs-toggle="collapse"
                     data-bs-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <i className="fa-solid fa-bars"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <Link to='' className="nav-link" >
                              <img src="https://crypcet.com/wp-content/themes/crypcet/images/menu1.svg" />
                              About us
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link to='' className="nav-link" >
                              <img src="https://crypcet.com/wp-content/themes/crypcet/images/menu2.svg" />
                              Calculator
                           </Link>
                        </li>
                        <li className="nav-item">
                           <Link to='' className="nav-link" >
                              <img src="https://crypcet.com/wp-content/themes/crypcet/images/menu3.svg" />
                              Refferal Program
                           </Link>
                        </li>
                        <li className="nav-item" translate="no">
                           <Link to='' className="nav-link">
                              <img src="https://crypcet.com/wp-content/themes/crypcet/images/menu4.svg" />
                              FAQ
                           </Link>
                        </li>

                        <li className="nav-item" translate="no">
                           <a className="nav-link" href="/#contact">
                              <img src="https://crypcet.com/wp-content/themes/crypcet/images/menu5.svg" />
                              Contact Us</a>
                        </li>
                     </ul>

                     <Link to="" className="btn btn-outline-primary">Log In</Link>
                     <Link to="" className="btn btn-primary ms-2 ms-lg-3">
                        <img
                           src="https://crypcet.com/wp-content/themes/crypcet/images/signup.svg /"
                        />
                        Register
                     </Link>
                  </div>
               </div>
            </nav>
         </header>
      </>
   );
}

export default Navbar;
