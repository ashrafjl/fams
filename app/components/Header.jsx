"use client";
import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import Image from "next/image";
import Link from "next/link";
import VideoBackground from "./VideoBackground";
import { motion } from "framer-motion";

const Header = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="">
      <div className="sm:block hidden">
      <Topbar />
      </div>
      <div className="bg-white w-full flex items-center justify-between px-[40px] py-4 sticky top-[0px] z-50 border-b border-light-border">
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
          <Link
            href={"/"}
            className="font-semibold text-lg"
            style={{ color: "#ab1616" }}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="font-semibold text-lg"
            style={{ color: "#ab1616" }}
          >
            About
          </Link>
          <Link
            href={"/portfolio"}
            className="font-semibold text-lg"
            style={{ color: "#ab1616" }}
          >
            Portfolio
          </Link>
        </div>
      </div>
      <div className="relative h-[80vh]">
        <VideoBackground />
        <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-screen text-white text-center">
          <div className="max-w-[600px] mx-auto">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants}
              className="sm:text-[59px] text-[40px] text-white leading-[120%] font-thin"
            >
              Your Next <span className="font-bold">Events</span> Starts Here!
            </motion.h1>
            <div className="mt-4 felx items-center justify-center">
            <motion.button variants={variants} initial="hidden" animate="visible" className="text-primary bg-white px-4 py-2 rounded-[8px] min-w-[220px] h-[45px] text-center font-semibold">
              Get Started
            </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
