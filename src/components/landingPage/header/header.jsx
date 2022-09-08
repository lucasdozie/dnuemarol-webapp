import logo from "../images/dneulogo.svg";

import { Link } from "react-router-dom";
import SearchIcon from "../../others/searchicon";
function Header() {
  return (
    <>
      <div className="flex justify-between bg-black px-5 py-6 text-white sticky top-0 z-50">
        <div className="flex justify-evenly">
          <div className="w-28 h-1  pt-2">
            <Link to="/"><img src={logo} alt="logo" className="" /></Link>
          </div>
          <div className="flex justify-evenly pl-4">
            <input type="search" placeholder="Search Jobs" size="30" />
           <div className="pl-1">
           <SearchIcon/>
           </div>
          </div>
        </div>
        <div>
        <Link to="/Jobspage"className="p-3">
            JOBS
          </Link>
          <a href="#" className="p-3">
            COMPANY
          </a>
          <a href="#" className="p-3">
            ADVICE
          </a>
          <a href="#" className="p-3">
            COACHING
          </a>
          <a href="#" className="p-3 border-solid border-2 rounded">
            EMPLOYERS
          </a>
          <Link to="/SignUp" className="p-3">
            SIGN IN
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
