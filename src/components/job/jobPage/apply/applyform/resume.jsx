import { useState } from "react";
import Button from "../../../../others/btn";
import { FaUniversity,FaRegMoneyBillAlt } from "react-icons/fa";
import { GrCertificate} from "react-icons/gr";
import { MdClass,MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

function ResForm() {
  const [formData, setformData] = useState({
    tertiary: "",
    degree: "",
    course: "",
    skills: "",
    file: "",
    comment: "",
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
      <div className="text-blackTint py-32 bg-blueTint bg-opacity-10 ">
        <div className="rounded  mx-[300px] py-10 bg-blues-pattern bg-opacity-20">
          <div className="px-6 py-2">
            <h1 className="font-semibold text-xl underline">Resume</h1>
          </div>

          <form className="px-5">
            <div className="1">
              <p className="font-semibold text-base py-3 underline">
                Education
              </p>
              <div className="1">
                <div className="1">
                  <div>
                    <label className="form-label">Tertiary Institution</label>
                  </div>
                  <div className="flex rounded items-center mb-4 w-[600px] ">
                    <div className="px-2"><FaUniversity/></div>
                    <input
                      className="bg-transparent	w-[564px] leading-[45px] outline-none border-hidden"
                      name="tertiary"
                      placeholder="Tertiary Institution"
                      type="text"
                      value={formData.tertiary}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="1">
                  <div>
                    <label className="form-label">Degree</label>
                  </div>
                  <div className="flex rounded items-center mb-4 w-[600px] ">
                    <div className="px-2"><GrCertificate/></div>
                    <input
                    placeholder="Degree"
                      className="bg-transparent	w-[564px] leading-[45px] outline-none border-hidden"
                      name="degree"
                      type="text"
                      value={formData.degree}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="1">
                  <div>
                    <label className="form-label">Course</label>
                  </div>
                  <div className="flex rounded items-center mb-4 w-[600px] ">
                    <div className="px-2"><MdClass/></div>
                    <input
                    placeholder="Course"
                      className="bg-transparent	w-[564px] leading-[45px] outline-none border-hidden"
                      name="course"
                      type="text"
                      value={formData.course}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="1">
              <div>
                <label className="form-label">Years of experience</label>
              </div>
              <div className="flex rounded items-center mb-4 w-[600px] ">
                <div className="px-2"><MdWork/></div>
                <input
                placeholder="Years of experience"
                  className="bg-transparent	w-[564px] leading-[45px] outline-none border-hidden"
                  name="course"
                  type="text"
                  value={formData.course}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="1">
              <div className="1">
              <div>
                <label className="form-label">
                  List any applicable skills, training or proficiencies.
                </label>
                </div>
                <div className="flex rounded items-center mb-4 w-[600px] ">
                <div className="px-2"><GiSkills/></div>
                <input
                placeholder="Applicable skills, training or proficiencies."
                  className="bg-transparent	w-[564px] leading-[45px] outline-none border-hidden"
                  name="skills"
                  type="text"
                  value={formData.skills}
                  onChange={handleChange}
                />
              </div>
              </div>
            </div>
            <div className="py-5">
              <div>
                <label className="mr-4">Upload your CV:</label>
              </div>
              <input
              placeholder="Upload your CV"
                type="file"
                name="file"
                value={formData.file}
                onChange={handleChange}
              />
            </div>
            <div className="1">
              <div className="1">
                <label className="form-label">Expected Salary</label>
              </div>
              <div className="flex rounded items-center mb-4 w-[600px] ">
                <div className="px-2"><FaRegMoneyBillAlt/></div>
                <div>
                  <input
                  placeholder="Expected Salary"
                    className="bg-transparent	w-[564px] leading-[45px] outline-none border-hidden"
                    name="skills"
                    type="text"
                    value={formData.skills}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="1">
              <div className="1">
                <label for="comments">Any Comments?</label>
              </div>
              <div className="1">
                <input
                  className="h-12 bg-transparent	w-[564px] leading-[45px] outline-none border-hidden;"
                  name="comment"
                  placeholder="Enter your comment here..."
                  value={formData.comment}
                  onChange={handleChange}
                ></input>
              </div>
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
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResForm;
