
import React from "react";
import Header from "../landingPage/header";
import Filters from "./Alljob/filters";
import JobList from "./Alljob/jobList";

function AllJobList() {
  return (
    <div>
      <Header />
      <div className="py-10 px-5">
        <div className="py-10 px-96">
          <Filters />
        </div>
        <JobList />
      </div>
    </div>
  );
}

export default AllJobList;