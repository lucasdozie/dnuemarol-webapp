// import States from "../state/lga";
import { useState } from "react";
import { FaRegUser, FaRegAddressBook, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import {} from "react-icons/fa";

function BioForm() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    address: "",
    dob: "",
    phone: "",
    nation: "",
    states: "",
  });
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div>
        <form>
          <div className="py-3">
            <div className=" font-medium ">
              <label for="name">* Full Name: </label>
            </div>
            <div className="border-[0.5px] border-solid rounded flex items-center mb-4  hover:border-blue-300 ">
              <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                <FaRegUser />
              </div>
              <div className="">
                <input
                  className="bg-transparent	w-[564px] placeholder:text-lg font-semibold leading-[45px] outline-none border-hidden pl-2"
                  autofocus
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className="font-medium ">
              <label for="email">* Email: </label>
            </div>
            <div className="border-[0.5px] border-solid rounded flex items-center mb-4  hover:border-blue-300 ">
              <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                <AiOutlineMail />
              </div>
              <div className="">
                <input
                  className="bg-transparent	w-[564px] placeholder:text-lg font-semibold leading-[45px] outline-none border-hidden pl-2"
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="py-3">
            <div className="font-medium ">
              <label className="">Address</label>
            </div>
            <div className="border-[0.5px] border-solid rounded flex items-center mb-4  hover:border-blue-300">
              <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                <FaRegAddressBook />
              </div>
              <div>
                <input
                  className="bg-transparent	w-[564px] placeholder:text-lg font-semibold leading-[45px] outline-none border-hidden pl-2"
                  name="address"
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className="font-medium ">
              <label className="">Mobile Phone</label>
            </div>
            <div className="border-[0.5px] border-solid rounded flex items-center mb-4  hover:border-blue-300">
              <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                {" "}
                <FaPhoneAlt />
              </div>
              <div className="">
                <input
                  className="bg-transparent	w-[564px] placeholder:text-lg font-semibold leading-[45px] outline-none border-hidden pl-2"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile number"
                />
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className="font-medium ">
              <label for="Date of birth">* Date of Birth: </label>
            </div>
            <div className="">
              <input
                className="bg-transparent	w-[564px] placeholder:text-lg font-semibold leading-[45px] outline-none border-hidden pl-2"
                type="date"
                name="dob"
                max="125"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="py-3">
            <div className="font-medium ">
              <label for="Nationality">* Are you Nigerian by Nationality</label>
            </div>
            <div className="">
              <ul className="flex">
                <li className="px-5 lex justify-center items-center flex-shrink-0">
                  <label className="px-3">Yes</label>
                  <input
                    name="nat"
                    value="1"
                    type="radio"
                    className="px-2"
                    onChange={handleChange}
                  />
                </li>
                <li className="px-5 flex justify-center items-center flex-shrink-0">
                  <label className="px-3">No</label>
                  <input
                    name="nat"
                    value="2"
                    type="radio"
                    
                    onChange={handleChange}
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="py-3">
            <div className="font-medium ">
              <label for="state of origin">State of Origin</label>
            </div>
            <div className="">
              <States />
            </div>
          </div> */}
        </form>
      </div>
    </>
  );
}

export default BioForm;
