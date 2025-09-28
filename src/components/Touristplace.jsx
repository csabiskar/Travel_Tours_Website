import React from "react";
import { CiLocationOn } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Touristplace() {
  const demo = [
    {
      img: "https://images.unsplash.com/photo-1758552219420-3996bf8de344?q=80&w=994&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "France",
    },
    {
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "Italy",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1673254850680-969be808b314?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "Switzerland",
    },
    {
      img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "Spain",
    },
    {
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "Turkey",
    },
    {
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0",
      title: "Greece",
    },
  ];

  return (
    <div className="min-h-screen pt-40 md:pt-20 px-4 md:px-20 bg-black text-white">
      <div className="md:p-8" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          European Countries
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {demo.map((item, index) => (
            <div
              key={index}
              className="w-full h-auto  overflow-hidden shadow-lg cursor-pointer"
              data-aos="zoom-in"
                data-aos-delay="100"
            >
              <img
                src={item.img}
                alt={item.title}
                
                className="w-full h-80 object-cover transition-transform duration-600 hover:scale-125 hover:brightness-75"
              />
              <p className="mt-2 text-xl font-bold"> {item.title}</p>
              <p className="flex items-center text-[#bebebe]">
                <CiLocationOn className="mr-1" /> EU
                <span>{item.location}</span>
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}

export default Touristplace;
