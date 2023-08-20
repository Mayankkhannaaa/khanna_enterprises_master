import { NextPage } from 'next';

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
    // Add more FAQ entries as needed
  ];

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <ul>
        {faqData.map((faq, index) => (
          <li key={index}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;
