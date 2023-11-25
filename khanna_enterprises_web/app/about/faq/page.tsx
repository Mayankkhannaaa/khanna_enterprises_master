import { NextPage } from 'next';
import Link from 'next/link';

interface FAQPageProps {
  // Define any props specific to the FAQ page here
}

const FAQPage: NextPage<FAQPageProps> = () => {
  const faqData = [
    {
      question: 'What is this website about?',
      answer: 'This website provides information about various topics.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can reach our support team at support@example.com.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can reach our support team at support@example.com.',
    },
    {
      question: 'How can I contact support?',
      answer: (
        <>
          You can reach our support team at support@example.com.
          <div className='flex'>
            Click
            <Link href='/about'>
              <p className='underline mx-1'>here</p>
            </Link>
            to navigate to the Contact Us page.
          </div>
        </>
      ),
    },
    // Add more FAQ entries as needed
  ];

  return (
    <div className='bg-white flex flex-col '>
      <div className='w-11/12 bg-gray-100 mx-auto rounded-md mt-20 md:mt-5 p-5 sm:p-10 md:p-20'>
        <h1 className='text-center text-xl'>Frequently Asked Questions</h1>
        <div className='mt-10'>
          <ul>
            {faqData.map((faq, index) => (
              <div className='bg-white opacity-70 p-6 py-10 shadow-md shadow-slate-500 w-full sm:w-10/12 rounded-lg flex mt-5 sm:mt-10 mx-auto'>
                <li key={index}>
                  <div>
                    <h2 className='text-blue-700'>{faq.question}</h2>
                  </div>
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
