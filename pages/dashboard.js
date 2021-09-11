import React, { useState, useEffect } from "react";
import Header from "../components/dashboard/Header";
import { useSupabase } from "use-supabase";
import { useRouter } from "next/router";
import { Modal, LoadingOverlay, Loader, Divider } from "@mantine/core";
import EmptyDashboard from "../components/dashboard/EmptyDashboard";
import ClassroomCard from "../components/dashboard/ClassroomCard";
function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const { auth } = useSupabase();

  const user = auth?.currentUser;

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // });

  return (
    <div className="flex  h-screen font-serif bg-light-primary">
      {/* <SideBar /> */}

      <div className="flex-grow flex flex-col justify-center ">
        <Header />
        <div className="bg-white flex-grow text-black flex px-10 py-10 w-2/3 mx-auto  shadow-lg my-10 rounded-lg ">
          <div className="flex flex-col flex-grow">
            <p className="text-3xl text-center ">Your Dashboard</p>
            {/* <EmptyDashboard /> */}
            <div className="container flex h-80 flex-grow mt-6 overflow-scroll scrollbar-hide">
              <div className="grid grid-cols-3  flex-grow my-10 mx-10 items-center ">
                <ClassroomCard /> <ClassroomCard />
                <ClassroomCard />
                <ClassroomCard /> <ClassroomCard />
                <ClassroomCard /> <ClassroomCard />
                <ClassroomCard />
                <ClassroomCard /> <ClassroomCard />
                <ClassroomCard />
                <ClassroomCard />
                <ClassroomCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
