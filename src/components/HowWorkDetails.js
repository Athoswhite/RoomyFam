import React from "react";
import Link from "next/link";


const HowWorkDetail = () => {
    return (
        <div>
                {/*====== Start Intro Section ======*/}
      <section className="intro-area pt-115">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">How it works</span>
                <h2>for RoomFams</h2>
              </div>
            </div>
          </div>
          <div
            className="intro-wrppaer-two bg_cover wow fadeInDown"
            style={{ backgroundImage: "url(assets/images/bg/video-bg-2.jpg)" }}
          >
            <div className="intro-content-box-one">
              <div className="play-content text-center">
                <a
                  href="#"
                  className="video-popup"
                  onClick={(e) => {
                    e.preventDefault();
                    setVideo(true);
                  }}
                >
                  <i className="flaticon-play-button" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Intro Section ======*/}
      {/*====== Start Work-process Section ======*/}
      <section className="work-process-area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="work-process-wrapper">
                <div className="row single-process-step align-items-center">
                  <div className="col-lg-6">
                    <div className="process-content-box wow fadeInLeft">
                      <div className="step-count">01.</div>
                      <div className="content">
                        <span className="line" />
                        <h3 className="title">
                        Create
                          <br />A free Listing
                        </h3>
                        <p>
                        To create a free listing on RoomFam, simply visit our website and sign up for an account. Once you're logged in, click on the "List a Room" button and fill out the required information about your living space, including location, rent, and any amenities or features you offer. Don't forget to upload photos to give potential roommates a better idea of what your space looks like.
                        </p>
                        <Link href="/LoginHomeScreen">
                          <a className="btn-link icon-btn">Explore List</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="process-img wow fadeInRight">
                      <img
                        src="assets/images/elements/room-1.jpg"
                        alt="process Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="row single-process-step align-items-center">
                  <div className="col-lg-6">
                    <div className="process-content-box wow fadeInRight">
                      <div className="step-count">02.</div>
                      <div className="content">
                        <span className="line" />
                        <h3 className="title">
                          Meet
                          <br />
                          Your Roombody
                        </h3>
                        <p>
                        After you've listed your room, you can start browsing through potential roommates who have also created profiles on RoomFam. Our advanced search filters allow you to narrow down your search based on criteria such as gender, age, and lifestyle preferences. When you find someone who seems like a good fit, send them a message to introduce yourself and ask any questions you may have.
                        </p>
                        <Link href="/LoginHomeScreen">
                          <a className="btn-link icon-btn">Explore List</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="process-img wow fadeInLeft">
                      <img
                        src="assets/images/elements/room-2.jpg"
                        alt="process Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="row single-process-step align-items-center">
                  <div className="col-lg-6">
                    <div className="process-content-box wow fadeInLeft">
                      <div className="step-count">03.</div>
                      <div className="content">
                        <span className="line" />
                        <h3 className="title">
                          Chat
                          <br />
                          To A Potential Roommy
                        </h3>
                        <p>
                        Once you've connected with a potential roommate, start chatting with them to get to know them better. Ask about their interests, habits, and lifestyle to ensure that you're a good match. You can use our secure messaging system to communicate with each other and share photos or videos of your living space.                        </p>
                        <Link href="/LoginHomeScreen">
                          <a className="btn-link icon-btn">Explore List</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="process-img wow fadeInRight">
                      <img
                        src="assets/images/elements/room-3.jpg"
                        alt="process Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="row single-process-step align-items-center">
                  <div className="col-lg-6">
                    <div className="process-content-box wow fadeInRight">
                      <div className="step-count">04.</div>
                      <div className="content">
                        <span className="line" />
                        <h3 className="title">
                          Get
                          <br />
                          Your Money
                        </h3>
                        <p>
                        Once you've agreed on the details of your living arrangement, it's time to get your money. Use our built-in payment system to securely transfer rent payments between you and your roommate. This ensures that you both have a record of all transactions and eliminates the need for cash or checks.
                        </p>
                        <Link href="/LoginHomeScreen">
                          <a className="btn-link icon-btn">Explore List</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="process-img wow fadeInLeft">
                      <img
                        src="assets/images/elements/room-4.jpg"
                        alt="process Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="row single-process-step align-items-center">
                  <div className="col-lg-6">
                    <div className="process-content-box wow fadeInLeft">
                      <div className="step-count">05.</div>
                      <div className="content">
                        <span className="line" />
                        <h3 className="title">
                          Welcome
                          <br />
                          Mate
                        </h3>
                        <p>
                        Finally, welcome your new roommate to your home! Show them around and help them get settled in. With RoomFam, you can feel confident that you've found the right roommates to share your student living experience with.                        </p>
                        <Link href="/LoginHomeScreen">
                          <a className="btn-link icon-btn">Explore List</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="process-img wow fadeInRight">
                      <img
                        src="assets/images/elements/room-5.jpg"
                        alt="process Image"
                      />
                    </div>
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

export default HowWorkDetail