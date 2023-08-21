import React from "react";
import Link from "next/link";


const HowWorkDetail2 = () => {
    return (
        <div>
                {/*====== Start Intro Section ======*/}
      <section className="intro-area pt-115">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">How it works</span>
                <h2>for Roomies</h2>
              </div>
            </div>
          </div>
          {/* <div
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
          </div> */}
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
                        Find
                          <br />The Right RoomFam
                        </h3>
                        <p>
                        RoomFam is all about finding the perfect roommates for your student living experience. Our advanced search filters allow you to customize your search based on your preferences, such as living habits, interests, and personalities. Plus, with our verified RoomFam profiles, you can feel confident that you're connecting with real people who share similar values and lifestyles.
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
                        src="assets/images/elements/step-1.jpg"
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
                          Create
                          <br />
                          Your Account
                        </h3>
                        <p>
                        To get started with RoomFam, all you need to do is create an account! This process is quick and easy - simply provide some basic information about yourself and your living preferences, and you'll be able to start browsing listings and connecting with potential RoomFams.
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
                        src="assets/images/elements/step-2.jpg"
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
                          To A RoomFam
                        </h3>
                        <p>
                        Once you've found some potential RoomFams, it's time to start chatting! Our in-app messaging feature allows you to communicate with other users in a safe and secure way, so you can get to know each other before deciding to sign a lease together. Plus, with our built-in translation feature, you can easily connect with RoomFams who may speak a different language.
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
                        src="assets/images/elements/step-3.jpg"
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
                          Sign
                          <br />
                          In Your Lease
                        </h3>
                        <p>
                        When you've found the right RoomFam and the perfect student rental, it's time to sign your lease! Our platform makes this process seamless and straightforward - you can sign your lease digitally and easily split the rent and security deposit between you and your RoomFams.

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
                        src="assets/images/elements/step-4.jpg"
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
                          Move
                          <br />
                          In
                        </h3>
                        <p>
                        Finally, it's time to move in! Roomies helps to make this process as stress-free as possible by providing resources and tips for a smooth move-in day. You'll also have access to helpful articles and advice on living with RoomFams and making the most of your shared living space. With Roomies, you can start enjoying your new home right away.
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
                        src="assets/images/elements/step-5.jpg"
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

export default HowWorkDetail2