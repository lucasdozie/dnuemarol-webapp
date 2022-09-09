import Button from "../others/btn";
import Info from "./signup/info";
import Writeup from "./signup/writeup";

function SignUp() {
  return (
    <>
      <div className="  text-center text-blackTint py-32 bg-blues-pattern ">
        <div className="flex justify-center rounded shadow-2xl  mx-[250px]">
          <div className="py-44 rounded-lg shadow-inner">
            <Writeup
              text="Sign In"
              title="One of us?"
              body="If you already has an account, just sign in. We've missed you!"
              link="./SignIn"
            />
          </div>
          <div>
            <div className="py-10">
              <p className="font-extrabold text-3xl"> Sign Up</p>
              <p className="font-semibold text-xl">Have an account with us</p>
            </div>

            <div>
              <Info />
            </div>

            <p className="text-sm text-center mt-6">
              By signing up, you agree to our
              <a href="#" className="text-blueTint hover:underline">
                Terms
              </a>
              and
              <a href="#" className="text-blueTint hover:underline">
                Privacy Policy
              </a>
            </p>

            <div className="text-center mt-6 md:mt-12">
              <Button
                text="Sign Up"
                link="./LastSignup"
                className="bg-blueTint hover:bg-blue-500 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
