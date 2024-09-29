import React from "react";
import Phone from "../icons/Phone";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import Instagram from "../icons/Instagram";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between border-b border-light-border overflow-hidden">
      <div className="flex-1 relative h-[46px] leading-[46px]">
        <div className="absolute clipbg w-[60%] h-full bg-primary"></div>
        <div className="flex items-center h-full relative text-[white] px-[40px] gap-3">
        <Phone classess={'size-5'}/>
        <p className="text-[16px] leading-4">+91 888 8888 888</p>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="flex items-center self-end justify-end relative px-[40px] gap-3 w-[40%] ml-auto">
          <div className="w-[1px] h-[80px] bg-light-border absolute left-0 origin-bottom rotate-[28deg]"></div>
          <div className="flex items-center justify-between gap-2">
            <p className="m-0 text-[16px] font-semibold leading-4 text-primary">Visit Us : </p>
            <div className="flex items-center gap-3 text-primary">
                <Facebook classes={'size-5'}/>
                <Twitter classes={'size-5'}/>
                <Instagram classes={'size-5'}/>
                <span className='flex items-center justify-center'>
                    <Image src={'/images/whatsapp.svg'} width={16} height={16} alt='whatsapp' />
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
