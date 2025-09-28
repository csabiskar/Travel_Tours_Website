import React from 'react'
import Img from '../assets/contact.jpg'

function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 md:px-20 py-20" id="contact">
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-6xl" data-aos="fade-up">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={Img}
            alt="Travel Contact"
            className="rounded-lg shadow-lg w-full h-1/3 object-cover"
            loading="lazy"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-8">Start Your Journey</h2>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
