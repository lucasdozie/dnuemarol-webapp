import { FiLinkedin,FiFacebook } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";


function Socials() {
  const socials = [
    { icon: "FiLinkedin", link:"", text: "Connect with Linkedin", id: 1, classname:" w-14 h-14 text-center rounded-full bg-blue-500 text-white saturate-200 transition-all hover:bg-blue-600"},
    { icon: "FiFacebook",link:"", text: "Connect with Facebook", id: 2, classname:" w-14 h-14 text-center rounded-full bg-red-500 text-white saturate-200 transition-all hover:bg-blue-600"},
    { icon: "FcGoogle", link:"", text: "Connect with Google", id: 3, classname:" w-14 h-14 text-center rounded-full bg-blue-400 text-white saturate-200 transition-all hover:bg-blue-600"},
  ];
  return (
    <>
      <div className=" flex items-center justify-around ">
        {socials.map((social) => (
           <div className="mt-6" key={social.id}>
           <div className={social.classname} >
             <a href={social.link}className="block mt-4">
               {/* <div><{social.icon}/></div>  */}
             </a>
           </div>
          
         </div>
        ))}
      </div>
    </>
  );
}

export default Socials;



 // <div className="">
              //   <img src={social.icon} alt="icon" />
              // </div>
              // <div className="">
              //   <p>{social.text}</p>
              // </div>
              // </div>
              // </a>
              // </div>