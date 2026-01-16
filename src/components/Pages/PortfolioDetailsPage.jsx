import React from "react";
import { Link, useParams } from "react-router-dom";
import Spacing from "../Spacing";
import SectionHeadingStyle3 from "../SectionHeading/SectionHeadingStyle3";
import { Icon } from "@iconify/react";
import { pageTitle } from "../../helpers/PageTitle";
import portfolioDetails from "../../data/portfolioDetails.json";

export default function PortfolioDetailsPage() {
  const { portfolioDetailsId } = useParams();
  const currentIndex = portfolioDetails.findIndex(
    (item) => item.id === portfolioDetailsId
  );
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const selected = portfolioDetails[safeIndex];
  const prevItem = safeIndex > 0 ? portfolioDetails[safeIndex - 1] : null;
  const nextItem =
    safeIndex < portfolioDetails.length - 1
      ? portfolioDetails[safeIndex + 1]
      : null;

  pageTitle(selected?.title || "Portfolio Details");

  if (!selected) {
    return null;
  }

  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title={selected.title}
        subTitle={selected.subTitle || "Portfolio Details"}
      />
      <Spacing lg="75" md="60" />
      <div className="container">
        <div className="cs_portfolio_details">
          <img src={selected.heroImage} alt={selected.title} />
          <Spacing lg="100" md="40" />
          <div className="cs_portfolio_details_in">
            {selected.facts?.length > 0 && (
              <ul className="cs_portfolio_details_info cs_mp0">
                {selected.facts.map((fact, index) => (
                  <li key={`${fact.label}-${index}`}>
                    <h3 className="cs_fs_21 mb-0 cs_semibold">
                      {fact.label}:
                    </h3>
                    <p className="mb-0">{fact.value}</p>
                  </li>
                ))}
              </ul>
            )}
            <div className="cs_portfolio_details_right">
              <h2>Project Summary</h2>
              {selected.summary?.map((paragraph, index) => (
                <p key={`${selected.id}-summary-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
          <Spacing lg="115" md="60" />
          <div className="cs_portfolio_details_gallery">
            {selected.gallery?.map((src, index) => (
              <div key={`${selected.id}-gallery-${index}`}>
                <img src={src} alt={`${selected.title} gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <Spacing lg="90" md="60" />
        <div className="cs_page_navigation cs_center">
          {prevItem && (
            <div>
              <Link
                to={`/portfolio/${prevItem.id}`}
                className="cs_text_btn cs_type1"
              >
                <Icon icon="cil:arrow-left" className="cs_fs_21" />
                <span>Prev Project</span>
              </Link>
            </div>
          )}
          {nextItem && (
            <div>
              <Link to={`/portfolio/${nextItem.id}`} className="cs_text_btn">
                <span>Next Project</span>
                <Icon icon="cil:arrow-right" className="cs_fs_21" />
              </Link>
            </div>
          )}
        </div>
      </div>
      <Spacing lg="150" md="80" />
    </>
  );
}
