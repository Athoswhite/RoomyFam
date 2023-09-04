import Link from "next/link";
import React, { useEffect } from "react";
import { Nav, Tab } from "react-bootstrap";
import LearnAboutUs from "../src/components/LearnAboutUs";
import TestimoinalSlider2 from "../src/components/Slider/TestimonialSlider2";
import Header3 from "../src/layouts/headers/Header3";
import Layout from "../src/layouts/Layout";
import Searchbar from "../src/components/Searchbar";

const Index3 = () => {
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        const Isotope = require("isotope-layout");
        new Isotope(".masonry-place-row", {
          itemSelector: ".place-column",
          percentPosition: true,
          masonry: {
            columnWidth: ".place-column",
          },
        });
      }
    }, 1000);
  }, []);

  return (
    <Layout header={Header3}>
      {/*====== End Header Section ======*/}
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div
          className="hero-wrapper-three bg_cover"
          style={{
            backgroundImage: "url(assets/images/hero/hero-three-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="wow fadeInUp" data-wow-delay=".30s">
                    Your Perfect House
                  </h1>
                  <h3 className="wow fadeInDown" data-wow-delay=".50s">
                  Find housing for students, young professionals & experts in Africa 
                  </h3>
                  
                  {/* <Searchbar /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Place Section ======*/}
      <section className="place-area masonry-place-area light-bg pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Featured List</span>
                <h2>
                  <span className="line">Popular</span> Destination
                </h2>
              </div>
            </div>
          </div>
          <div className="row masonry-place-row">
            <div className="col-lg-4 col-md-6 col-sm-12 place-column">
              <div
                className="place-item place-item-three mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-11.jpg"
                    alt="place image"
                  />
                  <div className="place-overlay">
                    <div className="place-content">
                      <h4>Côte D'ivoire </h4>
                      <ul className="ratings ratings-four">
                        <li>
                          <span>Abidjan, Ivory Coast</span>
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-column">
              <div
                className="place-item place-item-three mb-30 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-12.jpg"
                    alt="place image"
                  />
                  <div className="place-overlay">
                    <div className="place-content">
                      <h4>Karnak Temple </h4>
                      <ul className="ratings ratings-four">
                        <li>
                          <span>Cairo, Egypt</span>
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-column">
              <div
                className="place-item place-item-three mb-30 wow fadeInUp"
                data-wow-delay=".30s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-13.jpg"
                    alt="place image"
                  />
                  <div className="place-overlay">
                    <div className="place-content">
                      <h4>Sun City</h4>
                      <ul className="ratings ratings-four">
                        <li>
                          <span>North-West, South Africa</span>
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-column">
              <div
                className="place-item place-item-three mb-30 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-14.jpg"
                    alt="place image"
                  />
                  <div className="place-overlay">
                    <div className="place-content">
                      <h4>Kimihurura</h4>
                      <ul className="ratings ratings-four">
                        <li>
                          <span>Kigali, Rwanda</span>
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-column">
              <div
                className="place-item place-item-three mb-30 wow fadeInUp"
                data-wow-delay=".40s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-15.jpg"
                    alt="place image"
                  />
                  <div className="place-overlay">
                    <div className="place-content">
                      <h4>Lagos City</h4>
                      <ul className="ratings ratings-four">
                        <li>
                          <span>Lagos, Nigeria</span>
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LearnAboutUs />
    
    </Layout>
  );
};
export default Index3;
