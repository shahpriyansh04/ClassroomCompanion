import React, { useState } from "react";
import { Avatar } from "@mantine/core";
import { Menu, MenuItem, UnstyledButton, Divider } from "@mantine/core";
import { HiDotsVertical, HiLogout, HiUser } from "react-icons/hi";
import { useUser } from "use-supabase";
import supabase from "../../utils/supabase";
function DashboardUserButton() {
  const signOut = async () => {
    await supabase.auth.signOut();
  };
  const user = useUser();
  const [open, setOpen] = useState(true);
  return (
    <div className="flex  items-center  justify-center space-x-4  ">
      <div className="">
        <Avatar radius="xl" size={32} />
      </div>
      <p className="text-xl hidden md:inline ">
        {user ? user.email : "John Dode"}
      </p>

      <Menu
        size={130}
        className="mt-1 cursor-pointer"
        gutter={10}
        placement="center"
        control={
          <UnstyledButton>
            <HiDotsVertical className="h-6" />{" "}
          </UnstyledButton>
        }
      >
        <MenuItem icon={<HiUser className="h-6" />}>Profile</MenuItem>
        <Divider />
        <MenuItem icon={<HiLogout className="h-6" />} onClick={signOut}>
          <p className="text-red-700">Logout</p>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default DashboardUserButton;
