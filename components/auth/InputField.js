import React from "react";

function InputField({ label, placeholder, register, required }) {
  return (
    <div className="flex flex-col text-left mt-2  w-full ">
      <p className="ml-2">{label}</p>
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-3 rounded-full border-2 mt-1 outline-none placeholder-gray-500 focus:shadow-md transition duration-200 ease-linear"
        // {...register("label")}
        // onChange={() => {
        //   register("label");
        // }}
        //
      />
    </div>
  );
}

export default InputField;
