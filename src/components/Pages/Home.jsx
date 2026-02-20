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

const faqData = [
  {
    title:
      "01. Can I start if I don’t have any knowledge of e-commerce or prior business experience?",
    content:
      "Yes, absolutely. You can start even if you have no previous knowledge or experience. We guide you through every step of the process by clearly explaining the strategy, potential challenges, and how the business operates.",
  },
  {
    title: "02. What do I need to create an eBay or Etsy seller account?",
    content: (
      <>
        <p>
          You will need the following details based on the country you are
          living in:
        </p>
        <ul>
          <li>
            A bank account (e.g., PNC or Chase in the US; Westpac or ANZ in
            Australia)
          </li>
          <li>A valid driving license or passport</li>
          <li>A tax number (SSN in the US, ABN in Australia)</li>
          <li>A phone number</li>
          <li>An email address</li>
        </ul>
      </>
    ),
  },
  {
    title:
      "03. Do I need to share my personal details, bank account access, or send any money upfront?",
    content:
      "No. We do not ask for your personal details or bank account access, and there are no upfront payments. We only require access to your eBay account to begin working.",
  },
  {
    title: "04. How do I give you access to my account?",
    content:
      "You can grant us child (sub-user) access to your eBay account. However, we recommend providing main account access via a VPS, as certain actions—such as handling disputes, returns, and refunds—can only be managed effectively through the main account.",
  },
  // {
  //   title: "05. How can i payment proceed after complete project?",
  //   content:
  //     "Marketing eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
  // },
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
        title="We Built & Scaled a Store for One of Our Clients."
        subTitle="Mr. Hammad, one of our clients, came to us in July 2024 with no prior e-commerce experience. We launched and managed his store with zero upfront fees. Since then, the store has been consistently generating $4k-$5k per month in profit and has achieved over $50k in total profits."
        thumbnailSrc={
          darkMode
            ? "/images/digital-agency/hero_bg_dark.jpeg"
            : "/images/digital-agency/hero_bg_dark.jpeg"
        }
        bgUrl="https://res.cloudinary.com/dr0pxq6py/image/upload/v1771582016/31a66bfb-aa52-4d06-9326-65cf47bd94c3_removalai_preview_zosqqh.png"
      />

      <Spacing lg="125" md="70" />
      <div className="container">
        <FunFact data={funfactData} />
      </div>

      <Spacing lg="125" md="70" />
      <About
        thumbnail="https://ecomexpertspro.com/images/know-about-us-side.png"
        uperTitle="What We Do"
        title="We Build & Scale Profitable E-Commerce Businesses"
        subTitle={
          <>
            We help people build a profitable side income on platforms like eBay
            and Etsy with no upfront costs, no prior e-commerce experience, and
            minimal time involvement, achieving results within 4 to 5 months.
          </>
        }
        featureList={[
          "No upfront fees",
          "No prior e-commerce experience required",
          "Results in 4-5 months with minimal time involvement",
        ]}
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
        sectionTitle="Smart, Low-Risk Partnership"
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
              <select
                className="cs_portfolio_select"
                value={activeTab}
                onChange={(event) => setActiveTab(event.target.value)}
                aria-label="Portfolio platform"
              >
                <option value="ebay">eBay</option>
                <option value="etsy">Etsy</option>
              </select>
            </div>
          </div>

          <Spacing lg="85" md="45" />
        </div>

        <PortfolioSlider data={filteredPortfolioSliderData} />
        <Spacing lg="150" md="80" />
      </section>

      <TestimonialSlider layeredImages={[]} data={testimonialData} />

      <section>
        <div className="container">
          <Cta
            title="Start Your Journey With Us"
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
