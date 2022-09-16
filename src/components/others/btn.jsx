import { Link } from "react-router-dom";
const Button = ({onClick,className,link,text}) => {
  

  return (
    <>
      <button onClick={onClick} className={className}>
        <Link to={link}>
          <p>{text}</p>
        </Link>
      </button>
    </>
  );
};

export default Button;