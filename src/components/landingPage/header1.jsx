import logo from "./images/dneulogo.svg";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchIcon from "../others/searchicon";
import Button from "../others/btn";
// import Button from "../others/btn";
function Header1({ path }) {
  console.log(path);
  return (
    <>
      <div className="flex justify-between bg-black px-5 py-6 text-white sticky top-0 z-50 lg:min-w-4xl	">
        <div className="flex justify-evenly">
          <div className="w-28 h-1  pt-2">
            <Link to="/">
              <img src={logo} alt="logo" className="" />
            </Link>
          </div>
          {/* {(window.location.pathname !== "/" ||
            window.location.pathname !== "/dashboard") && (
            <div className="flex justify-evenly pl-4">
              <input
                type="search"
                placeholder="Search Jobs"
                size="30"
                className="h-8 pl-2 outline-none border-hidden text-black"
              />
              <div className="pl-1">
                <SearchIcon className="bg-blue-500 px-2 py-2 outline-none rounded border-hidden" />
              </div>
            </div>
          )} */}
        </div>
        <div className="flex">
          <Link to="/allJobs" className="p-3">
            JOBS
          </Link>
          <Link to="/ham" className="p-3">
            COMPANY
          </Link>
          <a href="#" className="p-3">
            ADVICE
          </a>
          <a href="#" className="p-3">
            COACHING
          </a>
          <a href="#" className="p-3 border-solid border-2 rounded">
            EMPLOYERS
          </a>
          {/* {(window.location.pathname === "/dashboard"||window.location.pathname === "/profile") ? ( */}
          

            <div className="p-3 ">
              <div className=" dropdown block relative">
                <button className=" ">
                  <span className="">
                    <FaUserAlt />
                  </span>
                </button>
                <ul className="dropdown-menu right-[-30px] min-w-96 absolute hidden text-gray-700 pt-1">
                  <li className="">
                    <a
                      className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap px-10"
                      href="#"
                    >
                      
                    </a>
                  </li>
                  <li className="">
                    <Link to="/profile"
                      className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                     ACCOUNT
                    </Link>
                  </li>
                  <li className="">
                    <a
                      className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      SIGN OUT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
        {/* //   ) : (
        //     <Link to="/SignUp" className="p-3">
        //       SIGN UP
        //     </Link>
          )} */}
        </div>
      </div>
    </>
  );
}

export default Header1;
