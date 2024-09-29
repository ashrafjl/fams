import React, { useRef } from "react";
import Counter from "./Counter";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const bannerContent = [
  {
    id: 1,
    title: "PROJECTS DONE",
    target: 858,
    image: "/images/counter-icon-1.png",
  },
  {
    id: 2,
    title: "MEDIA ACTIVITIES",
    target: 460,
    image: "/images/counter-icon-2.png",
  },
  {
    id: 3,
    title: "SKILLED EXPERTS",
    target: 858,
    image: "/images/counter-icon-3.png",
  },
  {
    id: 4, // Fixed duplicate ID
    title: "HAPPY CLIENTS",
    target: 6000,
    image: "/images/counter-icon-4.png",
  },
];

const Banner = () => {
  const duration = 2; // Set duration in seconds
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const leftVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div ref={ref} className="mt-[100px] min-h-[350px] flex items-center justify-center bg-[url(/images/bannerBg.jpg)] bg-cover bg-no-repeat bg-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-80"></div>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={leftVariants}
        className="max-w-[1245px] py-8 relative z-10 flex md:flex-row flex-col gap-4 items-center justify-between w-full"
      >
        {bannerContent.map((banner) => (
          <div className="flex items-center gap-5" key={banner.id}>
            <div className="max-w-[92px] w-full min-w-[92px] h-[92px] relative z-[1]">
              <div
                className="border border-[rgba(255, 255, 255, 0.15)] backdrop-blur-[12.5px] w-[84px] h-[85px] flex items-center justify-center ml-auto rounded-[10px]"
                style={{ backgroundColor: "rgba(216, 231, 253, 0.1)" }}
              >
                <Image
                  src={banner.image}
                  width={60}
                  height={60}
                  alt="icon"
                  className="w-[60px] h-[60px] object-contain object-center"
                />
              </div>
              <div className="border border-[rgba(255, 255, 255, 0.2)] backdrop-blur-[12.5px] w-[84px] h-[85px] absolute bottom-0 left-0 z-[-1] rounded-[10px]"></div>
            </div>
            <div>
              <Counter
                target={banner.target}
                duration={duration} // Pass duration in seconds
                classVal={"text-[36px] leading-[36px] text-white font-semibold"}
              />
              <p className="text-sm text-white font-medium mt-2">
                {banner.title}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;
