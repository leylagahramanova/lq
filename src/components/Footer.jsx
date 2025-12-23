'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

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
    <section className="px-4 pt-2 sm:px-5 sm:pt-2 font-semibold">
      <div className="max-w-7xl mx-auto">
        {/* Combined Contact Section */}
        <div className="glass shadow-2xl rounded-3xl p-8 md:p-12 border border-white/50">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-slate-50 text-center">
            Get In Touch
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div>
              <h4 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-slate-50">Contact Information</h4>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex flex-wrap items-center gap-4 p-5 bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors duration-200 border border-slate-700">
                  <div className="bg-blue-900 p-3 rounded-xl shadow-sm">
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
                <div className="flex flex-wrap items-center gap-4 p-5 bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors duration-200 border border-slate-700">
                  <div className="bg-blue-900 p-3 rounded-xl shadow-sm">
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
                <div className="flex  flex-wrap items-center gap-4 p-5 bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors duration-200 border border-slate-700">
                  <div className="bg-blue-900 p-3 rounded-xl shadow-sm">
                    <AiOutlineGithub size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">GitHub</p>
                    <a
                      href="https://github.com/leylagahramanova"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800  font-semibold transition-colors"
                    >
                      leylagahramanova
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-wrap items-center gap-4 p-5 bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors duration-200 border border-slate-700">
                  <div className="bg-blue-900 p-3 rounded-xl shadow-sm">
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
              <h4 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text">Send Message</h4>
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
                    className={`uppercase border-2 px-10 py-4 rounded-xl font-semibold transition-all duration-200 w-full sm:w-auto tracking-wide shadow-sm
                      ${loading
                        ? 'bg-gray-400 border-gray-400 text-white cursor-not-allowed'
                        : 'bg-blue-900 border-blue-900 text-white hover:bg-blue-800'
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
                    <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm font-medium animate-fadeIn">
                      <span className="flex items-center gap-2 rounded-full border border-emerald-500/70 bg-slate-900/90 px-4 py-2 text-emerald-200 shadow-sm">
                        <AiOutlineCheckCircle className="h-4 w-4 text-emerald-400" />
                        <span>Message sent successfully</span>
                      </span>
                    </div>
                  )}
                </div>
              </form>

            </div>
          </div>
        
        </div>
        <div className="flex items-center justify-center pt-2 ">
            <p className="text-slate-500 text-sm font-medium">
              © 2025 Designed & Developed by <span className="font-semibold text-indigo-600">Leyla Gahramanova</span>
            </p>
          </div>
      </div>


    </section>
  );
}
