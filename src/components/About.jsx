import React,{useEffect} from "react";
import AboutImg from "../assets/about.jpg";
import { GoArrowRight } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <section
      id="about"
      className="flex flex-col items-start justify-start min-h-screen text-left pt-24 sm:pt-32 md:pt-40 px-4 sm:px-10 md:px-20 lg:px-28 bg-black text-white" 
    >
      <div className="w-full" data-aos="fade-up">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bricolage-grotesque">
          A <span className="text-[#fa1515]">Xplorer</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mt-10 items-start">
          {/* Text Section */}
          <div className="flex flex-col gap-6 md:w-2/5 w-full">
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-300">
              Introducing <strong>A Xplorer</strong> – founded by passionate
              adventurer <strong>Abiskar Riyas S</strong> in 2025. Based in{" "}
              <strong>Pollachi</strong>, A Xplorer serves solo travelers and
              explorers alike, offering domestic and international trips.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-400">
              From flight bookings and visa assistance to customized tour
              packages and unique adventures, A Xplorer crafts each journey with
              personal care, making every trip unforgettable.
            </p>

            {/* Button */}
            <a href="#explore" className="mt-4 sm:mt-6 bg-white/10 backdrop-blur-md flex justify-center font-semibold items-center text-white py-3 sm:py-4 w-56 sm:w-72 text-base sm:text-lg md:text-xl hover:bg-white/20 transition-all duration-300  shadow-lg">
              Explore Travel
              <GoArrowRight className="ml-2 hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-3/5">
            <img
              src={AboutImg}
              alt="About A Xplorer"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
