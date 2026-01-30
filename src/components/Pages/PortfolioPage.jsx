import React from "react";
import Spacing from "../Spacing";
import SectionHeadingStyle3 from "../SectionHeading/SectionHeadingStyle3";
import Portfolio from "../Portfolio";
import TestimonialSlider from "../Slider/TestimonialSlider";
import SectionHeading from "../SectionHeading";
import CtaStyle2 from "../Cta/CtaStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import portfolioDetails from "../../data/portfolioDetails.json";

const portfolioData = portfolioDetails.map((item) => ({
  href: `/portfolio/${item.id}`,
  imgUrl: item.thumbnailSrc,
  title: item.title,
  btnText: "See Project",
}));
const testimonialData = [
  {
    text: "This service is perfect if you're looking for a genuine side business. I barely spend 1-2 hours a month, and they take care of listings, customer support, and order fulfillment. The profit-sharing model makes it risk-free, and the results have exceeded my expectations so far. Highly recommended for anyone wanting passive income through eBay.",
    avatarSrc: "/images/reviews/muzamil.jpeg",
    avatarName: "Mr. Muzammil Shaheen",
    avatarDesignation: "Transport Contractor",
  },
  {
    text: "Very professional and well-organized service. They guided me step by step and explained both the challenges and the strategy clearly before starting. I appreciate how honest and responsive they are. My eBay account is growing steadily, and I can see real progress in sales and profit. Definitely a reliable team to work with.",
    avatarSrc: "/images/reviews/sarang.jpeg",
    avatarName: "Mr. Sarang Siddiqui",
    avatarDesignation: "MD - Physician",
  },
  {
    text: "I had no prior knowledge of e-commerce Etsy, but they made everything simple and easy to understand. There were no false promises, only realistic goals and clear communication. I'm glad I chose them for my Etsy business.",
    avatarSrc: "/images/reviews/uzair.jpeg",
    avatarName: "Mr. Uzair Rehman",
    avatarDesignation: "Sr. Software Engineer",
  },
  {
    text: "Thank God they reached out to me. A simple conversation turned into a real blessing for me as a side income. I had no experience with eBay, but they handled everything professionally and guided me honestly throughout the process. I'm truly grateful for the opportunity and the consistent results I'm seeing. Highly recommended for anyone looking for a genuine side business.",
    avatarSrc: "/images/reviews/akbar.jpeg",
    avatarName: "Mr. Akbar Khan",
    avatarDesignation: "Flight Attendant",
  },
  {
    text: "I started working with them a few months ago, and after seeing consistent results over the first 5 to 6 months, I felt confident enough to open another eBay store using my wife's details. They are now managing both accounts smoothly, and both stores are generating good profits. I'm very satisfied with the results.",
    avatarSrc: "/images/reviews/zayam.png",
    avatarName: "Mr. Zayam Mahmood",
    avatarDesignation: "Chemical Engineer",
  },
];

export default function PortfolioPage() {
  pageTitle("Portfolio");
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="We have helped 50+ people generate side income."
        subTitle="Our Portfolio"
        shape="shape_3"
      />
      <Spacing lg="75" md="60" />
      <div className="container">
        <Portfolio data={portfolioData} />
        <div className="cs_height_75 cs_height_lg_40" />
      </div>
      <div className="container">
        <SectionHeading title="Reviews from our clients" subTitle="Reviews" />
        <div className="cs_height_75 cs_height_lg_40" />
      </div>
      <TestimonialSlider layeredImages={[]} data={testimonialData} />
      <div className="container">
        <div className="cs_height_75 cs_height_lg_40" />
        <CtaStyle2
          title="Start Your Journey With Us"
          btnText="Send Message"
          btnUrl="/contact"
        />
        <div className="cs_height_150 cs_height_lg_80" />
      </div>
    </>
  );
}
