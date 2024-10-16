import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Icons for navigation
import StudientImg1 from '../../Assets/images/stud1.png';
import StudientImg2 from '../../Assets/images/stud2.png';
import StudientImg3 from '../../Assets/images/stud3.png';
import StudientImg4 from '../../Assets/images/stud4.png';
import StudientImg5 from '../../Assets/images/stud5.png';
import StudientImg6 from '../../Assets/images/stud6.png';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    image: StudientImg1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum illum quam doloribus animi vitae expedita labore similique sunt ducimus! Debitis quas quos similique dolorum dolore consequuntur fugiat voluptatibus modi illum cupiditate, quo laborum! Cum similique quibusdam maxime illo rerum nemo et! Ipsam ullam incidunt omnis quas nihil enim labore quidem nostrum cupiditate repudiandae iusto, sit ducimus mollitia accusamus culpa.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: StudientImg2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum illum quam doloribus animi vitae expedita labore similique sunt ducimus! Debitis quas quos similique dolorum dolore consequuntur fugiat voluptatibus modi illum cupiditate, quo laborum! Cum similique quibusdam maxime illo rerum nemo et! Ipsam ullam incidunt omnis quas nihil enim labore quidem nostrum cupiditate repudiandae iusto, sit ducimus mollitia accusamus culpa.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    image: StudientImg3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum illum quam doloribus animi vitae expedita labore similique sunt ducimus! Debitis quas quos similique dolorum dolore consequuntur fugiat voluptatibus modi illum cupiditate, quo laborum! Cum similique quibusdam maxime illo rerum nemo et! Ipsam ullam incidunt omnis quas nihil enim labore quidem nostrum cupiditate repudiandae iusto, sit ducimus mollitia accusamus culpa.',
  },
  {
    id: 4,
    name: 'Robert Brown',
    image: StudientImg4,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum illum quam doloribus animi vitae expedita labore similique sunt ducimus! Debitis quas quos similique dolorum dolore consequuntur fugiat voluptatibus modi illum cupiditate, quo laborum! Cum similique quibusdam maxime illo rerum nemo et! Ipsam ullam incidunt omnis quas nihil enim labore quidem nostrum cupiditate repudiandae iusto, sit ducimus mollitia accusamus culpa.',
  },
  {
    id: 5,
    name: 'Emily Davis',
    image: StudientImg5,
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum illum quam doloribus animi vitae expedita labore similique sunt ducimus! Debitis quas quos similique dolorum dolore consequuntur fugiat voluptatibus modi illum cupiditate, quo laborum! Cum similique quibusdam maxime illo rerum nemo et! Ipsam ullam incidunt omnis quas nihil enim labore quidem nostrum cupiditate repudiandae iusto, sit ducimus mollitia accusamus culpa.',
  },
  {
    id: 6,
    name: 'Michael Wilson',
    image: StudientImg6,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum illum quam doloribus animi vitae expedita labore similique sunt ducimus! Debitis quas quos similique dolorum dolore consequuntur fugiat voluptatibus modi illum cupiditate, quo laborum! Cum similique quibusdam maxime illo rerum nemo et! Ipsam ullam incidunt omnis quas nihil enim labore quidem nostrum cupiditate repudiandae iusto, sit ducimus mollitia accusamus culpa.',
  },
];

function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-10 md:px-44 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Column - Title and Navigation */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col justify-between items-center">
          <h2 className="text-3xl font-bold mb-4">Student Say About Us</h2>
          <div className="flex justify-center mt-auto">
            <button
              className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
              onClick={handlePrev}
            >
              <FaArrowLeft />
            </button>
            <button
              className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 ml-4"
              onClick={handleNext}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Column - Testimonial Text and Image */}
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start">
          <p className="text-lg text-gray-600 mb-6">
            "{testimonials[currentTestimonial].text}"
          </p>
          <div className="flex flex-row items-center content-center md:items-center gap-4">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-24 h-24 rounded-full mb-2 border-4 border-red-400 transition-transform duration-300 hover:scale-110"
            />
            <span className="text-xl font-semibold">
              {testimonials[currentTestimonial].name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
