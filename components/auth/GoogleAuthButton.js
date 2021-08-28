import { signIn } from "next-auth/client";
import React from "react";
import { FcGoogle } from "react-icons/fc";

function GoogleAuthButton({ text, id }) {
  return (
    <button
      onClick={(e) => signIn(id)}
      className="flex text-xl px-4 py-3 border-2 text-center justify-center cursor-pointer rounded-full items-center space-x-4 mt-6 active:scale-95 transition duration-200 ease-out"
    >
      <FcGoogle />
      <p>{text}</p>
    </button>
  );
}

export default GoogleAuthButton;
