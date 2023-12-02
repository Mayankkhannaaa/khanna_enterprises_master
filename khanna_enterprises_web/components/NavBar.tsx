'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className='bg-white md:opacity-70 p-6 shadow-md shadow-slate-500 z-10 fixed top-3 left-1/2 transform -translate-x-1/2 w-10/12 rounded-lg flex justify-center'>
      <div className={`w-full md:flex`}>
        <div className={`w-full flex justify-between md:fixed`}>
          <div className='md:fixed '>
            <p className='pr-4 text-black'>Khanna Ent</p>
          </div>
          <button
            className='md:hidden block rounded text-black hover:text-gray-300'
            onClick={() => setMenuVisible(!menuVisible)}
          >
            {menuVisible ? (
              <XMarkIcon className='w-6 h-6' color='red' />
            ) : (
              <Bars3Icon className='w-6 h-6' color='#FB923C' />
            )}
          </button>
        </div>
        <div
          className={`mx-auto ${
            menuVisible ? 'block' : 'hidden'
          } mt-10 md:mt-0 md:block bg-slate-300 md:bg-inherit rounded-md p-2 md:p-0`}
        >
          <ul
            className={`
            md:flex space-y-2 md:space-y-0 md:space-x-8 text-black`}
          >
            <li>
              <Link href='/' className='hover:text-orange-400'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' className='hover:text-orange-400'>
                About
              </Link>
            </li>
            <li>
              <Link href='/products' className='hover:text-orange-400'>
                Produts
              </Link>
            </li>
            <li>
              <Link href='/services' className='hover:text-orange-400'>
                Services
              </Link>
            </li>
            <li>
              <Link href='/contact' className='hover:text-orange-400'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
