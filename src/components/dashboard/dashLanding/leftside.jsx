import logo from "../../landingPage/images/dneulogo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Leftside() {
  const tiles = [
    { text: "Overview", link:"./", id: 1 },
    { text: "Job Listing", link:"/alljoblist", id: 2 },
    { text: "Saved Jobs", link:"./", id: 3 },
    { text: "Settings", link:"./", id: 4 },
    // { text: "", link:"/", id.: 5 },
    // { text: "", link:"/", id: 6 },
    // { text: "", link:"/", id: 7 },
    // { text: "", link:"/", id: 8 },
  ];

  const [isNavOpen, setIsNavOpen] = useState(true);
  const hamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (
    <div className="">
      <div className={`${isNavOpen && "slideRight"}`}>
        <div>
          <div
            className="HAMBURGER-ICON space-y-2 relative"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <div
              className={`${hamburgerLine} ${
                isNavOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${hamburgerLine} ${
                isNavOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${hamburgerLine} ${
                isNavOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            {isNavOpen && (
              <div className="">
                <div className="">
                  <div className="pb-5">
                    <div className="">
                      <Link to="/">
                        <img className="h-5" src={logo} alt="logo" />
                      </Link>
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
                      <Link
                        to={tile.link}
                        className="text-xl font-medium inline-block"
                      >
                        {tile.text}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className=""></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftside;
