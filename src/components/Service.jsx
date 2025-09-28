import React from 'react'

function Service() {

    const services = [
        {
            title: "Flight Bookings",
            Img: "https://images.unsplash.com/photo-1720134906003-59e4a1c77bc3?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Visa Assistance",
            Img: "https://images.unsplash.com/photo-1596456838897-5ce4c2e86d04?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Customized Tour Packages",
            Img: "https://images.unsplash.com/photo-1655835586076-997a8e1eca59?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Adventure Activities",
            Img: "https://images.unsplash.com/flagged/photo-1557806856-73584969d0c5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

  return (
    <>
    
    <div className="min-h-screen pt-40 md:pt-0 px-4 md:px-20 bg-black text-white">
        <div className="md:p-8" data-aos="fade-up">
            <p className="text-lg md:text-3xl leading-8 font-bold text-center text-[#ffffff] mt-6">
                Our Services
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="w-full h-auto  overflow-hidden shadow-lg cursor-pointer"
                        data-aos="zoom-in"
                data-aos-delay="100"
                    >
                        <img
                            src={item.Img}
                            alt={item.title}
                            className="w-full h-80 object-cover transition-transform duration-600 hover:scale-105 hover:brightness-75"
                        />
                        <p className="mt-2 text-xl font-bold"> {item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>  
    
    </>
  )
}

export default Service