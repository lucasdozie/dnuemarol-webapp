import { useState } from "react";
import Button from "../../others/btn";

function Norm() {
  const [formData, setformData] = useState({
    name: "",
    password: ""
  })
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
     <div>
     <div>
        <p>Fullname</p>
        <input type="text" placeholder="fullname" value={formData.name} name='name' onChange={handleChange} />
      </div>
      <div>
        <p>Password</p>
        <input type="password" placeholder="password" value={formData.password} name='password' onChange={handleChange}  />
      </div>
      <div>
        <Button text="submit" className="bg-black text-white" data={formData}/>
      </div>
     </div>
    </>
  );
}

export default Norm;