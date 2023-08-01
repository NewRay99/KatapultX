import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  event,
  eventType,
  company,
  companyLink,
  time,
  address,
  description,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <p className="mb-2 text-lg">
          {event}{" "}
          <a className="capitalize" href={companyLink} target={"_blank"}>
            @{company}
          </a>
        </p>
        <p>
          <span className="text-accent">
            {time} | {address}
          </span>
        </p>
        <p className="text-accent"> {eventType}</p>
        <p> {description}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <motion.div className="h2">
      <h2 className="mb-8 w-full text-center">Timeline</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            event="Birmingham University"
            eventType="Talk"
            company="Birmingham"
            companyLink="https://UOB.com"
            time="2022"
            address="Birmignham, UK"
            description="Star studed event with some of the heavy hitter in the business"
          />

          <Details
            event="Birmingham Challenge"
            eventType="Hackathon"
            company="Birmingham"
            companyLink="https://UOB.com"
            time="TBA"
            address="Birmignham, UK"
            description="Challenge yourself, try solving these problem and see where you rank amongst Bimringham top talent"
          />

          <Details
            event="Business Conference"
            eventType="Talk"
            company="amazon"
            companyLink="https://amazon.com"
            time="TBA"
            address="Bristol, UK"
            description="Meet leaders in business, build your network and learn from the best"
          />

          <Details
            event="Meet the Team"
            eventType="Katapult-X"
            company="Katapult-X"
            companyLink="https://www.Katapult-x.com"
            time="TBA"
            address="London, UK"
            description="Get a chance to see the Katapult-X. We are here to give you support and guidance on your career"
          />

          <Details
            event="Mentor"
            eventType="MeetUp"
            company="MIT"
            companyLink="https://mit.edu"
            time="TBA"
            address="Michigan, USA"
            description=""
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
