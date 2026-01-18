// /src/components/Pages/Home.jsx

import React, { useMemo, useState } from "react";
import HeroStyle4 from "../Hero/HeroStyle4";
import PortfolioSlider from "../Slider/PortfolioSlider";
import SectionHeading from "../SectionHeading";

import Spacing from "../Spacing";
import FunFact from "../FunFact";
import About from "../About";
import WhyChose from "../WhyChose";
import Accordion from "../Accordion";
import Cta from "../Cta";
import TestimonialSlider from "../Slider/TestimonialSlider";
import { pageTitle } from "../../helpers/PageTitle";
import ServiceSlider from "../Slider/ServiceSlider";
import portfolioDetails from "../../data/portfolioDetails.json";
// -------------------- DATA --------------------
const funfactData = [
  { title: "Years of Experience", number: "3+" },
  { title: "Stores Managed", number: "50+" },
  { title: "Profit Generated", number: "$700K+" },
  { title: "Sales Generated", number: "$4M+" },
];

const whyChoseFeatureData = [
  {
    title: "Low Investment Risk",
    content:
      " We start with as little as $100, and the risk of investment loss is very low.",
  },
  {
    title: "No Upfront Fees",
    content:
      "We work on a partnership basis and only get paid when the business makes a profit.",
  },
  {
    title: "Proven Experience & Team",
    content:
      "With a team of 20+ professionals, 3+ years of experience, and 50+ stores successfully managed, we know what works.",
  },
];

// ✅ Slider data (tabs: ebay / etsy)
// NOTE: Local images show best if they are in /public/images/... and you use "/images/...."
const portfolioSliderData = portfolioDetails.map((item) => ({
  platform: item.platform,
  thumbnailSrc: item.thumbnailSrc,
  miniTitle: item.subTitle,
  title: item.title,
  subTitle: item.summary?.[0] || "",
  href: `/portfolio/${item.id}`,
}));

const testimonialData = [
  {
    text: "Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.",
    avatarName: "Ansari Patron",
    avatarDesignation: "CEO at Delta",
  },
  {
    text: "Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.",
    avatarName: "Jhon Doe",
    avatarDesignation: "Manager at Delta",
  },
  {
    text: "Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.",
    avatarName: "Ramatam Coo",
    avatarDesignation: "MD at Delta",
  },
];

const faqData = [
  {
    title: "01. I need your services and how can i contact you throw email?",
    content:
      "Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
  },
  {
    title: "02. What are the different types of service we provide?",
    content:
      "Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
  },
  {
    title: "03. What are the different stages of the working process?",
    content:
      "Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
  },
  {
    title: "04. What is the difference between direct and digital marketing?",
    content:
      "Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
  },
  {
    title: "05. How can i payment proceed after complete project?",
    content:
      "Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
  },
];

const servideData = [
  {
    iconSrc: "/images/marketing-agency/service_icon_1.svg",
    title: "ebay",
    subTitle:
      "We offer end-to-end eBay store management, covering account creation and setup, product research, listing creation & optimization, order processing and fulfillment, customer support, returns & refunds handling, account health management, and performance tracking and reporting.",
    // btnText: "See More",
    // btnUrl: "/service/service-details",
  },
  {
    iconSrc: "/images/marketing-agency/service_icon_2.svg",
    title: "Etsy",
    subTitle:
      "We offer end-to-end Etsy store management, covering account creation and setup, niche & product research, listing creation & optimization, order processing & fulfillment, customer support, returns & refunds handling, account health management, and performance tracking and reporting.",
    // btnText: "See More",
    // btnUrl: "/service/service-details",
  },
];

// -------------------- PAGE --------------------
export default function Home({ darkMode }) {
  pageTitle("Zivan");

  // ✅ Hooks MUST be inside component
  const [activeTab, setActiveTab] = useState("ebay");

  const filteredPortfolioSliderData = useMemo(() => {
    return portfolioSliderData.filter((item) => item.platform === activeTab);
  }, [activeTab]);

  return (
    <>
      <HeroStyle4
        title="Mastering Digital Realm, Exploring the Dynamic World of Our Digital Studio"
        subTitle="Our agency offers a comprehensive suite of lots services, including Branding, Advertising, Social marketing, Video making, and Marketing analysis."
        thumbnailSrc={
          darkMode
            ? "/images/digital-agency/hero_bg_dark.jpeg"
            : "/images/digital-agency/hero_bg_dark.jpeg"
        }
        bgUrl="https://static.vecteezy.com/system/resources/thumbnails/049/855/871/small/stunning-high-resolution-nature-and-landscape-backgrounds-breathtaking-scenery-in-hd-photo.jpg"
      />

      <Spacing lg="125" md="70" />
      <div className="container">
        <FunFact data={funfactData} />
      </div>

      <Spacing lg="125" md="70" />
      <About
        thumbnail="https://ecomexpertspro.com/images/know-about-us-side.png"
        uperTitle="Who We Are"
        title="Your End-to-End Ecom Growth Partner"
        subTitle={
          <>
            Ecom Guild helps people build profitable side businesses on
            e-commerce marketplaces like eBay and Etsy.
            <br />
            <br />
            We are a guild of 20+ professionals who manage everything end to end
            product research, listings, orders, customer support, and account
            management so our partners can earn with minimal time involvement.
            <br />
            <br />
            Our goal is simple: make e-commerce easy, transparent, and
            accessible for anyone looking to start a side hustle.
          </>
        }
        // featureList={[
        //   "End-to-end eBay & Etsy store management",
        //   "Product research, listings, and order fulfillment",
        //   "Customer support & account optimization",
        // ]}
        btnText="Learn More"
        btnUrl="/about"
      />

      <Spacing lg="125" md="70" />

      <section className="cs_p76_full_width" id="service">
        <Spacing lg="143" md="75" />
        <SectionHeading title="Services we provide" subTitle="Our Services" />
        <Spacing lg="85" md="45" />
        <ServiceSlider data={servideData} />
      </section>

      <Spacing lg="185" md="75" />

      <WhyChose
        sectionTitle="We have depth of market knowledge"
        sectionSubTitle="Why Choose Us"
        whyChoseFeatureData={whyChoseFeatureData}
        thumbnailSrc="/images/creative-agency/why_choose_us_img_3.jpeg"
      />

      <Spacing lg="150" md="80" />

      {/* ✅ Portfolio Slider with Left Heading + Right Tabs (eBay / Etsy) */}
      <section>
        <Spacing lg="143" md="75" />

        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-4">
            {/* Left: Heading */}
            <div>
              <div className="cs_section_subtitle cs_primary_color cs_fs_16 cs_medium text-uppercase home-portfolio">
                Portfolio
              </div>
              <h2 className="cs_section_title cs_fs_68 mb-0">
                Some featured work
              </h2>
            </div>

            {/* Right: Tabs */}
            <div className="cs_portfolio_tabs">
              <button
                type="button"
                className={`cs_tab_btn ${activeTab === "ebay" ? "active" : ""}`}
                onClick={() => setActiveTab("ebay")}
              >
                eBay
              </button>
              <button
                type="button"
                className={`cs_tab_btn ${activeTab === "etsy" ? "active" : ""}`}
                onClick={() => setActiveTab("etsy")}
              >
                Etsy
              </button>
            </div>
          </div>

          <Spacing lg="85" md="45" />
        </div>

        <PortfolioSlider data={filteredPortfolioSliderData} />
        <Spacing lg="150" md="80" />
      </section>

      <TestimonialSlider
        layeredImages={[
          "/images/creative-agency/layer_img_1.jpeg",
          "/images/creative-agency/layer_img_2.jpeg",
          "/images/creative-agency/layer_img_3.jpeg",
          "/images/creative-agency/layer_img_4.jpeg",
          "/images/creative-agency/layer_img_5.jpeg",
        ]}
        data={testimonialData}
      />

      <section>
        <div className="container">
          <Cta
            title="Is there a specific project or goal that you have in mind?"
            btnText="Contact Us"
            btnUrl="/contact"
            bgUrl="/images/creative-agency/cta_bg.jpeg"
          />
        </div>
      </section>

      {/* <section className="cs_p76_full_width">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Some recent news" subTitle="Our Blog" />
          <Spacing lg="85" md="45" />
        </div>
        <PostCarousel data={postData} />
      </section> */}

      <section>
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Frequently asked question" subTitle="FAQs" />
          <Spacing lg="55" md="30" />
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <Accordion variant="cs_type_1" data={faqData} />
            </div>
          </div>
        </div>
        <Spacing lg="120" md="50" />
      </section>
    </>
  );
}
