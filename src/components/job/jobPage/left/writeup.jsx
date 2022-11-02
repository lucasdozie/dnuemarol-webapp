import Button from "../../../others/btn";
import CompanyCard from "./companyCard";
import Perks from "./perks";
import Search from "./search";
import SkillRes from "./skillres";
import { useEffect, useState } from "react";
import { getRequest } from "../../../api/service";
import { PacmanLoader } from "react-spinners";

function Writeups() {
  const [isLoading, setIsLoading] = useState(true)
  const [jobData, setJobData] = useState({})
  const getJob = async (id) => {
    const res = await getRequest(`recruit/jobListing/getOne?id=${id}`)
    console.log("THIS IS THE RESPONSE DATA. THE ID IS " + id, res.data);
    if(res.data) {
      setIsLoading(false)
    }
    setJobData(res.data.data)
  }
  useEffect(() => {
    console.log()
    const id = window.location.pathname.split("/")[2]
    getJob(id)
  }, [])
  return (
    <>
      {isLoading ? <div className="p-20" ><PacmanLoader color="#3b82f6" size={20} /> </div>: <div className=" w-[650px] text-lg">
        <div className="">
          <div className="">
            <p className="text-sm text-blue-800 font-bold">Frontsteps</p>
            <p className="font-bold text-3xl">{jobData.title}</p>
            <p className="text-sm">{jobData.created_at}{jobData.job_type}</p>
          </div>
          <CompanyCard />
          <div className="">
            <p className="font-bold py-8 px-2 text-lg">
              CO Salary Range: USD 120,000.00 - 140,000.00 per year
            </p>
            <p className="text-lg">
              Headquartered in Denver, Colorado with additional offices in
              Arizona and California, FRONTSTEPS is a SaaS company with a
              resident engagement platform to empower communities to be safe,
              informed, and efficient. More than 23,000 communities nationwide -
              that's 4.4 million homeowners - are covered by FRONTSTEPS
              services! We deliver solutions that simplify how management
              companies, homeowner associations, builders, and security & patrol
              experts build, connect, operate, and secure modern communities.
              With a focus on mobile-first technology and best-in-class
              integrations, our products make it easy for community leaders and
              homeowners to communicate, collaborate, and drive a more
              prosperous community.
            </p>
            <p className="py-5">
              FRONTSTEPS is guided by the core values of 1) developing our
              people, 2) taking care of the customer at all times, 3) moving
              with purpose and urgency, 4) being open, honest, and transparent,
              5) innovating and failing forward, and 6) being courageous.
            </p>
          </div>
          <div className="">
            <p className="pt-5 font-bold pb-3">POSITION OVERVIEW</p>
            <p className="">
            {jobData.description}
            </p>
            <p className="pt-5 font-bold pb-3">JOB RESPONSIBILITY</p>
            <p className="py-5">
            {jobData.responsibility}
            </p>
            <p className="pb-5">
              This position may be based remotely in the U.S. All candidates
              must be authorized to work in the U.S. without sponsorship.
            </p>
          </div>
          <div className="">
            <SkillRes />
          </div>
          <div className="">
            <p className="py-5">
              FRONTSTEPS is proud to be an equal opportunity employer. All
              qualified applicants receive consideration for employment without
              regard to race, color, religion, sex, sexual orientation, gender
              identity, national origin, age, protected veteran status, or
              disability status.
            </p>
            <p className="text-sm">
              Client-provided location(s): Denver, CO, USA <br/>Job ID:
              Frontsteps-27680072
            </p>
            <div className="border-b-[1px] py-10">
              <Button text="APPLY"  className="px-10 py-3 bg-blue-500 rounded font-extrabold text-white text-base" link="/apply"/>
            </div>
          </div>
          {/* <div className="pt-5">
            <Perks />
          </div> */}
          <div>
            <Search/>
          </div>
        </div>
      </div>}
    </>
  );
}

export default Writeups;
