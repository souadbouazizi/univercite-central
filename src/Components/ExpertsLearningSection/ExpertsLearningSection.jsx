import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation
import { motion } from 'framer-motion'; // Importer motion pour les animations
import ExpertLearningImg from '../../Assets/images/ExpertsLearning.png';

const ExpertsLearningSection = () => {
  const navigate = useNavigate(); // Hook pour la navigation

  const handleButtonClick = () => {
    navigate('/all-courses'); // Remplacez '/all-courses' par le chemin de votre page
  };

  return (
    <div className="flex flex-col md:flex-row w-full px-4 md:px-44 mt-4">
      {/* Première colonne : Photo avec cercle rouge */}
      <motion.div 
        className="relative w-full md:w-1/2"
        initial={{ opacity: 0, x: -200 }} // Initial state for fade-left
        animate={{ opacity: 1, x: 0 }} // Final state
        transition={{ duration: 3 }} // Animation duration
      >
        <img 
          src={ExpertLearningImg} // Remplacez par votre image
          alt="Expert Learning"
          className="w-full h-auto rounded-lg"
        />
        {/* Cercle rouge avec le nombre */}
        <div className="absolute -top-4 -left-4 bg-red-600 text-white rounded-full w-24 h-24 flex items-center justify-center font-bold text-2xl">
          +50k
        </div>
      </motion.div>

      {/* Deuxième colonne : Texte et bouton */}
      <motion.div 
        className="w-full md:w-1/2 p-4 flex flex-col justify-center"
        initial={{ opacity: 0, x: 200 }} // Initial state for fade-right
        animate={{ opacity: 1, x: 0 }} // Final state
        transition={{ duration: 3 }} // Animation duration
      >
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2">We are Experts Learning Institution</h2>
          <h5 className="text-2xl text-red-500 font-normal mb-2">20 Years of Experience</h5>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-700 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti rem blanditiis voluptates. Placeat recusandae quod molestiae! Non, quasi est?</p>
          <p className='text-red-600'>Call Us <a href="tel:+216 71 79 66 79"> +216 71 79 66 79</a> </p>
        </div>
        {/* Bouton "Envoyer" */}
        <button 
          onClick={handleButtonClick}
          className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-gray-900 transition duration-200"
        >
          View Courses
        </button>
      </motion.div>
    </div>
  );
};

export default ExpertsLearningSection;
