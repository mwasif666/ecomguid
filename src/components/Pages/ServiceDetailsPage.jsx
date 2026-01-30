import React from 'react';
import { useParams } from 'react-router-dom';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import CtaStyle2 from '../Cta/CtaStyle2';
import AboutStyle6 from '../About/AboutStyle6';
import CardStyle3 from '../Card/CardStyle3';
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
      heroImage: '/images/portfolio/ebay-4.jpg',
      items: [
        'Account Creation and Setup',
        'Product Research',
        'Listing Creation & Optimization',
        'Order Processing and Fulfillment',
        'Customer Support',
        'Returns & Refunds Handling',
        'Account Health Management',
        'Performance Tracking and Reporting',
      ],
      about: {
        thumbnailSrc: '/images/portfolio/ebay-1.jpeg',
        title: 'What you will get from this service?',
        subTitle:
          'We offer end-to-end eBay store management so you can earn consistently with minimal time involvement and no upfront fees.',
        featureList: [
          'Complete store setup and optimization',
          'Product research and listing creation',
          'Order processing, returns, and support',
          'Account health tracking with clear reporting',
        ],
        btnText: 'Contact Us',
        btnUrl: '/contact',
      },
    },
    etsy: {
      title: 'Etsy Store Management',
      subTitle: 'Service Details',
      heroImage: '/images/portfolio/etsy-1.jpg',
      items: [
        'Account Creation and Setup',
        'Niche & Product Research',
        'Listing Creation & Optimization',
        'Order Processing & Fulfillment',
        'Customer Support',
        'Returns & Refunds Handling',
        'Account Health Management',
        'Performance Tracking and Reporting',
      ],
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

  const selectedService =
    serviceContent[serviceKey] || serviceContent.ebay;

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
              <div className="col-lg-6">
                <div
                  className="cs_service_info_thumb cs_bg_filed"
                  style={{
                    backgroundImage: `url(${selectedService.heroImage})`,
                  }}
                />
              </div>
              <div className="col-lg-6">
                <div className="row cs_gap_y_40">
                  {selectedService.items.map((item, index) => (
                    <div className="col-sm-6" key={item}>
                      <CardStyle3
                        number={`${index + 1}`.padStart(2, '0')}
                        title={item}
                        subTitle={null}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      <Spacing lg="150" md="80" />
      <AboutStyle6 {...selectedService.about} />
      <Spacing lg="150" md="80" />
      <div className="cs_height_140 cs_height_lg_70" />
      <CtaStyle2
        title="Is there a specific project or goal <br />that you have in mind?"
        btnText="Send Message"
        btnUrl="/contact"
      />
      <div className="cs_height_150 cs_height_lg_80" />
    </>
  );
}
