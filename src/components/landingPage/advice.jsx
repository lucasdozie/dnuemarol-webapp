
import card1 from "./images/card1.jpg";
import card2 from "./images/card2.jpg";
import card3 from "./images/card3.jpg";

function Advice() {
  const cards = [
    { src: card1, title: "Succeeding at Work", id: 5 },
    { src: card2, title: "Career Path", id: 4 },
    { src: card3, title: "Job Search", id: 3 },
  ];
  return (
    <>
      <div className="text-center bg-blues-pattern">
        <div className="text-center py-10">
          <p className="font-bold text-2xl pb-5">Build Your Dream Career</p>
          <p className="xs">
            Get the expert advice you need to succeed — no matter where you are
            in your career.
          </p>
        </div>
        <div className="flex justify-center px-5 py-5 gap-5 ">
          {cards.map((card) => (
            <div className="rounded" key={card.id}>
                <div className="transform transition duration-500 hover:scale-110"><img src={card.src} alt="card" className="rounded h-[250px] w-[350px]"/></div>
                <div className=""><p className="font-bold text-2xl  py-8 pb-10 bg-white">{card.title}</p></div>
            </div>
          ))}
        </div>
        {/* <div className="pb-14" ><Button text="EXPLORE ALL ADVICE" className="px-10 py-3 bg-blue-500 rounded text-white text-base"/></div> */}
      </div>
    </>
  );
}

export default Advice;
