import Image from 'next/image';
import team0img from '../public/1033-removebg-preview.png';
import blackCloth from '../public/morflax-studio-removebg-preview.png';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['cyrillic'],
  // display: 'swap',
});

export default function Home() {
  return (
    <div className='h-screen w-screen flex'>
      <div className='w-11/12 bg-gray-100 mx-auto rounded-md mt-10 p-20'>
        {/* <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-lg p-8 shadow-md'>
            <h1 className='text-3xl font-semibold mb-4 text-slate-800'>
              Welcome to Our Website
            </h1>
            <p className='text-gray-600 mb-6'>
              We provide top-quality services to meet all your needs. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className='bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600'>
              Learn More
            </button>
          </div>
        </div> */}
        <div className='flex'>
          <div className='mt-40'>
            <p className={`text-7xl leading-tight ${roboto.className}`}>
              All your style
              <br />
              <p className={`text-orange-500 text-7xl ${roboto.className}`}>
                Are Here
              </p>
            </p>
          </div>
          <div>
            <Image
              alt='team'
              src={team0img}
              style={{ objectFit: 'contain' }}
              className='bg-transparent'
              width={760}
              height={400}
              // className='h-4'
              // layout='fill'
            />
          </div>
          <div className='bg-orange-400 rounded-full blur-2xl h-70 w-40 mt-60'>
            <li>
              <p className='text-black'>Hello</p>
              <p className='relative'>1233</p>
              <p>kHANNA</p>
            </li>
          </div>
        </div>
        <div>
          <button className='bg-orange-400 opacity-90 p-5 px-10 rounded-md text-white'>
            <p>Shop Now</p>
          </button>
        </div>
        <div className='bg-gray-100 opacity-70 p-6 py-10 shadow-md shadow-slate-500 w-10/12 rounded-lg flex mt-20 mx-auto'>
          <div className='w-full flex'>
            <div className='w-full'>
              <ul className='flex space-x-2 justify-around text-black'>
                <li>
                  <p>Quality</p>
                </li>
                <li>
                  <p>Quantity</p>
                </li>
                <li>
                  <p>Home Delivery</p>
                </li>
                <li>
                  <p>Easy Returns</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
