'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Icons() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_ra6yfwf', 'template_c6c5m0m', form.current, {
        publicKey: 'cGZORiRq9dQog-bA6',
      })
      .then(
        () => {
          setLoading(false);
          setMessageSent(true);
          form.current.reset();
          setTimeout(() => setMessageSent(false), 3000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section className="bg-[#f2f4f6] p-2  font-semibold ">
      <div className="max-w-7xl mx-auto">
        {/* Combined Contact Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 ">
          <h3 className="text-3xl font-bold mb-12 text-gray-800 text-center">Get In Touch</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-gray-800">Contact Information</h4>
              <div className="space-y-4">
                {/* Email */}
                <div className="min-w-[330px] flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <AiTwotoneMail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a 
                      href="mailto:leylagahramanova13@gmail.com" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      leylagahramanova13@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="min-w-[330px] flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="bg-green-100 p-3 rounded-full">
                    <AiOutlinePhone size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a 
                      href="tel:+994518640113" 
                      className="text-green-600 hover:text-green-800 font-medium"
                    >
                      +994518640113
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="min-w-[330px] flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <AiOutlineGithub size={24} className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">GitHub</p>
                    <a 
                      href="https://github.com/leylagahramanova" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 font-medium"
                    >
                      github.com/leylagahramanova
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="min-w-[330px] flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <AiFillLinkedin size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/leyla-gahramanova-124918262/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Leyla Gahramanova
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 md:pl-5">
              <h4 className="text-xl font-bold mb-6 text-gray-800">Send Message</h4>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="border border-gray-300 rounded-xl h-12 px-5 w-full outline-none focus:ring-2 focus:ring-[#103e65] focus:border-[#103e65] transition"
                />
                
                <textarea
                  name="message"
                  placeholder="About Your Project"
                  rows="8"
                  required
                  className="border border-gray-300 rounded-xl px-5 py-4 w-full outline-none focus:ring-2 focus:ring-[#103e65] focus:border-[#103e65] transition resize-none"
                ></textarea>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`uppercase border-2 px-10 py-3 rounded-xl font-medium transition-all duration-300 w-full sm:w-auto tracking-wide
                      ${loading 
                        ? 'bg-gray-400 border-gray-400 text-white cursor-not-allowed'
                        : 'bg-[#103e65] border-[#103e65] text-white hover:bg-[#f85508] hover:border-[#f85508]'
                      }`}
                  >
                    {loading ? 'Sending...' : 'Submit'}
                  </button>

                  {messageSent && (
                    <span className="text-green-600 text-sm animate-fadeIn">
                      ✅ Message sent successfully!
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
