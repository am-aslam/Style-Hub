import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="">
      {/* Footer */}
      <footer className="text-center text-black bg-gray-100 shadow" >
        {/* Grid container */}
        <div className="p-4 pb-0">
          {/* Section: Links */}
          <section className="">
            {/*Grid row*/}
            <div className="flex flex-wrap justify-center">
              {/* Grid column - Company name */}
              <div className="w-full md:w-1/3 lg:w-1/4 p-3">
                <h6 className="uppercase text-lg font-bold">STYLE HUB</h6>
                <p className="">
                  Lifestyle websites try to cover everything for everyone, but as women, femme,
                  and non-binary people, we’re multi-layered with unique needs and interests—and
                  we deserve media that recognizes our interests. We follow.
                </p>
              </div>

              {/* Grid column - Products */}
              <div className="w-full md:w-1/4 p-3">
                <h6 className="uppercase mb-4 font-bold">Products</h6>
                <ul className="space-y-2">
                  <li><a href="#!" className="text-black hover:text-gray-500">Home</a></li>
                  <li><a href="#!" className="text-black hover:text-gray-500">About</a></li>
                  <li><a href="#!" className="text-black hover:text-gray-500">Shopping</a></li>
                  <li><a href="#!" className="text-black hover:text-gray-500">Adding</a></li>
                </ul>
              </div>

              {/* Grid column - Contact */}
              <div className="w-full md:w-1/3 lg:w-1/4 p-3 ">
                <h6 className="uppercase mb-4 font-bold">Contact</h6>
                <div className="flex flex-col justify-center items-center">
                  <p><MdOutlineHomeWork />
                  <span> India, Palakkad</span>
                 </p>
                  <p>
                    <BiLogoGmail /> 
                    <span> info@gmail.com</span>
                   </p>
                  <p>
                    <FaPhoneSquareAlt />
                    <span>+ 91 222 333 33</span> 
                    </p>
                  <p>
                    
                    <FaPhoneSquareAlt />
                    <span>+ 91 234 567 88</span>
                     </p>
                </div>
              </div>

              {/* Grid column - Follow us */}
              <div className="w-full md:w-1/4 p-3">
                <h6 className="uppercase mb-4 font-bold">Follow us</h6>
                <div className="flex space-x-2 justify-center">
                  {/* Facebook */}
                  <a className="bg-[#3b5998] p-2 rounded-full" href="#!">
                    <FaFacebook />
                  </a>
                  {/* Twitter */}
                  <a className="bg-[#55acee] p-2 rounded-full" href="#!">
                    <BsTwitterX />
                  </a>
                  {/* Google */}
                  <a className="bg-[#dd4b39] p-2 rounded-full" href="#!">
                    <FaGoogle />
                  </a>
                  {/* Instagram */}
                  <a className="bg-[#ac2bac] p-2 rounded-full" href="#!">
                    <FaInstagramSquare />
                  </a>
                  {/* LinkedIn */}
                  <a className="bg-[#0082ca] p-2 rounded-full" href="#!">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Copyright */}
        <div className="text-center p-3 border-t-2 border-gray-300" >
          © 2024 Copyright:{" "}
          <a className="text-black hover:underline" href="#">
            hafeexhafe@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
