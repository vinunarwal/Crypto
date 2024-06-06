import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
   return (
      <>
         <section className="banner relative overflow-hidden">
            <div className="container relative">
               <div className="row">
                  <div className="col-md-6">

                     <div className="text-body" translate="no">
                        <h2>Cloud mining</h2>
                        <span className="typed">ETHEREUM</span>
                        <span className="typed-cursor">|</span>
                     </div>

                     <h3>
                        Earn up to 90% monthly &amp; 3% daily profit
                     </h3>

                     <h4>Begin your cloud mining investment, withdraw your first payout after 24 hours.</h4>

                     <div className="buttons_hero">
                        <Link to=""
                           className="btn btn-primary btn-primary-2">
                           Start mining
                           <span className="ms-2 fas fa-arrow-right"></span>
                        </Link>

                        <Link to=""
                           className="btn btn-outline-primary">
                           Profitability Calculator
                        </Link>
                     </div>


                     <Link to="" className="bonus_action" translate="no">
                        Register &amp; get<span className='block'>100 GH/s FREE</span>

                     </Link>

                  </div>

                  <div className="col-md-6 relative">
                     <div className="animation_circle">
                        <img className="animation_line1"
                           src="https://crypcet.com/wp-content/themes/crypcet/images/line1.png"
                           alt='' />
                        <img className="animation_line2"
                           src="https://crypcet.com/wp-content/themes/crypcet/images/line2.png"
                           alt='' />
                        <img className="animation_line3"
                           src="https://crypcet.com/wp-content/themes/crypcet/images/line3.png"
                           alt='' />
                        <img className="animation_line5"
                           src="https://crypcet.com/wp-content/themes/crypcet/images/line5.png"
                           alt='' />
                        <img className="animation_line4"
                           src="https://crypcet.com/wp-content/themes/crypcet/images/line4.png"
                           alt='' />
                        <img className="animation_line6"
                           src="https://crypcet.com/wp-content/themes/crypcet/images/line6.png"
                           alt='' />
                        <img className="animation_line7"
                           src="https://crypcet.com/wp-content/themes/crypcet/images/line7.png"
                           alt='' />
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </>
   );
}

export default Hero;
