import React from "react";

const VideoBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <video autoPlay loop muted className="min-w-full min-h-full object-cover object-center">
        <source src="/famsVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
