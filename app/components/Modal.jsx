import React from "react";
import VideoPlayer from "./VideoPlayer";
import Close from "../icons/Close";

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed left-0 top-0 bottom-0 bg-primary bg-opacity-90 w-full h-full flex items-center justify-center z-50">
      <div className="bg-white p-10 w-fit mx-auto rounded-[20px] relative">
        <span className="absolute right-[30px] top-[10px] cursort-pointer" onClick={closeModal}><Close classVal={'size-5'}/></span>
        <VideoPlayer videoSrc={"/famsVideo.mp4"} />
      </div>
    </div>
  );
};

export default Modal;
