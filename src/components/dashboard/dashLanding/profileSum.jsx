import React from "react";
import { FaUserAlt } from "react-icons/fa";

import { HiOutlineLocationMarker } from "react-icons/hi";

function ProfileSum() {
  return (
    <div className="px-20 ">
      <div className="">
        <div className="flex">
          <div className="">
            <FaUserAlt size={400} />
          </div>
          <div className="px-20">
            <div>
              <h1 className="font-extrabold text-6xl">Will Hams</h1>
              <p className="font-medium text-lg pb-5">Backend Developer</p>
            </div>
            <div className="py-12 ">
              <div className="">
                <h3 className="font-medium text-2xl pb-3">Skills</h3>
              </div>
              <div className="flex text-xl font-semibold text-white">
                <div className="px-4 py-3 mx-3 bg-yellow-500 border rounded-full ">
                  Javascript
                </div>
                <div className="px-4 py-3 mx-3 bg-amber-800 border rounded-full">
                  Python
                </div>
                <div className="px-4 py-3 mx-3 bg-blue-500 border rounded-full">
                  Java
                </div>
              </div>
            </div>
            <div className="flex pt-20">
              <HiOutlineLocationMarker size={40} />
              <p className="font-medium text-xl pt-2 px-2">Calabar</p>
            </div>
          </div>

          <div className="">{/* <Button /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSum;
