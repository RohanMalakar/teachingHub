import React from 'react';
import Footer from "../componets/footer";
import NavBar from "../componets/navBar";
import ContactUs from "../componets/contactUs";

const ContactUsPage: React.FC = () => {
  return (
    <div>
       <NavBar/> 
       <div className="flex justify-center py-10">
          <h2 className="px-3 py-2 rounded-3xl border-transparent  bg-[#F1EDED]"><span className="text-[#A1A0A0]"> Home</span> / Contact</h2>
       </div> 
       <ContactUs/>
       <Footer/>
    </div>
  );
};

export default ContactUsPage;
