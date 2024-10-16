import React from 'react';
import { FaAddressBook, FaPhone, FaFax, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaSkype, FaYoutube } from 'react-icons/fa'; // Importing icons

function ContactInfo() {
  return (
    <div className="container p-4 ">
      <h2 className="text-3xl font-bold mb-4 text-center uppercase">Contact Us</h2>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid at cum recusandae, blanditiis reiciendis perferendis officia voluptatibus tempore accusamus minima delectus consequuntur dolore saepe? Tempore excepturi sed porro repellendus sit adipisci dignissimos. Omnis, repellendus?
      </p>

      {/* Contact Information */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <FaAddressBook className="text-gray-600 mr-2" />
          <span className="text-lg">Rue du Lac Neuchâtel, Les Berges du Lac 1, 1053 Tunis.</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-gray-600 mr-2" />
          <span className="text-lg"><a href="tel:+216 71 79 66 79">+216 71 79 66 79</a></span>
        </div>
        <div className="flex items-center">
          <FaFax className="text-gray-600 mr-2" />
          <span>
          <span className="text-lg"><a href="tel:+216 71 79 35 58">(+216) 71 79 35 58</a></span>
          <span className="text-lg"><a href="tel:+216 71 79 37 02">(+216) 71 79 37 02</a></span>

          </span>
         
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-gray-600 mr-2" />
          <span className="text-lg"><a href="mailto:ucginfo@universitecentrale.tn">ucginfo@universitecentrale.tn</a></span>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-6 flex justify-center space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.skype.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
          <FaSkype size={30} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
          <FaYoutube size={30} />
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
