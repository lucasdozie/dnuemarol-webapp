import Button from "../../others/btn";

function Writeup(props) {
  return (
    <>
      <div className="">
        <div>
          <h1 className="font-bold text-3xl text-blueTint p-5">{props.title}</h1>
          <p className="font font-semibold px-5 pb-5 ">{props.body}</p>
          <Button  text={props.text} className="bg-blueTint hover:bg-blue-500 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300" link={props.link} />
        </div>
      </div>
    </>
  );
}

export default Writeup;
