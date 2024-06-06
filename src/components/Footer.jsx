import React from 'react'
import '../Css/Footer.css'

function Footer() {
   return (
      <>
         <section className="top_footer_sec">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="top_footer">
                        <a href="/">
                           <img src="https://crypcet.com/wp-content/themes/crypcet/images/logo.svg" />
                        </a>

                        <h6>Crypto mining farm</h6>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <footer>
            <div className="container">
               <div className="row">
                  <div className="footer_content">
                     <div>
                        <p className=''>
                           Our dedicated team of experts, coupled with cutting-edge technology, enables us to curate a curated of top-tier Cloud Mining investment projects, ensuring that your investment journey is both rewarding and secure.
                        </p>

                        <a href="/login/" className="btn btn-outline-primary">Log In</a>
                        <a href="/register/" className="btn btn-primary ms-2 ms-lg-3 px-4">
                           <img src="https://crypcet.com/wp-content/themes/crypcet/images/signup.svg"
                           className='px-2'
                           />
                            Register</a>
                     </div>
                     <div >
                        <ul className=''>
                           <li><a href="/#about">About us</a></li>
                           <li><a href="/calculator/">Profitability calculator</a></li>
                           <li><a href="/#referral">Referral Program</a></li>
                           <li><a href="/#faq">Frequently asked questions</a></li>
                           <li><a href="/#contact">Contact Us</a></li>
                        </ul>
                     </div>
                     <div>
                        <h4>Download our application</h4>

                        <a href="/ios/" className="app_link">
                           <img src="https://crypcet.com/wp-content/themes/crypcet/images/apple.svg" />
                           <div className="app_content_link">
                              <h4>Application</h4>
                              <h2>For IOS</h2>
                           </div>
                        </a>

                        <a href="/android/" className="app_link">
                           <img src="https://crypcet.com/wp-content/themes/crypcet/images/android.svg" />
                           <div className="app_content_link">
                              <h4>Application</h4>
                              <h2>For Android</h2>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
         <section className="bottom_footer_sec">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <span>© 2024, All Rights Reserved</span>
                  </div>
               </div>
            </div>
         </section>

      </>
   )
}

export default Footer
