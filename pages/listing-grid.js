import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import RangeSlider from "../src/components/RangeSlider";
import Layout from "../src/layouts/Layout";
import HowWorkDetail2 from "../src/components/HowWorkDetail2";
import LearnAboutUs from "../src/components/LearnAboutUs"
import RoomFamChat from "../src/components/RoomFamChat";
import Partner from "../src/components/Partner";

const ListingGrid = () => {
  return (
    <Layout>
      <PageBanner title={""} pageName={"Find Roomies"} />
      <section className="listing-grid-area pt-120 pb-90">
        <div className="container">
          <HowWorkDetail2 />
      <Partner />
      <RoomFamChat />
        </div>
      </section>
      <LearnAboutUs />
    </Layout>
  );
};
export default ListingGrid;
