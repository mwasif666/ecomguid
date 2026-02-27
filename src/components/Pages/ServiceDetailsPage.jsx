import React from 'react';
import { useParams } from 'react-router-dom';
import Cta from '../Cta';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import AboutStyle6 from '../About/AboutStyle6';
import { pageTitle } from '../../helpers/PageTitle';

export default function ServiceDetailsPage() {
  const { serviceDetailsId } = useParams();
  const serviceKey =
    serviceDetailsId && serviceDetailsId.toLowerCase() === 'etsy'
      ? 'etsy'
      : 'ebay';

  const serviceContent = {
    ebay: {
      title: 'eBay Store Management',
      subTitle: 'Service Details',
      heroImage: '/images/portfolio/ebay-2.jpg',
      itemsHeading: 'Build a $2k-$3k Monthly eBay Side Income',
      itemsDescription: [
        'This business model is designed for anyone who wants to start a profitable eBay side business without learning e-commerce from scratch or without actively engaging themselves.',
        'Our done-for-you model helps clients reach $2k-$3k in monthly profit within 5 to 6 months.',
        'My team and I walk you through the whole process and build and manage your eBay store end-to-end, and you can start even if you have zero prior knowledge.',
      ],
      about: {
        thumbnailSrc: '/images/portfolio/ebay-1.jpeg',
        title: "What's Included?",
        subTitle:
          'We offer end-to-end eBay store management so you can earn consistently with minimal time involvement.',
        featureList: [
          'Account Creation and Setup',
          'Product Research',
          'Listing Creation & Optimization',
          'Order Processing and Fulfillment',
          'Customer Support',
          'Returns & Refunds Handling',
          'Account Health Management',
          'Performance Tracking and Reporting',
        ],
        imageContain: true,
        btnText: 'Contact Us',
        btnUrl: '/contact',
      },
      howWeWork: [
        {
          title: 'Book a Strategy Call',
          description:
            'We start with a quick meeting where we explain the business model, understand your goals, and answer all your questions before getting started.',
        },
        {
          title: 'Simple Onboarding & Agreement',
          description:
            "Once you're ready, we complete the onboarding process and finalize the agreement so everything is clear, secure, and trustworthy for both sides.",
        },
        {
          title: 'eBay Account Setup',
          description:
            'If your eBay seller account is not set up, we help you create it. After that, we take secure access through child permissions or VPS to manage the store smoothly.',
        },
        {
          title: 'We Manage Everything',
          description:
            "Once we get the child access, my team and I handle the complete store, so you don't have to worry about operations. But, you can reach out anytime if you have questions.",
        },
        {
          title: 'Monthly Profit Review',
          description:
            'You only need to join one meeting per month where we review the performance, P&L, and plan the next growth steps.',
        },
      ],
    },
    etsy: {
      title: 'Etsy Store Management',
      subTitle: 'Service Details',
      heroImage: '/images/portfolio/etsy-1.jpg',
      itemsHeading: 'Everything your store needs to grow-handled for you',
      itemsDescription:
        'From shop setup and niche research to order processing, customer support, and performance tracking, we manage the end-to-end workflow so you can focus on outcomes-not daily operations.',
      about: {
        thumbnailSrc: '/images/portfolio/etsy-2.jpg',
        title: 'What you will get from this service?',
        subTitle:
          'We manage your Etsy store end to end with optimized listings, smooth fulfillment, and steady growth.',
        featureList: [
          'Shop setup and branding',
          'Niche research and listing SEO',
          'Order processing and customer care',
          'Performance tracking and improvements',
        ],
        btnText: 'Contact Us',
        btnUrl: '/contact',
      },
    },
  };

  const selectedService = serviceContent[serviceKey] || serviceContent.ebay;

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
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2">
              <div className="cs_service_info_thumb">
                <img
                  src={selectedService.heroImage}
                  alt={selectedService.title}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Spacing lg="150" md="80" />
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
        </>
      ) : null}
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
      <Spacing lg="135" md="80" />
    </>
  );
}
