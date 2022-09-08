import { useState } from "react";
import Button from "../../others/btn";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


function Info() {
  const [formData, setformData] = useState({
    name: "",
    password: "",
    email: ""
  })
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
              <input className="leading-[45px] placeholder:text-lg text-center font-semibold w-[400px] hover:border-blue-300" type="text" placeholder="Fullname" value={formData.name} name='name' size="30" onChange={handleChange} />

            </div>
          </div>

          <div className="border-2 border-solid rounded flex items-center mb-4 hover:border-blue-300 mx-12">
            <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
              <AiOutlineMail />
            </div>
            <div className="flex-1">
              <input className="leading-[45px] placeholder:text-lg text-center font-semibold w-[400px] hover:border-blue-300" type="text" placeholder="Email Address" value={formData.email} name='email' size="30" onChange={handleChange} />

            </div>
          </div>

          <div className="border-2 border-solid rounded flex items-center mb-4  hover:border-blue-300 mx-12">
            <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
              <FaLock />
            </div>
            <div className="flex-1">
              <input className="leading-[45px] placeholder:text-lg text-center font-semibold w-[400px] hover:border-blue-300" type="password" placeholder="Password" value={formData.password} name='password' size="30" onChange={handleChange} />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;



