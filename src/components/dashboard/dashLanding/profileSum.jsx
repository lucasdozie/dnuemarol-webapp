import React from "react";
import { FaUserAlt } from "react-icons/fa";

import { HiOutlineLocationMarker } from "react-icons/hi";

function ProfileSum() {
  return (
    <div className="">
      <div className="">
        <div className="flex">
          <div className="">
            <FaUserAlt size={400} />
          </div>
          <div className="pt-10 flex flex-col justify-end px-20 ">
            <div className="py-10">
              <h1 className="font-extrabold text-6xl">Will Hams</h1>
              <div className="flex">
                <p className="font-medium text-lg ">Backend Developer</p>
                <div className="flex pl-3  ">
                  <HiOutlineLocationMarker size={22} className="pt-1" />
                  <p className="font-medium text-lg">Calabar</p>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="">
                <h3 className="font-medium text-2xl pb-3">Skills</h3>
              </div>
              <div className="flex text-xl font-semibold text-white">
                <div className="px-4 py-1  bg-yellow-500 border rounded-full  hover:bg-yellow-300 transition duration-500 hover:scale-125 ">
                  Javascript
                </div>
                <div className="px-4 py-1 mx-3 bg-amber-800 border rounded-full  hover:bg-amber-500 transition duration-500 hover:scale-125">
                  Python
                </div>
                <div className="px-4 py-1 mx-3 bg-blue-500 border rounded-full  hover:bg-blue-300 transition duration-500 hover:scale-125">
                  Java
                </div>
              </div>
            </div>
          </div>

          <div className="">{/* <Button /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSum;
