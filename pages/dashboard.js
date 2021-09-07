import React, { useState } from "react";
import Header from "../components/dashboard/Header";
import { Modal, LoadingOverlay, Loader, Divider } from "@mantine/core";
import EmptyDashboard from "../components/dashboard/EmptyDashboard";
function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex  h-screen font-serif bg-light-primary">
      {/* <SideBar /> */}

      <div className="flex-grow flex flex-col justify-center ">
        <Header />
        <div className="bg-white flex-grow text-black flex px-10 py-10 w-2/3 mx-auto  shadow-lg my-10 rounded-lg ">
          <div className="flex flex-col flex-grow">
            <p className="text-3xl text-center ">Your Dashboard</p>
            <EmptyDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
