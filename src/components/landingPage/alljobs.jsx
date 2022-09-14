import Filters from "../job/Alljob/filters";
import JobList from "../job/Alljob/jobList";
import TopList from "../job/Alljob/topJob";


function AllJobs(){
    return(
        <>
        <div className="text-center mx-80 mb-40">
            <div className="py-40" >
                <TopList/>
            </div>
            <div className="px-20">
                <Filters/>
            </div>
            <div className=""><JobList/></div>
            
        </div>
        </>
    );
}

export default AllJobs;