import React from 'react';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import ServiceStyle2 from '../Service/ServiceStyle2';
import CtaStyle2 from '../Cta/CtaStyle2';
import { pageTitle } from '../../helpers/PageTitle';
const serviceData = [
  {
    number: '01',
    title: 'eBay Store Management',
    subTitle:
      'We offer end-to-end eBay store management, covering account setup, product research, listing optimization, order processing, support, and reporting.',
    thumbnailSrc: '/images/portfolio/ebay-1.jpeg',
    href: '/service/ebay',
  },
  {
    number: '02',
    title: 'Etsy Store Management',
    subTitle:
      'We offer end-to-end Etsy store management, covering niche research, listing optimization, order fulfillment, support, and reporting.',
    thumbnailSrc: '/images/portfolio/etsy-1.jpg',
    href: '/service/etsy',
  },
];

export default function ServicePage() {
  pageTitle('Service');
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="Empowering Your Business with Comprehensive Services"
        subTitle="Our Services"
        shape="shape_2"
      />
      <Spacing lg="75" md="60" />
      <div className="container">
        <ServiceStyle2 data={serviceData} />
      </div>
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
