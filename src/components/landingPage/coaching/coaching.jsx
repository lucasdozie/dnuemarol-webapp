import Button from "../others/btn";

function Coaching() {
  return (
    <>
      <div className="text-center">
        <div className="py-20">
          <p className="font-bold text-2xl pb-5">
            Take Your Career to the Next Level
          </p>
          <p className="xs">
            Hundreds of certified coaches trained to help you improve your
            resume, strategize <br />
            your job search,or navigate a big career change.
          </p>
        </div>
        <div>
            
        </div>
        <div className="pb-14">
          <Button
            text="EXPLORE ALL ADVICE"
            className="px-10 py-3 bg-blue-500 rounded text-white text-base"
          />
        </div>
      </div>
    </>
  );
}

export default Coaching;
