"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const initialValues = {
  name: "",
  email: "",
  message: "",
};

const contact = () => {
  const [emailData, setEmailData] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  const handleEmailSend = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/send", {
        name: emailData.name,
        email: emailData.email,
        message: emailData.message,
      })
      .then((res) => {
        console.log(res);
        toast.success("Mail sent, I will be in touch soon!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong, try again soon!");
      });
  };

  return (
    <>
      <section className='bg-white pt-12'>
        <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 '>
            Contact
          </h2>
          <p className='mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl'>
            Get in touch! <br />
            Tell me a bit about yourself and your goals and I will get back to
            you!
          </p>
          <form action='#' className='space-y-8' onSubmit={handleEmailSend}>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 '
                placeholder='example@gmail.com'
                required
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor='Name'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Name
              </label>
              <input
                type='text'
                id='Name'
                name='name'
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 '
                placeholder='Youre Name...'
                required
                onChange={handleInputChange}
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Your message
              </label>
              <textarea
                id='message'
                name='message'
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 '
                placeholder='Tell me a bit about yourself...'
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button
              type='submit'
              onClick={handleEmailSend}
              className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default contact;
