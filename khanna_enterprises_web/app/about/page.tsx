import { NextPage } from 'next';
import Link from 'next/link';
import AboutUs from '../../public/best-about-us-pages.jpg';
import Image from 'next/image';

interface AboutUsPageProps {
  // Define any props specific to the About Us page here
}

const AboutUsPage: NextPage<AboutUsPageProps> = () => {
  return (
    <div className='bg-gradient-to-bl from-orange-400 to-blue-600 text-white flex flex-col '>
      <div className='w-11/12 mx-auto rounded-md mt-20 md:mt-5 p-5 sm:p-10 md:p-20'>
        <h1 className='text-center text-xl mb-6'>
          Know more about the Business
        </h1>
        <div className='flex flex-col md:flex-row md:space-x-8'>
          <div className='md:w-1/2'>
            <Image
              src={AboutUs} // Replace with your actual image URL
              alt='About Us'
              className='w-full h-auto rounded-md shadow-lg mb-8'
            />
          </div>
          <div className='md:w-1/2'>
            <p className='leading-relaxed mb-6'>
              We are a passionate team committed to bringing you the latest and
              most relevant information across a variety of topics. Our mission
              is to inspire, educate, and entertain our audience through
              engaging content.
            </p>
            <p className='leading-relaxed mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget tortor eget ipsum interdum laoreet nec sit amet dolor.
              Vestibulum in malesuada ipsum. Praesent tristique commodo dolor,
              at convallis est hendrerit vel.
            </p>
            <p className='leading-relaxed mb-6'>
              Phasellus eleifend sagittis turpis, a tempus justo euismod vel.
              Sed efficitur vestibulum felis, vel tristique mauris tincidunt
              vel. Nunc volutpat, ex non facilisis accumsan, felis arcu
              efficitur tortor, in vehicula elit mi eu sapien.
            </p>
          </div>
        </div>
        <div className='mt-10'>
          <p className='mb-6'>
            Curious to learn more?{' '}
            <Link href='/contact'>
              <p className='underline'>Contact us</p>
            </Link>{' '}
            for further inquiries. We look forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
