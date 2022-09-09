import Button from "../../../others/btn";

function JobList() {
  return (
    <>
      <div className="shadow-xl flex justify-between p-5">
        <div className="flex">
          <div>
            <img src="" />
          </div>
          <div>
            <p>Development Manager (Remote)</p>
            <p>At FRONTSTEPS-Denver,Co/Remote</p>
            <p>Posted on Aug 19</p>
          </div>
        </div>
        <div className="flex py-3">
          <div>
            <Button
              text="APPLY"
              className="p-2 bg-gray-300 font-bold text-center"
              link="/Apply"
            />
          </div>
          <div>
            <Button
              text="VIEW JOB"
              className="py-3 px-5 rounded border-blue-700 text-blue-500"
              link="/JobPage"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default JobList;
