import React from "react";

const ButtonDark = ({ isIcon = false, icon, text, onClick, classVal = "min-w-[220px] min-h-[50px] rounded-[8px] bg-primary text-[16px] text-white flex justify-center items-center gap-2" }) => {
  return (
    <button onClick={onClick} className={classVal}>
      {text}
      {
        isIcon && <span className="flex items-center justify-center">{icon}</span>
      }
    </button>
  );
};

export default ButtonDark;
