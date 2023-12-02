import { NextPage } from 'next';
import Link from 'next/link';
import ServicePage from '../../public/woman-tailor-working-sewing-factory.jpg';
import Image from 'next/image';

interface ServicesPageProps {
  // Define any props specific to the Services page here
}

const ServicesPage: NextPage<ServicesPageProps> = () => {
  return (
    <div className='bg-gradient-to-bl from-red-400 to-blue-600 text-white flex flex-col'>
      <div className='w-11/12  mx-auto rounded-md mt-20 md:mt-5 p-5 sm:p-10 md:p-20'>
        <h1 className='text-center text-xl mb-6'>Our Services</h1>
        <div className='flex flex-col md:flex-row md:space-x-8 justify-around'>
          <div className='md:w-1/2'>
            <p className='leading-relaxed mb-6'>
              At our company, we take pride in providing exceptional services to
              our customers. Whether you're looking for bulk orders or custom
              solutions, we've got you covered.
            </p>
            <p className='leading-relaxed mb-6'>
              Our team is dedicated to meeting your specific requirements and
              ensuring a seamless experience. We specialize in bulk orders and
              welcome custom orders with minimum quantity requirements.
            </p>
            <p className='leading-relaxed mb-6'>
              With our commitment to quality and flexibility, we aim to exceed
              your expectations and deliver products tailored to your needs.
            </p>
          </div>
          <div className='md:w-1/3'>
            <Image
              src={ServicePage} // Replace with the URL of your services image
              alt='Services'
              className='w-full h-auto rounded-lg shadow-lg mb-8 text-center'
            />
          </div>
        </div>
        <div className='mt-10'>
          <p className='mb-6'>
            Ready to place an order?{' '}
            <Link href='/contact'>
              <p className='underline'>Contact us</p>
            </Link>{' '}
            and let us know your requirements. We look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
