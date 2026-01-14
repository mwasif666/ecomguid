// /src/components/Pages/Home.jsx

import React, { useMemo, useState } from "react";
import HeroStyle4 from "../Hero/HeroStyle4";
import PortfolioSlider from "../Slider/PortfolioSlider";
import SectionHeading from "../SectionHeading";

import Spacing from "../Spacing";
import FunFact from "../FunFact";
import About from "../About";
import WhyChose from "../WhyChose";
import Service from "../Service";
import Portfolio from "../Portfolio";
import Button from "../Button";
import Award from "../Award";
import Accordion from "../Accordion";
import Cta from "../Cta";
import TestimonialSlider from "../Slider/TestimonialSlider";
import PostCarousel from "../Slider/PostCarousel";
import { pageTitle } from "../../helpers/PageTitle";
import ServiceSlider from "../Slider/ServiceSlider";


// Images
import image1 from "../../assets/image_2.jpeg"



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

const serviceListData = [
  {
    title: "WP Development",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    imgUrl: "/images/creative-agency/service_7.jpeg",
    href: "/service/service-details",
  },
  {
    title: "UI/UX Design",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    imgUrl: "/images/creative-agency/service_8.jpeg",
    href: "/service/service-details",
  },
  {
    title: "Branding",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    imgUrl: "/images/creative-agency/service_9.jpeg",
    href: "/service/service-details",
  },
  {
    title: "Social Ad Campaign",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    imgUrl: "/images/creative-agency/service_10.jpeg",
    href: "/service/service-details",
  },
];

const portfolioData = [
  {
    href: "/portfolio/portfolio-details",
    imgUrl: "/images/creative-agency/portfolio_1.jpeg",
    title: "Awesome colorful artwork",
    btnText: "See Project",
  },
  {
    href: "/portfolio/portfolio-details",
    imgUrl: "/images/creative-agency/portfolio_2.jpeg",
    title: "Admin dashboard UI design",
    btnText: "See Project",
  },
  {
    href: "/portfolio/portfolio-details",
    imgUrl: "/images/creative-agency/portfolio_3.jpeg",
    title: "Product designing with brand",
    btnText: "See Project",
  },
  {
    href: "/portfolio/portfolio-details",
    imgUrl: "/images/creative-agency/portfolio_4.jpeg",
    title: "Kids education website design",
    btnText: "See Project",
  },
];

// ✅ Slider data (tabs: ebay / etsy)
// NOTE: Local images show best if they are in /public/images/... and you use "/images/...."
const portfolioSliderData = [
  {
    platform: "ebay",
    thumbnailSrc:
      image1,
    // miniTitle: "eBay Store Growth",
    // title: "Corporate Webly <br />Application",
    // subTitle:
    //   "From product research to listing optimization and scaling profitability <br /> with full end-to-end store management.",
    href: "/portfolioDetail",
  },
  {
    platform: "ebay",
    thumbnailSrc:
      "https://png.pngtree.com/thumb_back/fh260/background/20240521/pngtree-world-best-for-mobile-hd-wallpapers-pxfuel-photo-image_15804476.jpg",
    miniTitle: "Account Optimization",
    title: "eCommerce User <br />Interface Design",
    subTitle:
      "From store setup to order handling and customer support <br /> ensuring growth without your daily time involvement.",
    href: "/portfolio/portfolio-details",
  },
  {
    platform: "etsy",
    thumbnailSrc:
      "https://static.vecteezy.com/system/resources/thumbnails/070/579/927/small_2x/orange-flowers-in-a-field-with-a-blurry-background-photo.jpg",
    miniTitle: "Etsy Store Scaling",
    title: "Multi Dimension <br />Two Square",
    subTitle:
      "From niche research to keyword strategy and conversion improvements <br /> to help your Etsy shop grow consistently.",
    href: "/portfolio/portfolio-details",
  },
  {
    platform: "etsy",
    thumbnailSrc:
      "https://static.vecteezy.com/system/resources/thumbnails/049/855/414/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-free-photo.jpg",
    miniTitle: "Creative Listing Strategy",
    title: "Animated Abstract <br />3D Background",
    subTitle:
      "From product positioning to brand visuals and shop optimization <br /> to maximize organic sales and repeat buyers.",
    href: "/portfolio/portfolio-details",
  },
];

const awardData = [
  {
    brand: "Behance",
    title: "UI/UX design of the month",
    subTitle:
      "Accusamus et iusto odio dignissimos ducimus qui blanditiis fedarals praesentium voluptatum deleniti atque corrupti quos dolores",
    date: "December 12, 2023",
    awardImgUrl: "/images/creative-agency/award_img_1.svg",
  },
  {
    brand: "Awwwards",
    title: "CSS awards design",
    subTitle:
      "Accusamus et iusto odio dignissimos ducimus qui blanditiis fedarals praesentium voluptatum deleniti atque corrupti quos dolores",
    date: "January 05, 2022",
    awardImgUrl: "/images/creative-agency/award_img_2.svg",
  },
  {
    brand: "Google",
    title: "Website of the day",
    subTitle:
      "Accusamus et iusto odio dignissimos ducimus qui blanditiis fedarals praesentium voluptatum deleniti atque corrupti quos dolores",
    date: "March 20, 2021",
    awardImgUrl: "/images/creative-agency/award_img_3.svg",
  },
];

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

const postData = [
  {
    thumbnailSrc: "/images/creative-agency/post_1.jpeg",
    title: "How to keep fear from ruining your art business with confident",
    date: "07 Mar 2023",
    url: "/blog/blog-details",
  },
  {
    thumbnailSrc: "/images/creative-agency/post_2.jpeg",
    title: "Artistic mind will be great for creation anything",
    date: "22 Apr 2023",
    url: "/blog/blog-details",
  },
  {
    thumbnailSrc: "/images/creative-agency/post_3.jpeg",
    title: "AI will take over all job for human within few years",
    date: "13 May 2023",
    url: "/blog/blog-details",
  },
  {
    thumbnailSrc: "/images/creative-agency/post_4.jpeg",
    title: "Your agency need to replace some artistic mind people",
    date: "15 Mar 2023",
    url: "/blog/blog-details",
  },
  {
    thumbnailSrc: "/images/creative-agency/post_1.jpeg",
    title: "How to keep fear from ruining your art business with confident",
    date: "07 Mar 2023",
    url: "/blog/blog-details",
  },
  {
    thumbnailSrc: "/images/creative-agency/post_2.jpeg",
    title: "Artistic mind will be great for creation anything",
    date: "22 Apr 2023",
    url: "/portfolio/portfolio-details",
  },
  {
    thumbnailSrc: "/images/creative-agency/post_3.jpeg",
    title: "AI will take over all job for human within few years",
    date: "13 May 2023",
    url: "/portfolio/portfolio-details",
  },
  {
    thumbnailSrc: "/images/creative-agency/post_4.jpeg",
    title: "Your agency need to replace some artistic mind people",
    date: "15 Mar 2023",
    url: "/portfolio/portfolio-details-page",
  },
];

const servideData = [
  {
    iconSrc: "/images/marketing-agency/service_icon_1.svg",
    title: "ebay",
    subTitle:"We offer end-to-end eBay store management, covering account creation and setup, product research, listing creation & optimization, order processing and fulfillment, customer support, returns & refunds handling, account health management, and performance tracking and reporting.",
    // btnText: "See More",
    // btnUrl: "/service/service-details",
  },
  {
    iconSrc: "/images/marketing-agency/service_icon_2.svg",
    title: "Etsy",
    subTitle:"We offer end-to-end Etsy store management, covering account creation and setup, niche & product research, listing creation & optimization, order processing & fulfillment, customer support, returns & refunds handling, account health management, and performance tracking and reporting.",
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
      Ecom Guild helps people build profitable side businesses on e-commerce
      marketplaces like eBay and Etsy.
      <br />
      <br />
      We are a guild of 20+ professionals who manage everything end to end 
      product research, listings, orders, customer support, and account management
       so our partners can earn with minimal time involvement.
      <br />
      <br />
      Our goal is simple: make e-commerce easy, transparent, and accessible for
      anyone looking to start a side hustle.
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

      {/* Optional existing portfolio grid */}
      {/* <section>
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Some featured work" subTitle="Portfolio" />
          <Spacing lg="85" md="45" />
          <Portfolio data={portfolioData} />
          <Spacing lg="26" md="30" />
          <div className="text-center">
            <Button btnText="See All Project" btnUrl="/portfolio" />
          </div>
        </div>
        <Spacing lg="150" md="80" />
      </section> */}

      {/* <section className="cs_primary_bg cs_shape_animation_2">
        <Spacing lg="143" md="75" />
        <div className="cs_shape_1 position-absolute">
          <svg
            width={65}
            height={64}
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M62.4554 25.9314C55.6838 19.6081 40.1618 12.4752 32.1637 20.1537C41.7609 21.9206 53.2379 29.2392 48.3751 39.1677C45.1712 45.7019 38.7353 45.7177 33.3337 41.995C27.338 37.8739 25.7108 31.2667 27.4596 24.5962C26.5312 24.5866 25.6039 24.6605 24.6889 24.8172C9.80991 27.7447 14.0713 47.6353 20.9187 55.948C22.4528 57.8045 19.7488 60.3159 18.1393 58.4837C7.86403 46.8126 6.49349 23.0691 25.5532 19.9295C26.8892 19.7254 28.2446 19.6801 29.5912 19.7945C36.9845 9.42053 56.5698 17.4866 64.055 24.4366C65.1096 25.4175 63.4831 26.8926 62.4554 25.9314ZM33.9938 39.0327C38.3927 42.4636 44.2429 40.8527 44.3919 34.8698C44.6036 28.2263 35.7464 25.0921 29.1457 24.655C27.1454 29.9313 29.4427 35.4836 33.9938 39.0327Z"
                fill="#4F4747"
              />
            </g>
          </svg>
        </div>

        <div className="container">
          <SectionHeading
            title="Our prize achievement"
            subTitle="Awards"
            variantColor="cs_white_color"
          />
          <Spacing lg="85" md="45" />
          <Award data={awardData} />
        </div>

        <Spacing lg="150" md="80" />
      </section> */}

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
