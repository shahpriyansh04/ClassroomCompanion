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
        <div className="bg-white flex-grow text-black flex sm:px-10 sm:py-10 w-10/12  xl:w-2/3 mx-auto  shadow-lg my-10 rounded-lg ">
          <div className="flex flex-col flex-grow mt-10 sm:mt-0">
            <p className="text-3xl text-center ">Your Dashboard</p>
            {/* <EmptyDashboard /> */}
            <div className="container flex h-80 flex-grow mt-6 overflow-scroll scrollbar-hide mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  flex-grow  mx-6 my-4 items-center ">
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
