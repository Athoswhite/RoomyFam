import Link from "next/link";
import React, { useState } from "react";
import HowWorkDetail from "../src/components/HowWorkDetails";
import LearnAboutUs from "../src/components/LearnAboutUs";
import PageBanner from "../src/components/PageBanner";
import RoomFamChat from "../src/components/RoomFamChat";
import Testimonies from "../src/components/Testimonies";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";

const HowWork = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <br />
      <PageBanner title={"RoomFam"} />

      <HowWorkDetail />
      <Testimonies />
      <RoomFamChat />
      <LearnAboutUs />
      {/*====== End Work-process Section ======*/}
      
    </Layout>
  );
};
export default HowWork;
