import React from "react";
import { Menu, MenuItem, UnstyledButton, Divider, Text } from "@mantine/core";
import { AiOutlinePlus } from "react-icons/ai";

function ClassroomButton() {
  return (
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
      <MenuItem>Create Classroom</MenuItem>
    </Menu>
  );
}

export default ClassroomButton;
