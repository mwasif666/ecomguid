import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const safeParse = (val) => {
  if (typeof val === "string") return parse(val);
  if (val === null || val === undefined) return "";
  return String(val);
};

export default function PortfolioStyle2({
  thumbnailSrc,
  miniTitle,
  title,
  subTitle,
  href,
}) {
  return (
    <>
      {/* ✅ Internal CSS */}
      <style>{`
        .cs_portfolio.cs_style_2 {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          isolation: isolate;
          transform: translateZ(0);
        }

        .cs_portfolio_thumb.cs_bg_filed {
          width: 100%;
          height: 320px; /* apni need ke hisaab se change */
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          transition: transform .7s ease;
        }

        /* Hover zoom */
        .cs_portfolio.cs_style_2:hover .cs_portfolio_thumb.cs_bg_filed {
          transform: scale(1.06);
        }

        /* ✅ Overlay */
        .cs_portfolio.cs_style_2::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.05) 0%,
            rgba(0,0,0,0.45) 50%,
            rgba(0,0,0,0.75) 100%
          );
          opacity: 0;
          transition: opacity .35s ease;
          pointer-events: none;
          z-index: 1;
        }

        .cs_portfolio.cs_style_2:hover::after {
          opacity: 1;
        }

        /* ✅ Button holder */
        .cs_portfolio_text {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none; /* button ko hover show karne ke liye */
        }

        /* ✅ Attractive button */
        .feature_thumbnail_btn {
          pointer-events: auto;
          border: 0;
          outline: 0;
          padding: 12px 18px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.2px;

          color: #fff;
          background: linear-gradient(135deg, #03a752, #00266f);
          box-shadow:
            0 18px 45px rgba(0,0,0,0.35),
            inset 0 0 0 1px rgba(255,255,255,0.18);

          display: inline-flex;
          align-items: center;
          gap: 10px;

          transform: translateY(14px) scale(.98);
          opacity: 0;
          transition: opacity .28s ease, transform .28s ease, box-shadow .28s ease, filter .28s ease;
          filter: saturate(1.05);
        }

        /* show only on hover */
        .cs_portfolio.cs_style_2:hover .feature_thumbnail_btn {
          opacity: 1;
          transform: translateY(0px) scale(1);
        }

        .feature_thumbnail_btn:hover {
          box-shadow:
            0 22px 60px rgba(0,0,0,0.45),
            inset 0 0 0 1px rgba(255,255,255,0.24);
          filter: brightness(1.05) saturate(1.1);
        }

        .feature_thumbnail_btn:active {
          transform: translateY(1px) scale(.99);
        }

        /* small arrow icon */
        .feature_thumbnail_btn .btn_icon {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,0.16);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.18);
          transition: transform .28s ease;
        }

        .feature_thumbnail_btn:hover .btn_icon {
          transform: translateX(2px);
        }

        /* Optional: title chip (if you want to show on hover) */
        .portfolio_chip {
          position: absolute;
          left: 14px;
          bottom: 14px;
          z-index: 2;

          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(0,0,0,0.45);
          color: rgba(255,255,255,0.95);
          font-size: 12px;
          font-weight: 600;

          opacity: 0;
          transform: translateY(8px);
          transition: opacity .28s ease, transform .28s ease;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.14);
          backdrop-filter: blur(8px);
        }

        .cs_portfolio.cs_style_2:hover .portfolio_chip {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="cs_portfolio cs_style_2">
        <div
          className="cs_portfolio_thumb cs_bg_filed"
          style={{
            backgroundImage: `url(${thumbnailSrc})`,
            backgroundSize: "cover", // contain chahiye ho to "contain"
          }}
        />

        {/* Optional chip text (miniTitle / title) */}
        {(miniTitle || title) && (
          <div className="portfolio_chip">
            {miniTitle ? safeParse(miniTitle) : safeParse(title)}
          </div>
        )}

        <div className="cs_portfolio_text d-flex justify-content-center w-100">
          {/* ✅ If href exists, wrap with Link */}
          {href ? (
            <Link to={href} style={{ textDecoration: "none" }}>
              <button className="feature_thumbnail_btn" type="button">
                View full Details
                <span className="btn_icon" aria-hidden="true">
                  {/* simple arrow */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 7H17V15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          ) : (
            <button className="feature_thumbnail_btn" type="button">
              View full Details
              <span className="btn_icon" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 7H17V15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
