import Link from "next/link";
import React from "react";
import Image from "next/image";
import ProfilePic from "@/public/images/AD_Profile_Pic.jpg";

const about = () => {
  return (
    <section className='bg-white pt-16'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl '>
          Meet your trainer!
        </h1>
        <div className='pt-3'>
          <Image
            className='mx-auto h-80 object-cover rounded-3xl'
            src={ProfilePic}
            width={500}
            height={500}
            alt='Element'
            priority
          />
        </div>
        <p className='pt-5 mb-8 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 lg:px-48 '>
          I’m Adam, a fully qualified personal trainer with years of experience.
          I have a great passion for fitness and also for coaching. My goal is
          to guide you on your fitness journey and help you achieve your goals
          whether it be, the dream body you’ve always wanted, get you started on
          your fitness journey, improve sports performance, or begin living a
          healthy lifestyle. <br />
          <br />
          Join me on this journey of transformative fitness, where we prioritize{" "}
          <b>health, discipline, and success.</b>
        </p>
        <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0'>
          <Link
            href='/contact'
            className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 '
          >
            Get in contact
            <svg
              className='w-3.5 h-3.5 ms-2 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default about;
