import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Button from "../../others/btn";
// import { useDispatch, useSelector } from "react-redux";
// import UpdateData from "../../reduxsetup/action/actiontype";
import { useEffect } from "react";
// import { createUser} from '../../redux/feautures/userSignup'
import axios from "axios";

function Info() {
  const [formData, setformData] = useState({
    name: "",
    password: "",
    email: "",
  });

  useEffect(()=>{
    
  }, [])

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state.userSignup);
  // console.log(state);
  
  const handleClick = async () => {
    // dispatch(
            //   createUser(formData));
    // console.log(formData)

    // const options = {
    //   method: "POST",
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // }
    // fetch("https://1d94-105-112-229-242.eu.ngrok.io/mariam", options)
    // .then(response => response.json())
    // .then(data => console.log(data))


    const res = await axios.post("https://rapidmedical-backend.herokuapp.com/mariam", formData, {
      headers: {
        "content-type": "application/json"
      }
    })
    console.log(res.data);
  }
  
  return (
    <>
      <div className="">
        <div className=" mt-6 md:mt-12">
          <div className="border-2 border-solid rounded flex items-center mb-4  hover:border-blue-300 mx-12">
            <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
              <FaRegUser />
            </div>
            <div className="flex-1">
              <input
                className="leading-[45px] bg-transparent outline-none border-hidden placeholder:text-lg font-semibold w-[400px] hover:border-blue-300"
                type="text"
                placeholder="Fullname"
                value={formData.name}
                name="name"
                size="30"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="border-2 border-solid rounded flex items-center mb-4 hover:border-blue-300 mx-12">
            <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
              <AiOutlineMail />
            </div>
            <div className="flex-1">
              <input
                className="leading-[45px] bg-transparent outline-none border-hidden placeholder:text-lg font-semibold w-[400px] hover:border-blue-300"
                type="text"
                placeholder="Email Address"
                value={formData.email}
                name="email"
                size="30"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="border-2 border-solid rounded flex items-center mb-4  hover:border-blue-300 mx-12">
            <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
              <FaLock />
            </div>
            <div className="flex-1">
              <input
                className="leading-[45px] bg-transparent outline-none border-hidden placeholder:text-lg font-semibold w-[400px] hover:border-blue-300"
                type="password"
                placeholder="Password"
                value={formData.password}
                name="password"
                size="30"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 md:mt-12">
        <Button
          text="Sign Up"
          link="/dashboard"
          className="bg-blueTint hover:bg-blue-500 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300"
          onClick={handleClick}
        />
      </div>
    </>
  );
}

export default Info;
