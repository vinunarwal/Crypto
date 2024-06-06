import React from 'react'
import '../Css/Dashboard.css'

function Dashboard() {
   return (
      <>
         <div className="main">
            <nav className="navbar navbar-expand navbar-light navbar-bg">
               <a className="sidebar-toggle js-sidebar-toggle">
                  <i className="hamburger align-self-center"></i>
               </a>

               <a className="logo-nav mx-auto" href="/">
                  <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/logo.svg" />
               </a>
            </nav>

            <main className="content">
               <div className='hidden '>
                  <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/0.png" />
                  <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/10.png" />
                  <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/20.png" />
                  <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/30.png" />
                  <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/40.png" />
                  <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/50.png" />
                  <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/60.png" />
                  <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/70.png" />
                  <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/80.png" />
                  <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/90.png" />
                  <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/100.png" />
               </div>

               <div className="container-fluid p-0">


                  <div className="top_header_main flex items-center justify-between mb-5">
                     <div className="top_header_main_1">
                        <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/gift.png" />

                        <div translate="no">
                           <h6>Hello, <span>vinunarwal</span></h6>

                           <div className="level_header_text new_bg_profit inline-block" translate="no">
                              Your daily profit is 1.8%
                           </div>
                        </div>
                     </div>
                     <div className="top_header_main_2">
                        <div className="level_header_text_flex">
                           <div className="level_header_text">
                              Level 1            </div>
                        </div>

                        <div className="text_level_next">
                           <h5>To next level left:</h5>
                           <h4 translate="no">400 GH/s</h4>
                        </div>
                     </div>
                     <div className="top_header_main_3">
                        <img className="wallet_btc" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/wallet_btc.png" />

                        <div className="current_balance current_balance_new" data-second="0" data-price="68355.43920677">
                           <div>
                              <h6 translate="no">$<div className="dollar_now inline-block" data-second="0.00000000" data-price="68355.43920677">0.00000000</div> </h6>
                              <h5 translate="no">~ <div className="btc_now inline-block">0.00000000</div> BTC</h5>
                           </div>

                           <a href="/mining/deposit/#deposit" className="deposit_btn">
                              <img src="/admin/img/deposit_icon.svg" /> Deposit +20%

                              <div className="tooltip_custom">
                                 <span className="countdown_end notranslate" translate="no" data-end="">00:00:00</span>
                                 <h7>Hurry up to get the bonus!</h7>
                                 <span className="triangle"></span>
                              </div>
                           </a>
                           <a href="/mining/deposit/#deposit" className="deposit_btn">
                              <img src="/admin/img/deposit_icon.svg" /> Deposit +200%
                           </a>

                           <a href="#" className="deposit_btn" data-bs-toggle="modal" data-bs-target="#depositModal">
                              <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/deposit_icon.svg" /> Deposit
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="balancing">
                     <div className="balancing_block balancing_block_1">
                        <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/balance_1_icon.png" />

                        <div className="balance_text">
                           <h6 translate="no">GPU balance</h6>
                           <h5 translate="no">100 <small>GH/s</small></h5>
                           <span className="price_one_ghs" translate="no">1 GH/s = $0.05</span>
                        </div>
                     </div>
                     <div className="balancing_block balancing_block_2">
                        <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/balance_2_icon.png" />

                        <div className="balance_text">
                           <h6>Capacity available</h6>
                           <h5><div className="available_hash inline-block">100</div>%</h5>
                        </div>
                     </div>
                     <div className="balancing_block balancing_block_3">
                        <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/balance_3_icon.png" />

                        <div className="balance_text">
                           <h6>Capacities used</h6>
                           <h5><div className="used_hash inline-block">0</div>%</h5>
                        </div>
                     </div>
                  </div>



                  <div className="col-md-12">
                     <div className="bonus_section bonus_section_new">
                        <span>Connect your active TRUST WALLET for quick withdrawals</span>

                        <a href="#" className="deposit_btn" data-bs-toggle="modal" data-bs-target="#trustModal">
                           Connect now
                        </a>
                     </div>
                  </div>

                  <div className="col-md-12">
                     <div className="bonus_section bonus_section_new">
                        <span>Make a deposit from $in any cryptocurrency to get LEVEL </span>

                        <a href="#" className="deposit_btn" data-bs-toggle="modal" data-bs-target="#depositModal">
                           <img src="/admin/img/deposit_icon.svg" /> Get LEVEL        </a>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="bonus_section">
                        <span>Make a deposit from $1000 and get 5000 GH/s FREE</span>

                        <a href="#" className="deposit_btn" data-bs-toggle="modal" data-bs-target="#depositModal">
                           <img src="/admin/img/deposit_icon.svg" /> Get 500 GH/s FREE
                        </a>
                     </div>
                  </div>

                  <div className="row">
                     <div className="col-md-4">
                        <div className="bonus_section">
                           <span>Make a deposit in any cryptocurrency from $20 and get 500 GH/s FREE</span>

                           <a href="#" className="deposit_btn" data-bs-toggle="modal" data-bs-target="#depositModal">
                              <img src="/admin/img/deposit_icon.svg" /> Get 500 GH/s FREE
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="bonus_section">
                           <span>Make a deposit in any cryptocurrency from $100 and get 3000 GH/s FREE</span>

                           <a href="#" className="deposit_btn" data-bs-toggle="modal" data-bs-target="#depositModal">
                              <img src="/admin/img/deposit_icon.svg" /> Get 3000 GH/s FREE
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="bonus_section">
                           <span>Make a deposit in any cryptocurrency from $1000 and get 5000 GH/s FREE</span>

                           <a href="#" className="deposit_btn" data-bs-toggle="modal" data-bs-target="#depositModal">
                              <img src="/admin/img/deposit_icon.svg" /> Get 5000 GH/s FREE
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="row">
                     <div className="col-md-4">
                        <div className="bonus_section">
                           <span>Make a deposit in any cryptocurrency from $20 and get 500 GH/s FREE</span>

                           <a href="#" className="deposit_btn" data-bs-toggle="modal" data-bs-target="#depositModal">
                              <img src="/admin/img/deposit_icon.svg" /> Get 500 GH/s FREE
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="bonus_section">
                           <span>Make a deposit in any cryptocurrency from $100 and get 3000 GH/s FREE</span>

                           <a href="#" className="deposit_btn" data-bs-toggle="modal" data-bs-target="#depositModal">
                              <img src="/admin/img/deposit_icon.svg" /> Get 3000 GH/s FREE
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="bonus_section">
                           <span>Make a deposit in any cryptocurrency from $1000 and get 5000 GH/s FREE</span>

                           <a href="#" className="deposit_btn" data-bs-toggle="modal" data-bs-target="#depositModal">
                              <img src="/admin/img/deposit_icon.svg" /> Get 5000 GH/s FREE
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-12">
                        <div className="additional_text">
                           * Make a deposit and get GH/s to mine the cryptocurrency faster <small>(1 GH/s = $0.05)</small>
                        </div>
                     </div>

                     <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-3 d-flex">
                        <div className="mining_block" data-price="68355.43920677" data-crypto="btc" data-name="Bitcoin" data-second="0">

                           <div className="preloader_mining">
                              <i className="fa fa-circle-o-notch fa-spin btn_loading ml-[15px]"></i>
                           </div>

                           <div className="mining_header" translate="no">
                              <div className="mining_header_icon">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/icons/btc.png" />
                                 Bitcoin
                              </div>
                            
                              
                           </div>

                           <div className="main_mining" translate="no">
                              <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/0.png" />

                              <div className="gpu_used">
                                 <div className="percent_text"><div className="percent_mine inline-block ">0</div>%</div>
                                 <div className="gpu_used_text">GPU used</div>
                              </div>
                           </div>

                           <div className="add_btns">
                              <a href="#" className="left_gpu" data-action="minus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/minus.png" />
                              </a>
                              <div>Press to add</div>
                              <a href="#" className="add_gpu" data-action="plus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/plus.png" />
                              </a>
                           </div>

                           <div className="crypto_mine_balance" translate="no">
                              <h5>
                                 <div className="mine_balancing inline-block" >0.000000000000</div>
                                 <span>BTC</span>
                              </h5>
                           </div>

                           <div className="available_mine">
                              Available to withdraw
                           </div>

                           <div className="mining_buttons">
                              <button className="tether_btn">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/tether.svg" />
                                 <div className="btn_preload">
                                    <span>Exchange to USDT</span>
                                    <img className="arrow_mine" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                                 </div>

                                 <i className="fa fa-circle-o-notch fa-spin btn_loading"></i>
                              </button>

                              <a href="/mining/withdraw/#withdraw" className="crypto_btn" data-price="68355.43920677" data-crypto="btc">
                                 <span>Withdraw</span>
                                 <img className="arrow_mine" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-3 d-flex">
                        <div className="mining_block" data-price="3858.00692722" data-crypto="eth" data-name="Ethereum" data-second="0">

                           <div className="preloader_mining">
                              <i className="fa fa-circle-o-notch fa-spin btn_loading"></i>
                           </div>

                           <div className="mining_header" translate="no">
                              <div className="mining_header_icon">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/icons/eth.png" />
                                 Ethereum
                              </div>
                              <a href="#" className="mining_header_reinvest" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                              //   aria-label="<div className='tooltip_new_content'></div>
                              //<b style='margin-top:0;'>1 GH/s = $0.05</b>
                              //<div style='text-align:center;margin-bottom:-20px;'>
                              //Make a deposit to buy GH/s and speed up cryptocurrency mining
                              //</div>
                              //<b style='display:flex;align-items:center;'>Profit per day: 
                              //<div className='day_profit_info'  translate='no'>0.00000000</div> ETH</b></div>"
                              //data-bs-original-title="<div className='tooltip_new_content'></div><b style='margin-top:0;'>1 GH/s = $0.05</b><div style='text-align:center;margin-bottom:-20px;'>Make a deposit to buy GH/s and speed up cryptocurrency mining</div><b style='display:flex;align-items:center;'>Profit per day: <div className='day_profit_info'  translate='no'>0.00000000</div> ETH</b></div>"
                              >
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/reinvest.svg?v=1716912234" />
                              </a>
                           </div>

                           <div className="main_mining" translate="no">
                              <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/0.png" />

                              <div className="gpu_used">
                                 <div className="percent_text ">
                                    <div className="percent_mine inline-block">0</div>%</div>
                                 <div className="gpu_used_text">GPU used</div>
                              </div>
                           </div>

                           <div className="add_btns">
                              <a href="#" className="left_gpu" data-action="minus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/minus.png" />
                              </a>
                              <div>Press to add</div>
                              <a href="#" className="add_gpu" data-action="plus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/plus.png" />
                              </a>
                           </div>

                           <div className="crypto_mine_balance" translate="no">
                              <h5>
                                 <div className="mine_balancing inline-block">0.000000000000</div>
                                 <span>ETH</span>
                              </h5>
                           </div>

                           <div className="available_mine">
                              Available to withdraw
                           </div>

                           <div className="mining_buttons">
                              <a href="#" className="tether_btn">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/tether.svg" />
                                 <span>Exchange to USDT</span>
                                 <img className="arrow_mine"
                                    src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>

                              <a href="/mining/withdraw/#withdraw" className="crypto_btn" data-price="68355.43920677" data-crypto="eth">
                                 <span>Withdraw</span>
                                 <img className="arrow_mine"
                                    src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-3 d-flex">
                        <div className="mining_block" data-price="0.16387368" data-crypto="doge" data-name="Dogecoin" data-second="0">

                           <div className="preloader_mining">
                              <i className="fa fa-circle-o-notch fa-spin btn_loading"></i>
                           </div>


                           <div className="mining_header" translate="no">
                              <div className="mining_header_icon">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/icons/doge.png" />
                                 Dogecoin
                              </div>
                              <a href="#" className="mining_header_reinvest" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                              // aria-label="<div className='tooltip_new_content'></div><b style='margin-top:0;'>1 GH/s = $0.05</b><div style='text-align:center;margin-bottom:-20px;'>Make a deposit to buy GH/s and speed up cryptocurrency mining</div><b style='display:flex;align-items:center;'>Profit per day: <div className='day_profit_info'  translate='no'>0.00000000</div> DOGE</b></div>"
                              //  data-bs-original-title="<div className='tooltip_new_content'></div><b style='margin-top:0;'>1 GH/s = $0.05</b><div style='text-align:center;margin-bottom:-20px;'>Make a deposit to buy GH/s and speed up cryptocurrency mining</div><b style='display:flex;align-items:center;'>Profit per day: <div className='day_profit_info'  translate='no'>0.00000000</div> DOGE</b></div>"
                              >
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/reinvest.svg?v=1716912234" />
                              </a>
                           </div>

                           <div className="main_mining" translate="no">
                              <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/0.png" />

                              <div className="gpu_used">
                                 <div className="percent_text">
                                    <div className="percent_mine inline-block">0</div>%</div>
                                 <div className="gpu_used_text">GPU used</div>
                              </div>
                           </div>

                           <div className="add_btns">
                              <a href="#" className="left_gpu" data-action="minus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/minus.png" />
                              </a>
                              <div>Press to add</div>
                              <a href="#" className="add_gpu" data-action="plus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/plus.png" />
                              </a>
                           </div>

                           <div className="crypto_mine_balance" translate="no">
                              <h5>
                                 <div className="mine_balancing inline-block">0.000000000000</div> <span>DOGE</span>
                              </h5>
                           </div>

                           <div className="available_mine">
                              Available to withdraw
                           </div>

                           <div className="mining_buttons">
                              <a href="#" className="tether_btn">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/tether.svg" />
                                 <span>Exchange to USDT</span>
                                 <img className="arrow_mine"
                                    src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>

                              <a href="/mining/withdraw/#withdraw" className="crypto_btn" data-price="68355.43920677" data-crypto="doge">
                                 <span>Withdraw</span>
                                 <img className="arrow_mine"
                                    src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-3 d-flex">
                        <div className="mining_block" data-price="0.73420444" data-crypto="matic" data-name="Polygon" data-second="0">

                           <div className="preloader_mining">
                              <i className="fa fa-circle-o-notch fa-spin btn_loading"></i>
                           </div>

                           <div className="mining_header" translate="no">
                              <div className="mining_header_icon">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/icons/matic.png" />
                                 Polygon
                              </div>
                              <a href="#" className="mining_header_reinvest" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                              // aria-label="<div className='tooltip_new_content'></div><b style='margin-top:0;'>1 GH/s = $0.05</b><div style='text-align:center;margin-bottom:-20px;'>Make a deposit to buy GH/s and speed up cryptocurrency mining</div><b style='display:flex;align-items:center;'>Profit per day: <div className='day_profit_info'  translate='no'>0.00000000</div> MATIC</b></div>" 
                              // data-bs-original-title="<div className='tooltip_new_content'></div><b style='margin-top:0;'>1 GH/s = $0.05</b><div style='text-align:center;margin-bottom:-20px;'>Make a deposit to buy GH/s and speed up cryptocurrency mining</div><b style='display:flex;align-items:center;'>Profit per day: <div className='day_profit_info'  translate='no'>0.00000000</div> MATIC</b></div>"
                              >
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/reinvest.svg?v=1716912234" />
                              </a>
                           </div>

                           <div className="main_mining" translate="no">
                              <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/0.png" />

                              <div className="gpu_used">
                                 <div className="percent_text"><div className="percent_mine  inline-block">0</div>%</div>
                                 <div className="gpu_used_text">GPU used</div>
                              </div>
                           </div>

                           <div className="add_btns">
                              <a href="#" className="left_gpu" data-action="minus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/minus.png" />
                              </a>
                              <div>Press to add</div>
                              <a href="#" className="add_gpu" data-action="plus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/plus.png" />
                              </a>
                           </div>

                           <div className="crypto_mine_balance" translate="no">
                              <h5>
                                 <div className="mine_balancing  inline-block">0.000000000000</div>
                                 <span>MATIC</span>
                              </h5>
                           </div>

                           <div className="available_mine">
                              Available to withdraw
                           </div>

                           <div className="mining_buttons">
                              <a href="#" className="tether_btn">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/tether.svg" />
                                 <span>Exchange to USDT</span>
                                 <img className="arrow_mine" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>

                              <a href="/mining/withdraw/#withdraw" className="crypto_btn" data-price="68355.43920677" data-crypto="matic">
                                 <span>Withdraw</span>
                                 <img className="arrow_mine" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-3 d-flex">
                        <div className="mining_block" data-price="82.92522770" data-crypto="ltc" data-name="Litecoin" data-second="0">

                           <div className="preloader_mining">
                              <i className="fa fa-circle-o-notch fa-spin btn_loading"></i>
                           </div>

                           <div className="unlock_block">
                              <img className="unlock_icon" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/icons/ltc.png" />
                              <h6 translate="no">Litecoin</h6>
                              <h6>Available from level 2 </h6>

                              <a href="/mining/deposit/#deposit" className="unlock_btn">
                                 Unlock <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>
                           </div>


                           <div className="mining_header" translate="no">
                              <div className="mining_header_icon">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/icons/ltc.png" />
                                 Litecoin
                              </div>
                              <a href="#" className="mining_header_reinvest" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                              //aria-label="<div className='tooltip_new_content'></div><b style='margin-top:0;'>1 GH/s = $0.05</b><div style='text-align:center;margin-bottom:-20px;'>Make a deposit to buy GH/s and speed up cryptocurrency mining</div><b style='display:flex;align-items:center;'>Profit per day: <div className='day_profit_info'  translate='no'>0.00000000</div> LTC</b></div>"
                              // data-bs-original-title="<div className='tooltip_new_content'></div><b style='margin-top:0;'>1 GH/s = $0.05</b><div style='text-align:center;margin-bottom:-20px;'>Make a deposit to buy GH/s and speed up cryptocurrency mining</div><b style='display:flex;align-items:center;'>Profit per day: <div className='day_profit_info'  translate='no'>0.00000000</div> LTC</b></div>"
                              >
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/reinvest.svg?v=1716912234" />
                              </a>
                           </div>

                           <div className="main_mining" translate="no">
                              <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/0.png" />

                              <div className="gpu_used">
                                 <div className="percent_text">
                                    <div className="percent_mine inline-block">0</div>%</div>
                                 <div className="gpu_used_text">GPU used</div>
                              </div>
                           </div>

                           <div className="add_btns">
                              <a href="#" className="left_gpu" data-action="minus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/minus.png" />
                              </a>
                              <div>Press to add</div>
                              <a href="#" className="add_gpu" data-action="plus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/plus.png" />
                              </a>
                           </div>

                           <div className="crypto_mine_balance" translate="no">
                              <h5>
                                 <div className="mine_balancing inline-block">0.000000000000</div>
                                 <span>LTC</span>
                              </h5>
                           </div>

                           <div className="available_mine">
                              Available to withdraw
                           </div>

                           <div className="mining_buttons">
                              <a href="#" className="tether_btn">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/tether.svg" />
                                 <span>Exchange to USDT</span>
                                 <img className="arrow_mine" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>

                              <a href="/mining/withdraw/#withdraw"
                                 className="crypto_btn" data-price="68355.43920677" data-crypto="ltc">
                                 <span>Withdraw</span>
                                 <img className="arrow_mine"
                                    src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-3 d-flex">
                        <div className="mining_block" data-price="0.11108487" data-crypto="trx" data-name="Tron" data-second="0">

                           <div className="preloader_mining">
                              <i className="fa fa-circle-o-notch fa-spin btn_loading"></i>
                           </div>


                           <div className="unlock_block">
                              <img className="unlock_icon"
                                 src="https://crypcet.com/wp-content/themes/crypcet/admin/img/icons/trx.png" />
                              <h6 translate="no">Tron</h6>
                              <h6>Available from level 3 </h6>

                              <a href="/mining/deposit/#deposit" className="unlock_btn">
                                 Unlock
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>
                           </div>



                           <div className="mining_header" translate="no">
                              <div className="mining_header_icon">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/icons/trx.png" />
                                 Tron
                              </div>
                              <a href="#" className="mining_header_reinvest" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                              //aria-label="<div className='tooltip_new_content'></div><b style='margin-top:0;'>1 GH/s = $0.05</b><div style='text-align:center;margin-bottom:-20px;'>Make a deposit to buy GH/s and speed up cryptocurrency mining</div><b style='display:flex;align-items:center;'>Profit per day: <div className='day_profit_info'  translate='no'>0.00000000</div> TRX</b></div>" 
                              //data-bs-original-title="<div className='tooltip_new_content'></div><b style='margin-top:0;'>1 GH/s = $0.05</b><div style='text-align:center;margin-bottom:-20px;'>Make a deposit to buy GH/s and speed up cryptocurrency mining</div><b style='display:flex;align-items:center;'>Profit per day: <div className='day_profit_info'  translate='no'>0.00000000</div> TRX</b></div>"
                              >
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/reinvest.svg?v=1716912234" />
                              </a>
                           </div>

                           <div className="main_mining" translate="no">
                              <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/0.png" />

                              <div className="gpu_used">
                                 <div className="percent_text"><div className="percent_mine inline-block">0</div>%</div>
                                 <div className="gpu_used_text">GPU used</div>
                              </div>
                           </div>

                           <div className="add_btns">
                              <a href="#" className="left_gpu" data-action="minus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/minus.png" />
                              </a>
                              <div>Press to add</div>
                              <a href="#" className="add_gpu" data-action="plus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/plus.png" />
                              </a>
                           </div>

                           <div className="crypto_mine_balance" translate="no">
                              <h5>
                                 <div className="mine_balancing inline-block">0.000000000000</div> <span>TRX</span>
                              </h5>
                           </div>

                           <div className="available_mine">
                              Available to withdraw
                           </div>

                           <div className="mining_buttons">
                              <a href="#" className="tether_btn">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/tether.svg" />
                                 <span>Exchange to USDT</span>
                                 <img className="arrow_mine" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>

                              <a href="/mining/withdraw/#withdraw" className="crypto_btn" data-price="68355.43920677" data-crypto="trx">
                                 <span>Withdraw</span>
                                 <img className="arrow_mine" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-3 d-flex">
                        <div className="mining_block" data-price="601.38559338" data-crypto="bnb" data-name="Binance coin" data-second="0">

                           <div className="preloader_mining">
                              <i className="fa fa-circle-o-notch fa-spin btn_loading"></i>
                           </div>

                           <div className="unlock_block">
                              <img className="unlock_icon" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/icons/bnb.png" />
                              <h6 translate="no">Binance coin</h6>
                              <h6>Available from level 4 </h6>

                              <a href="/mining/deposit/#deposit" className="unlock_btn">
                                 Unlock <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>
                           </div>



                           <div className="mining_header" translate="no">
                              <div className="mining_header_icon">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/icons/bnb.png" />
                                 Binance coin
                              </div>
                              <a href="#" className="mining_header_reinvest" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                              // aria-label="<div className='tooltip_new_content'></div><b style='margin-top:0;'>1 GH/s = $0.05</b><div style='text-align:center;margin-bottom:-20px;'>Make a deposit to buy GH/s and speed up cryptocurrency mining</div><b style='display:flex;align-items:center;'>Profit per day: <div className='day_profit_info'  translate='no'>0.00000000</div> BNB</b></div>"
                              //  data-bs-original-title="<div className='tooltip_new_content'></div><b style='margin-top:0;'>1 GH/s = $0.05</b><div style='text-align:center;margin-bottom:-20px;'>Make a deposit to buy GH/s and speed up cryptocurrency mining</div><b style='display:flex;align-items:center;'>Profit per day: <div className='day_profit_info'  translate='no'>0.00000000</div> BNB</b></div>"
                              >
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/reinvest.svg?v=1716912234" />
                              </a>
                           </div>

                           <div className="main_mining" translate="no">
                              <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/0.png" />

                              <div className="gpu_used">
                                 <div className="percent_text"><div className="percent_mine inline-block">0</div>%</div>
                                 <div className="gpu_used_text">GPU used</div>
                              </div>
                           </div>

                           <div className="add_btns">
                              <a href="#" className="left_gpu" data-action="minus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/minus.png" />
                              </a>
                              <div>Press to add</div>
                              <a href="#" className="add_gpu" data-action="plus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/plus.png" />
                              </a>
                           </div>

                           <div className="crypto_mine_balance" translate="no">
                              <h5>
                                 <div className="mine_balancing inline-block">0.000000000000</div>
                                 <span>BNB</span>
                              </h5>
                           </div>

                           <div className="available_mine">
                              Available to withdraw
                           </div>

                           <div className="mining_buttons">
                              <a href="#" className="tether_btn">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/tether.svg" />
                                 <span>Exchange to USDT</span>
                                 <img className="arrow_mine" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>

                              <a href="/mining/withdraw/#withdraw" className="crypto_btn" data-price="68355.43920677" data-crypto="bnb">
                                 <span>Withdraw</span>
                                 <img className="arrow_mine" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-xxl-3 col-lg-4 col-md-3 d-flex">
                        <div className="mining_block" data-price="168.22068791" data-crypto="sol" data-name="Solana" data-second="0">

                           <div className="preloader_mining">
                              <i className="fa fa-circle-o-notch fa-spin btn_loading"></i>
                           </div>

                           <div className="unlock_block">
                              <img className="unlock_icon" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/icons/sol.png" />
                              <h6 translate="no">Solana</h6>
                              <h6>Available from level 4 </h6>

                              <a href="/mining/deposit/#deposit" className="unlock_btn">
                                 Unlock <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>
                           </div>


                           <div className="mining_header" translate="no">
                              <div className="mining_header_icon">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/icons/sol.png" />
                                 Solana
                              </div>
                              <a href="#" className="mining_header_reinvest" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true"
                              // aria-label="<div className='tooltip_new_content'></div><b style='margin-top:0;'>1 GH/s = $0.05</b><div style='text-align:center;margin-bottom:-20px;'>Make a deposit to buy GH/s and speed up cryptocurrency mining</div><b style='display:flex;align-items:center;'>Profit per day: <div className='day_profit_info'  translate='no'>0.00000000</div> SOL</b></div>"
                              //  data-bs-original-title="<div className='tooltip_new_content'></div><b style='margin-top:0;'>1 GH/s = $0.05</b><div style='text-align:center;margin-bottom:-20px;'>Make a deposit to buy GH/s and speed up cryptocurrency mining</div><b style='display:flex;align-items:center;'>Profit per day: <div className='day_profit_info'  translate='no'>0.00000000</div> SOL</b></div>"
                              >
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/reinvest.svg?v=1716912234" />
                              </a>
                           </div>

                           <div className="main_mining" translate="no">
                              <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/loader/0.png" />

                              <div className="gpu_used">
                                 <div className="percent_text"><div className="percent_mine inline-block">0</div>%</div>
                                 <div className="gpu_used_text">GPU used</div>
                              </div>
                           </div>

                           <div className="add_btns">
                              <a href="#" className="left_gpu" data-action="minus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/minus.png" />
                              </a>
                              <div>Press to add</div>
                              <a href="#" className="add_gpu" data-action="plus">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/plus.png" />
                              </a>
                           </div>

                           <div className="crypto_mine_balance" translate="no">
                              <h5>
                                 <div className="mine_balancing inline-block">0.000000000000</div> <span>SOL</span>
                              </h5>
                           </div>

                           <div className="available_mine">
                              Available to withdraw
                           </div>

                           <div className="mining_buttons">
                              <a href="#" className="tether_btn">
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/admin/img/tether.svg" />
                                 <span>Exchange to USDT</span>
                                 <img className="arrow_mine" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>

                              <a href="/mining/withdraw/#withdraw" className="crypto_btn" data-price="68355.43920677" data-crypto="sol">
                                 <span>Withdraw</span>
                                 <img className="arrow_mine" src="https://crypcet.com/wp-content/themes/crypcet/admin/img/arrow_mine.svg" />
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>

            </main>
         </div>

      </>
   )
}

export default Dashboard
