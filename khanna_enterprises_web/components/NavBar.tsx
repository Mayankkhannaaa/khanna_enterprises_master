import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-gray-100 opacity-70 p-6 shadow-md shadow-slate-500 fixed top-3 left-1/2 transform -translate-x-1/2 w-2/3 rounded-lg flex justify-center'>
      <div className='w-full flex'>
        <div className='fixed'>
          <p className='pr-4 text-black'>Khanna Ent</p>
        </div>
        <div className='mx-auto'>
          <ul className='flex space-x-8 text-black'>
            <li>
              <Link href='/' className='hover:text-gray-300'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' className='hover:text-gray-300'>
                About
              </Link>
            </li>
            <li>
              <Link href='/services' className='hover:text-gray-300'>
                Services
              </Link>
            </li>
            <li>
              <Link href='/contact' className='hover:text-gray-300'>
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
