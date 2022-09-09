import Button from "../../../others/btn";

function Apply(){
    return(
        <>
        <div className="p-5 mb-10 text-center w-[360px] shadow-2xl">
            <Button text="APPLY "  className="px-10 py-3 bg-blue-500 rounded text-white font-extrabold text-base" link="/apply"/>
        </div>
        </>
    );
}

export default Apply;