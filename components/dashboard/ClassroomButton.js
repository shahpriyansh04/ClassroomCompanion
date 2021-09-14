import React, { useState } from "react";
import { Menu, MenuItem, UnstyledButton, Divider, Text } from "@mantine/core";
import { AiOutlinePlus } from "react-icons/ai";
import CreateClassroomDrawer from "./CreateClassroomDrawer";

function ClassroomButton() {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <Menu
        size={145}
        transition="scale-y"
        placement="center"
        withArrow
        gutter={10}
        control={
          <UnstyledButton>
            <AiOutlinePlus className="mt-2" />
          </UnstyledButton>
        }
      >
        <MenuItem>Join Classroom</MenuItem>
        <Divider />
        <MenuItem onClick={() => setOpened(true)}>Create Classroom</MenuItem>
      </Menu>{" "}
      <CreateClassroomDrawer opened={opened} setOpened={setOpened} />
    </div>
  );
}

export default ClassroomButton;
