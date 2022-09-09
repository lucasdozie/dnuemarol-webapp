import { Link } from "react-router-dom";
const Button = (props) => {
  const handleClick = (e) => {
    console.log(props.data);
  };

  return (
    <>
      <button onClick={handleClick} className={props.className}>
        <Link to={props.link}>
          <p>{props.text}</p>
        </Link>
      </button>
    </>
  );
};

export default Button;
