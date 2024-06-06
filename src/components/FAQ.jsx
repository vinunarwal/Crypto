import React from 'react'
import '../Css/FAQ.css'

function FAQ() {
   return (
      <>
         <section id="faq" class="faq">
            <div class="container">
               <div class="row">
                  <div class="col-md-12">
                     <span class="subtitle">FAQ</span>
                     <h3 class="title_sec">Frequently Asked Questions</h3>
                     <p class="desc_sec">
                        If you could not find an answer to your questions, please contact our customer support
                     </p>
                  </div>

                  <div class="col-md-4">
                     <ul class="nav flex-column" id="myTab" role="tablist">
                        <li class="nav-item " role="presentation">
                           <button class="nav-link active btn btn-outline-faq flex" id="home-tab" data-bs-toggle="tab" data-bs-target="#platform_faq" type="button" role="tab" aria-controls="platform_faq" aria-selected="true">
                              Crypcet platform
                              <img src="https://crypcet.com/wp-content/themes/crypcet/images/arrow-right.svg" />
                           </button>
                        </li>
                        <li class="nav-item" role="presentation">
                           <button class="nav-link btn btn-outline-faq" id="profile-tab" data-bs-toggle="tab" data-bs-target="#deposit_faq" type="button" role="tab" aria-controls="deposit_faq" aria-selected="false">Funds deposit &amp; withdrawal
                              <img src="https://crypcet.com/wp-content/themes/crypcet/images/arrow-right.svg" />
                           </button></li>
                        <li class="nav-item" role="presentation">
                           <button class="nav-link btn btn-outline-faq" id="contact-tab" data-bs-toggle="tab" data-bs-target="#referral_faq" type="button" role="tab" aria-controls="referral_faq" aria-selected="false">Referral system &amp; bonuses
                              <img src="https://crypcet.com/wp-content/themes/crypcet/images/arrow-right.svg" />
                           </button></li>
                     </ul>
                  </div>

                  <div class="col-md-7 offset-md-1">
                     <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="platform_faq" role="tabpanel" aria-labelledby="home-tab">

                           <div class="accordion" id="accordionExample">
                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq11" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> What is Cloud Mining?
                                    </button>
                                 </h2>
                                 <div id="faq11" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       Cloud mining is a method of cryptocurrency mining where individuals lease computing power from remote data centers, eliminating the need to purchase and maintain hardware. Miners rent hashing power from third-party providers to participate in mining, and rewards are proportionate to the rented computing capacity.                                            </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq12" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> How do I get started with CRYPCET?
                                    </button>
                                 </h2>
                                 <div id="faq12" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       Register for a free account using your email address, then top up your account, choose the cryptocurrency you want to invest in, and start earning daily returns!
                                    </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq13" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> Can I start mining without investments?                                            </button>
                                 </h2>
                                 <div id="faq13" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       No. You must make a deposit of $5 and mining will be available.                                             </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq14" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> What coins can I mine?
                                    </button>
                                 </h2>
                                 <div id="faq14" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       Our equipment allows users to mine such cryptocurrencies as Bitcoin (BTC), Ethereum (ETH), Dogecoin (DOGE), Polygon (MATIC), Litecoin (LTC), Tron (TRX), Binance coin (BNB) and Solana (SOL)                                            </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq15" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> What is the daily profit?                                            </button>
                                 </h2>
                                 <div id="faq15" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       The daily profit depends on the amount of GH/s in your account. There are 6 levels on our platform:

                                       1 LEVEL = 1-500 GH/s (Daily: 1.8%)
                                       2 LEVEL = 500-1000 GH/s (Daily: 2.0%)
                                       3 LEVEL = 1000-3000 GH/s (Daily: 2.2%)
                                       4 LEVEL = 3000-6000 GH/s (Daily: 2.4%)
                                       5 LEVEL = 6000-20000 GH/s (Daily: 2.6%)
                                       6 LEVEL = 20000+ GH/s (Daily: 3.0%)

                                       Make deposits to receive more GH/s (1 GH/s = $0.05).                                            </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq16" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> For how long do I buy GH/s?                                            </button>
                                 </h2>
                                 <div id="faq16" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       The validity of your GH/s is unlimited.                                            </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq17" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> How to buy GH/s on the Crypcet platform?                                            </button>
                                 </h2>
                                 <div id="faq17" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       Make a deposit in any available cryptocurrency and after arriving funds on our platform, the funds will be automatically converted into GH/s and credited to your account.                                            </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq18" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> What is the price of 1 GH/s?                                            </button>
                                 </h2>
                                 <div id="faq18" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       1 GH/s = $0.05
                                       For example: if you make a deposit of 10 USDT, you will be credited 200 GH/s.                                            </div>
                                 </div>
                              </div>

                           </div>

                        </div>
                        <div class="tab-pane fade" id="deposit_faq" role="tabpanel" aria-labelledby="profile-tab">

                           <div class="accordion" id="accordionExample3">
                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq21" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> What payment methods are available on the platform?                                             </button>
                                 </h2>
                                 <div id="faq21" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample3">
                                    <div class="accordion-body">
                                       You can make a deposit on our platform with Tether TRC20, Bitcoin, Tron, Ethereum, Dogecoin, Polygon, Tron, Binance coin, Solana.                                            </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq22" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> Can I get a refund for purchased GH/s?                                             </button>
                                 </h2>
                                 <div id="faq22" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample3">
                                    <div class="accordion-body">
                                       GH/s is non-refundable. After crediting, GH/s will belong to your account forever.                                             </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq23" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> What is the minimum deposit amount?                                             </button>
                                 </h2>
                                 <div id="faq23" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample3">
                                    <div class="accordion-body">
                                       The minimum deposit amount is $5. You can see the accurate information about minimum deposit amount for each cryptocurrency in your account when replenishing the balance.                                            </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq24" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> What is the minimum withdrawal amount?                                             </button>
                                 </h2>
                                 <div id="faq24" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample3">
                                    <div class="accordion-body">
                                       The minimum withdrawal amount of earned funds is $50 in auto mode (Maximum delay is up to 5 minutes). However, for the referral balance, the minimum withdrawal amount is 5 USDT (~$5).                                             </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq25" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> How long does it take crediting funds on the Crypcet balance?                                             </button>
                                 </h2>
                                 <div id="faq25" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample3">
                                    <div class="accordion-body">
                                       After making a deposit in any cryptocurrency, funds will be credited after the network confirmation and will be automatically converted into GH/s. If funds have not been credited to your balance, contact our online chat.                                            </div>
                                 </div>
                              </div>

                           </div>

                        </div>
                        <div class="tab-pane fade" id="referral_faq" role="tabpanel" aria-labelledby="contact-tab">

                           <div class="accordion" id="accordionExample2">
                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq31" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> What is the referral program?                                             </button>
                                 </h2>
                                 <div id="faq31" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body">
                                       The referral program is a kind of cooperation, when the platform pays a client for attracting new customers. Each user has a unique link on which he can invite friends and earn 10% of each deposit.                                             </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq32" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> What is the minimum withdrawal amount from the referral balance?                                             </button>
                                 </h2>
                                 <div id="faq32" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body">
                                       The minimum withdrawal amount from the referral balance is 5 USDT.                                             </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq33" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> Can I earn from the referral program without making a deposit?                                             </button>
                                 </h2>
                                 <div id="faq33" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body">
                                       Yes, it is not prohibited by the rules of the platform.                                             </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq34" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> Is re-registration allowed?                                             </button>
                                 </h2>
                                 <div id="faq34" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body">
                                       When you re-register in order to cheat referrals, your personal account will be permanently banned.                                             </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq35" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> In what currency is the referral balance?                                             </button>
                                 </h2>
                                 <div id="faq35" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body">
                                       All payments under the referral program are made in USDT.                                             </div>
                                 </div>
                              </div>

                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq36" aria-expanded="false" aria-controls="collapseOne">
                                       <img src="https://crypcet.com/wp-content/themes/crypcet/images/orange.svg" /> Is it possible to get paid for posting a video on Youtube?                                             </button>
                                 </h2>
                                 <div id="faq36" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body">
                                       Post a video review of our platform on YouTube and get 100 GH/s to your balance                                            </div>
                                 </div>
                              </div>

                           </div>

                        </div>
                     </div>

                     <a class="standart_btn flex" href="#">
                        Read all <img src="https://crypcet.com/wp-content/themes/crypcet/images/arrow-right.svg" />
                     </a>
                  </div>

               </div>


            </div>
         </section>

      </>
   )
}

export default FAQ
