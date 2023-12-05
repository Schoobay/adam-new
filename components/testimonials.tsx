import Image from "next/image";
import TestimonialImage1 from "@/public/images/testimonial-img-1.jpg";
import TestimonialImage2 from "@/public/images/testimonial-img-2.jpg";

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
            <div className='relative flex items-start border-2 border-gray-200 rounded bg-white mb-10'>
              {/* Testimonial */}
              <div className='text-center px-4 py-8 pt-20 mx-4 md:mx-0'>
                <div className='absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2'>
                  <Image
                    className='relative rounded-full'
                    src={TestimonialImage1}
                    width={90}
                    height={90}
                    alt='Testimonial 01'
                  />
                </div>
                <blockquote className='text-lg font-medium mb-4'>
                  “ Working with Adam changed my life, I came to Adam insecure,
                  overweight, unfit and absolutely zero confidence. He helped me
                  with my anxiety about going to the gym and turned it into my
                  second home. I'm stronger, I'm fitter, im confident and most
                  importantly I'm Healthy. He doesn't just help change your
                  physical appearance, He helps you to become mentally strong
                  and helps you fall in love with the gym, and works hard to
                  keep you motivated. "Changed my life" may sound over the top,
                  but I'm Healthier, I'm physically Stronger and Mentally
                  Stronger, and that's what makes it life changing. I couldn't
                  recommend him Highly enough. I can't wait to see what the
                  future brings.“
                </blockquote>
                <cite className='block font-bold text-lg not-italic mb-1'>
                  Ryan Coleman
                </cite>
              </div>
            </div>
            <div className='relative flex items-start border-2 border-gray-200 rounded bg-white'>
              {/* Testimonial */}
              <div className='text-center px-12 py-8 pt-20 mx-4 md:mx-0'>
                <div className='absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2'>
                  <Image
                    className='relative rounded-full w-[90px] h-[90px] object-cover'
                    src={TestimonialImage2}
                    width={90}
                    height={90}
                    alt='Testimonial 01'
                  />
                </div>
                <blockquote className='text-xl font-medium mb-4'>
                  “ Choosing Adam as my personal trainer has been one of my best
                  decisions to date. I've lost weight, gained muscle and
                  developed healthier habits. I couldn't have done this without
                  Adam's support and guidance. Thanks for pushing me to be the
                  best version of myself“
                </blockquote>
                <cite className='block font-bold text-lg not-italic mb-1'>
                  Reuben Murphy
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
