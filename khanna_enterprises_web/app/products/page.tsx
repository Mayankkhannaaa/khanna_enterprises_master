import Link from 'next/link';
import Image from 'next/image';
import girlCloth1 from '../../public/girlPhoto.jpeg';

const products = [
  {
    id: '1',
    name: 'Product 1',
    price: 99.99,
    image: girlCloth1,
    description: 'Description for Product 1.',
  },
  {
    id: '2',
    name: 'Product 2',
    price: 79.99,
    image: girlCloth1,
    description: 'Description for Product 2.',
  },
  {
    id: '3',
    name: 'Product 3',
    price: 119.99,
    image: girlCloth1,
    description: 'Description for Product 3.',
  },
  {
    id: '3',
    name: 'Product 3',
    price: 119.99,
    image: girlCloth1,
    description: 'Description for Product 3.',
  },
  {
    id: '3',
    name: 'Product 3',
    price: 119.99,
    image: girlCloth1,
    description: 'Description for Product 3.',
  },
  {
    id: '3',
    name: 'Product 3',
    price: 119.99,
    image: girlCloth1,
    description: 'Description for Product 3.',
  },
  {
    id: '3',
    name: 'Product 3',
    price: 119.99,
    image: girlCloth1,
    description: 'Description for Product 3.',
  },
];

const ProductPage = () => {
  return (
    <div className='bg-white flex flex-col'>
      <div className='w-11/12 bg-gray-100 mx-auto rounded-md mt-20 md:mt-5 p-5 sm:p-10 md:p-20'>
        <h1 className='text-center text-3xl font-semibold mb-10'>
          Our Products
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className='bg-white p-6 rounded-md shadow-md hover:shadow-lg transition'>
                <Image
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className='h-40 object-contain mb-4 rounded-md'
                />
                <h2 className='text-lg font-semibold mb-2'>{product.name}</h2>
                <p className='text-gray-600 mb-4'>{product.description}</p>
                <p className='text-2xl text-red-500 font-semibold'>
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
