import { useEffect, useState } from "react";
import Button from "../../others/btn";
import { BounceLoader } from "react-spinners";
// import { getUserID } from '../../redux/thunksetup/userService'
// import axios from "axios";
// import { useSelector } from "react-redux";
import { getRequest } from "../../api/service";
import { useNavigate } from "react-router-dom";

function JobList() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate()
  // const userState=useSelector((state)=> state.auth)
  // const token = userState.user.data.sessionAuth.accessToken
  // const [isLoading, setIsLoading] = useState(true);
  // const headers = {
  //   "Content-Type": "application/json",
  //   "Access-Control-Allow-Origin": "*",
  //   "x-nuema-customerId": getUserID(),
  //   "Authorization": `Bearer ${token}`
  // }

  const fetchJobs = async () => {
    const res = await getRequest("recruit/jobListing/getall");
    // axios.get(
    //   `${process.env.REACT_APP_ENDPOINT}recruit/jobListing/getall`, {
    //     headers
    //   }
    // );

    console.log(res.data);
    setJobs(res.data.data);
    if (res.data) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // console.log(getUserID());
    fetchJobs();
  }, []);

  const handleView = (id) => {
    console.log(id);
    navigate("/jobpage/" + id)
  }

  return (
    <>
      <div>
        <div>
          <ul>
            {isLoading ? (
              <div className="p-20" ><BounceLoader color="#3b82f6" /></div>
            ) : (
              jobs.map((job) => (
                <li key={job._id}>
                  <div className="flex justify-between gap-40 p-5 text-blackTint">
                    <div className="flex">
                      <div>
                        <img src="" />
                      </div>
                      <div>
                        <p>{job.title}</p>
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
                        {/* <Button
                          text="VIEW JOB"
                          className="py-3 px-5 rounded border-blue-700 text-blue-500"
                          link="/JobPage"
                        /> */}
                        <button className="py-3 px-5 rounded border-blue-700 text-blue-500" onClick={()=> {
                          handleView(job._id)
                        }}>View Job</button>
                      </div>
                    </div>
                  </div>{" "}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      {/* {isLoading ? (
        <BounceLoader 
        loading={isLoading}
      />
      ) : ( */}
      {/* <div className="flex justify-between gap-40 p-5 text-blackTint">
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
        </div> */}
      {/* )} */}
    </>
  );
}

export default JobList;
