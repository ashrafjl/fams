import Image from "next/image";
import React, { useRef } from "react";
import CheckBadge from "../icons/CheckBadge";
import ButtonDark from "./ButtonDark";
import ArrowRight from "../icons/ArrowRight";
import { motion, useInView } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { transitionY } from "../utils/Constants";

const services = [
    {id:1,title:'Exhibition Stands', description:'Custom-designed exhibition stands that enhance visibility and engagement, tailored to showcase your brand effectively at events.',image:'/images/image2.jpeg'},
    {id:2,title:'LED, TV and Furniture Rental', description:'Affordable rental solutions for LED screens, TVs, and furniture, ensuring your event is stylish and functional.',image:'/images/image3.jpeg'},
    {id:3,title:'Graphic Printing', description:`High-quality graphic printing services for banners, signage, and promotional materials to elevate your event's visual impact.`,image:'/images/image4.jpeg'},
    {id:4,title:'Exhibition Organizing', description:`Comprehensive exhibition organizing services, from planning to execution, ensuring seamless and successful events tailored to your needs.`,image:'/images/image10.jpeg'},
    {id:5,title:'Global Messe Services', description:`Expert global exhibition services, facilitating participation in international events to expand your brand’s reach and visibility.`,image:'/images/image6.jpeg'},
    {id:6,title:'KIOS and POS', description:`Innovative KIOS and POS solutions for efficient attendee interaction and transaction processing at events and exhibitions.`,image:'/images/image7.jpeg'},
    {id:7,title:'Country Pavilion Expo', description:`Specialized country pavilion services, showcasing national products and cultures at international exhibitions for impactful representation.`,image:'/images/image8.jpeg'},
    {id:8,title:'International Exhibition', description:`Tailored international exhibitions that connect global businesses, showcasing innovations and fostering networking opportunities across diverse industries and cultures.`,image:'/images/image9.jpeg'},
]

const ServiceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const cardRef = useRef(null)
  const isCardView = useInView(cardRef, { once: false });

  return (
    <>
      <div
        className="flex md:flex-row flex-col items-center mt-[100px] gap-[60px]"
        ref={ref}
      >
        <motion.div
          className="flex-1"
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
              Our Services
            </h4>
          </div>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={transitionY}
            className="mt-[20px]"
          >
            <h4 className="text-primary sm:text-[60px] text-[40px] leading-[110%] font-semibold max-w-[550px]">
              Navigate the <span className="text-secondary font-bold">Path to Success</span>
            </h4>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={isCardView ? "visible" : "hidden"}
        variants={transitionY}
        className="flex items-center gap-2 justify-center mt-[60px] flex-wrap md:justify-between"
      >
        {services?.map((service) => (
          <ServiceCard key={service.id} service={service}/>
        ))}
      </motion.div>
    </>
  );
};

export default ServiceSection;
