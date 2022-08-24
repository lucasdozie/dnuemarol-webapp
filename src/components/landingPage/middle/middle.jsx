import first from "../images/firsttile.png";
import second from "../images/secondtile.png";
import third from "../images/thirdtile.png";
function Middle() {
  const tiles = [
    {
      title: "Find Your Work Fam",
      body: "Learn what makes a company unique from the perspective of the people who work there — in their own words.",
      className: " flex-row",
      className1: " bottom-[-10px] left-[90px]",
      src: first,
      id: 1,
    },
    {
      title: "Spotlight on Values",
      body: "Chart a career with meaning — find companies whose mission, vision, and values align with yours.",
      className: " flex-row-reverse",
      className1: " bottom-[40px] right-[90px]",
      src: second,
      id: 2,
    },
    {
      title: "Benefits & Beyond",
      body: " Find a workplace that fits your lifestyle with up-to-date information about what a company has to offer.",
      className: " flex-row",
      className1: " bottom-[40px] left-[90px]",
      src: third,
      id: 3,
    },
  ];
  return (
    <>
      <div className="">
        <div className="text-center p-10">
          <p className="text-3xl font-bold">
            Get an exclusive look inside hundreds of companies hiring now
          </p>
        </div>
        <div className="">
          {tiles.map((tile) => (
            <div className="px-20 py-2">
              <div
                className={
                  "bg-blue-pattern px-20 m-5 flex justify-between relative h-[300px] " +
                  tile.className
                }
                key={tile.id}
              >
              <div className={"absolute " + tile.className1}>
                  <img src={tile.src} alt="img" className="rounded-full " />
                </div>
                <div className="p-60"></div>
                <div className="py-10 pr-20">
                  <p className="text-xl font-bold py-10">{tile.title} </p>
                  <p className="text-lg">{tile.body} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Middle;
