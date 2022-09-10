import States from "../state/lga";
import { useState } from "react";
import { FaRegUser,FaRegAddressBook, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import {  } from "react-icons/fa";

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
            <div className="flex rounded items-center mb-4 w-[600px] ">
              <div className="px-2">
                <FaRegUser />
              </div>
              <div className="">
                <input
                  className="bg-transparent	w-[564px] leading-[45px] outline-none border-hidden"
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
            <div className="flex rounded items-center mb-4 w-[600px] ">
              <div className="px-2">
                <AiOutlineMail />
              </div>
              <div className="">
                <input
                  className="bg-transparent	w-[564px] leading-[45px] outline-none border-hidden"
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
            <div className="flex rounded items-center mb-4 w-[600px]">
              <div className="px-2">
                <FaRegAddressBook />
              </div>
              <div>
                <input
                  className="bg-transparent	w-[564px] leading-[45px] outline-none border-hidden"
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
            <div className="flex rounded items-center mb-4 w-[600px]">
              <div className="px-2"> <FaPhoneAlt/></div>
              <div className="">
                <input
                  className="bg-transparent	w-[564px] leading-[45px] outline-none border-hidden"
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
                className="bg-transparent	w-[564px] leading-[45px] outline-none border-hidden"
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
                <li className="px-5">
                  <label className="px-2">
                    Yes
                    <input
                      name="nat"
                      value="1"
                      type="radio"
                      className="p-2"
                      onChange={handleChange}
                    />
                  </label>
                </li>
                <li className="radio">
                  <label>
                    No
                    <input
                      name="nat"
                      value="2"
                      type="radio"
                      className="p-2"
                      onChange={handleChange}
                    />
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-3">
            <div className="font-medium ">
              <label for="state of origin">State of Origin</label>
            </div>
            <div className="">
              <States />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default BioForm;
