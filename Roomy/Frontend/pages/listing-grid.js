import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import RangeSlider from "../src/components/RangeSlider";
import Layout from "../src/layouts/Layout";
import HowWorkDetail2 from "../src/components/HowWorkDetail2";
import LearnAboutUs from "../src/components/LearnAboutUs"
import RoomiesChat from "../src/components/RoomiesChat";
import Partner from "../src/components/Partner";

const ListingGrid = () => {
  return (
    <Layout>
      <PageBanner title={"roomies"} pageName={"Find Roomies"} />
      <section className="listing-grid-area pt-120 pb-90">
        <div className="container">
          <HowWorkDetail2 />
          {/* <div className="row">
             
            <div className="col-lg-12">
            <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Popular Listings</span>
              </div>
              <div className="listing-grid-wrapper">
                <div className="row">
                  <div className="col-md-6 col-sm-10">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-16.jpg"
                          alt="Listing Image"
                        />
                        <a href="#" className="cat-btn">
                          <i className="flaticon-chef" />
                        </a>
                        <span className="featured-btn">Featured</span>
                        <ul className="ratings ratings-four">
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li>
                            <span>
                              <a href="#">(02 Reviews)</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/listing-details-1">
                            <a>Pizza Recipe</a>
                          </Link>
                        </h3>
                        <p>Popular restaurant in california</p>
                        <span className="phone-meta">
                          <i className="ti-tablet" />
                          <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                          <span className="status st-open">Open</span>
                        </span>
                        <div className="listing-meta">
                          <ul>
                            <li>
                              <span>
                                <i className="ti-location-pin" />
                                California, USA
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="ti-heart" />
                                <a href="#">Save</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-17.jpg"
                          alt="Listing Image"
                        />
                        <a href="#" className="cat-btn">
                          <i className="flaticon-chef" />
                        </a>
                        <ul className="ratings ratings-four">
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li>
                            <span>
                              <a href="#">(02 Reviews)</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/listing-details-1">
                            <a>Party Corner</a>
                          </Link>
                        </h3>
                        <p>Popular restaurant in california</p>
                        <span className="phone-meta">
                          <i className="ti-tablet" />
                          <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                          <span className="status st-close">Close</span>
                        </span>
                        <div className="listing-meta">
                          <ul>
                            <li>
                              <span>
                                <i className="ti-location-pin" />
                                California, USA
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="ti-heart" />
                                <a href="#">Save</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-18.jpg"
                          alt="Listing Image"
                        />
                        <a href="#" className="cat-btn">
                          <i className="flaticon-chef" />
                        </a>
                        <ul className="ratings ratings-four">
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li>
                            <span>
                              <a href="#">(02 Reviews)</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/listing-details-1">
                            <a>City Palace</a>
                          </Link>
                        </h3>
                        <p>Popular restaurant in california</p>
                        <span className="phone-meta">
                          <i className="ti-tablet" />
                          <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                          <span className="status st-open">Open</span>
                        </span>
                        <div className="listing-meta">
                          <ul>
                            <li>
                              <span>
                                <i className="ti-location-pin" />
                                California, USA
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="ti-heart" />
                                <a href="#">Save</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-19.jpg"
                          alt="Listing Image"
                        />
                        <a href="#" className="cat-btn">
                          <i className="flaticon-chef" />
                        </a>
                        <span className="featured-btn">Featured</span>
                        <ul className="ratings ratings-four">
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li>
                            <span>
                              <a href="#">(02 Reviews)</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/listing-details-1">
                            <a>Easter Plaza</a>
                          </Link>
                        </h3>
                        <p>Popular restaurant in california</p>
                        <span className="phone-meta">
                          <i className="ti-tablet" />
                          <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                          <span className="status st-open">Open</span>
                        </span>
                        <div className="listing-meta">
                          <ul>
                            <li>
                              <span>
                                <i className="ti-location-pin" />
                                California, USA
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="ti-heart" />
                                <a href="#">Save</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-20.jpg"
                          alt="Listing Image"
                        />
                        <a href="#" className="cat-btn">
                          <i className="flaticon-chef" />
                        </a>
                        <span className="featured-btn">Featured</span>
                        <ul className="ratings ratings-four">
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li>
                            <span>
                              <a href="#">(02 Reviews)</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/listing-details-1">
                            <a>Gym Ground</a>
                          </Link>
                        </h3>
                        <p>Popular restaurant in california</p>
                        <span className="phone-meta">
                          <i className="ti-tablet" />
                          <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                          <span className="status st-open">Open</span>
                        </span>
                        <div className="listing-meta">
                          <ul>
                            <li>
                              <span>
                                <i className="ti-location-pin" />
                                California, USA
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="ti-heart" />
                                <a href="#">Save</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-21.jpg"
                          alt="Listing Image"
                        />
                        <a href="#" className="cat-btn">
                          <i className="flaticon-chef" />
                        </a>
                        <ul className="ratings ratings-four">
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li>
                            <span>
                              <a href="#">(02 Reviews)</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/listing-details-1">
                            <a>Miyami Sea</a>
                          </Link>
                        </h3>
                        <p>Popular restaurant in california</p>
                        <span className="phone-meta">
                          <i className="ti-tablet" />
                          <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                          <span className="status st-close">Close</span>
                        </span>
                        <div className="listing-meta">
                          <ul>
                            <li>
                              <span>
                                <i className="ti-location-pin" />
                                California, USA
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="ti-heart" />
                                <a href="#">Save</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-22.jpg"
                          alt="Listing Image"
                        />
                        <a href="#" className="cat-btn">
                          <i className="flaticon-chef" />
                        </a>
                        <ul className="ratings ratings-four">
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li>
                            <span>
                              <a href="#">(02 Reviews)</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/listing-details-1">
                            <a>Gym Ground</a>
                          </Link>
                        </h3>
                        <p>Popular restaurant in california</p>
                        <span className="phone-meta">
                          <i className="ti-tablet" />
                          <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                          <span className="status st-close">Close</span>
                        </span>
                        <div className="listing-meta">
                          <ul>
                            <li>
                              <span>
                                <i className="ti-location-pin" />
                                California, USA
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="ti-heart" />
                                <a href="#">Save</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-23.jpg"
                          alt="Listing Image"
                        />
                        <a href="#" className="cat-btn">
                          <i className="flaticon-chef" />
                        </a>
                        <span className="featured-btn">Featured</span>
                        <ul className="ratings ratings-four">
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li>
                            <span>
                              <a href="#">(02 Reviews)</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-content">
                        <h3 className="title">
                          <Link href="/listing-details-1">
                            <a>Coffee Time</a>
                          </Link>
                        </h3>
                        <p>Popular restaurant in california</p>
                        <span className="phone-meta">
                          <i className="ti-tablet" />
                          <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                          <span className="status st-open">Open</span>
                        </span>
                        <div className="listing-meta">
                          <ul>
                            <li>
                              <span>
                                <i className="ti-location-pin" />
                                California, USA
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="ti-heart" />
                                <a href="#">Save</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
{/*                   
                </div> */}
              {/* </div> */}
            {/* </div>
          </div> */}
          
      <Partner />
      <RoomiesChat />
        </div>
      </section>
      <LearnAboutUs />
    </Layout>
  );
};
export default ListingGrid;
