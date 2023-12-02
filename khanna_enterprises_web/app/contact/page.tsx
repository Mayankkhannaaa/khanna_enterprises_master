'use client';
import { NextPage } from 'next';
import { useState } from 'react';

interface ContactUsPageProps {
  // Define any props specific to the Contact Us page here
}

const ContactUsPage: NextPage<ContactUsPageProps> = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handler for form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission (not functional in this example)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission logic here (e.g., send data to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className='bg-gradient-to-bl from-green-400 to-blue-600 text-white flex flex-col h-screen'>
      <div className='w-11/12 mx-auto rounded-md mt-20 md:mt-5 p-5 sm:p-10 md:p-20'>
        <h1 className='text-center text-xl'>Contact Us</h1>
        <div className='mt-10 w-11/12 md:w-2/3 mx-auto'>
          <form onSubmit={handleSubmit}>
            <div className='mb-6 md:mb-8 md:flex justify-between md:space-x-4'>
              <div className='w-full mb-6 md:mb-0'>
                <label
                  htmlFor='name'
                  className='block text-black font-bold mb-3'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder=''
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-black'
                  required
                />
              </div>
              <div className='w-full'>
                <label
                  htmlFor='email'
                  className='block text-black font-bold mb-3'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder=''
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-black'
                  required
                />
              </div>
            </div>
            <div className='mb-6'>
              <label
                htmlFor='message'
                className='block text-black font-bold mb-3'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                placeholder=''
                value={formData.message}
                onChange={handleChange}
                className='w-full px-3 py-2  border border-black'
                rows={4}
                required
              />
            </div>
            <div className='text-center'>
              <button
                type='submit'
                className='bg-orange-400 text-white py-2 px-4 hover:bg-orange-900'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
