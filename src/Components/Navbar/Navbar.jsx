import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import du Link pour la navigation
import logo from '../../Assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Home'); // État pour le lien sélectionné

  // Liste des éléments de la navbar
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'All Courses', path: '/all-courses' },
    { name: 'Blog', path: '/Blog' },
    { name: 'About', path: '/About' },
    { name: 'Contact', path: '/Contact' }
  ];

  return (
    <nav className="bg-gray-100 px-20 py-2 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-16">
       
         {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Univercity Central" className="h-8" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setSelected(item.name)}
              className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                selected === item.name ? 'text-white bg-red-500' : 'text-gray-600 hover:text-white hover:bg-red-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => {
                setSelected(item.name);
                setIsOpen(false); // Ferme le menu mobile après sélection
              }}
              className={`block cursor-pointer px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                selected === item.name ? 'text-white bg-red-500' : 'text-gray-600 hover:text-white hover:bg-red-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
