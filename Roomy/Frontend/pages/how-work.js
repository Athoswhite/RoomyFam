import Link from "next/link";
import React, { useState } from "react";
import HowWorkDetail from "../src/components/HowWorkDetails";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";

const HowWork = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner title={"Working Process"} />

      <HowWorkDetail />
      {/*====== End Work-process Section ======*/}
    </Layout>
  );
};
export default HowWork;
