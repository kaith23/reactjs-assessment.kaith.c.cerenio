import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function ViewContact() {
  const { state } = useLocation();

  console.log(state); // here you get your post data
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#A100FF] to-[#B63FFC]">
      <div
        className="flex h-auto flex-col rounded-md bg-white p-3 shadow-xl"
        style={{ width: "24rem" }}
      >
        <div className="flex w-full justify-center">
          <img
            className="w-32 pt-4 pb-8"
            src="https://brandpalettes.com/wp-content/uploads/2020/04/Accenture-Logo-300x79.png?ezimgfmt=ngcb1/notWebP"
          />
        </div>
        <div className="grid grid-cols-12 gap-y-4 gap-x-8 py-4">
          <div className="col-span-12 flex items-center justify-between gap-3 border-b border-gray-200 pb-2">
            <p className="font-bold">Id</p>
            <p className="flex items-center">{state.id}</p>
          </div>

          <div className="col-span-12 flex items-center justify-between gap-4 border-b border-gray-200 pb-2">
            <p className="font-bold">Full Name</p>
            <p className="flex items-center">{state.name}</p>
          </div>
          <div className="col-span-12 flex items-center justify-between gap-4 border-b border-gray-200 pb-2">
            <p className="font-bold">Email Address</p>
            <p className="flex items-center">{state.email}</p>
          </div>
          <div className="col-span-12 flex items-center justify-between gap-4 border-b border-gray-200 pb-2">
            <p className="font-bold">Contact Number</p>
            <p>{state.contact}</p>
          </div>
        </div>
        <Link to="/">
          <button className="w-full rounded-sm  bg-black p-2 my-4 text-xs text-white hover:bg-[#A100FF]">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ViewContact;
