import React from "react";
import { Link, useParams } from "react-router-dom";
import Cta from "../Cta";
import Spacing from "../Spacing";
import SectionHeadingStyle3 from "../SectionHeading/SectionHeadingStyle3";
import AboutStyle6 from "../About/AboutStyle6";
import SectionHeading from "../SectionHeading";
import Accordion from "../Accordion";
import FunFact from "../FunFact";
import PortfolioSlider from "../Slider/PortfolioSlider";
import TestimonialSlider from "../Slider/TestimonialSlider";
import portfolioDetails from "../../data/portfolioDetails.json";
import { pageTitle } from "../../helpers/PageTitle";

export default function ServiceDetailsPage() {
  const { serviceDetailsId } = useParams();
  const serviceKey =
    serviceDetailsId && serviceDetailsId.toLowerCase() === "etsy"
      ? "etsy"
      : "ebay";

  const serviceContent = {
    ebay: {
      title: "eBay Store Management",
      subTitle: "Service Details",
      heroImage:
        "https://res.cloudinary.com/dr0pxq6py/image/upload/v1771582016/31a66bfb-aa52-4d06-9326-65cf47bd94c3_removalai_preview_zosqqh.png",
      itemsHeading: "Build a $2k-$3k Monthly eBay Side Income",
      itemsDescription: [
        "This business model is designed for anyone who wants to start a profitable eBay side business without learning e-commerce from scratch or without actively engaging themselves.",
        "Our done-for-you model helps clients reach $2k-$3k in monthly profit within 5 to 6 months.",
        "My team and I walk you through the whole process and build and manage your eBay store end-to-end, and you can start even if you have zero prior knowledge.",
      ],
      about: {
        thumbnailSrc:
          "https://captens.com/wp-content/uploads/2023/05/OUR-Approach-PPC-Management.png",
        title: "What's Included?",
        subTitle:
          "We offer end-to-end eBay store management so you can earn consistently with minimal time involvement.",
        featureList: [
          "Account Creation and Setup",
          "Product Research",
          "Listing Creation & Optimization",
          "Order Processing and Fulfillment",
          "Customer Support",
          "Returns & Refunds Handling",
          "Account Health Management",
          "Performance Tracking and Reporting",
        ],
        imageContain: true,
        btnText: "Contact Us",
        btnUrl: "/contact",
      },
      howWeWork: [
        {
          title: "Book a Strategy Call",
          description:
            "We start with a quick meeting where we explain the business model, understand your goals, and answer all your questions before getting started.",
        },
        {
          title: "Simple Onboarding & Agreement",
          description:
            "Once you're ready, we complete the onboarding process and finalize the agreement so everything is clear, secure, and trustworthy for both sides.",
        },
        {
          title: "eBay Account Setup",
          description:
            "If your eBay seller account is not set up, we help you create it. After that, we take secure access through child permissions or VPS to manage the store smoothly.",
        },
        {
          title: "We Manage Everything",
          description:
            "Once we get the child access, my team and I handle the complete store, so you don't have to worry about operations. But, you can reach out anytime if you have questions.",
        },
        {
          title: "Monthly Profit Review",
          description:
            "You only need to join one meeting per month where we review the performance, P&L, and plan the next growth steps.",
        },
      ],
      testimonials: [
        {
          text: "This service is perfect if you're looking for a genuine side business. I barely spend 1-2 hours a month, and they take care of listings, customer support, and order fulfillment. The profit-sharing model makes it risk-free, and the results have exceeded my expectations so far. Highly recommended for anyone wanting passive income through Etsy.",
          avatarSrc: "/images/reviews/muzamil.jpeg",
          avatarName: "Mr. Muzammil Shaheen",
          avatarDesignation: "Transport Contractor",
        },
        {
          text: "Very professional and well-organized service. They guided me step by step and explained both the challenges and the strategy clearly before starting. I appreciate how honest and responsive they are. My Etsy account is growing steadily, and I can see real progress in sales and profit. Definitely a reliable team to work with.",
          avatarSrc: "/images/reviews/sarang.jpeg",
          avatarName: "Mr. Sarang Siddiqui",
          avatarDesignation: "MD - Physician",
        },
        {
          text: "Thank God they reached out to me. A simple conversation turned into a real blessing for me as a side income. I had no experience with Etsy, but they handled everything professionally and guided me honestly throughout the process. I'm truly grateful for the opportunity and the consistent results I'm seeing. Highly recommended for anyone looking for a genuine side business.",
          avatarSrc: "/images/reviews/akbar.jpeg",
          avatarName: "Mr. Akbar Khan",
          avatarDesignation: "Flight Attendant",
        },
        {
          text: "I started working with them a few months ago, and after seeing consistent results over the first 5 to 6 months, I felt confident enough to open another Etsy store using my wife's details. They are now managing both accounts smoothly, and both stores are generating good profits. I'm very satisfied with the results.",
          avatarSrc: "/images/reviews/zayam.png",
          avatarName: "Mr. Zayam Mahmood",
          avatarDesignation: "Chemical Engineer",
        },
      ],
      stats: [
        { title: "Years of Experience", number: "3+" },
        { title: "Stores Managed", number: "50+" },
        { title: "Profit Generated", number: "$700K+" },
        { title: "Sales Generated", number: "$4M+" },
      ],
      faq: [
        {
          title:
            "01. Can I start if I don't have any knowledge of e-commerce or prior business experience?",
          content:
            "Yes, absolutely. You can start even if you have no previous knowledge or experience. We guide you through every step of the process by clearly explaining the strategy, potential challenges, and how the business operates.",
        },
        {
          title: "02. What do I need to create an eBay seller account?",
          content:
            "You need a bank account, a valid driving license or passport, tax number (such as SSN/ABN based on country), phone number, and email address.",
        },
        {
          title:
            "03. Do I need to share my personal details, bank account access, or send any money upfront?",
          content:
            "No. We do not ask for your bank account access and there are no upfront payments. We only require access to your eBay account to begin working.",
        },
        {
          title: "04. How do I give you access to my account?",
          content:
            "You can grant us child (sub-user) access to your eBay account. For complete operational handling, we can also work through main account access via VPS.",
        },
      ],
      portfolioPlatform: "ebay",
    },
    etsy: {
      title: "Etsy Store Management",
      subTitle: "Service Details",
      heroImage:
        "https://res.cloudinary.com/dr0pxq6py/image/upload/v1772211901/Etsay_About_khxvln.png",
      itemsHeading: "Build a $2k-$3k Monthly Etsy Side Income",
      itemsDescription: [
        "This business model is designed for anyone who wants to start a profitable Etsy side business without learning e-commerce from scratch or without actively engaging themselves.",
        "Our done-for-you model helps clients reach $2k-$3k in monthly profit within 5 to 6 months.",
        "My team and I walk you through the whole process and build and manage your Etsy store end-to-end, and you can start even if you have zero prior knowledge.",
      ],
      about: {
        thumbnailSrc:
          "https://captens.com/wp-content/uploads/2023/05/OUR-Approach-PPC-Management.png",
        title: "What's Included?",
        subTitle:
          "We offer end-to-end Etsy store management so you can earn consistently with minimal time involvement.",
        featureList: [
          "Account Creation and Setup",
          "Niche Research",
          "Listing Creation & Optimization",
          "Order Processing and Fulfillment",
          "Customer Support",
          "Returns & Refunds Handling",
          "Account Health Management",
          "Performance Tracking and Reporting",
        ],
        imageContain: true,
        btnText: "Contact Us",
        btnUrl: "/contact",
      },
      howWeWork: [
        {
          title: "Book a Strategy Call",
          description:
            "We start with a quick meeting where we explain the business model, understand your goals, and answer all your questions before getting started.",
        },
        {
          title: "Simple Onboarding & Agreement",
          description:
            "Once you're ready, we complete the onboarding process and finalize the agreement so everything is clear, secure, and trustworthy for both sides.",
        },
        {
          title: "Etsy Account Setup",
          description:
            "If your Etsy seller account is not set up, we help you create it. After that, we take secure access through VPS to manage the store smoothly.",
        },
        {
          title: "We Manage Everything",
          description:
            "Once we get the child access, my team and I handle the complete store, so you don't have to worry about operations. But, you can reach out anytime if you have questions.",
        },
        {
          title: "Monthly Profit Review",
          description:
            "You only need to join one meeting per month where we review the performance, P&L, and plan the next growth steps.",
        },
      ],
      testimonials: [
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
      ],
      stats: [
        { title: "Years of Experience", number: "3+" },
        { title: "Stores Managed", number: "50+" },
        { title: "Profit Generated", number: "$700K+" },
        { title: "Sales Generated", number: "$4M+" },
      ],
      faq: [
        {
          title:
            "01. Can I start if I don't have any knowledge of e-commerce or prior business experience?",
          content:
            "Yes, absolutely. You can start even if you have no previous knowledge or experience. We guide you through every step of the process by clearly explaining the strategy, potential challenges, and how the business operates.",
        },
        {
          title: "02. What do I need to create an Etsy seller account?",
          content:
            "You need a bank account, a valid driving license or passport, tax number (such as SSN/ABN based on country), phone number, and email address.",
        },
        {
          title:
            "03. Do I need to share my personal details, bank account access, or send any money upfront?",
          content:
            "No. We do not ask for your bank account access and there are no upfront payments. We only require access to your Etsy account to begin working.",
        },
        {
          title: "04. How do I give you access to my account?",
          content:
            "You can grant us child (sub-user) access to your account. For complete operational handling, we can also work through main account access via VPS.",
        },
      ],
      portfolioPlatform: "etsy",
      portfolioEmptyMessage:
        "Etsy portfolio case studies are being added and will be visible here shortly.",
    },
  };

  const selectedService = serviceContent[serviceKey] || serviceContent.ebay;
  const actionBtnUrl = selectedService.about?.btnUrl || "/contact";
  const colorVariant = false;
  const portfolioSliderData = portfolioDetails
    .filter((item) => item.platform === selectedService.portfolioPlatform)
    .map((item) => ({
      thumbnailSrc: item.thumbnailSrc,
      miniTitle: item.subTitle,
      title: item.title,
      subTitle: item.summary?.[0] || "",
      href: `/portfolio/${item.id}`,
    }));

  pageTitle(selectedService.title);

  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title={selectedService.title}
        subTitle={selectedService.subTitle}
        shape="shape_3"
      />
      <Spacing lg="75" md="60" />

      <div className="cs_service_info">
        <div className="container">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6 order-2 order-lg-1 cs_service_text_col">
              <div className="cs_service_points_head">
                <h2 className="cs_service_points_title">
                  {selectedService.itemsHeading}
                </h2>
                {Array.isArray(selectedService.itemsDescription) ? (
                  selectedService.itemsDescription.map((paragraph, index) => (
                    <p className="cs_service_points_desc" key={`desc-${index}`}>
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="cs_service_points_desc">
                    {selectedService.itemsDescription}
                  </p>
                )}
                <Link
                  to={actionBtnUrl}
                  className={`cs_btn cs_style_1 mt-4 ${
                    colorVariant ? "cs_btn_white" : ""
                  }`}
                >
                  Schedule a Call
                </Link>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2">
              <div className="cs_service_info_thumb">
                <img
                  src={selectedService.heroImage}
                  alt={selectedService.title}
                  className="w-100 h-100 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedService.testimonials?.length ? (
        <>
          <Spacing lg="120" md="70" />
          <TestimonialSlider
            layeredImages={[]}
            data={selectedService.testimonials}
            topSpaceClass=""
            innerTopSpaceClass=""
          />
        </>
      ) : null}

      <AboutStyle6 {...selectedService.about} />
      {selectedService.howWeWork?.length ? (
        <>
          <Spacing lg="120" md="70" />
          <div className="container">
            <section className="cs_how_work_section">
              <h2 className="cs_how_work_heading">How we Work?</h2>
              <div className="cs_how_work_grid">
                {selectedService.howWeWork.map((step, index) => (
                  <div className="cs_how_work_circle" key={step.title}>
                    <span className="cs_how_work_badge">{index + 1}</span>
                    <h3 className="cs_how_work_title">{step.title}</h3>
                    <p className="cs_how_work_desc mb-0">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <Spacing lg="60" md="45" />
          <div className="container text-center">
            <Link
              to={actionBtnUrl}
              className={`cs_btn cs_style_1 ${
                colorVariant ? "cs_btn_white" : ""
              }`}
            >
              Schedule a Call
            </Link>
          </div>
        </>
      ) : null}

      {selectedService.stats?.length ? (
        <>
          <Spacing lg="120" md="70" />
          <div className="container">
            <FunFact data={selectedService.stats} />
          </div>
        </>
      ) : null}

      <section>
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Some featured work" subTitle="Portfolio" />
          <Spacing lg="85" md="45" />
        </div>
        {portfolioSliderData.length ? (
          <PortfolioSlider data={portfolioSliderData} />
        ) : (
          <div className="container text-center">
            <p className="cs_service_points_desc mb-0">
              {selectedService.portfolioEmptyMessage ||
                "Portfolio case studies are being added and will be visible here shortly."}
            </p>
          </div>
        )}
      </section>

      <Spacing lg="150" md="80" />

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

      {selectedService.faq?.length ? (
        <section>
          <Spacing lg="143" md="75" />
          <div className="container">
            <SectionHeading title="Frequently asked question" subTitle="FAQs" />
            <Spacing lg="55" md="30" />
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <Accordion variant="cs_type_1" data={selectedService.faq} />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <Spacing lg="135" md="80" />
    </>
  );
}
