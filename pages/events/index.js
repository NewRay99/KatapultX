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
        <div className="flex flex-col md:flex-row  gap-x-0 ">
          <div className="flex flex-col md:w-[70%]  md:flex-row  gap-x-4 ">
            {/* text */}
            <div className="text-center flex flex-col md:text-left mb-4 md:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 md:mt-12 md:max-w-10"
              >
                Our events<span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 mx-auto md:w-[100%] lg:mx-0"
              >
                Stay tuned for our exciting events we have lined up for you.
              </motion.p>
            </div>

            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full md:w-[35%]"
            >
              <EventsSlider />
            </motion.div>
          </div>

          {/* Timeline */}
          <div classname="container hidden md:h-96 md:w-[30%]">
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
