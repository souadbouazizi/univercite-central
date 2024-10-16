import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';
import InstructorImg1 from '../../Assets/images/instructor1.png';
import InstructorImg2 from '../../Assets/images/instructor2.png';
import InstructorImg3 from '../../Assets/images/instructor3.png';
import InstructorImg4 from '../../Assets/images/instructor4.png';
import InstructorImg5 from '../../Assets/images/instructor5.png';
import InstructorImg6 from '../../Assets/images/instructor6.png';
import InstructorImg7 from '../../Assets/images/instructor7.png';
import InstructorImg8 from '../../Assets/images/instructor8.png';
import InstructorImg9 from '../../Assets/images/instructor9.png';
import InstructorImg10 from '../../Assets/images/instructor10.png';
import InstructorImg11 from '../../Assets/images/instructor11.png';
import InstructorImg12 from '../../Assets/images/instructor12.png';
import './InstructorSection.css';

const instructors = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Senior Developer',
    image: InstructorImg1,
    socials: { facebook: '#', instagram: '#', linkedin: '#', github: '#', behance: '#' },
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'UI/UX Designer',
    image: InstructorImg2,
    socials: { facebook: '#', instagram: '#', linkedin: '#', github: '#', behance: '#' },
  },
  {
    id: 3,
    name: 'David Lee',
    title: 'Data Scientist',
    image: InstructorImg3,
    socials: { facebook: '#', instagram: '#', linkedin: '#', github: '#', behance: '#' },
  },
  {
    id: 4,
    name: 'Emma Brown',
    title: 'Full Stack Developer',
    image: InstructorImg4,
    socials: { facebook: '#', instagram: '#', linkedin: '#', github: '#', behance: '#' },
  },
  {
    id: 5,
    name: 'Chris Green',
    title: 'Cloud Engineer',
    image: InstructorImg5,
    socials: { facebook: '#', instagram: '#', linkedin: '#', github: '#', behance: '#' },
  },
  {
    id: 6,
    name: 'Michael White',
    title: 'Cybersecurity Specialist',
    image: InstructorImg6,
    socials: { facebook: '#', instagram: '#', linkedin: '#', github: '#', behance: '#' },
  },
  {
    id: 7,
    name: 'John Doe',
    title: 'Senior Developer',
    image: InstructorImg7,
    socials: { facebook: '#', instagram: '#', linkedin: '#', github: '#', behance: '#' },
  },
  {
    id: 8,
    name: 'Jane Smith',
    title: 'UI/UX Designer',
    image: InstructorImg8,
    socials: { facebook: '#', instagram: '#', linkedin: '#', github: '#', behance: '#' },
  },
  {
    id: 9,
    name: 'David Lee',
    title: 'Data Scientist',
    image: InstructorImg9,
    socials: { facebook: '#', instagram: '#', linkedin: '#', github: '#', behance: '#' },
  },
  {
    id: 10,
    name: 'Emma Brown',
    title: 'Full Stack Developer',
    image: InstructorImg10,
    socials: { facebook: '#', instagram: '#', linkedin: '#', github: '#', behance: '#' },
  },
  {
    id: 11,
    name: 'Chris Green',
    title: 'Cloud Engineer',
    image: InstructorImg11,
    socials: { facebook: '#', instagram: '#', linkedin: '#', github: '#', behance: '#' },
  },
  {
    id: 12,
    name: 'Michael White',
    title: 'Cybersecurity Specialist',
    image: InstructorImg12,
    socials: { facebook: '#', instagram: '#', linkedin: '#', github: '#', behance: '#' },
  },
];

function InstructorSection() {
  const [currentPage, setCurrentPage] = useState(0); // Active page
  const instructorsPerPage = 4;

  // Split instructors into groups
  const pages = [];
  for (let i = 0; i < instructors.length; i += instructorsPerPage) {
    pages.push(instructors.slice(i, i + instructorsPerPage));
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-44 ">
      {/* Title and paragraph */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 uppercase text-gray-800 animate-bottom-to-top-h2">Top Instructor</h2>
        <p className="text-gray-600 animate-bottom-to-top-p">
          Meet our team of skilled instructors who are ready to guide you <br /> through every step of your learning journey.
        </p>
      </div>

      {/* Cards scrolling - 4 cards per page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pages[currentPage].map((instructor) => (
          <div
            key={instructor.id}
            className="relative bg-white rounded-lg shadow-lg transition-transform hover:scale-105 rounded animate-bottom-to-top-card"
          >
            {/* Image with hover effect */}
            <div className="relative overflow-hidden rounded">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full object-cover rounded-t-lg transform transition-transform duration-500 hover:scale-110 hover:rounded-t-lg"
                style={{ height: '19rem' }} // Set a fixed height for images
              />

              {/* Social Media icons - appear to the left on hover */}
              <div className="absolute inset-y-0 left-0 flex flex-col justify-center items-center bg-red-300 bg-opacity-75 space-y-4 opacity-0 hover:opacity-100 transition-opacity duration-300 px-3 text-center">
                <a href={instructor.socials.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-white hover:text-blue-500" />
                </a>
                <a href={instructor.socials.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white hover:text-pink-500" />
                </a>
                <a href={instructor.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="text-white hover:text-blue-700" />
                </a>
                <a href={instructor.socials.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-white hover:text-gray-500" />
                </a>
                <a href={instructor.socials.behance} target="_blank" rel="noopener noreferrer">
                  <FaBehance className="text-white hover:text-blue-500" />
                </a>
              </div>
            </div>

            {/* Card content (vertical layout) */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{instructor.name}</h3>
              <p className="text-gray-600">{instructor.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6">
        {pages.map((_, index) => (
          <button
            key={index}
            className={`mx-2 h-3 w-3 rounded-full ${index === currentPage ? 'bg-red-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentPage(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default InstructorSection;
