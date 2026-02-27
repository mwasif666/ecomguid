import React from 'react';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import AboutStyle4 from '../About/AboutStyle4';
import FunFact from '../FunFact';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import AboutStyle6 from '../About/AboutStyle6';
import TestimonialSlider from '../Slider/TestimonialSlider';
import Cta from '../Cta';
import { pageTitle } from '../../helpers/PageTitle';
const funfactData = [
  { title: 'Years of Experience', number: '3+' },
  { title: 'Active Stores Managed', number: '50+' },
  { title: 'Total Profit Generated', number: '$700K+' },
  { title: 'Total Sales Generated', number: '$4M+' },
];
const teamData = [
  {
    memberImg: '/images/studio-agency/team_1.jpeg',
    memberName: 'James Berline',
    memberDesignation: 'React Developer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_2.jpeg',
    memberName: 'Bella Zubena',
    memberDesignation: 'Graphic Designer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_3.jpeg',
    memberName: 'Kemnei Alekzend',
    memberDesignation: 'Digital Marketer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_4.jpeg',
    memberName: 'Juliya Jesmine',
    memberDesignation: 'UX Researcher',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_1.jpeg',
    memberName: 'James Berline',
    memberDesignation: 'React Developer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_2.jpeg',
    memberName: 'Bella Zubena',
    memberDesignation: 'Graphic Designer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_3.jpeg',
    memberName: 'Kemnei Alekzend',
    memberDesignation: 'Digital Marketer',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/team_4.jpeg',
    memberName: 'Juliya Jesmine',
    memberDesignation: 'UX Researcher',
    href: '/team/team-details',
  },
];
const testimonialData = [
  {
    text: "This service is perfect if you're looking for a genuine side business. I barely spend 1-2 hours a month, and they take care of listings, customer support, and order fulfillment. The profit-sharing model makes it risk-free, and the results have exceeded my expectations so far. Highly recommended for anyone wanting passive income through eBay.",
    avatarSrc: '/images/reviews/muzamil.jpeg',
    avatarName: 'Mr. Muzammil Shaheen',
    avatarDesignation: 'Transport Contractor',
  },
  {
    text: "Very professional and well-organized service. They guided me step by step and explained both the challenges and the strategy clearly before starting. I appreciate how honest and responsive they are. My eBay account is growing steadily, and I can see real progress in sales and profit. Definitely a reliable team to work with.",
    avatarSrc: '/images/reviews/sarang.jpeg',
    avatarName: 'Mr. Sarang Siddiqui',
    avatarDesignation: 'MD - Physician',
  },
  {
    text: "I had no prior knowledge of e-commerce Etsy, but they made everything simple and easy to understand. There were no false promises, only realistic goals and clear communication. I'm glad I chose them for my Etsy business.",
    avatarSrc: '/images/reviews/uzair.jpeg',
    avatarName: 'Mr. Uzair Rehman',
    avatarDesignation: 'Sr. Software Engineer',
  },
  {
    text: "Thank God they reached out to me. A simple conversation turned into a real blessing for me as a side income. I had no experience with eBay, but they handled everything professionally and guided me honestly throughout the process. I'm truly grateful for the opportunity and the consistent results I'm seeing. Highly recommended for anyone looking for a genuine side business.",
    avatarSrc: '/images/reviews/akbar.jpeg',
    avatarName: 'Mr. Akbar Khan',
    avatarDesignation: 'Flight Attendant',
  },
  {
    text: "I started working with them a few months ago, and after seeing consistent results over the first 5 to 6 months, I felt confident enough to open another eBay store using my wife's details. They are now managing both accounts smoothly, and both stores are generating good profits. I'm very satisfied with the results.",
    avatarSrc: '/images/reviews/zayam.png',
    avatarName: 'Mr. Zayam Mahmood',
    avatarDesignation: 'Chemical Engineer',
  },
];

export default function AboutPage() {
  pageTitle('About');
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="Helping People Generate Side Income Effortlessly"
        subTitle="About Us"
        variant="text-center"
        shape="shape_1"
      />
      <Spacing lg="75" md="60" />
      <AboutStyle4
        thumbnailSrc="/images/digital-agency/about_1.jpeg"
        miniTitle="About Us"
        title="E-commerce Agency for your Business."
        insideContainer
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
        btnText="See Our Services"
        btnUrl="/service"
      />
      <Spacing lg="125" md="70" />
      <div className="container">
        <FunFact data={funfactData} />
      </div>
      <Spacing lg="125" md="70" />
      <AboutStyle6
        thumbnailSrc="/images/portfolio/ebay-2.jpg"
        title="We Build & Scale Profitable E-Commerce Businesses"
        subTitle="We help people build a profitable side income on platforms like eBay and Etsy with no upfront costs, no prior e-commerce experience, and minimal time involvement, achieving results within 4 to 5 months."
        featureList={[
          "No upfront fees",
          "No prior e-commerce experience required",
          "Results in 4-5 months with minimal time involvement",
          "End-to-end eBay & Etsy store management",
        ]}
        btnText="See Our Services"
        btnUrl="/service"
      />
      <Spacing lg="150" md="80" />
      <section className="cs_p76_full_width">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Meet Our Guild" subTitle="Our Team" />
          <Spacing lg="85" md="45" />
        </div>
        <TeamSlider data={teamData} />
      </section>
      <Spacing lg="150" md="80" />
      <div className="container">
        <SectionHeading title="Reviews from our clients" subTitle="Reviews" />
        <Spacing lg="85" md="45" />
      </div>
      <TestimonialSlider layeredImages={[]} data={testimonialData} />
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
