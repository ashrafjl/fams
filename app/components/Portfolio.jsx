import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { motion, useInView } from "framer-motion";
import { itemVariants, portfolioItems, portfolioSliderSetting, transitionY } from "../utils/Constants";
import Image from "next/image";


function Responsive() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: false });
  const slideRef = useRef(null)
  const inView = useInView(slideRef, { once: false });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <motion.div
        ref={titleRef}
        className="mt-[100px]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={transitionY}
      >
        <div className="flex items-center gap-2">
          <span>
            <Image
              src={"/images/title_left.svg"}
              width={16}
              height={16}
              className="w-full"
              alt="about"
            />
          </span>
          <h4 className="text-[20px] text-primary font-semibold leading-[20px]">
            Our works speak loud
          </h4>
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={transitionY}
          className="mt-[20px]"
        >
          <h4 className="text-primary sm:text-[60px] text-[40px] leading-[110%] font-semibold max-w-[600px]">
            SOME OF OUR <span className="text-secondary">FEATURED WORKS</span>
          </h4>
        </motion.div>
      </motion.div>
      <div className="overflow-hidden mt-[80px]" ref={slideRef}>
      <Slider {...portfolioSliderSetting}>
        {portfolioItems.map((item, index) => (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={index}
            key={item.id}
            variants={itemVariants}
            className="px-2 relative group"
          >
            <div className="overflow-hidden rounded-lg relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[450px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-white bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-12 flex flex-col justify-between">
                <h1 className="text-[25px] font-bold text-primary">
                    {item?.title}
                </h1>
                <p className="text-lg text-secondary mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eos amet praesentium quisquam molestias enim cumque. Maiores facere alias odio?</p>
                <div className="flex items-center justify-end gap-2">
                    <div className="rounded-[8px] w-[120px] bg-secondary h-[50px] leading-[50px] font-medium text-lg text-center transition-all duration-200 hover:bg-primary text-white" onClick={() => openModal(item.image)}>Zoom</div>
                    <a href={item.image} download={item?.title || 'download'} className="rounded-[8px] w-[120px] bg-primary h-[50px] leading-[50px] font-medium text-lg text-center transition-all duration-200 hover:bg-secondary text-white">Download</a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-5"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-full max-h-full cursor-auto"
          />
        </div>
      )}
      </div>
    </>
  );
}

export default Responsive;
