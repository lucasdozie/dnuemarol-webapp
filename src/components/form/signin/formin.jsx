import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function LogInfo() {
  const [formData, setformData] = useState({
    password: "",
    email: "",
  });
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div div className=" mt-6 md:mt-12">
        <div className="border-2 border-solid rounded flex items-center mb-4">
          <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
            <AiOutlineMail />
          </div>
          <div className="flex-1">
            <input
              className="rounded-full border-blue-300 border-2 leading-[45px] placeholder:text-lg text-center font-semibold"
              type="text"
              placeholder="Email Address"
              value={formData.email}
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
              className="rounded-full border-blue-300 border-2 leading-[45px] placeholder:text-lg text-center font-semibold"
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
    </>
  );
}

export default LogInfo;
