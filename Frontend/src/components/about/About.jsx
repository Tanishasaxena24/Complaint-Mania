import React from 'react';

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-300 to-red-50 p-4">
      <div className="w-full max-w-5xl bg-pink p-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-pink-950">About Us</h2>
        <p className="text-gray-700 mb-4">
          Welcome to our Complaint Filing Application. Our platform is dedicated to providing a seamless and efficient way for users to submit and manage their complaints. We understand the importance of addressing issues promptly and effectively, and our goal is to make this process as straightforward as possible.
        </p>
        <p className="text-gray-700 mb-4">
          Our application allows users to easily file complaints, track the status of their submissions, and receive timely updates. Whether you're dealing with a service issue, a product defect, or any other concern, our system is designed to ensure your voice is heard and your problems are resolved.
        </p>
        <p className="text-gray-700 mb-4">
          Our team is committed to maintaining the highest standards of user satisfaction. We continually strive to improve our platform based on user feedback and technological advancements. Your trust and satisfaction are our top priorities.
        </p>
        <p className="text-gray-700 mb-4">
          Thank you for choosing our Complaint Filing Application. We are here to support you and ensure your complaints are handled with the utmost care and professionalism.
        </p>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-pink-950">Our Mission</h3>
        <p className="text-gray-700 mb-4">
          Our mission is to empower users with an easy-to-use platform that makes the complaint filing process efficient, transparent, and effective. We aim to provide a reliable solution that addresses user concerns promptly and ensures their satisfaction.
        </p>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-pink-950">Our Vision</h3>
        <p className="text-gray-700 mb-4">
          Our vision is to be the leading complaint filing platform, known for our user-centric approach, innovative features, and exceptional customer service. We aspire to build a community where user feedback drives continuous improvement and positive change.
        </p>
      </div>
    </div>
  );
};

export default About;
