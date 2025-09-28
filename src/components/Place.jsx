import React from "react";
import { CiLocationOn } from "react-icons/ci";


function Place() {


    const demo = [
    {
      image: 'https://images.unsplash.com/photo-1643913058691-e033a8ae026d?q=80&w=1019&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Taj Mahal'
    },
    {
      image: 'https://images.unsplash.com/photo-1552098933-a5ceb0e5dd91?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Kashmir'
    },
    {
      image: 'https://images.unsplash.com/photo-1625826415766-001bd75aaf52?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Shillong'
    },
    {
      image: 'https://images.unsplash.com/photo-1719949122509-74d0a1d08b44?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Manali'
    },
    {
      image: 'https://images.unsplash.com/photo-1698430185962-cbbdc7797f5a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Goa'
    },
    {
      image: 'https://images.unsplash.com/photo-1736319286940-5379b582256b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Kanniyakumari'
    }
  ];

  return (
    <>
      <div className="min-h-screen pt-40 md:pt-0 px-4 md:px-20 bg-black text-white" id="explore">
        <div className="items-center justify-center flex flex-col " data-aos="fade-up">
          <h2 className="text-4xl bricolage-grotesque font-bold text-center ">Enjoy The Beauty Of The World</h2>
          <p className="text-lg md:text-3xl leading-8 font-bold text-center text-[#ffffff] mt-6">
            India
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {demo.map((item, index) => (
              <div
                key={index}
                className="w-72 h-96  overflow-hidden shadow-lg cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-600 hover:scale-125 hover:brightness-75"
                 
                />
                <p className="mt-2 text-xl font-bold"> {item.title}</p>
                <p className="flex items-center text-[#bebebe]">
                  <CiLocationOn className="mr-1" /> IN
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Place;
