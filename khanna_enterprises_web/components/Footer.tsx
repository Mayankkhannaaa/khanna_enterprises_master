import Link from 'next/link';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <footer className='bg-white shadow py-8'>
        <div className='container mx-auto'>
          <div className='flex md:flex-row md:justify-between flex-col items-center md:gap-0 gap-y-4 md:px-0 px-4'>
            <Link href='/' title='Khanna Enterprises'></Link>
            <p className='text-black'>
              © {year} Khanna Enterprises, All Right Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
