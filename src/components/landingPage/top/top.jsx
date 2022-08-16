function Top() {
  return (
    <>
      <div className="bg-[length:750px,_800px] bg-no-repeat bg-[url(components/images/left.jpeg),_url(components/images/rightimage.webp)] bg-[position:bottom_left,_bottom_right]">
        <div className="text-center text-white p-48 font-semibold bg-blue-400 bg-opacity-40">
          <p className="text-4xl p-3">
            <strong className="text-blue-400">Where</strong> talented people{" "}
            <br />
            <strong className="text-blue-400">and</strong> top companies{" "}
            <strong className="text-blue-400">unite</strong>
          </p>
          <p className="pb-3">
            Find where the people, perks, and <br />
            values align with your needs.{" "}
          </p>
          <input
            type="search"
            placeholder="Search jobs or companies"
            className="rounded h-14"
            size="50"
          />
        </div>
      </div>
    </>
  );
}

export default Top;
