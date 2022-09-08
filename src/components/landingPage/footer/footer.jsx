import fb from "../images/footerIcons/sc-facebook-svgrepo-com.svg"
import pin  from "../images/footerIcons/pinterest-alt-svgrepo-com.svg"
import linkedin from "../images/footerIcons/linkedin-svgrepo-com (1).svg"
import ig from "../images/footerIcons/instagram-svgrepo-com (1).svg"
import twitter from "../images/footerIcons/twitter-svgrepo-com.svg"
import logo from "../images/dneulogo.svg"
function Footer(){
    return(
        <>
        <div className="bg-black flex justify-around text-white py-10">
            <div className="block">
                <div className="w-28 h-1"><img src={logo} alt=""/></div>
               <div className="py-5"> <p>©2022 Daily Muse Inc.</p></div>
            </div>
            <div className="flex justify-around">
                <div className="px-3">
                    <p className="py-3 text-blue-300">ABOUT THE MUSE</p>
                    <ul>
                        <li>About Us</li>
                        <li>Team</li>
                        <li>Careers</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                        <li>Search Jobs</li>
                        <li>Browse Companies</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="px-3">
                    <p className="py-3 text-blue-300">POPULAR JOBS</p>
                    <ul>
                        <li>New York Jobs</li>
                        <li>San Francisco Jobs</li>
                        <li>Seattle Jobs</li>
                        <li>Engineering Jobs</li>
                        <li>Marketing Jobs</li>
                        <li>Information Technology<br/> Jobs</li>
                    </ul>
                </div>
                <div className="px-3">
                    <p className="py-3 text-blue-300">GET INVOLVED</p>
                    <ul>
                        <li>For Employers</li>
                        <li>The Muse Book: <br/>The New Rules of Work</li>
                        <li>For Career Coaches</li>
                        <li>For Developers</li>
                        <li>Send Feedback About<br/> The Muse</li>
                        <li>Tell A Friend</li>
                        
                    </ul>
                </div>
                <div className="px-3">
                    <p className="py-3 text-blue-300">JOIN THE CONVERSATION</p>
                    <ul className="flex">
                        <li className="bg-blueTint rounded-full m-1 w-8 h-8"><a href=""><img src={fb} alt="icon"/></a></li>
                        <li className="bg-blueTint rounded-full m-1 w-8 h-8"><a href=""><img src={linkedin} alt="icon"/></a></li>
                        <li className="bg-blueTint rounded-full m-1 w-8 pt-1 pl-1 h-8"><a href=""><img src={twitter} alt="icon"/></a> </li>
                        <li className="bg-blueTint rounded-full m-1 w-8 pt-1 pl-1 h-8"><a href=""><img src={pin} alt="icon"/></a></li>
                        <li className="bg-blueTint rounded-full m-1 w-8 h-8"><a href=""><img className="p-1" src={ig} alt="icon"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;