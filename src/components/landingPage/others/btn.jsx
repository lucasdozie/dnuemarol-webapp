const Button = (props) => {
  const handleClick = (e) => {};

  // const myStyle=

  return (
    <>
      <button onClick={(e) => handleClick} className={props.className}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
