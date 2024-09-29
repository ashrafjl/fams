import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { transitionY } from "../utils/Constants";

const CTABanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="mt-[100px] min-h-[500px] flex items-center justify-center bg-[url(/images/contact.png)] bg-cover bg-no-repeat bg-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-80"></div>
      <div className="sm:mx-[80px] mx-[40px] relative z-10 flex justify-center items-center w-full" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={transitionY}
          className="flex flex-col items-center"
        >
          <p className="text-[20px] text-white font-semibold max-w-[700px] leading-[120%] mt-[60px] text-center">
            Contact Our Agent For Any kind off Business Help{" "}
            <strong>(24/7 Available)</strong>
          </p>
          <p className="text-[70px] font-bold my-5 text-center text-white">
            +215 2153.2159
          </p>
          <button className="text-primary bg-white px-4 py-2 rounded-[8px] min-w-[220px] h-[45px] text-center font-semibold max-w-[300px] mx-auto w-full">
            Contact Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CTABanner;
