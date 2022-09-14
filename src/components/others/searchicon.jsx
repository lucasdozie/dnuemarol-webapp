import {FaSearch} from "react-icons/fa"
function SearchIcon(props) {
    const handleClick = (e) => {};
  return (
    <>
      <button onClick={(e) => handleClick} className="" type="submit" >
        <div className={props.className}>
         <FaSearch/>
        </div>
      </button>
    </>
  );
}

export default SearchIcon;
