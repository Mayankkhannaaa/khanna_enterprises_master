import Image from 'next/image';
import girlCloth from '../../../public/girlPhoto.jpeg';

export default function Product({ params }: { params: { productID: string } }) {
  return (
    <div className='bg-white flex flex-col'>
      <div className='w-11/12 bg-gray-100 mx-auto rounded-md mt-20 md:mt-5 p-5 sm:p-10 md:p-20'>
        <div className='container mx-auto p-4'>
          <div className='md:flex'>
            <div className='md:w-1/2 pr-8'>
              <Image
                src={girlCloth} // Replace with the URL of your product image
                alt='Product'
                className='w-full rounded-lg shadow-lg'
              />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-2xl font-semibold mb-4'>
                Product Name : {params.productID}
              </h1>
              <p className='text-gray-600 mb-4'>
                Product Description goes here.
              </p>
              <p className='text-2xl text-red-500 font-semibold mb-4'>$99.99</p>

              <div className='mb-4'>
                <label htmlFor='quantity' className='block text-gray-600'>
                  Quantity:
                </label>
                <input
                  type='number'
                  id='quantity'
                  name='quantity'
                  className='w-20 px-2 py-1 border border-gray-400 rounded focus:outline-none'
                  defaultValue='1'
                />
              </div>

              <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-4'>
                Add to Cart
              </button>
              <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
