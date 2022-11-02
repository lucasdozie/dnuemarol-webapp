import { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Button from "../../others/btn";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/thunksetup/authService/authSlice";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

function LogInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const authState = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [logInData, setLogInData] = useState({
    password: "",
    email: "",
  });
  const handleChange = (e) => {
    setLogInData({
      ...logInData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setIsLoading(authState.isLoading);
    if(authState.user.status === "success") {
      navigate("/alljobs")
    }
  }, [authState]);
  const handleClick = () => {
    dispatch(login(logInData)); // this dispatch the func login authslice taking logInData
  };

  return (
    <>
      <div div className=" mt-6 md:mt-12">
        <div className="border-2 border-solid rounded flex  mb-4">
          <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
            <AiOutlineMail />
          </div>
          <div className="flex-1">
            <input
              className="rounded-full bg-transparent outline-none border-hidden border-blue-300 border-2 leading-[45px] placeholder:text-lg  font-semibold"
              type="text"
              placeholder="Email Address"
              value={logInData.email}
              name="email"
              size="30"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="border-2 border-solid rounded flex items-center mb-4">
          <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
            <FaLock />
          </div>
          <div className="flex-1">
            <input
              className="rounded-full bg-transparent outline-none border-hidden border-blue-300 border-2 leading-[45px] placeholder:text-lg  font-semibold"
              type="password"
              placeholder="Password"
              value={logInData.password}
              name="password"
              size="30"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
  
      <div className="text-center mt-6 md:mt-12">
      {isLoading && <div className="p-10"><PropagateLoader color="#3b82f6" size={10} /></div>}
        <Button
          text="Sign in"
          link=""
          className="bg-blueTint hover:bg-blue-500 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300"
          // onClick={() => dispatch(storeLogData(logInData))}
          onClick={handleClick}
        />
      </div>
    </>
  );
}

export default LogInfo;
