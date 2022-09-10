import Button from "../others/btn";
import LogInfo from "./signin/formin";
import Writeup from "./signup/writeup";


function SignIn() {
  return (
    <>
      <div className=" text-blackTint py-32 bg-blues-pattern ">
        <div className="flex justify-center rounded mx-[300px]">
        <div className=" py-44 rounded-lg text-center">
            <Writeup
              text="Sign Up"
              title="New here?"
              body="Sign up and discover great amount of new opportunities!"
              link="/signup"
            />
          </div>
          <div className="px-5">
          <div>
            <div className="py-10 text-center">
              <p className="font-extrabold text-xl"> Sign In</p>
              <p className="font-bold text-lg">It is so nice to have you back</p>
            </div>
            <div className="">
              <LogInfo/>
            </div>
          </div>
          <div className="text-center mt-6 md:mt-12">
              <Button
                text="Sign in"
                link="/alljobs"
                className="bg-blueTint hover:bg-blue-500 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300"
              />
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;