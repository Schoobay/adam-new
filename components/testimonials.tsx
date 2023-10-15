import Image from "next/image";
import TestimonialImage from "@/public/images/testimonial.jpg";

export default function Testimonials() {
  return (
    <section className='relative'>
      {/* Illustration behind content */}
      <div
        className='absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32'
        aria-hidden='true'
      >
        <svg
          width='1760'
          height='518'
          viewBox='0 0 1760 518'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              x1='50%'
              y1='0%'
              x2='50%'
              y2='100%'
              id='illustration-02'
            >
              <stop stopColor='#FFF' offset='0%' />
              <stop stopColor='#EAEAEA' offset='77.402%' />
              <stop stopColor='#DFDFDF' offset='100%' />
            </linearGradient>
          </defs>
          <g
            transform='translate(0 -3)'
            fill='url(#illustration-02)'
            fillRule='evenodd'
          >
            <circle cx='1630' cy='128' r='128' />
            <circle cx='178' cy='481' r='40' />
          </g>
        </svg>
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          {/* Section header */}

          {/* Items */}
          <div className='max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5'>
            {/* Item */}

            {/* Item */}
            <div className='flex items-center justify-center py-2 col-span-2 md:col-auto'></div>
          </div>

          {/* Testimonials */}
          <div className='max-w-3xl mx-auto mt-20' data-aos='zoom-y-out'>
            <div className='relative flex items-start border-2 border-gray-200 rounded bg-white'>
              {/* Testimonial */}
              <div className='text-center px-12 py-8 pt-20 mx-4 md:mx-0'>
                <div className='absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2'>
                  <Image
                    className='relative rounded-full'
                    src={TestimonialImage}
                    width={96}
                    height={96}
                    alt='Testimonial 01'
                  />
                </div>
                <blockquote className='text-xl font-medium mb-4'>
                  “ Working with Adam has been a game-changer for me. I'm
                  fitter, stronger, and more motivated than ever before. Highly
                  recommended!“
                </blockquote>
                <cite className='block font-bold text-lg not-italic mb-1'>
                  Sarah M.
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
