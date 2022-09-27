import React from "react";
import Filters from "../job/Alljob/filters";
import Header from "../landingPage/header";
import Ham from "./ham";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="px-20 flex justify-between">
        <Ham />
        <Filters />
      </div>
    </div>
  );
}

export default Dashboard;
