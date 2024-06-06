import React from 'react'
import '../Css/Refer.css'

function Referral() {
   return (
      <div>
         <section id="referral" className="referrals">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <span className="subtitle">Referral system</span>
                     <h3 className="title_sec">Invite friends - Earn money</h3>
                     <p className="desc_sec">
                        Join our community, sign up an account, get your affiliates link.
                     </p>
                  </div>

                  <div className="col-md-6 position-relative">
                     <div className="stat_ref">
                        <div className="level_text level1">
                           Level 1
                        </div>
                        <div className="level_text level_text2">
                           Level 2
                        </div>
                        <div className="level_text level_text3">
                           For each registration
                        </div>

                        <div className="price_level_text price_level_text1">
                           <h8>
                              10<span>%</span>
                           </h8>
                        </div>

                        <div className="price_level_text price_level_text2">
                           <h8>
                              5<span>%</span>
                           </h8>
                        </div>

                        <div className="price_level_text price_level_text3">
                           <h8>
                              <span>$</span>0.02
                           </h8>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-5 offset-md-1 right_ref_block">
                     <h3>Advanced referral system</h3>

                     <p>
                        Invite your friends via personal referral link and receive 10%, 5% to your account for each of their purchases.

                        You receive a reward for each user’s purchase who registered using your link or friend’s link.
                        For each registration via your link, the partner receive $0.02
                     </p>

                     <div className="buttons_refs">
                        <a className="standart_btn flex" href="/register/">
                           Create account
                           <img src="https://crypcet.com/wp-content/themes/crypcet/images/arrow-right.svg" />
                        </a>

                        <a className="standart_btn_2" href="/#faq" translate="no">
                           FAQ
                        </a>
                     </div>

                     <div className="bonus_video">
                        <div className="header_video">
                           <h4>5 USDT REWARD!</h4>
                        </div>
                        <div className="content_video">
                           <h5>Upload a video review on Youtube and get a reward!</h5>

                           <div className="social_buttons_video">
                              <a className="tg_video flex py-2" href="https://t.me/crypcet" target="_blank">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/images/tg.svg"
                                 className='px-2' />
                                  @crypcet
                              </a>

                              <a className="standart_btn_3 flex" href="https://t.me/crypcet" target="_blank" translate="no">
                                 Send video link
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/images/arrow-right.svg" />
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>


            </div>
         </section>

      </div>
   )
}

export default Referral
