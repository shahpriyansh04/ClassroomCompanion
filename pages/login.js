import React, { useState } from "react";
import { Divider } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { SignInWithGoogle, SignInWithEmail } from "../utils/auth";
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";
import supabase from "../utils/supabase";
import { useSupabase } from "use-supabase";
import GoogleAuthButton from "../components/auth/GoogleAuthButton";
import AuthImageWithVector from "../components/auth/AuthImageWithVector";
function Login() {
  const router = useRouter();
  const { auth } = useSupabase();
  const user = auth?.currentUser;
  const [submit, setSubmit] = useState(false);
  const onSubmit = async (data) => {
    if (data) {
      setSubmit(true);
      await SignInWithEmail(data);
      setSubmit(false);
    }
  };
  const { register, handleSubmit } = useForm();

  if (user) {
    router.push("/dashboard");
  }

  return (
    <div>
      {auth.currentUser ? (
        <div className="flex flex-col xl:flex-row h-screen justify-center items-center text-center bg-light-primary  font-serif">
          <Loader
            type="TailSpin"
            color="#FFFFFF"
            height={50}
            width={50}
            visible={true}
          />
        </div>
      ) : (
        <div className="flex flex-col xl:flex-row h-screen  items-center text-center bg-light-primary  font-serif">
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
                  signIn={SignInWithGoogle}
                />

                <Divider
                  label=" or Sign up with Email "
                  labelPosition="center"
                />
                <form
                  className="flex flex-col items-start space-y-6 pb-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex flex-col text-left mt-2  w-full ">
                    <p className="ml-2">Email</p>
                    <input
                      type="email"
                      placeholder="Email"
                      autoComplete="off"
                      disabled={submit}
                      className="px-4 py-3 font-serif rounded-full border-2 mt-1 outline-none placeholder-gray-500 focus:shadow-md transition duration-200 ease-linear"
                      {...register("email")}
                    />{" "}
                    <div className="flex flex-col text-left mt-6  w-full ">
                      <p className="ml-2">Password</p>
                      <input
                        type="password"
                        placeholder="Password"
                        disabled={submit}
                        className="px-4 py-3 font-serif rounded-full border-2 mt-1 outline-none placeholder-gray-500 focus:shadow-md transition duration-200 ease-linear"
                        {...register("password")}
                      />
                    </div>
                    <button
                      type="sbumit"
                      className="flex flex-grow space-x-10 text-lg font-serif mt-6 px-4 py-3 bg-light-primary text-light-text border-2 text-center justify-center cursor-pointer rounded-full items-center active:scale-95 transition duration-200 ease-out"
                    >
                      <p>Login</p>
                    </button>
                  </div>
                </form>
                <div className="flex space-x-6 text-left pb-6 md:pb-0">
                  New Here?{" "}
                  <div className="text-light-primary cursor-pointer ml-2">
                    <Link href="/signup/">Make a new account here</Link>
                  </div>{" "}
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <AuthImageWithVector />
        </div>
      )}
    </div>
  );
}

export default Login;
