import React from "react";
import { Link } from "react-router-dom";

export default function HeroStyle4({
  bgUrl,
  thumbnailSrc,
  title,
  subTitle,
  colorVariant,
  cart,
  actionBtnText,
  actionBtnUrl,
}) {
  return (
    <section
      className="cs_hero cs_style_4 position-relative"
      style={{
        backgroundImage: `url(${thumbnailSrc})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-items-center">
            <div className="cs_hero_subtitle">
              <h1 className="cs_hero_title">{title}</h1>
              <p className="mb-0" style={{ fontSize: "18px" }}>
                {subTitle}
              </p>
              {/* <button
                className="btn cs_center cs_primary_color"
                style={{
                  marginTop: "20px",
                  padding: "12px 30px",
                  fontSize: "16px",
                  fontWeight: "500",
                  borderRadius: "15px",
                  border: "1px solid #fff",
                  backgroundColor: "transparent",
                  color: "#fff",
                  cursor: "pointer",
                }}
              ></button> */}
              <Link
                to={actionBtnUrl}
                className={`cs_btn cs_style_1 mt-4 ${
                  colorVariant ? "cs_btn_white" : ""
                }`}
              >
                Schedule a Call
              </Link>
              {/* <a
                href="#service"
                className="cs_down_btn cs_center cs_primary_color"
              >
                <svg
                  width={8}
                  height={33}
                  viewBox="0 0 8 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 32.3536C3.84171 32.5488 4.15829 32.5488 4.35355 32.3536L7.53554 29.1716C7.7308 28.9763 7.7308 28.6597 7.53554 28.4645C7.34027 28.2692 7.02369 28.2692 6.82843 28.4645L4 31.2929L1.17157 28.4645C0.976312 28.2692 0.65973 28.2692 0.464467 28.4645C0.269205 28.6597 0.269205 28.9763 0.464467 29.1716L3.64645 32.3536ZM3.5 2.18557e-08L3.5 32L4.5 32L4.5 -2.18557e-08L3.5 2.18557e-08Z"
                    fill="currentColor"
                  />
                </svg>
              </a> */}
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={bgUrl}
              alt="Hero Background"
              className="w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
        <div className="cs_hero_text position-relative"></div>

        <div className="row align-items-center">
          <div className="col-lg-5"></div>

          <div className="col-lg-7"></div>
        </div>
      </div>

      <div className="cs_hero_shape">
        <svg
          width={458}
          height={475}
          viewBox="0 0 458 475"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M2.35848 153.351L456.103 1.77286L370.156 472.382L2.35848 153.351Z"
            stroke="#A3A3A3"
            strokeWidth={2}
          />
        </svg>
      </div>
    </section>
  );
}
