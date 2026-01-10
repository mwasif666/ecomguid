import React from "react";
import WaterWave from "react-water-wave";
import Spacing from "../Spacing";
import parse from "html-react-parser";

/**
 * Image block with WaterWave ripple effect
 * - No video modal
 * - Still shows the same play icon overlay (optional)
 */
export default function ImageWaveBlock({
  bgUrl,
  title,
  titleVariant,
  onClick, // optional: if you want click action (open lightbox etc.)
  showIcon = true,
}) {
  return (
    <>
      {title ? (
        <>
          <h2
            className={`cs_video_block_1_title cs_fs_68 text-center mb-0 ${
              titleVariant ? titleVariant : "text-uppercase"
            }`}
          >
            {parse(title)}
          </h2>
          <Spacing lg="80" md="45" />
        </>
      ) : (
        ""
      )}

      <WaterWave
        className="cs_video_block cs_style_1 cs_bg_filed cs_radius_15 position-relative d-flex justify-content-center align-items-center cs_ripple_activate overflow-hidden"
        imageUrl={bgUrl}
      >
        {() => (
          <>
            {showIcon ? (
              <span
                className="cs_hero_video_icon"
                onClick={onClick}
                role={onClick ? "button" : undefined}
                style={{ cursor: onClick ? "pointer" : "default" }}
              >
                {/* <svg
                  width={80}
                  height={80}
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={40} cy={40} r={40} fill="#FD6219" />
                  <path
                    d="M60.079 39.9998L30.148 57.4394L30.0104 22.7986L60.079 39.9998Z"
                    fill="white"
                  />
                </svg> */}
              </span>
            ) : null}
          </>
        )}
      </WaterWave>
    </>
  );
}
