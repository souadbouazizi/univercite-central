import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaSkype } from 'react-icons/fa'; // Import des icônes sociales
import LogoFooter from '../../Assets/images/logo.png';

function Footer() {
  return (
    <div className="bg-gray-600 text-white py-8 md:px-44 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Colonne 1: Logo et informations de contact */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4"><img src={LogoFooter} alt="" /></h2>
          <p className="mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae et nisi error a labore excepturi!</p>
          <p className="mb-2">Tel: <a href="tel: +216 71 79 66 79"> (+216) 71 79 66 79</a></p>
          <p className="mb-2">Tel: <a href="Fax: +216 71 79 37 02"> (+216) 71 79 37 02</a></p>
          <p className="mb-2">Email: <a href="mailto:ucginfo@univesitecentrale.net">ucginfo@univesitecentrale.net</a></p>
        </div>

        {/* Colonne 2: Popular Courses */}
        <div className='md:text-center text-left'>
          <h3 className="text-lg font-bold mb-4">Popular Courses</h3>
          <ul>
            <li><a href="#" className="text-gray-300 hover:text-white">Course 1</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Course 2</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Course 3</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Course 4</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Course 5</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Course 6</a></li>
          </ul>
        </div>

        {/* Colonne 3: Course Categories */}
        <div className='md:text-center text-left'>
          <h3 className="text-lg font-bold mb-4 ">Course Categories</h3>
          <ul>
            <li><a href="#" className="text-gray-300 hover:text-white">Category 1</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Category 2</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Category 3</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Category 4</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Category 5</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Category 6</a></li>
          </ul>
        </div>

        {/* Colonne 4: Quick Links */}
        <div className='md:text-right text-left'>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" className="text-gray-300 hover:text-white">Link 1</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Link 2</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Link 3</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Link 4</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Link 5</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Link 6</a></li>
          </ul>
        </div>
      </div>

      {/* Deux colonnes pour le bas du footer */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-8">
        {/* Colonne gauche : Copyright */}
        <div className="text-center md:text-left">
          <p className="text-gray-300">© {new Date().getFullYear()} university central. All rights reserved.</p>
        </div>

        {/* Colonne droite : Liens sociaux */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">< FaFacebookF className='w-8 h-8'/></a>
          <a href="#" className="text-gray-300 hover:text-white">< FaTwitter className='w-8 h-8'/></a>
          <a href="#" className="text-gray-300 hover:text-white">< FaYoutube className='w-8 h-8'/></a>
          <a href="#" className="text-gray-300 hover:text-white">< FaLinkedinIn className='w-8 h-8'/></a>
          <a href="#" className="text-gray-300 hover:text-white">< FaInstagram className='w-8 h-8'/></a>
          <a href="#" className="text-gray-300 hover:text-white">< FaSkype className='w-8 h-8'/></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
