// import Button from "../others/btn";
import Info from "./signup/info";
import Writeup from "./signup/writeup";




function SignUp() {
  return (
    <>
      <div className="  text-center text-blackTint py-32 bg-blues-pattern ">
        <div className="flex justify-center rounded mx-[250px]">
          <div className="py-44 rounded-lg ">
            <Writeup
              text="Sign In"
              title="One of us?"
              body="If you already has an account, just sign in. We've missed you!"
              link="/signin"
            />
          </div>
          <div>
            <div className="py-10">
              <p className="font-extrabold text-3xl"> Sign Up</p>
              <p className="font-semibold text-xl">Its free and only takes a minute</p>
            </div>

            <div>
              <Info />
            </div>

            <p className="text-sm text-center mt-6">
              By signing up, you agree to our 
              <a href="#" className="text-blueTint hover:underline">
                 <span className="pl-1">Terms</span>
              </a>
              <span className="pl-1">and</span>
              <a href="#" className="text-blueTint hover:underline">
                 <span className="pl-1">Privacy Policy </span>
              </a>
            </p>

          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
