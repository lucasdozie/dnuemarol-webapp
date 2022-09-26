import { useState } from "react";

import { FaUniversity, FaRegMoneyBillAlt } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { MdClass, MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import Button from "../../others/btn";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { addResume } from "../../redux/feautures/bioform";
import axios from "axios";

function Resform() {
  const [resumeData, setResumeData] = useState({
    tertiary: "",
    degree: "",
    course: "",
    experience: "",
    skills: "",
    salary: "",
    file: "",
    currentRole: "",
  });
  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value,
    });
  };

  // const dispatch = useDispatch();
  // const state = useSelector((state) => state.resume);
  // console.log(state);
  // useEffect(() => {
  //   // console.log(state);
  // }, [state]);

  const handleClick = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_ENDPOINT}/mariam`,
      resumeData,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(res.data);
  };

  return (
    <>
      <div className="text-blackTint py-32 bg-blueTint bg-opacity-10 ">
        <div className="rounded  mx-[300px] py-10 bg-blues-pattern bg-opacity-20">
          <div className="px-3 py-2">
            <h1 className="font-bold text-3xl underline">Resume</h1>
          </div>

          <form className="px-6 ">
            <div className="py-1">
              <p className="font-semibold text-base py-3 underline">
                Education
              </p>
              <div className="py-1">
                <div className="py-1">
                  <div>
                    <label className="font-semibold">
                      Tertiary Institution
                    </label>
                  </div>
                  <div className="border-[0.5px] border-solid rounded flex items-center mb-4  hover:border-blue-300">
                    <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                      <FaUniversity />
                    </div>
                    <input
                      className="bg-transparent	w-[564px] pl-2 leading-[45px] placeholder:text-lg font-semibold  outline-none border-hidden"
                      name="tertiary"
                      placeholder="Tertiary Institution"
                      type="text"
                      value={resumeData.tertiary}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="py-1">
                  <div>
                    <label className="font-semibold">Degree</label>
                  </div>
                  <div className="border-[0.5px] border-solid rounded flex items-center mb-4  hover:border-blue-300">
                    <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                      <GrCertificate />
                    </div>
                    <input
                      placeholder="Degree"
                      className="bg-transparent	w-[564px] pl-2 leading-[45px] placeholder:text-lg font-semibold  outline-none border-hidden"
                      name="degree"
                      type="text"
                      value={resumeData.degree}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="py-1">
                  <div>
                    <label className="font-semibold">Course</label>
                  </div>
                  <div className="border-[0.5px] border-solid rounded flex items-center mb-4  hover:border-blue-300">
                    <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                      <MdClass />
                    </div>
                    <input
                      placeholder="Course"
                      className="bg-transparent	w-[564px] pl-2 leading-[45px] placeholder:text-lg font-semibold  outline-none border-hidden"
                      name="course"
                      type="text"
                      value={resumeData.course}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="py-1">
                <label className="font-semibold">Current Role</label>
              </div>
              <div className="py-1">
                <input
                  className="h-12 bg-transparent	w-[564px] pl-2 leading-[45px] placeholder:text-lg font-semibold  outline-none border-hidden;"
                  name="currentRole"
                  placeholder="Current Role"
                  value={resumeData.curentRole}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="py-1">
              <div>
                <label className="font-semibold">Years of experience</label>
              </div>
              <div className="border-[0.5px] border-solid rounded flex items-center mb-4  hover:border-blue-300">
                <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                  <MdWork />
                </div>
                <input
                  placeholder="Years of experience"
                  className="bg-transparent	w-[564px] pl-2 leading-[45px] placeholder:text-lg font-semibold  outline-none border-hidden"
                  name="experience"
                  type="text"
                  value={resumeData.experience}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="py-1">
              <div className="py-1">
                <div>
                  <label className="font-semibold">
                    List any applicable skills, training or proficiencies.
                  </label>
                </div>
                <div className="border-[0.5px] border-solid rounded flex items-center mb-4  hover:border-blue-300">
                  <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                    <GiSkills />
                  </div>
                  <input
                    placeholder="Applicable skills, training or proficiencies."
                    className="bg-transparent	w-[564px] pl-2 leading-[45px] placeholder:text-lg font-semibold  outline-none border-hidden"
                    name="skills"
                    type="text"
                    value={resumeData.skills}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="py-1">
                <label className="font-semibold">Expected Salary</label>
              </div>
              <div className="border-[0.5px] border-solid rounded flex items-center mb-4  hover:border-blue-300">
                <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                  <FaRegMoneyBillAlt />
                </div>
                <div>
                  <input
                    placeholder="Expected Salary"
                    className="bg-transparent	w-[564px] pl-2 leading-[45px] placeholder:text-lg font-semibold  outline-none border-hidden"
                    name="salary"
                    type="text"
                    value={resumeData.salary}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="py-5">
              <div>
                <label className="mr-4 font-semibold">Upload your CV:</label>
              </div>
              <input
                placeholder="Upload your CV"
                type="file"
                name="file"
                value={resumeData.file}
                onChange={handleChange}
              />
            </div>

            <div className="pl-[450px] pt-5 flex">
              <div className="px-4">
                <Button
                  text="Back"
                  className="bg-blueTint hover:bg-blue-500 text-white text-xl py-2 px-4 md:px-6 rounded-full transition-colors duration-300"
                  link="/apply"
                />
              </div>
              <div>
                <Button
                  text="Submit"
                  className="bg-blueTint hover:bg-blue-500 text-white text-xl py-2 px-4 md:px-6 rounded-full transition-colors duration-300"
                  link="/alljobs"
                  onClick={handleClick}
                  // console.log(resumeData)
                  // dispatch(
                  //   addResume(resumeData));
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Resform;
