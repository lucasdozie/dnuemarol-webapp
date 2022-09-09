import nike from "../images/nikelogo.png";
import tiktok from "../images/tiktoklogo.png";
import audible from "../images/audible.png";
import allbirs from "../images/allbirslogo.png";
import robinhood from "../images/robinhood.png";
import goldman from "../images/goldman.png";
import Button from "../../others/btn";

function Companies() {
  const logos = [
    { src: tiktok, id: 1 },
    { src: allbirs, id: 2 },
    { src: nike, id: 3 },
    { src: audible, id: 5 },
    { src: goldman, id: 6 },
    { src: robinhood, id: 7 },
  ];

  return (
    <>
      <div>
        <div className="flex justify-evenly tracking-wide gap-5">
          <div className="pt-8">
            {" "}
            <div className="h-[0.5px] w-40 bg-gray-400"></div>
          </div>
          <div className="">
            <p className="text-xl font-bold">
              We help companies celebrate what makes them unique — <br /> from
              startups to Fortune 100 and everything in between.
            </p>
          </div>
          <div className="pt-8">
            {" "}
            <div className="h-[0.5px] w-40 bg-gray-400 "></div>
          </div>
        </div>
        <div className="flex py-10 px-20 justify-evenly">
          {logos.map((logo) => (
            <div>
              <img src={logo.src} alt="logo" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button text="BROWSE COMPANIES" className="px-10 py-3 bg-blue-500 rounded text-white text-xs" link="/Companies"/>
        </div>
        <div className="text-center text-blue-500 pb-20">
          <p>
            Hiring?{" "}
            <a href="#" className="underline">
              Learn more
            </a>{" "}
            about featuring your brand on The Muse.
          </p>
        </div>
      </div>
    </>
  );
}

export default Companies;
