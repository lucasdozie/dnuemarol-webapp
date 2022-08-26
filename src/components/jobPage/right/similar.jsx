function Similar() {
  const jobs = [
    {
      job: "Market Development Manager (Remote)",
      place: "Stryker",
      type: "Remote",
      id: 1,
    },
    {
      job: "Corporate Development Manager (Remote/Hybrid)",
      place: "Ford Motor Company",
      type: "Remote",
      id: 2,
    },
    {
      job: "Sr Product Management Development Manager - REMOTE",
      place: "CVS Health",
      type: "Remote",
      id: 3,
    },
  ];
  return (
    <>
      <div className="p-5 w-[360px] shadow-2xl">
        <div>
          <div className="">
            <p className="font-bold">SIMILAR JOBS</p>
          </div>
          <div className="border-b-2 pb-5">
            {jobs.map((job) => (
              <div className="py-2" key={job.id}>
                <a href="#" className="text-blue-400">{job.job}</a>
                <a href="#" className="block text-gray-500">{job.place}</a>
                <a href="#" className="">{job.type}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="pt-5 pb-2 ">
            <p className="font-bold">SUGGESTED SEARCHES</p>
          </div>
          <div className="">
            <p className="text-blue-400 py-2">Software Engineering jobs</p>
            <p className="text-blue-400 py-2">Senior Level jobs</p>
            <p className="text-blue-400 py-2">FRONTSTEPS jobs</p>
            <p className="text-blue-400 py-2">All jobs</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Similar;
