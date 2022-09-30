import { useState } from "react"; // import state
import { FaUserAlt } from "react-icons/fa";
import Button from "../others/btn";

function Ham(props) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <>
      <div className="dashBoard flex pr-96 ">
        <div
          className="HAMBURGER-ICON space-y-2 relative"
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          <FaUserAlt size={25} />
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          {/* // toggle class based on isNavOpen state */}
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          {isNavOpen && (
            <div className="MENU-LINK-MOBILE-OPEN   flex flex-col items-center justify-between max-w-[500px] top-[170px] bg-gray-100 left-0 absolute text-center">
              
              <div className=" my-2 border-t-2 border-b-2 ">
                <div className=" my-2  ">
                  <h1>{props.ui} </h1>
                </div>
                <div className="my-3 px-10 pt-2 ">
                  <h1>{props.name}</h1>
                  <p className="py-1">{props.experience}</p>
                  <p className="py-1">{props.avail}</p>
                  <p className="py-1">{props.location}</p>
                  <p className="py-1">{props.email}</p>
                  {/* <div>
                <Button text="update"/>
                </div> */}
                </div>
              </div>
              
              
              
              {/* <div className=" my-2 border-t-2 border-b-2 ">
                <div className=" my-2  ">
                  <h1> USER INFORMATION</h1>
                </div>
                <div className="my-3 px-10 pt-2 ">
                  <h1>JOHN DOE</h1>
                  <p className="py-1">Experience: 15 years</p>
                  <p className="py-1">Availability: Immediately</p>
                  <p className="py-1">Location: Akwa Ibom</p>
                  <p className="py-1">Email:xyz@gmail.com</p>
                  {/* <div>
                <Button text="update"/>
                </div> 
                </div>
              </div> */}
              <div className=" my-3 uppercase">
                <a href="/portfolio">Skill Assessment</a>
              </div>
              <div className=" my-3 uppercase">
                <a href="/portfolio">Job Listing</a>
              </div>
              <div className="my-3 uppercase">
                <a href="/contact">My Saved Jobs</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Ham;
