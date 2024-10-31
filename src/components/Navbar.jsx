import Logo from "../Assets/Icons/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
const Navbar = () => {
  return (
    
   <nav className=" flex items-center justify-between py-3 bg-gradient-to-b from-sky-900 to-blue-900" >
        <div className="flex flex-shrink-0 items-center">
            <img className="p-6" src={Logo} alt="logo" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-4xl text-white">
           <a href="https://www.linkedin.com/in/goofyphotography209/"> <FaLinkedin /></a>
            <a href="https://github.com/MiesieduoCodes"><FaGithub /></a>
            <a href="https://www.instagram.com/goofy_did_this/"><FaInstagram /></a>
            <a href=""><FaSquareXTwitter /></a>
            <a href="https://api.whatsapp.com/send/?phone=2349060462206&text&type=phone_number&app_absent=0"><FaWhatsapp /></a>
        </div>
    </nav>
  )
}

export default Navbar