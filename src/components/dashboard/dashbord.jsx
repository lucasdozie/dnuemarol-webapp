import React from "react";
import Filters from "../job/Alljob/filters";
import JobList from "../job/Alljob/jobList";
import Header from "../landingPage/header";
import Ham from "./ham";
import Resource from "./rescource";

function Dashboard() {
  return (
    <div className="bg-blueTint bg-opacity-10 text-blackTint">
      <Header />
      <div className="px-10 flex py-10">
        <Ham
         ui="User Information"
         experience="Experience:25 years"
         location="Location: Akwa-Ikom"
         email="xyz@gmail.com"/>
        <Filters />
      </div>
      <div className="px-20 flex gap-10 justify-center">
        <div className="px-10"><JobList /></div>
        <Resource/>
      </div>
    </div>
  );
}

export default Dashboard;
