import React from "react";
import Filters from "../job/Alljob/filters";
import JobList from "../job/Alljob/jobList";
import DashHeader from "./dashLanding/dashHeader";

import Leftside from "./dashLanding/leftside";
import ProfileSum from "./dashLanding/profileSum";

function Dashboard() {
  return (
    <div className="bg-blueTint bg-opacity-10 text-blackTint px-10 py-10 flex gap-20">
      <div className="py-3">
        <Leftside />
      </div>
      <div>
        <DashHeader />
        <div className="px-80 py-5">
          <Filters />
        </div>
        <div className="py-20">
          <ProfileSum />
        </div>
        <div className="">
          <div className="px-10">
            <h1 className="font-bold text-xl px-4">Jobs you may like</h1>
            <JobList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
