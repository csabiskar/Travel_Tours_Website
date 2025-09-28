import React from 'react'
import bg from '../assets/paradise.jpg'

function Paradise() {
  return (
    <div
      className="h-[70vh] relative text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Top gradient overlay */} <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div> {/* Bottom gradient overlay */} <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative  z-10 flex flex-col items-start justify-center h-full pl-8 px-8 md:pl-20" data-aos="fade-up">
        <div className="backdrop-blur border border-white bg-black/40 p-6 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Explore the Best Paradises
          </h1>
          <p className="mt-4 text-lg max-w-xl">
            Discover breathtaking islands, serene valleys, and hidden gems around the world. Traveling through these paradises brings harmony, peace, and unforgettable comfort.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Paradise
