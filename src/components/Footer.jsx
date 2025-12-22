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
    <section className="p-5 font-semibold">
      <div className="max-w-7xl mx-auto">
        {/* Combined Contact Section */}
        <div className="glass shadow-2xl rounded-3xl p-8 md:p-12 border border-white/50">
          <h3 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center">
            Get In Touch
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <h4 className="text-2xl font-bold mb-8 text-slate-800">Contact Information</h4>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 border border-indigo-100 hover:shadow-md">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-xl shadow-lg">
                    <AiTwotoneMail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">Email</p>
                    <a 
                      href="mailto:leylagahramanova13@gmail.com" 
                      className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
                    >
                      leylagahramanova13
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border border-green-100 hover:shadow-md">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl shadow-lg">
                    <AiOutlinePhone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">Phone</p>
                    <a 
                      href="tel:+994518640113" 
                      className="text-green-600 hover:text-green-800 font-semibold transition-colors"
                    >
                      +994518640113
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl hover:from-slate-100 hover:to-gray-100 transition-all duration-300 border border-slate-200 hover:shadow-md">
                  <div className="bg-gradient-to-br from-slate-600 to-gray-700 p-3 rounded-xl shadow-lg">
                    <AiOutlineGithub size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">GitHub</p>
                    <a 
                      href="https://github.com/leylagahramanova" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-slate-900 font-semibold transition-colors"
                    >
                     leylagahramanova
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-blue-100 hover:shadow-md">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg">
                    <AiFillLinkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/leyla-gahramanova-124918262/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                      Leyla Gahramanova
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h4 className="text-2xl font-bold mb-8 text-slate-800">Send Message</h4>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="border-2 border-indigo-200 rounded-xl h-14 px-5 w-full outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400 font-medium hover:border-indigo-300"
                />
                
                <textarea
                  name="message"
                  placeholder="About Your Project"
                  rows="8"
                  required
                  className="border-2 border-indigo-200 rounded-xl px-5 py-4 w-full outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm text-slate-700 placeholder-slate-400 font-medium hover:border-indigo-300"
                ></textarea>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`uppercase border-2 px-10 py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto tracking-wide shadow-lg transform hover:scale-105 hover:shadow-xl
                      ${loading 
                        ? 'bg-gray-400 border-gray-400 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-indigo-600 via-sky-600 to-blue-500 border-transparent text-white hover:from-indigo-700 hover:via-sky-700 hover:to-blue-600'
                      }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                        Sending...
                      </span>
                    ) : (
                      'Submit'
                    )}
                  </button>

                  {messageSent && (
                    <span className="text-green-600 text-sm font-medium animate-fadeIn flex items-center gap-2">
                      <span className="text-lg">✅</span>
                      Message sent successfully!
                    </span>
                  )}
                </div>
              </form>

            </div>
          </div>
        </div>

      </div>

      
    </section>
  );
}
