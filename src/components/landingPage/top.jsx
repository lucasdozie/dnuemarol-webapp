import SearchIcon from "../others/searchicon";

function Top() {
  return (
    <>
      <div className=" lg:bg-[length:800px,_800px] lg:bg-no-repeat lg:bg-[url(components/landingPage/images/right.jpg),_url(components/landingPage/images/left.jpg)] lg:bg-[position:bottom_left,_bottom_right] md:bg-black-pattern]">
        <div className="text-center text-white px-48 py-32 font-semibold bg-blue-400 bg-opacity-40  lg:text-center">
          <div>
            <p className="text-5xl p-3">
              <strong className="text-blue-400">Where</strong> talented people{" "}
              <br />
              <strong className="text-blue-400">and</strong> top companies{" "}
              <strong className="text-blue-400">unite</strong>
            </p>
          </div>
          <div>
            <p className="pb-3 text-lg">
              Find where the people, perks, and <br />
              values align with your needs.{" "}
            </p>
          </div>
          <div className="flex justify-center bg-gray-200 ml-72 w-[450px] lg:min-w-3xl">
            <div className="">
              <SearchIcon className="pt-5" />
            </div>
            <input
              type="search"
              placeholder="Search Jobs or Companies"
              size="50"
              className="rounded h-14 pl-2 outline-none border-hidden bg-transparent text-black"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Top;
