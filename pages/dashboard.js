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

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      // const { data, isLoading, error } = getClassrooms(user?.id);
      changeState(data, isLoading, error);
    }
  }, [data]);
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
            {!classRoomData?.isLoading ? (
              <div className=" flex-grow  flex flex-col justify-center items-center space-y-6">
                <Loader
                  type="TailSpin"
                  color="#000000"
                  height={50}
                  width={50}
                  visible={true}
                />
              </div>
            ) : !classRoomData?.data.data.length > 0 ? (
              <EmptyDashboard />
            ) : (
              <div className="container  flex h-80 flex-grow mt-6 overflow-scroll scrollbar-hide mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  flex-grow  mx-6 my-4 items-start ">
                  {classRoomData?.data.data.map(({ id, name, students }) => (
                    <ClassroomCard
                      id={id}
                      name={name}
                      students={students}
                      key={id}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
