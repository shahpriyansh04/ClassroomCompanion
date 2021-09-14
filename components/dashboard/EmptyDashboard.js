import { Modal, LoadingOverlay, Loader } from "@mantine/core";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import CreateClassroomDrawer from "./CreateClassroomDrawer";
function EmptyDashboard() {
  const [opened, setOpened] = useState(false);

  return (
    <div className=" flex-grow  flex flex-col justify-center items-center space-y-6">
      <p className="text-xl text-center">
        You haven't created any classrooms yet
      </p>
      <div
        onClick={() => setOpened(true)}
        className="flex items-center space-x-2 px-6 py-4 bg-light-primary text-light-text rounded-full cursor-pointer shadow-lg active:scale-95 transition duration-200 ease-out hover:opacity-95"
      >
        <AiOutlinePlus />
        <p className="text-lg">Create new </p>
      </div>
      <CreateClassroomDrawer opened={opened} setOpened={setOpened} />
    </div>
  );
}

export default EmptyDashboard;
