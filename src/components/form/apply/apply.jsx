// import Button from "../others/btn";
import Header from "../../landingPage/header";
import BioForm from "./applyform/bioForm";


function ApplyForm() {
  return (
    <>
    <Header/>
      <div className=" text-blackTint py-32 bg-blueTint bg-opacity-10 ">
        <div className="rounded mx-[300px] bg-blues-pattern bg-opacity-20">
          <div className="px-6 py-5">
            <p className=""></p>
            <h1 className="text-2xl font-bold text-center">Apply Here</h1>
            <p className="text-base font-extralight pt-5">
              Thank you for your interest in working with us.{" "}
            </p>
            <p className="text-base font-extralight">
              Please check below for available job opportunities that meet your
              criteria and send your application by filling out the Job
              Application Form.
            </p>
          </div>
          <div className="pb-4 ">
            <h1 className="px-5 font-semibold text-xl underline">Background Data</h1>
          </div>
          <div className="px-5 py-5">
            <BioForm />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default ApplyForm;
