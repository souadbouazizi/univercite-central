
import React, { useState } from 'react';
import { FaBook, FaClock } from 'react-icons/fa';
import Image1 from'../../Assets/images/image1.png';
import Image2 from'../../Assets/images/image2.png';
import Image3 from'../../Assets/images/image3.png';
import Image4 from'../../Assets/images/image4.png';
import Image5 from'../../Assets/images/image5.png';
import Image6 from'../../Assets/images/image6.png';
import Image7 from'../../Assets/images/image7.png';
import Image8 from'../../Assets/images/image8.png';
import Image9 from'../../Assets/images/image9.png';
import Teacher1 from '../../Assets/images/teacher1.png';
import Teacher2 from '../../Assets/images/teacher2.png';
import Teacher3 from '../../Assets/images/teacher3.png';
import Teacher4 from '../../Assets/images/teacher4.png';
import Teacher5 from '../../Assets/images/teacher5.png';
import Teacher6 from '../../Assets/images/teacher6.png';
import Teacher7 from '../../Assets/images/teacher7.png';
import Teacher8 from '../../Assets/images/teacher8.png';
import Teacher9 from '../../Assets/images/teacher9.png';

const coursesData = [
  {
    id: 1,
    title: "Business Essentials",
    image: Image1,
    price: "Free",
    teacherName: "Sana SLIMI",
    teacherImage: Teacher1,
    lessons: 10,
    hours: 20,
    rating: 5,
  },
  {
    id: 2,
    title: "Software Development",
    image: Image2,
    price: "$20",
    teacherName: "Sami BEN AHMED",
    teacherImage: Teacher2,
    lessons: 8,
    hours: 15,
    rating: 4,
  },
  {
    id: 3,
    title: "History & Philosophy",
    image: Image3,
    price: "$30",
    teacherName: "Ahmed SALHI",
    teacherImage: Teacher3,
    lessons: 12,
    hours: 25,
    rating: 4,
  },
  {
    id: 4,
    title: "Algebra & Calculus",
    image: Image4,
    price: "Free",
    teacherName: "Olaa ALOUI",
    teacherImage: Teacher4,
    lessons: 9,
    hours: 18,
    rating: 5,
  },
  {
    id: 5,
    title: "English Learning",
    image: Image5,
    price: "$10",
    teacherName: "Karim BEN SALAH",
    teacherImage: Teacher5,
    lessons: 7,
    hours: 10,
    rating: 3,
  },
  {
    id: 6,
    title: "Business Strategy",
    image: Image6,
    price: "$25",
    teacherName: "Soha AHMED",
    teacherImage:Teacher6,
    lessons: 15,
    hours: 30,
    rating: 5,
  },
  {
    id: 7,
    title: "Music & Art",
    image: Image7,
    price: "$15",
    teacherName: "Karim TAHRI",
    teacherImage: Teacher7,
    lessons: 5,
    hours: 8,
    rating: 4,
  },
  {
    id: 8,
    title: "Data Analysis",
    image: Image8,
    price: "$40",
    teacherName: "Mohamed ALI",
    teacherImage: Teacher8,
    lessons: 20,
    hours: 40,
    rating: 5,
  },
  {
    id: 9,
    title: "Computer Security & Network",
    image: Image9,
    price: "Free",
    teacherName: "Maha AHMADI",
    teacherImage: Teacher9,
    lessons: 6,
    hours: 12,
    rating: 4,
  },
];

function PopularCourses() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calcul des index de début et de fin pour les éléments de la page actuelle
  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = coursesData.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(coursesData.length / itemsPerPage);

  // Fonction pour changer de page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto py-16 mt-3  px-4 md:px-44  bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 uppercase text-red-600 text-center">Popular Courses</h1>
      <p className="mb-5 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia distinctio illo blanditiis <br /> placeat magnam obcaecati reprehenderit in quasi, a dignissimos.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        {currentCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg uppercase text-gray-400">{course.title}</h2>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <img src={course.teacherImage} alt={course.teacherName} className="w-16 h-16 rounded-full mr-2" />
                  <span>{course.teacherName}</span>
                </div>
                <span className='font-bold text-2xl text-red-600'>{course.price}</span>
              </div>
              <hr className="my-2" />
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaBook className="mr-1" />
                  <span>{course.lessons} Lessons</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-1" />
                  <span>{course.hours} Hours</span>
                </div>
              </div>
              <div className="flex items-center mt-2">
                {[...Array(course.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            className={`px-4 py-2 ${currentPage === i + 1 ? 'bg-red-600 text-white' : 'bg-gray-300'} rounded hover:bg-red-600 hover:text-white mx-1`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PopularCourses;
