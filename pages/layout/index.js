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
              <motion.h2>
                Our events<span className="text-accent">.</span>
              </motion.h2>
              <motion.p>
                {" "}
                Stay tuned for our exciting events we have lined up for you.
              </motion.p>
            </div>
            <motion.p>
              Stay tuned for our exciting events we have lined up for you.
            </motion.p>
          </div>

          {/* Timeline */}
          <div classname="md:flex md:flex-row hidden md:h-96 md:w-[30%]">
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
