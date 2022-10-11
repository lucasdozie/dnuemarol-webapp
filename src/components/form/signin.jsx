import Header from "../landingPage/header";
import Button from "../others/btn";
import LogInfo from "./signin/formin";
import Writeup from "./signup/writeup";


function SignIn() {
  return (
    <>
    <Header/>
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
          
        </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;