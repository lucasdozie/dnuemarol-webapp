import React from "react";
import { Link } from "react-router-dom";
import Ham from "./ham";
import { FaUserAlt } from "react-icons/fa";

function DashHeader() {
  return (
    <div className="flex gap-[1000px]">
      <div className="flex gap-20">
        <div className="font-semibold text-4xl pt-1">
          <h1>Dashboard</h1>
        </div>
      </div>
      <div>
        <div className="p-1 ">
          <div className=" dropdown block relative">
            <button className=" ">
              <span className="">
                <FaUserAlt size={40} />
              </span>
            </button>
            <ul className="dropdown-menu right-[-30px] min-w-96 absolute hidden text-gray-700 pt-1">
              <li className="">
                <a
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap px-10"
                  href="#"
                ></a>
              </li>
              <li className="">
                <Link
                  to="/profile"
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  ACCOUNT
                </Link>
              </li>
              <li className="">
                <a
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  SIGN OUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashHeader;
