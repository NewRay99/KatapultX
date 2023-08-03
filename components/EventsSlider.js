// events slider data
export const eventsSlider = {
  slides: [
    {
      images: [
        {
          title: "Acing Case Studies",
          path: "/thumb1.jpg",
        },
        {
          title: "Interviewing Strategies",
          path: "/thumb2.jpg",
        },
        {
          title: "Business Mentor",
          path: "/thumb3.jpg",
        },
        {
          title: "Free Laptops",
          path: "/thumb4.jpg",
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: "Acing Case Studies",
    //       path: "/thumb1.jpg",
    //     },
    //     {
    //       title: "Interviewing Strategies",
    //       path: "/thumb2.jpg",
    //     },
    //     {
    //       title: "Business Mentor",
    //       path: "/thumb4.jpg",
    //     },
    //     {
    //       title: "Free Laptops",
    //       path: "/thumb3.jpg",
    //     },
    //   ],
    // },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next image
import Image from "next/image";

const EventsSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-screen sm:h-[480px]"
    >
      {eventsSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-1 md:grid-rows-2 gap-1 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[8px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            EVENT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[00%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default EventsSlider;
