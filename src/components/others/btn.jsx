const Button = (props) => {
  const handleClick = (e) => {
    console.log(props.data)
  };

  // const myStyle=

  return (
    <>
      <button onClick={handleClick} className={props.className}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
