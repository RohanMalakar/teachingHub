import location from "../assets/location.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import chat from "../assets/chat.png";
import footerbanner from "../assets/footerbanner.png";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-[#011437] -z-20 text-white">
      {/* Top banner with image */}
      <div className="relative z-0 w-full h-48">
        <img
          src={footerbanner}
          alt="Learning environment"
          className="w-full absolute top-0 -z-20  h-full object-cover"
        />
        <div className="flex absolute top-10 right-20 z-20 items-center">
          <div>
            <img className="h-[30px] lg:h-[50px]" src={logo} alt="logo" />
          </div>
          <div>
            <div className="inline">
              <p className="inline 2xl lg:text-3xl font-inika font-bold bg-gradient-to-r from-[#60DDC5] to-[#0366f2] text-transparent bg-clip-text">
                TEACHING
                <span className="relative after:content-[''] after:absolute after:-left-20 lg:after:-left-38 after:bottom-0 after:w-[80px] lg:after:w-[152px] lg:after:h-[4px] after:h-[2px]   after:rounded after:bg-gradient-to-r after:from-[#FE611D] after:to-[#870A4A]">
                </span>
                <span className="text-[10px] lg:text-2xl">HUB</span>
              </p>
              <p className="lg:text-[17px] text-[9px]">Global learning spot</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="w-full py-2 px-4 bg-navy-950 text-xs text-gray-400">
        <p>© Copyright TeachingHub All Rights Reserved</p>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and social media */}
          <div className="flex flex-col justify-center items-center space-y-6">
            <div className="flex items-center">
              <div>
                <img className="h-[30px] lg:h-[50px]" src={logo} alt="logo" />
              </div>
              <div>
                <div className="inline">
                  <p className="inline 2xl lg:text-3xl font-inika font-bold bg-gradient-to-r from-[#60DDC5] to-[#0366f2] text-transparent bg-clip-text">
                    TEACHING
                    <span className="relative after:content-[''] after:absolute after:-left-20 lg:after:-left-38 after:bottom-0 after:w-[80px] lg:after:w-[152px] lg:after:h-[4px] after:h-[2px]   after:rounded after:bg-gradient-to-r after:from-[#FE611D] after:to-[#870A4A]">
                    </span>
                    <span className="text-[10px] lg:text-2xl">HUB</span>
                  </p>
                  <p className="lg:text-[17px] text-[9px]">Global learning spot</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 ">
                <img src={facebook} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#" className="w-8 h-8 ">
                <img src={instagram} alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="#" className="w-8 h-8 ">
                <img src={chat} alt="chat" className="w-8 h-8" />
              </a>
              <a href="#" className="w-8 h-8 ">
                <img src={twitter} alt="Twitter" className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact information */}
          <div className="md:mx-auto">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <img src={phone} alt="Phone" className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm">+91 9289704431</p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <img src={mail} alt="Mail" className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm">TeachingHubteam@Outlook.Com</p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 mt-1 bg-white rounded-full flex items-center justify-center">
                  <img src={location} alt="Location" className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm">
                  97-D, Kailash Nagar,<br />
                  Near Prime Hospital,<br />
                  Mhapani, Gwalior,<br />
                  Madhya Pradesh-474002
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="mb-4 text-sm font-semibold">PRIMARY PAGES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-teal-400 transition">HOME</a></li>
                <li><a href="#" className="text-sm hover:text-teal-400 transition">ABOUT US</a></li>
                <li><a href="#" className="text-sm hover:text-teal-400 transition">CONTACTS</a></li>
                <li><a href="#" className="text-sm hover:text-teal-400 transition">COURSES</a></li>
                <li><a href="#" className="text-sm hover:text-teal-400 transition">TERMS & CONDITIONS</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">OUR SERVICES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-teal-400 transition">WEB DESIGN</a></li>
                <li><a href="#" className="text-sm hover:text-teal-400 transition">WEB DEVELOPMENT</a></li>
                <li><a href="#" className="text-sm hover:text-teal-400 transition">PRODUCT MANAGEMENT</a></li>
                <li><a href="#" className="text-sm hover:text-teal-400 transition">MARKETING</a></li>
                <li><a href="#" className="text-sm hover:text-teal-400 transition">UI/UX DESIGN</a></li>
                <li><a href="#" className="text-sm hover:text-teal-400 transition">GRAPHIC DESIGN</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;