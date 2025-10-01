'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import myImage from '../../../public/unsplash_wKOKidNT14w.svg';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineEmail, MdOutlineLocalPhone } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setResponseMsg(result.message);

      if (result.success) {
        setFormData({
          name: '',
          email: '',
          location: '',
          budget: '',
          subject: '',
          message: '',
        });
      }
    } catch (err) {
      setResponseMsg('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1170px] mx-auto my-[120px] px-4 md:px-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left">
          <h1 data-aos="fade-down" className="text-[32px] sm:text-[34px] md:text-[38px] font-[600] text-mainHeadingColor leading-tight md:leading-[60px]">
            Let’s discuss your Project
          </h1>
          <p data-aos="fade-down" className="text-[16px] font-[400] text-subHeadingColor max-w-[600px]">
            Have an idea in mind or need a stunning website design? I’d love to hear about your project goals and how I can bring your vision to life through clean, user-focused design.
          </p>

          <div data-aos="fade-up" className="flex flex-col gap-[30px] justify-center w-full py-[30px]">
            {[
              {
                label: 'Address',
                value: 'University Chowk, Bahawalpur',
                icon: <CiLocationOn className="h-[30px] w-[30px] fill-white" />,
              },
              {
                label: 'Email',
                value: 'malikmustansarhussain7766@gmail.com',
                icon: <MdOutlineEmail className="h-[30px] w-[30px] fill-white" />,
              },
              {
                label: 'Call me now',
                value: '+923115170829',
                icon: <MdOutlineLocalPhone className="h-[30px] w-[30px] fill-white" />,
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-5 items-center">
                <div className="bg-buttonColors p-[10px] rounded-[5px]">{item.icon}</div>
                <div className="flex flex-col justify-center text-left">
                  <p className="text-[14px] sm:text-[16px] text-subHeadingColor">{item.label}</p>
                  <h1 className="text-[14px] sm:text-[16px] font-[600] text-mainHeadingColor">{item.value}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full">
          <form onSubmit={handleSubmit} data-aos="fade-left" className="bg-white rounded-[20px] p-6 space-y-4">
            <p className="text-[16px] font-[400] text-subHeadingColor max-w-[600px]">
              Tell me a bit about your project — I’d love to understand your goals and how we can bring your vision to life through thoughtful, modern design.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                autoFocus
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border-b-2 border-buttonColors focus:border-buttonColors outline-none text-buttonColors placeholder:text-buttonColors text-[16px] font-[400] transition duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-b-2 border-transparent focus:border-buttonColors outline-none text-buttonColors placeholder:text-buttonColors text-[16px] font-[400] transition duration-300"
              />
              <input
                type="text"
                name="location"
                placeholder="Location *"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border-b-2 border-transparent focus:border-buttonColors outline-none text-buttonColors placeholder:text-buttonColors text-[16px] font-[400] transition duration-300"
              />
              <input
                type="text"
                name="budget"
                placeholder="Budget *"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-3 border-b-2 border-transparent focus:border-buttonColors outline-none text-buttonColors placeholder:text-buttonColors text-[16px] font-[400] transition duration-300"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border-b-2 border-transparent focus:border-buttonColors outline-none text-buttonColors placeholder:text-buttonColors text-[16px] font-[400] transition duration-300"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border-b-2 border-transparent focus:border-buttonColors outline-none text-buttonColors placeholder:text-buttonColors text-[16px] font-[400] transition duration-300 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-buttonColors hover:bg-opacity-90 text-white py-4 px-10 rounded-[8px] font-medium transition-all w-full"
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>

            {responseMsg && (
              <p className="text-center text-[14px] mt-2 text-subHeadingColor">{responseMsg}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
