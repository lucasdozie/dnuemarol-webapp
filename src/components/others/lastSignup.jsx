import Header from "../landingPage/header";
import pic from "../svgs/wave2.svg"
import Button from "./btn";
function LastSignup(){
    return(
        <>
        <Header/>
        <div className="text-center py-20 text-blackTint">
            <div className="">
                <div className="pl-[500px] "><img className="w-96 h-96" src={pic} alt=""/></div>
                <p className="font-semibold text-lg pb-5">Ready for the next step?</p>
                <p className="font-semibold text-lg pb-5">Create an account for tools to help you</p>
            </div>
            <div className="flex justify-center">
                <div className="px-3">
                    <Button text="Job Seeker"
                  className="bg-blueTint hover:bg-blue-500 text-white text-xl py-2 px-4 md:px-6 rounded-full transition-colors duration-300"
                  link="/alljobs"/>
                </div>
                <div className="px-3">
                    <Button text="Employer"
                  className="bg-blueTint hover:bg-blue-500 text-white text-xl py-2 px-4 md:px-6 rounded-full transition-colors duration-300"
                  link="/employer"/>
                </div>
            </div>
        </div>
        </>
    );
}

export default LastSignup;