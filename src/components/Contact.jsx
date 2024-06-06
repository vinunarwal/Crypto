import React from 'react'
import '../Css/Contact.css'

function Contact() {
   return (
      <>
         <section id="contact" className="contact">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <span className="subtitle">Contact us</span>
                     <h3 className="title_sec">Get In Touch with Us</h3>
                     <p className="desc_sec">
                        Have a question? Need help? Don't hesitate, drop us a line
                     </p>
                  </div>
               </div>

               <div className="row contact_bg">
                  <div className="col-md-5">
                     <img className="img-fluid"
                      src="https://crypcet.com/wp-content/themes/crypcet/images/contact_img.png" />
                  </div>

                  <div className="col-md-6 offset-md-1">
                     <form className="contact_form">
                        <h4>Send us a message!</h4>

                        <div className="contact_info">
                           <div className="contact_info_block">
                              <i className="fa-solid fa-at"></i>
                               <a href="#">support@crypcet.com</a>
                           </div>

                           <div className="contact_info_block">
                              <i className="fa-solid fa-phone-volume"></i>
                              <a href="#">+61 4 1234 5678</a>
                           </div>
                        </div>


                        <div className="col-md-12">
                           <div className="input_field">
                              <i className="fa-solid fa-user-pen"></i>
                              <input id="contact_name" type="text" placeholder="Enter your name" autocomplete="off" required="" />
                           </div>
                        </div>
                        <div className="col-md-12">
                           <div className="input_field">
                              <i className="fa-solid fa-envelope"></i>
                              <input id="contact_email" type="email" placeholder="Enter your email" autocomplete="off" required="" />
                           </div>
                        </div>
                        <div className="col-md-12">
                           <div className="input_field textarea_field">
                              <i className="fa-solid fa-comments-dollar"></i>
                              <textarea id="contact_message" placeholder="Enter your message" autocomplete="off" required="" ></textarea>
                           </div>
                        </div>

                        <div className="send_ok">
                           We will respond to your email within a few hours
                        </div>

                        <div className="col-md-12">
                           <button type="submit">
                              <div className="btn_preload flex text-center">
                                 Send message
                                 <img src="https://crypcet.com/wp-content/themes/crypcet/images/arrow-right.svg" />
                              </div>

                              <i className="fa fa-circle-o-notch fa-spin btn_loading"></i>
                           </button>
                        </div>
                     </form>

                  </div>
               </div>
            </div>
         </section>

      </>
   )
}

export default Contact
