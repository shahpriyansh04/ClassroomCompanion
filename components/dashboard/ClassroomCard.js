import React from "react";
import { Divider } from "@mantine/core";
import { Avatar } from "@mantine/core";
import { BsFileEarmarkText } from "react-icons/bs";

import { BiSpreadsheet, BiHomeAlt } from "react-icons/bi";
function ClassroomCard({ id, name, students }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg h-60 w-full md:w-10/12 flex-grow mx-auto mb-6 flex flex-col justify-start items-center  active:scale-95 transition duration-150 ease-in">
      <div className="w-full ">
        <div className="flex items-center justify-between cursor-pointer">
          <p className="text-xl mt-4 text-center ml-6">{name}</p>{" "}
          <Avatar color="#084a83" radius="lg" className="mt-4 mr-4" padding={0}>
            CC
          </Avatar>{" "}
        </div>
        <Divider margins="xs" className="text-white" />
      </div>

      <div className="flex items-center justify-between  flex-grow space-x-6 ">
        <div className="flex px-2 py-2 rounded-lg flex-col border-2 border-black cursor-pointer">
          <BiHomeAlt className="h-5" size="lg" />
        </div>
        <div className="flex px-2 py-2 rounded-lg flex-col border-2 border-black cursor-pointer">
          <BsFileEarmarkText className="h-5" size="lg" />
        </div>{" "}
        <div className="flex px-2 py-2 rounded-lg flex-col border-2 border-black cursor-pointer">
          <BiSpreadsheet className="h-5" size="lg" />
        </div>
      </div>
      <div className=" text-right w-full mr-6 mb-2 cursor-pointer">
        Total Members: {students.length}
      </div>
    </div>
  );
}

export default ClassroomCard;
