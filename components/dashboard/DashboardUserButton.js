import React, { useState } from "react";
import { Avatar } from "@mantine/core";
import { Menu, MenuItem, MenuLabel, Text, UnstyledButton } from "@mantine/core";
function DashboardUserButton() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex cursor-pointer items-center space-x-6">
      <p>Name Surname</p>

      <Menu
        className="bg-black"
        control={
          <UnstyledButton>
            <Avatar src={null} alt="no image here" />
          </UnstyledButton>
        }
      >
        <MenuLabel>Application</MenuLabel>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Messages</MenuItem>
      </Menu>
    </div>
  );
}

export default DashboardUserButton;
