import Image from 'next/image';
import team0img from '../public/1033-removebg-preview.png';
import girlCloth from '../public/girlPhoto.jpeg';
import blackCloth from '../public/morflax-studio-removebg-preview.png';
import blackTshirt from '../public/Isolated_black_t_shirt_opened-removebg-preview.png';

import { Roboto } from 'next/font/google';
import {
  Battery0Icon,
  Battery100Icon,
  Battery50Icon,
  BoltIcon,
} from '@heroicons/react/24/outline';
import CardCarousel from '@/components/corousel';

const roboto = Roboto({
  weight: '400',
  subsets: ['cyrillic'],
  // display: 'swap',
});

export default function Home() {
  const cards = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
    },
    {
      title: 'Card 4',
      description: 'Description for Card 4',
    },
    {
      title: 'Card 1',
      description: 'Description for Card 1',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
    },
    {
      title: 'Card 4',
      description: 'Description for Card 4',
    },
  ];

  return (
    <div className='bg-white flex flex-col'>
      <div className='w-11/12 bg-gray-100 mx-auto rounded-md mt-5 p-5 sm:p-10 md:p-20'>
        {/* Content in the first section */}
        <div className='mt-14 md:mt-10 flex-col md:flex-row flex'>
          <div className='w-full md:w-1/2'>
            <p className={`text-5xl sm:text-6xl ${roboto.className}`}>
              All your style <br />
              <span className={`text-orange-500 ${roboto.className}`}>
                Are Here
              </span>
            </p>
            <button className='bg-orange-400 opacity-90 p-4 sm:p-5 px-8 sm:px-10 rounded-md text-white mt-5 sm:mt-10 md:mt-20'>
              <p>Shop Now</p>
            </button>
          </div>
          <div className='w-full md:w-1/2'>
            <Image
              alt='team'
              src={team0img}
              style={{ objectFit: 'contain' }}
              className='bg-transparent'
              width={760}
              height={400}
            />
          </div>
          <div className='bg-orange-400 rounded-full blur-2xl h-48 w-36 mt-5 md:mt-10'>
            <ul className='z-10 text-black text-center'>
              <li>
                <p>Hello</p>
              </li>
              <li>
                <p>1233</p>
              </li>
              <li>
                <p>kHANNA</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Content in the second section */}
        <div className='bg-white opacity-70 p-6 py-10 shadow-md shadow-slate-500 w-full sm:w-10/12 rounded-lg flex mt-5 sm:mt-10 mx-auto'>
          <div className='mx-auto md:w-full'>
            <ul className='md:justify-around md:flex w-full text-black'>
              <p className='text-2xl sm:text-3xl md:text-base'>Quality</p>
              <p className='text-2xl sm:text-3xl md:text-base'>Quantity</p>
              <p className='text-2xl sm:text-3xl md:text-base'>Home Delivery</p>
              <p className='text-2xl sm:text-3xl md:text-base'>Easy Returns</p>
            </ul>
          </div>
        </div>
      </div>

      {/* Content in the third section */}
      <div className='relative bg-gray-200 opacity-70 py-10 p-10 shadow-md shadow-slate-500 rounded-lg mt-5 sm:mt-10 mx-auto w-10/12'>
        <p className='text-3xl sm:text-4xl text-center'>
          Our experience to always update the latest styles!
        </p>
        <div className='my-5 mx-auto flex justify-center'>
          <BoltIcon className='w-12 h-12 sm:w-20 sm:h-20' color='#FB923C' />
          <BoltIcon className='w-12 h-12 sm:w-20 sm:h-20' color='#FB923C' />
          <BoltIcon className='w-12 h-12 sm:w-20 sm:h-20' color='#FB923C' />
        </div>
        <Image
          alt='team'
          src={team0img}
          style={{ objectFit: 'cover' }}
          className='hidden md:block absolute md:-top-16 xs:-right-2 md:-right-28 w-72 h-72 rounded-full'
          // width={350}
          // height={350}
        />
      </div>

      {/* Content in the fourth section */}
      <div className='bg-gray-200 opacity-70 py-10 p-10 shadow-md shadow-slate-500 rounded-lg mt-5 sm:mt-10 mx-auto w-10/12'>
        <p className='text-xl sm:text-2xl text-center'>
          Treat yourself with love, light up your mood by shopping the latest
          trends!
        </p>
        <div className='flex justify-between mt-5 sm:mt-10'>
          <div>
            <Battery0Icon
              className='w-12 h-12 sm:w-20 sm:h-20'
              color='#FB923C'
            />
          </div>
          <div>
            <Battery50Icon
              className='w-12 h-12 sm:w-20 sm:h-20'
              color='#FB923C'
            />
          </div>
          <div>
            <Battery100Icon
              className='w-12 h-12 sm:w-20 sm:h-20'
              color='#FB923C'
            />
          </div>
        </div>
      </div>
      <div className='my-auto overflow-auto sm:mt-10 mx-auto w-10/12 py-10 '>
        <div className='mx-auto'>
          <div className='overflow-x-auto flex md:justify-around xs:justify-between py-10'>
            <div className='flex-none mx-2 shadow-lg hover:shadow-xl'>
              <div className='flex flex-col items-center'>
                <Image
                  alt='team'
                  src={team0img}
                  style={{ objectFit: 'contain' }}
                  className='w-56 h-56 md:w-64 md:h-64 bg-slate-500'
                  // width={350}
                  // height={350}
                />
                <div className='flex justify-between items-center w-full p-4'>
                  <p className='text-slate-900 text-md font-medium whitespace-nowrap overflow-x-auto w-32 mr-2'>
                    Denim Hoodie
                  </p>
                  <button className='bg-black hover:bg-orange-400 hover:shadow-lg opacity-90 p-2 px-5 text-xs rounded-md text-white'>
                    <p>BUY</p>
                  </button>
                </div>
                <p className='text-slate-900 text-md font-extrabold text-left self-start px-4 pb-4'>
                  $40
                </p>
              </div>
            </div>

            <div className='flex-none mx-2 shadow-lg hover:shadow-xl'>
              <div className='flex flex-col items-center'>
                <Image
                  alt='team'
                  src={team0img}
                  style={{ objectFit: 'contain' }}
                  className='w-56 h-56 md:w-64 md:h-64 bg-slate-500'
                  // width={350}
                  // height={350}
                />
                <div className='flex justify-between items-center w-full p-4'>
                  <p className='text-slate-900 text-md font-medium whitespace-nowrap overflow-x-auto w-32 mr-2'>
                    Denim Hoodie
                  </p>
                  <button className='bg-black hover:bg-orange-400 hover:shadow-lg opacity-90 p-2 px-5 text-xs rounded-md text-white'>
                    <p>BUY</p>
                  </button>
                </div>
                <p className='text-slate-900 text-md font-extrabold text-left self-start px-4 pb-4'>
                  $40
                </p>
              </div>
            </div>
            <div className='flex-none mx-2 shadow-lg hover:shadow-xl'>
              <div className='flex flex-col items-center'>
                <Image
                  alt='team'
                  src={team0img}
                  style={{ objectFit: 'contain' }}
                  className='w-56 h-56 md:w-64 md:h-64 bg-slate-500'
                  // width={350}
                  // height={350}
                />
                <div className='flex justify-between items-center w-full p-4'>
                  <p className='text-slate-900 text-md font-medium whitespace-nowrap overflow-x-auto w-32 mr-2'>
                    Denim Hoodie
                  </p>
                  <button className='bg-black hover:bg-orange-400 hover:shadow-lg opacity-90 p-2 px-5 text-xs rounded-md text-white'>
                    <p>BUY</p>
                  </button>
                </div>
                <p className='text-slate-900 text-md font-extrabold text-left self-start px-4 pb-4'>
                  $40
                </p>
              </div>
            </div>
            <div className='flex-none mx-2 shadow-lg hover:shadow-xl'>
              <div className='flex flex-col items-center'>
                <Image
                  alt='team'
                  src={team0img}
                  style={{ objectFit: 'contain' }}
                  className='w-56 h-56 md:w-64 md:h-64 bg-slate-500'
                  // width={350}
                  // height={350}
                />
                <div className='flex justify-between items-center w-full p-4'>
                  <p className='text-slate-900 text-md font-medium whitespace-nowrap overflow-x-auto w-32 mr-2'>
                    Denim Hoodie
                  </p>
                  <button className='bg-black hover:bg-orange-400 hover:shadow-lg opacity-90 p-2 px-5 text-xs rounded-md text-white'>
                    <p>BUY</p>
                  </button>
                </div>
                <p className='text-slate-900 text-md font-extrabold text-left self-start px-4 pb-4'>
                  $40
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='overflow-visible relative max-w-sm mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center dark:bg-slate-800 dark:highlight-white/5'>
        <Image
          alt='team'
          src={team0img}
          style={{ objectFit: 'contain' }}
          className='absolute -left-6 w-24 h-24 rounded-full shadow-lg bg-black'
          // width={760}
          // height={400}
        />
        <div className='flex flex-col py-5 pl-24'>
          <strong className='text-slate-900 text-sm font-medium '>
            Andrew Alfred
          </strong>
          <span className='text-slate-500 text-sm font-medium dark:text-slate-400'>
            Technical advisor
          </span>
        </div>
      </div> */}

      {/* Content in the fifth section */}
      <div className='flex items-center justify-center mt-5 sm:mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
          <div className='bg-blue-200 p-4 rounded-lg shadow-lg'>
            <p className='text-lg sm:text-xl font-semibold truncate'>
              Buy for your business!
            </p>
          </div>
          <div className='bg-green-200 p-4 rounded-lg shadow-lg'>
            <p className='text-lg sm:text-xl font-semibold truncate'>
              Buy for yourself!
            </p>
          </div>
          <div className='bg-yellow-200 p-4 rounded-lg shadow-lg'>
            <p className='text-lg sm:text-xl font-semibold truncate'>
              Quality in an affordable price!
            </p>
          </div>
          <div className='bg-blue-200 p-4 rounded-lg shadow-lg'>
            <p className='text-lg sm:text-xl font-semibold truncate'>
              Top-class customer experience!
            </p>
          </div>
          <div className='bg-green-200 p-4 rounded-lg shadow-lg'>
            <p className='text-lg sm:text-xl font-semibold truncate'>
              Trend creators and quick trend adaptability!
            </p>
          </div>
          <div className='bg-yellow-200 p-4 rounded-lg shadow-lg'>
            <p className='text-lg sm:text-xl font-semibold truncate'>
              In-House manufacturing!
            </p>
          </div>
        </div>
      </div>
      <div className='md:relative w-11/12 xs:flex-col md:flex-row md:flex items-center justify-around mx-auto mt-5 sm:mt-10 py-10 p-4'>
        <div className='md:relative w-full md:w-2/5'>
          <Image
            alt='team'
            src={girlCloth}
            style={{ objectFit: 'cover' }}
            className='bg-transparent w-3/5 mx-auto'
            // width={600}
            // height={200}
          />
          <Image
            alt='team'
            src={girlCloth}
            style={{ objectFit: 'cover' }}
            className='hidden md:block bg-transparent absolute left-96 top-44 border-4 border-white'
            width={210}
            // height={150}
          />
        </div>

        <div className='w-full md:w-2/5 md:mr-10 mt-10 md:mt-0'>
          <p className='text-xl md:text-4xl lg:text-6xl mb-5 md:mb-20'>
            Why choose us?
          </p>
          <p>
            Discover the essence of style with our clothing brand. We blend
            fashion trends with unmatched quality, offering you an exclusive
            wardrobe that defines your uniqueness. Elevate your everyday look
            and shop with confidence, knowing that you're choosing a brand
            committed to your style, comfort, and individuality. Experience
            fashion redefined with us.
          </p>
          <button className='bg-orange-400 opacity-90 p-4 sm:p-5 px-8 sm:px-10 rounded-md text-white mt-5 sm:mt-10 md:mt-20 md:ml-10'>
            <p>Order Now</p>
          </button>
        </div>
      </div>
    </div>
  );
}
