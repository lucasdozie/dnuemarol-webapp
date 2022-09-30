import React from "react";
import Button from "../../others/btn";

function ProfileUpdate() {
  const profiles=[{
    heading: "Employment & Availability",
    text:"",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim ratione esse dolore commodi quas blanditiis nam quisquam neque ad totam assumenda.",
    id: 1,
  },
  {
    heading: "About Me ",
    text:"",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim ratione esse dolore commodi quas blanditiis nam quisquam neque ad totam assumenda.",
    id: 2,
  },
  {
    heading: "Education",
    text:"",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim ratione esse dolore commodi quas blanditiis nam quisquam neque ad totam assumenda.",
    id: 3,
  },
  {
      heading: "Job Skills",
      text:"",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim ratione esse dolore commodi quas blanditiis nam quisquam neque ad totam assumenda.",
      id: 4,
    },
    {
      heading: "Associations",
      text:"",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim ratione esse dolore commodi quas blanditiis nam quisquam neque ad totam assumenda.",
      id: 5,
    },
    {
      heading: "Certificates & Awards",
      text:"",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim ratione esse dolore commodi quas blanditiis nam quisquam neque ad totam assumenda.",
      id: 6,
    },
    {
      heading: "Cover Letter",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim ratione esse dolore commodi quas blanditiis nam quisquam neque ad totam assumenda.",
      id: 7,
    },
    {
      heading: "CV",
      text:"",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim ratione esse dolore commodi quas blanditiis nam quisquam neque ad totam assumenda.",
      id: 8,
    },
    {
      heading: "Projects & Portfolio",
      text:"",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim ratione esse dolore commodi quas blanditiis nam quisquam neque ad totam assumenda.",
      id: 9,
    },
    {
      heading: "Download Your Career Profile",
      text:"",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim ratione esse dolore commodi quas blanditiis nam quisquam neque ad totam assumenda.",
      id: 10,
    },]
  return (
    <div>
     <div>
     {profiles.map((profile)=>(
      <div key={profile.id} className="py-5 pr-20 pl-5 border-t-2">
        <h1 className="text-2xl font-bold text-blueTint">{profile.heading} </h1>
        <p>
         {profile.body}
        </p> 
        {/* <Button /> */}
      </div>))}
      
     </div>
    
    
    </div>
  );
}

export default ProfileUpdate;
