import React, { useEffect } from "react";
import backgroundImage from "../assets/background.webp";
import slide from "../assets/slo.jpg";
import honrymoon from "../assets/honrymoon.jpg";
import Thailannd from "../assets/thailand.jpg";
import Group from "../assets/group.jpg";
import { GoArrowRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <div
      id="home"
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>

      {/* Content */}
      <div
        className="absolute inset-0 text-white p-6 sm:p-10 md:p-16 lg:px-24 z-10"
        data-aos="fade-down"
      >
        <div className="flex flex-col items-start justify-center h-full pt-20 sm:pt-28 md:pt-32 lg:pt-40">
          <h2 className="text-base sm:text-lg md:text-xl mb-3 tracking-widest uppercase">
            Welcome To{" "}
            <span className="bg-gradient-to-r from-[#fa1515] to-[#fa1515] opacity-65">
              Xplorer
            </span>
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold max-w-3xl leading-tight bricolage-grotesque">
            Explore The World Your Way
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-6 md:leading-8 max-w-2xl mt-4 text-gray-200">
            Embark on unforgettable journeys with <strong>A Xplorer</strong>.
            Discover hidden destinations, islands, mountains, and unique travel
            experiences worldwide.
          </p>

          {/* CTA Button */}
          <a
            href="#explore"
            className="group mt-6 bg-white/10 backdrop-blur-md flex justify-center items-center text-white font-semibold py-3 sm:py-4 px-8 sm:px-12 md:px-16 text-base sm:text-lg md:text-xl shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            Start Exploring
            <GoArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </a>

          {/* Image cards */}
          <div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {[
              { src: slide, label: "Slovenia" },
              { src: honrymoon, label: "Honeymoon" },
              { src: Thailannd, label: "Thailand" },
              { src: Group, label: "Group Travel" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative w-full h-44 sm:h-52 overflow-hidden group shadow-lg"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <p className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
