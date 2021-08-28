import React from "react";
import { providers, signIn, getSession, csrfToken } from "next-auth/client";

import { Divider } from "@mantine/core";
import AuthImageWithVector from "../components/auth/AuthImageWithVector";
import InputField from "../components/auth/InputField";
import Link from "next/link";

import GoogleAuthButton from "../components/auth/GoogleAuthButton";
function Signup({ providers }) {
  return (
    <div className="flex flex-col xl:flex-row h-screen  items-center text-center bg-[#084A83]  font-serif">
      <div className="h-full w-full xl:w-1/2 flex-grow  flex flex-col justify-center items-center">
        <div className="w-full sm:w-2/3 md:w-3/5 xl:w-3/5 2xl:w-1/2 h-full bg-white  sm:my-80 xl:my-56 px-10 py-10 flex-grow flex flex-col items-center md:shadow-lg sm:rounded-lg">
          <div className="xl:hidden text-4xl lg:text-5xl text-center items-start flex font-semibold">
            Classroom Companion
          </div>
          <div className="flex flex-col items-center mt-4">
            <p className="text-2xl xl:text-4xl xl:font-bold">Login</p>
            <p className="mt-6 text-gray-500">Welcome Back!</p>
          </div>
          <div className=" max-w-xs  space-y-4 flex flex-col w-full">
            <GoogleAuthButton
              text="Sign up with Google"
              id={providers.google.id}
              onClick={() => console.log("Click")}
            ></GoogleAuthButton>{" "}
            <Divider label=" or Login with Email " labelPosition="center" />
            <div className="flex flex-col items-start space-y-6">
              <InputField label="Email" placeholder="Email" />
              <InputField label="Password" placeholder="Password" />
            </div>
            <div className="flex text-lg  px-4 py-3 bg-[#084A83] text-[#FFFFE7] border-2 text-center justify-center cursor-pointer rounded-full items-center active:scale-95 transition duration-200 ease-out">
              <p>Login</p>
            </div>
            <div className="flex space-x-6 text-left pb-6 md:pb-0">
              New Here?{" "}
              <div className="text-[#084A83] cursor-pointer ml-2">
                <Link href="/signup/">Make a new account here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthImageWithVector />
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const { req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }
  return {
    props: {
      providers: await providers(context),
      csrfToken: await csrfToken(context),
    },
  };
};
export default Signup;
