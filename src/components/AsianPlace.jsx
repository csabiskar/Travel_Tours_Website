import React from 'react'
import { CiLocationOn } from "react-icons/ci";

function AsianPlace() {

      const demo = [
    {
      img: "https://images.unsplash.com/photo-1758831509029-d033be374f04?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Hongyadong",
    },
    {
      img: "https://images.unsplash.com/photo-1542114633831-6c3880908875?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Singapore",
    },
    {
      img: "https://images.unsplash.com/photo-1597148543182-830ef7bbb904?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Malaysia",
    },
    {
      img: "https://images.unsplash.com/photo-1578990628019-45c322869735?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bali",
    }
  ];



  return (
   <>
   
    <div className="min-h-screen pt-40 md:pt-20 px-4 md:px-20 bg-black text-white">
        <div className="md:p-8" data-aos="fade-up">
            <p className="text-lg md:text-3xl leading-8 font-bold text-center text-[#ffffff] mt-6">
                Asian Countries
            </p>
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
                            loading="lazy"
                        />
                        <p className="mt-2 text-xl font-bold"> {item.title}</p>
                        <p className="flex items-center text-[#bebebe]">
                            <CiLocationOn className="mr-1" /> AS
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
   </>
  )
}

export default AsianPlace