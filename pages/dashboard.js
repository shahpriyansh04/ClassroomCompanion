import React, { useState, useEffect } from "react";
import Header from "../components/dashboard/Header";
import { useUser } from "use-supabase";
import { mutate } from "swr";
import Loader from "react-loader-spinner";
import { useRouter } from "next/router";
import EmptyDashboard from "../components/dashboard/EmptyDashboard";
import ClassroomCard from "../components/dashboard/ClassroomCard";
import { getClassrooms } from "../utils/classroom/getClassrooms";

function Dashboard() {
  // const [loading, setLoading] = useState();
  const router = useRouter();
  let classrooms;
  const user = useUser();

  const { data, isLoading, error } = getClassrooms(user?.id);
  const [classRoomData, setClassRoomData] = useState({
    data: null,
    isLoading: false,
    error: null,
  });
  const changeState = (updatedData, updatedIsLoading, updatedError) => {
    setClassRoomData({
      ...classRoomData,
      data: updatedData,
      isLoading: updatedIsLoading,
      error: updatedError,
    });
  };


  return (
    <div className="flex  h-screen font-serif bg-light-primary">
      {/* <SideBar /> */}

      <div className="flex-grow flex flex-col justify-center ">
        <Header />
        <div className="bg-white flex-grow text-black flex sm:px-10 sm:py-10 w-10/12  xl:w-2/3 mx-auto  shadow-lg my-10 rounded-lg ">
          <div className="flex flex-col flex-grow mt-10 sm:mt-0">
            <p className="text-3xl text-center " onClick={changeState}>
              Your Dashboard
            </p>
          
              <EmptyDashboard />
      
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
