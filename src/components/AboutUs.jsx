import React from 'react';
import '../Css/About.css'

const AboutUs = () => {
  return (
    <div className="bg-darkblue text-white py-16 px-4">
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span className="subtitle">About us</span>
              <h3 className="title_sec">Take a look at the statistics</h3>
              <p className="desc_sec">
                We offer steady fixed income that is automatically deposited into your account every day.
              </p>
            </div>


            <div className="col-md-3 col-6 d-md-flex flex-column align-items-end order-1 order-md-1">
              <div className="stat_block">
                <img src="https://crypcet.com/wp-content/themes/crypcet/images/invested.png" alt='' />
                <h4>$1 884 641</h4>
                <h6>Invested crypto in USD</h6>
              </div>

              <div className="stat_block">
                <img src="https://crypcet.com/wp-content/themes/crypcet/images/paid.png" />
                <h4>$438 690</h4>
                <h6>Paid out to users</h6>
              </div>
            </div>

            <div className="col-md-6 position-relative order-3 order-md-2">
              <div className="animation_about">
                <img className="animation_img_about"
                  src="https://crypcet.com/wp-content/themes/crypcet/images/animate_about.png" />
                <img className="about_logo"
                  src="https://crypcet.com/wp-content/themes/crypcet/images/about_logo.png" />


                <img className="top_left"
                  src="https://crypcet.com/wp-content/themes/crypcet/images/top_left.png" />
                <img className="top_right"
                  src="https://crypcet.com/wp-content/themes/crypcet/images/top_right.png" />
                <img className="bottom_left"
                  src="https://crypcet.com/wp-content/themes/crypcet/images/bottom_left.png" />
                <img className="bottom_right"
                  src="https://crypcet.com/wp-content/themes/crypcet/images/bottom_right.png" />


              </div>
            </div>

            <div className="col-md-3 col-6 right-stat order-2 order-md-3">
              <div className="stat_block">
                <img src="https://crypcet.com/wp-content/themes/crypcet/images/registered.png" />
                <h4>129 801</h4>
                <h6>Registered users</h6>
              </div>

              <div className="stat_block">
                <img src="https://crypcet.com/wp-content/themes/crypcet/images/days.png" />
                <h4>
                  94
                </h4>
                <h6>Days of work</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
