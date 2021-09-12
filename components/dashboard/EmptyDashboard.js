import { Modal, LoadingOverlay, Loader } from "@mantine/core";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function EmptyDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=" flex-grow  flex flex-col justify-center items-center space-y-6">
      <p className="text-xl text-center">
        You haven't created any classrooms yet
      </p>
      <div
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="flex items-center space-x-2 px-6 py-4 bg-light-primary text-light-text rounded-full cursor-pointer shadow-lg active:scale-95 transition duration-200 ease-out hover:opacity-95"
      >
        {" "}
        <AiOutlinePlus />
        <p className="text-lg">Create new </p>
        <Modal
          opened={isModalOpen}
          transitionDuration={400}
          transition="scale"
          size="md"
          onClose={() => setIsModalOpen(false)}
          // transition="fade"
          hideCloseButton
        >
          <div className="w-2/3  flex mx-auto">
            <div className="bg-gray-white flex-grow flex flex-col text-black text-center space-y-4 ">
              <p className="flex-grow text-3xl mb-6">Create a classroom</p>
              <div className="flex-grow space-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-3 border-2 w-full py-4 rounded-full focus:shadow-md outline-none transition duration-200 ease-in "
                ></input>{" "}
                <div className="flex justify-around space-x-4">
                  <div className=" px-4 py-3 flex-grow rounded-full  text-light-text cursor-pointer bg-red-500  shadow-lg active:scale-95 transition duration-200 ease-out hover:opacity-95">
                    Cancel
                  </div>
                  <div className=" px-4 py-3 flex-grow rounded-full  text-light-text cursor-pointer bg-light-primary  shadow-lg active:scale-95 transition duration-200 ease-out hover:opacity-95">
                    Create
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default EmptyDashboard;
