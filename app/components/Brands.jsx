import React from "react";
import { brands, brandsSliderSetting } from "../utils/Constants";
import Image from "next/image";
import Slider from "react-slick";

const Brands = () => {
  return (
    <div className="overflow-hidden bg-[#E7E9EB] py-9">
        <Slider {...brandsSliderSetting}>
        {
            brands?.map((item)=>{
                return <div className="px-4"><Image key={item} src={item} width={140} height={80} alt="brand" className="rounded-lg"/></div>
            })
        }
    </Slider>
    </div>
  );
};

export default Brands;
