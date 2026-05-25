"use client";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="w-full bg-black text-white pt-24 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Me
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-8">
            Have a project in mind? Let’s connect and discuss how I can
            help bring your ideas to life with modern web technologies.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-gradient-to-b from-[#071120] to-black border border-[#12305f] rounded-[35px] p-10 shadow-[0_0_30px_rgba(0,123,255,0.08)]">

            <h2 className="text-4xl font-bold mb-8">
              Get in touch today
            </h2>

            <p className="text-zinc-400 text-lg leading-8 mb-12">
              I’m always open to discussing new projects, creative ideas,
              collaborations, or opportunities to be part of your vision.
            </p>

            {/* Contact Info */}
            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full border border-[#184a91] flex items-center justify-center text-[#00ff99]">
                  <FaEnvelope size={20} />
                </div>

                <p className="text-lg text-zinc-300">
                  asma@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full border border-[#184a91] flex items-center justify-center text-[#00ff99]">
                  <FaPhoneAlt size={18} />
                </div>

                <p className="text-lg text-zinc-300">
                  +880 1234-567890
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full border border-[#184a91] flex items-center justify-center text-[#00ff99]">
                  <FaMapMarkerAlt size={20} />
                </div>

                <p className="text-lg text-zinc-300">
                  Bashundhara, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-gradient-to-b from-[#071120] to-black border border-[#12305f] rounded-[35px] p-10 shadow-[0_0_30px_rgba(0,123,255,0.08)]">

            <form className="space-y-8">

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-lg mb-3">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border border-[#184a91] rounded-2xl px-5 py-4 outline-none focus:border-[#00ff99] text-white"
                  />
                </div>

                <div>
                  <label className="block text-lg mb-3">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full bg-transparent border border-[#184a91] rounded-2xl px-5 py-4 outline-none focus:border-[#00ff99] text-white"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-lg mb-3">
                    Phone
                  </label>

                  <input
                    type="text"
                    placeholder="+880"
                    className="w-full bg-transparent border border-[#184a91] rounded-2xl px-5 py-4 outline-none focus:border-[#00ff99] text-white"
                  />
                </div>

                <div>
                  <label className="block text-lg mb-3">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Project Discussion"
                    className="w-full bg-transparent border border-[#184a91] rounded-2xl px-5 py-4 outline-none focus:border-[#00ff99] text-white"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-lg mb-3">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message here..."
                  className="w-full bg-transparent border border-[#184a91] rounded-2xl px-5 py-4 outline-none focus:border-[#00ff99] text-white resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0066ff] to-[#00ff99] py-5 rounded-2xl text-xl font-semibold hover:scale-[1.01] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        
        
      </div>
    </section>
  );
};

export default ContactMe;