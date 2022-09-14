import pic from "../svgs/wave.svg";
import Button from "./btn";
function Employer() {
  return (
    <>
      <div className="flex flex-row-reverse justify-evenly py-40">
        <div className=" ">
          <img className="max-w-xl	max-h-xl" src={pic} alt="" />
        </div>
        <div>
          <p className="font-bold text-[52px] px-40">
            Let's make your next great hire. Fast.
          </p>

          <div className="px-40 py-20">
            <Button
              text="Post a Job"
              className="bg-blueTint hover:bg-blue-500 text-white text-xl py-2 px-4 md:px-6 rounded-full transition-colors duration-300"
              link="./"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Employer;
