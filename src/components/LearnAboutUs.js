import React from "react";
import Link from "next/link";

const LearnAboutUs = () => {
    return (
      <div>
        <section className="client-area">
        <div
          className="client-wrapper-two bg_cover pt-120 pb-70"
          style={{
            backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="client-content-box mb-50 wow fadeInLeft">
                  <div className="section-title section-title-left section-title-white mb-35">
                    <h2>About Us</h2>
                  </div>
                  <p>
                  At Roomy Africa, we strongly believe 
                  our people are our greatest asset. It doesn't 
                  matter where you come from and what 
                  department you join. We will walk you through 
                  your entire experience of working at Roomy 
                  Africa and support you to do your best work. 

                  </p>
                  <Link href="#">
                    <a className="main-btn icon-btn">Learn More</a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="client-item-wrapper mb-60 wow fadeInRight">
                  <div className="client-item ">
                    <a href="#">
                      <img
                        src="assets/images/client/10.png"
                        alt="client image"
                      />
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

export default LearnAboutUs