import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Mr. Anurag',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed mauris nec augue eleifend mollis.',
      company: 'Company A',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Mrs. Shweta',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed mauris nec augue eleifend mollis.',
      company: 'Company B',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg', 
    },
    {
      id: 3,
      name: 'Mr. Suresh',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed mauris nec augue eleifend mollis.',
      company: 'Company C',
      imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg', 
    },
    {
      id: 4,
      name: 'Mrs. Saroj',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed mauris nec augue eleifend mollis.',
      company: 'Company D',
      imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg', 
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display three testimonials at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Display two testimonials at a time on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Display one testimonial at a time on small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Display one testimonial at a time on very small screens
        },
      },
    ],
  };

  return (
    <div className="w-full md:w-3/4 mx-auto mb-44 overflow-hidden">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-center">
              <img src={testimonial.imageUrl} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4" />
              <p className="text-lg mb-4">{testimonial.text}</p>
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
