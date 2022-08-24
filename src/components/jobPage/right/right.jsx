import Apply from "./apply";
import Similar from "./similar";

function Right(){
    return(
        <>
        <div className=" w-[400px] h-[700px]">
            <div className="pl-5">
            <Apply/>
            </div>
            <div className="pl-5">
                <Similar/>
            </div>
        </div>
        </>
    );
}

export default Right;