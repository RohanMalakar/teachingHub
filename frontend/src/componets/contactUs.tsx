import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import map from "../assets/contactUs/map.png";
import location from "../assets/contactUs/location.png";
import mail from "../assets/contactUs/mail.png";
import phoneimg from "../assets/contactUs/phone.png";

interface ContactFormProps {}

const ContactUs: React.FC<ContactFormProps> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    window.alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`);
    setEmail('');
    setName('');
    setPhone('');
    setSubject('');
    setMessage('');
    
  };

  return (
    <div>
      <div className='absolute lg:-left-[86px] -left-[50px]  bg-gradient-to-t from-[#6198f1] via-[#B1CCF8] to-[#B1CCF8] lg:-top-[255px] -top-[100px] w-[300px] lg:w-[581px] h-[300px] lg:h-[581px] rounded-full bg-[#A8C4F1] -z-2 right-0'> 
        <p className="absolute text-[#FFFFFF21] bottom-20 lg:bottom-30 right-10 lg:right-40  z-2 2xl lg:text-4xl text-2xl font-inika font-extrabold ">
          TEACHING
          <span className="text-[10px] lg:text-xl">HUB</span>
        </p>
      </div>
      <div className='absolute lg:-left-[267px] -left-24 lg:-top-[239px] -top-[100px] w-[400px] h-[400px] lg:w-[868px] lg:h-[868px] rounded-full bg-[#A8C4F1] -z-10 right-0'>  
      </div>
      <div className='absolute lg:-left-[267px] -left-24 lg:-top-[239px] -top-[100px] w-[400px] h-[400px] lg:w-[868px] lg:h-[868px] rounded-full bg-[#A8C4F1] -z-10 right-0'>  
      </div>
      <div className="flex justify-end items-center gap-5 md:flex-row flex-col lg:px-20 px-5 py-12">
        <div className='md:w-[80%]  w-full flex justify-center mt-6 md:mt-0'>
          <img className='' src={map} alt="map" />
        </div>
        <form onSubmit={handleSubmit} className="bg-white md:relative md:right-10 md:bottom-0 lg:right-32 lg:bottom-14 min-w-[300px] max-w-[300px] rounded-md p-6 shadow-md">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <select
              id="subject"
              className="w-full px-4 py-2 border rounded-md appearance-none focus:outline-none focus:ring focus:border-blue-500"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="" disabled>
                Subject
              </option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Sales">Sales</option>
              <option value="Support">Support</option>
              {/* Add more subject options as needed */}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <HiChevronDown className="text-gray-400" />
            </div>
          </div>
          <div className="mb-6">
            <textarea
              id="message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="How we can help you"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className='flex justify-center items-start md:items-center gap-5 md:flex-row flex-col lg:px-20 px-5 py-12'>
         <div className='flex justify-center gap-3 items-center mt-6 md:mt-0'>
           <img src={location} alt=""  />
           <div >
            <h3>Address</h3>
            <p className='text-[12px]'>D-13, Kailash Nagar,<br /> near Prime Hospital,  <br />Alkapuri, Gwalior, <br /> Madhya Pradesh 474002</p>
           </div>
         </div>
         <div className='flex justify-center gap-3 items-center mt-6 md:mt-0'>
           <img src={mail} alt=""  />
           <div>
            <h3>Email </h3>
            <p className='text-[12px]'>teachinghubteam@outlook.com</p>
           </div>
         </div>
         <div className='flex justify-center gap-3 items-center mt-6 md:mt-0'>
           <img src={phoneimg} alt=""  />
           <div>
            <h3>Phone </h3>
            <p className='text-[12px]'>+91 12323 43444</p>
           </div>
         </div>
      </div>

    </div>
  );
};

export default ContactUs;