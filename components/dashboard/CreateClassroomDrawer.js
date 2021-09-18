import React, { useState } from "react";
import { Drawer, Select } from "@mantine/core";
import { useForm } from "react-hook-form";
import axios from "axios";

import { useUser } from "use-supabase";
import { AiOutlineClose } from "react-icons/ai";
function CreateClassroomDrawer({ opened, setOpened }) {
  const user = useUser();
  const { register, handleSubmit, reset } = useForm();

  const [level, setLevel] = useState();
  const onSubmit = async (data) => {
    data.level = level;
    data.user_id = user.id;
    // data.teacher_name = user.user_metadata.full_name;
    axios
      .post("/api/classroom/create", null, { params: data })
      .then((res) => {
        handleDrawerClose();
      })
      .catch((error) => console.error(error));
  };

  const handleDrawerClose = () => {
    reset();
    setLevel();
    setOpened(false);
  };

  return (
    <div>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="right"
        padding="xl"
        size="xl"
        hideCloseButton
        noCloseOnClickOutside
        shadow="lg"
        noCloseOnEscape
      >
        <div className="h-full flex flex-col  ">
          <div className="flex items-center pt-10 justify-between">
            <p className="text-2xl text-center ">Create Classroom</p>
            <AiOutlineClose
              size="sm"
              className="h-5 cursor-pointer hover:opacity-50 active:scale-85 transition duration-200 ease-out"
              onClick={handleDrawerClose}
            />
          </div>
          <form
            className="flex-grow mt-20 w-3/5 mx-auto flex flex-col items-center space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <p className="ml-2">Name</p>
              <div className="px-4 py-2  w-full font-serif rounded-full border-2 mt-1 outline-none placeholder-gray-500 focus-within:shadow-md transition duration-200 ease-linear">
                <input
                  type="text"
                  placeholder="Name"
                  className=" font-serif outline-none placeholder-gray-500"
                  autoComplete="off"
                  {...register("name", { required: true })}
                />
              </div>
            </div>
            <div className="w-full">
              <p className="ml-2">Subject</p>
              <div className="px-4 py-2  w-full font-serif rounded-full border-2 mt-1 outline-none placeholder-gray-500 focus-within:shadow-md transition duration-200 ease-linear">
                <input
                  type="text"
                  placeholder="Subject"
                  autoComplete="off"
                  className="outline-none placeholder-gray-500 font-serif"
                  {...register("subject", { required: true })}
                />
              </div>
            </div>
            <div>
              <p className="ml-2 sm:ml-1">Level</p>
              <Select
                clearable={true}
                transition="scale-y"
                radius="xl"
                size="md"
                className="w-full"
                value={level}
                onChange
                transitionDuration={250}
                placeholder="Pick one"
                onChange={(value) => setLevel(value)}
                data={[
                  { value: "Primary", label: "Primary School" },
                  { value: "Secondary", label: "Secondary School" },
                  { value: "High", label: "High School" },
                  { value: "University", label: "University" },
                ]}
              ></Select>{" "}
            </div>
            <button
              type="submit"
              className=" px-4 py-3 w-full font-serif text-center rounded-full my-6 text-light-text cursor-pointer bg-light-primary  shadow-lg active:scale-95 transition duration-200 ease-out hover:opacity-95"
            >
              Create
            </button>
          </form>
        </div>
      </Drawer>{" "}
    </div>
  );
}

export default CreateClassroomDrawer;
