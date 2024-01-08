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
                  Roomy Africa specializes in providing African international students with secure, comfortable accommodations tailored to enhance their living and learning experience.From shared apartments to private studios, we offer a variety of housing options selected for their safety and convenience. As an educational ally, Roomy Africa also assists in the university application process and fosters connections with renowned institutions across Africa, supporting cultural diversity and academic success.

                  </p>
                  <Link href="/about">
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