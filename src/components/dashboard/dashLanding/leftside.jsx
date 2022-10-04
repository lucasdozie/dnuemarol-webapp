import logo from "../../landingPage/images/dneulogo.svg";
import { useState } from "react";

function Leftside() {
  const tiles = [
    { text: "Overview", id: 1 },
    { text: "Job Listing", id: 2 },
    { text: "Saved Jobs", id: 3 },
    { text: "Settings", id: 4 },
    // { text: "", id: 5 },
    // { text: "", id: 6 },
    // { text: "", id: 7 },
    // { text: "", id: 8 },
  ];
  const [open, setOpen] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="">
      <div className={`${isNavOpen&&"slideRight"}`}>
        <div>
          <div
            className="HAMBURGER-ICON space-y-2 relative"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <div className="space-y-1 m-1">
              <span className="block w-8 h-1 bg-gray-600 mb-1"> </span>
              <span className="block w-8 h-1 bg-gray-600 mb-1"></span>
              <span className="block w-8 h-1 bg-gray-600 mb-1"></span>
            </div>
            {/* <FaUserAlt size={25} /> */}
          </div>
        </div>
        {/* <button
          className="relative group"
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
        </button> */}
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          {" "}
          {isNavOpen && (
            <div className="">
              <div className="">
                <div className="pb-5">
                  <div className="">
                    <img className="h-5" src={logo} alt="logo" />
                  </div>
                </div>
                <div className="pb-5">
                  <p className="text-lg font-medium">Active</p>
                  <p className="text-lg font-medium">Tagline</p>
                </div>
              </div>
              <div className="">
                {tiles.map((tile) => (
                  <div className=" py-3 border-t-2" key={tile.id}>
                    <h1 className="text-xl font-medium inline-block">
                      {tile.text}
                    </h1>
                  </div>
                ))}
              </div>
              <div className=""></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Leftside;
