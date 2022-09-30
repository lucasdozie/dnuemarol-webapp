import Filters from "../job/Alljob/filters";
import JobList from "../job/Alljob/jobList";
import TopList from "../job/Alljob/topJob";
import Header from "./header";


function AllJobs(){
    return(
        <>
        <Header/>
        <div className="text-center mx-80 mb-40 text-blackTint">
            <div className="py-40" >
                <TopList/>
            </div>
            <div className="px-20 text-center">
            <div><p className="text-3xl mb-10">Our Openings</p></div>
                <Filters/>
            </div>
            <div className=""><JobList/></div>
            
        </div>
        </>
    );
}

export default AllJobs;