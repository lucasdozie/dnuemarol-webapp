function SearchIcon() {
    const handleClick = (e) => {};
  return (
    <>
      <button onClick={(e) => handleClick} className="" type="submit" >
        <div className="bg-blue-500 p-1 rounded">
          <svg
            viewBox="0 0 18 18"
            width="1em"
            height="1em"
          >
            <path
              fill="#fff"
              d="M7.885.19a7.695 7.695 0 016.124 12.355l3.623 3.86a.81.81 0 01-1.101 1.183l-.08-.075-3.556-3.787A7.695 7.695 0 117.885.19zm0 1.62a6.075 6.075 0 100 12.15 6.075 6.075 0 000-12.15z"
            ></path>
          </svg>
        </div>
      </button>
    </>
  );
}

export default SearchIcon;
