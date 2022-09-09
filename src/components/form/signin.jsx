import Button from "../others/btn";
import LogInfo from "./signin/formin";
import Writeup from "./signup/writeup";


function SignIn() {
  return (
    <>
      <div className="text-center text-blackTint py-32 bg-blues-pattern ">
        <div className="flex justify-center rounded shadow-2xl  mx-[300px]">
        <div className="py-44 rounded-lg shadow-inner">
            <Writeup
              text="Sign Up"
              title="New here?"
              body="Sign up and discover great amount of new opportunities!"
              link="./SignUp"
            />
          </div>
          <div className="px-5">
          <div>
            <div className="py-10">
              <p className="font-extrabold text-xl"> Sign Up</p>
              <p className="font-bold text-lg">Have an account with us</p>
            </div>
            <div className="">
              <LogInfo/>
            </div>
          </div>
          <div className="text-center mt-6 md:mt-12">
              <Button
                text="Sign in"
                link="/AllJobs"
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