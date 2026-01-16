import React from "react";
import Spacing from "../Spacing";
import SectionHeadingStyle3 from "../SectionHeading/SectionHeadingStyle3";
import Portfolio from "../Portfolio";
import CtaStyle2 from "../Cta/CtaStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import portfolioDetails from "../../data/portfolioDetails.json";

const portfolioData = portfolioDetails
  .filter((item) => item.platform === "etsy")
  .map((item) => ({
    href: `/portfolio/${item.id}`,
    imgUrl: item.thumbnailSrc,
    title: item.title,
    btnText: "See Project",
  }));

export default function PortfolioPage() {
  pageTitle("Portfolio");
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="We have completed a series of noteworthy Etsy projects"
        subTitle="Our Portfolio"
        shape="shape_3"
      />
      <Spacing lg="75" md="60" />
      <div className="container">
        <Portfolio data={portfolioData} />
        <div className="cs_height_75 cs_height_lg_40" />
        <CtaStyle2
          title="Is there a specific project or goal <br />that you have in mind?"
          btnText="Send Message"
          btnUrl="/contact"
        />
        <div className="cs_height_150 cs_height_lg_80" />
      </div>
    </>
  );
}
