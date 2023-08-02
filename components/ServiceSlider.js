// import swiper react components
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ModalPopup from "../pages/modal";

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from "swiper";

// service data
export const serviceData = [
  {
    icon: <RxReader />,
    title: "Grassroots Projects",
    description:
      "We engage with universities, colleges and schools to equip individuals the with skills, knowledge, and confidence needed to thrive in their personal and professional lives. ",
  },
  {
    icon: <RxPencil2 />,
    title: "Corporate Engagements",
    description:
      "At Katapult X, we believe in harnessing the power of collaboration to drive enduring and impactful change. Through strategic partnerships and collaborations with global companies, government bodies and research organisations, we aim to facilitate best practices and foster a culture of shared learning.",
  },
  {
    icon: <RxRocket />,
    title: "Entrepreneurship",
    description:
      "Equip small business and entrepreneurs with the requisite skills to be able to engage business clients effectively.",
  },
];

const ServiceSlider = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const handleOnClose = () => setShowPopUp(false);
  const [popupMessage, setPopupMessage] = useState("");

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[280px] sm:h-[460px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8  ">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal h-80 overflow-y-auto scrollbar-none">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div
                onClick={() => {
                  setShowPopUp(true);
                  const message = item.description;
                  setPopupMessage(message);
                }}
                className="text-3xl"
              >
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <ModalPopup
        onClose={handleOnClose}
        visible={showPopUp}
        getMessage={popupMessage}
      />
      ;
    </Swiper>
  );
};

export default ServiceSlider;
