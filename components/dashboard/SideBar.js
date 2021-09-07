import React from "react";

import { FaHome } from "react-icons/fa";
function SideBar() {
  return (
    <div className="w-16  shadow-lg bg- flex flex-col items-center">
      <div className="relative top-5 text text-center pt-2">Logo</div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <FaHome size={25} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default SideBar;
