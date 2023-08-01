// components
import EventsSlider from "../../components/EventsSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Layout from "../../components/Layout";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Experience from "../../components/Experience";

const events = () => {
  return (
    <div className="flex  bg-primary/30 py-36 items-center">
      <Circles />
      <div className="container mx-auto h-screen">
        <div className="flex flex-col xl:flex-row  gap-x-0 ">
          <div className="flex flex-col xl:flex-row  gap-x-4 ">
            {/* text */}
            <div className="text-center flex xl:w-[33%] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-12"
              >
                Our events<span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[280px] mx-auto lg:mx-0"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                eveniet dignissimos distinctio tempore harum laudantium.
              </motion.p>
            </div>

            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[33%]"
            >
              <EventsSlider />
            </motion.div>
          </div>

          {/* Timeline */}
          <div classname="container xl:h-96 xl:w-[33%]">
            {/* <div class="h-96 overflow-y-scroll scrollbar-thick scrollbar-thumb-[#1acc89] scrollbar-track-[#131424]"> */}
            <div class="h-96 overflow-y-scroll scrollbar-none">
              <Experience />
            </div>
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default events;
