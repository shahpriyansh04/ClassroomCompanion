import React from "react";

import DashboardUserButton from "./DashboardUserButton";
import ClassroomButton from "./ClassroomButton";
function Header() {
  return (
    <div className="py-5 bg-white  flex justify-between items-center px-6 space-x-10  shadow-lg text-black ">
      <div className="mx-2 text-xl xs:text-2xl sm:text-3xl ">
        Classroom Companion
      </div>
      <div className="flex items-center justify-center space-x-8">
        <ClassroomButton /> <DashboardUserButton />
      </div>
    </div>
  );
}

export default Header;
