"use client";
import React from "react";
import Topbar from "./Topbar";
import Link from "next/link";
import VideoBackground from "./VideoBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutSection from "./AboutSection";
import Banner from "./Banner";
import ServiceSection from "./ServiceSection";
import WhyChoose from "./WhyChoose";
import WorkProcess from "./WorkProcess";
import Brands from "./Brands";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import CTABanner from "./CTABanner";
import Portfolio from "./Portfolio";


const Container = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <div className="sm:block hidden">
        <Topbar />
      </div>
      <div className="bg-white w-full gap-4 flex items-center justify-between sm:px-[80px] px-[40px] py-4 sticky top-0 z-50 border-b border-light-border">
        <div>
          <Image
            src={"/images/famslogo.jpeg"}
            alt="logo"
            className="w-full"
            width={100}
            height={100}
          />
        </div>
        <div className="flex items-center gap-5">
          <Link href="/" className="font-semibold text-sm text-secondary">Home</Link>
          <Link href="#about" className="font-semibold text-sm text-secondary">About</Link>
          <Link href="#services" className="font-semibold text-sm text-secondary">Services</Link>
          <Link href="#portfolio" className="font-semibold text-sm text-secondary">Portfolio</Link>
        </div>
      </div>
      <div className="relative h-[80vh]">
        <VideoBackground />
        <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
          <div className="max-w-[600px] mx-auto">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants}
              className="sm:text-[59px] text-[40px] text-white leading-[120%] font-thin"
            >
              Your Next <span className="font-bold">Events</span> Starts Here!
            </motion.h1>
            <div className="mt-4 flex items-center justify-center">
              <motion.button
                variants={variants}
                initial="hidden"
                animate="visible"
                className="text-primary bg-white px-4 py-2 rounded-[8px] min-w-[220px] h-[45px] text-center font-semibold"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mx-[80px] mx-[40px]" id="about">
        <AboutSection />
      </div>
      <Banner />
      <div className="sm:mx-[80px] mx-[40px]" id="services">
        <ServiceSection />
      </div>
      <div>
        <CTABanner />
      </div>
      <div className="sm:mx-[80px] mx-[40px]">
        <WhyChoose />
      </div>
      <div
        className="bg-[rgba(23,42,57,0.1)] pt-4 pb-12 relative mt-[100px]"
        style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <div className="absolute top-0 left-0 w-full">
          <Image
            src={"/images/about-shape-1.png"}
            width={500}
            height={200}
            alt="bg"
            className="w-full"
          />
        </div>
        <div className="sm:mx-[80px] mx-[40px] relative z-10 py-10">
          <WorkProcess />
        </div>
      </div>
      <div className="sm:mx-[80px] mx-[40px]" id="portfolio">
        <Portfolio />
      </div>
      <div className="mt-[120px]">
        <Brands />
      </div>
      <div className="sm:mx-[80px] mx-[40px]">
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
};

export default Container;
