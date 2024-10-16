import React, { useState } from 'react';
import { FaPlay, FaBook, FaLaptop, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';
import './MotivitionSection.css'; // Gardez vos styles CSS personnalisés
import MotivitionSectionBgImg from '../../Assets/images/MotivitionSectionBg.png';
import Modal from './Modal'; // Assurez-vous que le chemin est correct

function MotivitionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="section-container bg-gray-50">
      {/* Left Column */}
      <div className="left-column py-16 md:ps-44 md:pe-20 px-10">
        <h2 className="text-4xl font-bold mb-6">Boost Your Motivation</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ipsum praesentium illum mollitia sed nihil quia illo ducimus explicabo saepe!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Buttons with Icons */}
          <button className="flex items-center bg-white shadow-md p-3 rounded-lg transition hover:bg-gray-100">
            <FaBook className="mr-2" /> Graphics Design
          </button>
          <button className="flex items-center bg-white shadow-md p-3 rounded-lg transition hover:bg-gray-100">
            <FaLaptop className="mr-2" /> Self Development
          </button>
          <button className="flex items-center bg-white shadow-md p-3 rounded-lg transition hover:bg-gray-100">
            <FaChalkboardTeacher className="mr-2" /> IT & Software
          </button>
          <button className="flex items-center bg-white shadow-md p-3 rounded-lg transition hover:bg-gray-100">
            <FaGraduationCap className="mr-2" /> Language Learning
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <img
          src={MotivitionSectionBgImg}
          alt="Background"
          className="object-cover"
        />

        {/* Play Button */}
        <button
          onClick={openModal}
          className="play-button bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition"
        >
          <FaPlay className="text-3xl" />
        </button>
      </div>

      {/* Modal for video */}
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <div className="relative w-full h-full">
            <iframe
              width="90%"
              height="315"
              src="https://www.youtube.com/embed/wRM8thJ7Hxk?si=SMxGiyz9edFVsvEY"
              title="Motivation Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default MotivitionSection;
