import React from "react";
import { Nav, Tab } from "react-bootstrap";

const Searchbar = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
              <div className="col-lg-12">
      <div className="hero-search-wrapper wow fadeInUp" data-wow-delay=".70s">
        <Tab.Container defaultActiveKey={"flight"}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row align-items-center">
              {/* <div className="col-lg-6">
                            <div className="search-nav mb-10">
                              <Nav as="ul" className="nav nav-tabs">
                                <Nav.Item>
                                  <Nav.Link
                                    as="a"
                                    className="c-pointer"
                                    eventKey="flight"
                                  >
                                    <i className="far fa-plane-departure" />
                                    Flight
                                  </Nav.Link>
                                </Nav.Item>
                                <li className="nav-item">
                                  <Nav.Link
                                    as="a"
                                    className="c-pointer"
                                    eventKey="hotels"
                                  >
                                    <i className="far fa-building" />
                                    Hotels
                                  </Nav.Link>
                                </li>
                                <li className="nav-item">
                                  <Nav.Link
                                    as="a"
                                    className="c-pointer"
                                    eventKey="rentcar"
                                  >
                                    <i className="far fa-car" />
                                    Rent a Car
                                  </Nav.Link>
                                </li>
                              </Nav>
                            </div>
                          </div> */}
              {/* <div className="col-lg-6">
                            <p className="tags mb-15">
                              <span>Popular:</span>
                              <a href="#">Saloon</a>,<a href="#">Restaurant</a>,
                              <a href="#">Game</a>,<a href="#">Counter</a>,
                              <a href="#">Train Station</a>,
                              <a href="#">Parking</a>,<a href="#">Shooping</a>
                            </p>
                          </div> */}
            </div>
            <div className="hero-search-form tab-content">
              <Tab.Pane className="show active">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Search By Places"
                        name="search"
                        required
                      />
                      <i className="ti-ink-pen"></i>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="form_group">
                      <select className="wide">
                        <option value="01">Shared Apartment</option>
                        <option value="02">Apartment</option>
                        <option value="03">Single Unfurnished House</option>
                        <option value="04">Shared Unfurnished House</option>
                        <option value="05">Furnished House</option>
                        <option value="06">Single Furnished House</option>
                        <option value="07">Mansion</option>
                        <option value="08">Penthouse</option>
                        <option value="09">Bongalo</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Location"
                        name="location"
                        required
                      />
                      <i className="ti-location-pin"></i>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="form_group">
                      <button className="main-btn icon-btn">Search Now</button>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </div>
          </form>
        </Tab.Container>
      </div>
    </div>
    </div>
</div>
</div>
  );
};

export default Searchbar;
