import { useState } from "react"; // import state
import { FaUserAlt } from "react-icons/fa";
import Button from "../../others/btn";

function Ham(props) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <>
      <div className="dashBoard flex  ">
      <div className=" flex ">
        <button className="relative group" 
         onClick={() => setIsNavOpen((prev) => !prev)}
          // :onClick={() => setIsNavOpen(false)}} 
         >
         
          <div className="relative z-20 flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-8 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
              <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
              <div className="bg-white h-[1px] rounded"></div>
              <div className="m-0 bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
            </div>
          </div>
        </button>
      </div>
        {/* <div
          className="HAMBURGER-ICON space-y-2 relative"
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          <div className="space-y-2 m-1">
            <span className="block w-8 h-1 bg-gray-600 mb-1"> </span>
            <span className="block w-8 h-1 bg-gray-600 mb-1"></span>
            <span className="block w-8 h-1 bg-gray-600 mb-1"></span>
          </div>
          {/* <FaUserAlt size={25} /> */}
        {/* </div> */}

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          {/* // toggle class based on isNavOpen state */}

          {isNavOpen && (
            <div className="MENU-LINK-MOBILE-OPEN   flex flex-col items-center justify-between max-w-[500px] top-[170px] bg-gray-100 left-0 absolute text-center">
              {/* <div
                className="CROSS-ICON absolute top-0 right-0 px-4 py-2"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-4 w-4 text-gray-600"
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
              </div> */}
              <div className="pr-5 py-5">
                {window.location.pathname !== "/profile" && (
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
                )}
              </div>
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
