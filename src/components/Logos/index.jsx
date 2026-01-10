import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import styles from "./LogoBar.module.css";

const LOGOS = [
  { src: "https://ecomxpertfs.com/wp-content/uploads/2025/11/6-1.png" },
  { src: "https://ecomxpertfs.com/wp-content/uploads/2025/11/9.png" },
  { src: "https://ecomxpertfs.com/wp-content/uploads/2025/11/1-1.png" },
  { src: "https://ecomxpertfs.com/wp-content/uploads/2025/11/14.png" },
  { src: "https://ecomxpertfs.com/wp-content/uploads/2025/11/4-1.png" },
  { src: "https://ecomxpertfs.com/wp-content/uploads/2025/11/10.png" },
  { src: "https://ecomxpertfs.com/wp-content/uploads/2025/11/5-1.png" },
  { src: "https://ecomxpertfs.com/wp-content/uploads/2025/11/2-1.png" },
  { src: "https://ecomxpertfs.com/wp-content/uploads/2025/11/3-1.png" },
  { src: "https://ecomxpertfs.com/wp-content/uploads/2025/11/7.png" },
  { src: "https://ecomxpertfs.com/wp-content/uploads/2025/11/11.png" },
  { src: "https://ecomxpertfs.com/wp-content/uploads/2025/11/13.png" },
  { src: "https://ecomxpertfs.com/wp-content/uploads/2025/11/12.png" },
];

export default function LogoBar() {
  return (
    <section className={styles.wrap}>
      <div className="container-fluid">
        <div className={`row align-items-center ${styles.rowH}`}>
          {/* Left label */}
          <div className={`col-auto ${styles.leftCol}`}>
            <div className={styles.leftText}>Powering the best teams</div>
          </div>

          {/* Divider */}
          <div className={`col-auto ${styles.dividerCol}`}>
            <div className={styles.divider} />
          </div>

          {/* Slider */}
          <div className={`col ${styles.sliderCol}`}>
            <Swiper
              modules={[Autoplay, FreeMode]}
              className={styles.swiper}
              slidesPerView="auto"
              spaceBetween={90}
              loop
              freeMode
              speed={6000}
              allowTouchMove={false}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
            >
              {[...LOGOS, ...LOGOS].map((logo, idx) => (
                <SwiperSlide key={idx} className={styles.slide}>
                  <img
                    src={logo.src}
                    alt={`partner-${idx + 1}`}
                    className={styles.logo}
                    draggable={false}
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
