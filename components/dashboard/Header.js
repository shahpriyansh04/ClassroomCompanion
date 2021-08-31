import React from "react";
import { Avatar } from "@mantine/core";
import DashboardUserButton from "./DashboardUserButton";
function Header() {
  return (
    <div className="bg-black  py-6 text-light-text flex justify-end items-center pr-6 ">
      <DashboardUserButton />
    </div>
  );
}

export default Header;
