import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import TestimoinalSlider from "../src/components/Slider/TestimonialSlider";
import Layout from "../src/layouts/Layout";

const About = () => {
  return (
    <Layout>
      <PageBanner title={"About us"} />

      {/*====== Start Features Section ======*/}
      <section className="features-area">
        <div className="features-wrapper-three pt-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-60 wow fadeInUp">
                  <span className="sub-title">About Us</span>
                  <h2>Welcome to Roomy Africa</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-area">
        <div className="features-wrapper-four pt-80 pb-115">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="features-img wow fadeInLeft">
                  <img
                    src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Features Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features-content-box features-content-box-one">
                  <div className="section-title section-title-left mb-30 wow fadeInUp">
                    <span className="sub-title">About</span>
                    <h2> Who We Are </h2>
                  </div>
                  <h5>
                  Roomy Africa specializes in providing African international students with secure, comfortable accommodations tailored to enhance their living and learning experience. 
                  </h5>
                  <ul className="features-list-one">
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="10ms"
                    >
                      <div className="icon">
                        <i className="#" />
                      </div>
                      <div className="content">
                        <h5>Mission</h5>
                        <p>
                        our mission is to bridge the gap between comfort and education for African international students. As pioneers in the hospitality industry, we’ve recognized the unique challenges faced by students when studying away from home. Roomy Africa is not just an accommodation platform; it’s a sanctuary where educational dreams are nurtured, and cultural diversity is celebrated.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="20ms"
                    >
                      <div className="icon">
                        <i className="#" />
                      </div>
                      <div className="content">
                        <h5>Vision</h5>
                        <p>
                        At Roomy Africa, we envision a continent where every student can access quality education without the burden of finding a safe and affordable place to live. We believe that by removing the stress of securing a home away from home, students can focus solely on their academic pursuits and personal growth.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                        <i className="#" />
                      </div>
                      <div className="content">
                        <h5>Services</h5>
                        <p>
                        Roomy Africa is more than a service; it’s a community. We are dedicated to fostering an environment where students from diverse backgrounds can connect, share experiences, and support one another. By choosing Roomy Africa, you’re joining a family that understands your challenges and celebrates your achievements.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                        <i className="#" />
                      </div>
                      <div className="content">
                        <h5>Community</h5>
                        <p>
                        With a robust network of hospitable hosts across Africa, we offer a wide range of living spaces tailored to meet every student’s needs. From cozy rooms in shared apartments to private studios, our accommodations are vetted for safety, comfort, and convenience.
Beyond just providing a roof over your head, Roomy Africa stands as an educational ally. Our personalized assistance program guides African youth through the university application process, connecting them with top-tier educational institutions across the continent. We take pride in our commitment to education and strive to ensure that our users not only find their ideal housing but also embark on their academic journey with confidence.
                        </p>
                      </div>
                    </li>
                    <li
                      className="list-item wow fadeInUp"
                      data-wow-delay="30ms"
                    >
                      <div className="icon">
                        <i className="#" />
                      </div>
                      <div className="content">
                        <h5>Promise</h5>
                        <p>
                        We promise to maintain a user-friendly platform that prioritizes security, affordability, and support for every student. Our team works tirelessly to ensure seamless communication between hosts and students, providing round-the-clock assistance whenever needed.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-area">
        <div
          className="cta-wrapper-two bg_cover b"
          style={{ backgroundImage: "url(https://images.pexels.com/photos/3360204/pexels-photo-3360204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="company-name wow fadeInLeft">Find</div>
              </div>
              <div className="col-lg-5">
                <div className="cta-content-box wow fadeInRight">
                  <h2>Join Us Today!</h2>
                  <p>
                  Whether you’re an international student seeking your next home or a host looking to make a difference in a student’s life, Roomy Africa welcomes you with open arms.
                  </p>
                  <Link href="/LoginHomeScreen">
                    <a className="main-btn icon-btn text-white">Explore Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      {/* <section
        className="testimonial-area bg_cover pt-110 pb-265"
        style={{
          backgroundImage: "url(assets/images/bg/testimonial-bg-2.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Our Testimoinals</span>
                <h2>Happy User Feedback</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="testimonial-wrapper-one text-center wow fadeInUp">
                <div className="testimonial-review-area">
                  <TestimoinalSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      {/* <section className="newsletter-area">
        <div className="container">
          <div
            className="newsletter-wrapper newsletter-wrapper-one bg_cover"
            style={{
              backgroundImage: "url(assets/images/bg/newsletter-bg-1.jpg)",
            }}
          >
            <div className="row">
              <div className="col-lg-5">
                <div className="newsletter-content-box-one wow fadeInLeft">
                  <div className="icon">
                    <i className="flaticon-email" />
                  </div>
                  <div className="content">
                    <h2>Get Special Rewards</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="newsletter-form wow fadeInRight">
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Enter Address"
                      name="email"
                      required=""
                    />
                    <i className="ti-location-pin" />
                    <button className="main-btn icon-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Newsletter Section ======*/}
      {/*====== Start Team Section ======*/}
      {/* <section className="team-area pt-115 pb-85">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title">Team Member</span>
                <h2>Meet Our Executive</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item team-item-one mb-30 wow fadeInUp">
                <div className="team-img">
                  <img src="assets/images/team/team-1.jpg" alt="Team Image" />
                  <div className="team-social">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h3 className="title">Alesha Mature</h3>
                  <span className="position">Sr. Executive</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item team-item-one mb-30 wow fadeInDown"
                data-wow-delay="20ms"
              >
                <div className="team-img">
                  <img src="assets/images/team/team-2.jpg" alt="Team Image" />
                  <div className="team-social">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h3 className="title">Martyn Decode</h3>
                  <span className="position">Sr. Executive</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item team-item-one mb-30 wow fadeInUp">
                <div className="team-img">
                  <img src="assets/images/team/team-3.jpg" alt="Team Image" />
                  <div className="team-social">
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h3 className="title">Alesha Mature</h3>
                  <span className="position">Sr. Executive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Team Section ======*/}
    </Layout>
  );
};
export default About;
