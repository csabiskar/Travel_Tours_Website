import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube ,FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center md:text-left">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">A Xplorer</h2>
            <p className="mt-2 text-gray-400 text-sm">
              Explore the world your way. Unforgettable journeys, crafted with care.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-gray-400 text-xl">
            <a href="#https://www.linkedin.com/in/abiskar-riyas-s-8ab547235/" className="hover:text-white transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/_mr_abis_/" className="hover:text-white transition-colors">
              <FaInstagram />
            </a>
            {/* <a href="#" className="hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaYoutube />
            </a> */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} A Xplorer. All rights reserved. | Designed by{" "}
            <a className="text-white font-semibold" href="https://csabis.vercel.app/" target="_blank">Abiskar Riyas S</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
