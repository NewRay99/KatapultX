import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference, time }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });

  return (
    <figure className="stroke-[#d6e043] absolute left-0 dark:stroke-light">
      <svg
        className="-rotate-90 w-[50px] h-[45px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="15"
          pathLength="1"
          className="stroke-[#1acc89]  stroke-1 fill-none dark:stroke-primaryDark"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="15"
          pathLength="1"
          className="fill-[#ffffff] stroke-[5px] dark:fill-dark"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="5"
          pathLength="1"
          className="animate-pulse stroke-1 fill-[#1acc89] dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
