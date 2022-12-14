import Button from "../../others/btn";


function TopList(){
    
    return(
        <>
        <div>
            <div className="">
                <p className="text-5xl font-extrabold mb-5">Come work with us.</p>
                <p className="text-xl mb-14 px-5">We're looking for great people to join our growing team</p>
            </div>
            <div>
                <Button text="VIEW OPENINGS"  className="px-10 py-3 bg-blue-500 rounded text-white text-xl" link="/Joblist"/>
            </div>
        </div>
        </>
    );
}

export default TopList;