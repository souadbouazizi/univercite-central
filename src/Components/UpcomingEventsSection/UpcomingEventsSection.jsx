import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'; // Import des icônes
import EventImg1 from '../../Assets/images/Event1.png';
import EventImg2 from '../../Assets/images/Event2.png';
import EventImg3 from '../../Assets/images/Event3.png';

function UpcomingEventsSection() {
  return (
    <div className="container mx-auto text-center py-8">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
      {/* Paragraph with 3 lines */}
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>

      {/* Event Cards */}
      <div className="space-y-8 md:px-56 px-4">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
          {/* Left: Image */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img 
              src={EventImg1}
              alt="Event"
              className="w-56 h-56 object-cover shadow-lg" // Utilisation de rounded-full pour un cercle
              style={{ borderRadius: '50% 0 50% 50%' }} 
            />
          </div>
          {/* Right: Content */}
          <div className="ml-6 flex-1 text-left px-16">
            <h6 className='text-red-600'>12 Oct 2024</h6>
            <h3 className="text-3xl font-bold">Why you Need Advance Developmemt Process Course?</h3>
            {/* Event Date and Title */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500 flex items-center">
                <FaClock className="mr-1" /> 12 Oct 2024
              </span>
              <span className="flex items-center text-sm text-gray-500 mb-4">
                <FaMapMarkerAlt className="mr-1" /> Location: Paris
              </span>
            </div>
            {/* Event Description */}
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
          {/* Left: Image */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img 
              src={EventImg2}
              alt="Event"
              className="w-56 h-56 object-cover shadow-lg"
              style={{ borderRadius: '50% 0 50% 50%' }} 
            />
          </div>
          {/* Right: Content */}
          <div className="ml-6 flex-1 text-left px-16">
            <h6 className='text-red-600'>22 Oct 2024</h6>
            <h3 className="text-3xl font-bold">Graphic Illustration: Design with Color and Shape</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500 flex items-center">
                <FaClock className="mr-1" /> 22 Oct 2024
              </span>
              <span className="flex items-center text-sm text-gray-500 mb-4">
                <FaMapMarkerAlt className="mr-1" /> Location: London
              </span>
            </div>
            {/* Event Description */}
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
          {/* Left: Image */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img 
              src={EventImg3}
              alt="Event"
              className="w-56 h-56 object-cover shadow-lg"
              style={{ borderRadius: '50% 0 50% 50%' }} 
            />
          </div>
          {/* Right: Content */}
          <div className="ml-6 flex-1 text-left px-16">
            <h6 className='text-red-600'>05 Nov 2024</h6>
            <h3 className="text-3xl font-bold">Magazine Design Start to Finish: The Inside Pages</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500 flex items-center">
                <FaClock className="mr-1" /> 05 Nov 2024
              </span>
              <span className="flex items-center text-sm text-gray-500 mb-4">
                <FaMapMarkerAlt className="mr-1" /> Location: New York
              </span>
            </div>
            {/* Event Description */}
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEventsSection;
