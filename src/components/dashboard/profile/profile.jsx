import React from "react";
import Filters from "../../job/Alljob/filters";
import DashHeader from "../dashLanding/dashHeader";

import Leftside from "../dashLanding/leftside";
import ProfilePer from "./profile_percentage";
import ProfileUpdate from "./profile_update";

function Profile() {
  return (
    <div className="bg-blueTint bg-opacity-10 text-blackTint px-10 py-10 flex">
      <div className="py-3">
        <Leftside />
      </div>
      <div className="flex-1 pl-10">
        <div>
          <DashHeader />
          <div className="px-80 py-5">
            <Filters />
          </div>
        </div>
        <div className="flex gap-40 px-10">
          <ProfileUpdate />
          <ProfilePer />
        </div>
      </div>
    </div>
  );
}

export default Profile;
