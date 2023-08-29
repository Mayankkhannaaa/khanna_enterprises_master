import { NextPage } from 'next';

interface AboutPageProps {
  // Define any props specific to the About page here
}

const AboutPage: NextPage<AboutPageProps> = () => {
  return (
    <div className='flex h-screen w-screen'>
      <div className='mx-auto'>
        <h1>About Us</h1>
        <p>Welcome to our About page!</p>
      </div>
    </div>
  );
};

export default AboutPage;
