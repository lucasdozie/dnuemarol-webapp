import logo from "../images/muselogo.svg";
import search from "../images/search.svg";
import SearchIcon from "../others/searchicon";
function Header() {
  return (
    <>
      <div className="flex justify-between bg-black px-5 py-6 text-white">
        <div className="flex justify-evenly">
          <div className="w-28 h-1 ">
            <img src={logo} alt="logo" className="" />
          </div>
          <div className="flex justify-evenly pl-4">
            <input type="search" placeholder="Search Jobs" size="30" />
           <div className="pl-1">
           <SearchIcon/>
           </div>
          </div>
        </div>
        <div>
          <a href="./jobPage/left/writeup" className="p-3">
            JOBS
          </a>
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
          <a href="#" className="p-3">
            SIGN IN
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
