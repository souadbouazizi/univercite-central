import React, { useState } from 'react';
import { FaClock, FaUsers, FaBook, FaLayerGroup, FaQuestionCircle } from 'react-icons/fa';
import CoursesImg1 from '../../Assets/images/courses1.png';
import CoursesImg2 from '../../Assets/images/courses2.png';
import CoursesImg3 from '../../Assets/images/courses3.png';
import CoursesImg4 from '../../Assets/images/courses4.png';
import CoursesImg5 from '../../Assets/images/courses5.png';
import CoursesImg6 from '../../Assets/images/courses6.png';
import CoursesImg7 from '../../Assets/images/courses7.png';
import CoursesImg8 from '../../Assets/images/courses8.png';
import CoursesImg9 from '../../Assets/images/courses9.png';
import CoursesImg10 from '../../Assets/images/courses10.png';
import CoursesImg11 from '../../Assets/images/courses11.png';
import CoursesImg12 from '../../Assets/images/courses12.png';

const coursesData = [
  // Données fictives pour 10 cours
  { id: 1, category: 'Development', teacher: 'John Doe', title: 'JavaScript Basics', weeks: 6, level: 'Beginner', lessons: 12, quizzes: 3, students: 200, price: '$49', image: CoursesImg1 },
  { id: 2, category: 'Design', teacher: 'Jane Smith', title: 'UI/UX Design Fundamentals', weeks: 8, level: 'Intermediate', lessons: 15, quizzes: 5, students: 150, price: '$69', image: CoursesImg2 },
  { id: 3, category: 'Marketing', teacher: 'Mike Johnson', title: 'Digital Marketing 101', weeks: 4, level: 'All Levels', lessons: 10, quizzes: 2, students: 300, price: '$39', image: CoursesImg3 },
  { id: 4, category: 'Computer Science', teacher: 'Adam Smith', title: 'Software Development', weeks: 10, level: 'Beginner', lessons: 4, quizzes: 3, students: 250, price: '$149', image: CoursesImg4 },
  { id: 5, category: 'Business', teacher: 'Jane Smith', title: 'Business Essentials', weeks: 11, level: 'Intermediate', lessons: 17, quizzes: 5, students: 110, price: '$169', image: CoursesImg5 },
  { id: 6, category: 'Arts & Humanities', teacher: 'Mike Johnson', title: 'History & Philosophy', weeks: 9, level: 'All Levels', lessons: 4, quizzes: 3, students: 100, price: '$89', image: CoursesImg6 },
  { id: 7, category: 'Math & Logic', teacher: 'John Doe', title: 'Algebra & Calculus', weeks: 10, level: 'Beginner', lessons: 4, quizzes: 6, students: 200, price: '$149', image: CoursesImg7 },
  { id: 8, category: 'Language Learning', teacher: 'Jane Smith', title: 'English Learning', weeks: 10, level: 'Intermediate', lessons: 5, quizzes: 5, students: 150, price: 'free', image: CoursesImg8 },
  { id: 9, category: 'Arts & Humanities', teacher: 'Mike Johnson', title: 'Business Strategy', weeks: 8, level: 'All Levels', lessons: 10, quizzes: 2, students: 100, price: '$79', image: CoursesImg9 },
  { id: 10, category: 'Arts & Humanities', teacher: 'Hanson Deck', title: 'Music & Art', weeks: 10, level: 'Beginner', lessons: 12, quizzes: 3, students: 200, price: '$100', image: CoursesImg10 },
  { id: 11, category: 'Arts & Humanities', teacher: 'Jane Smith', title: 'Data Science', weeks: 12, level: 'Intermediate', lessons: 15, quizzes: 5, students: 150, price: '$150', image: CoursesImg11 },
  { id: 12, category: 'Development', teacher: 'Mike Johnson', title: 'web developpement ', weeks: 15, level: 'All Levels', lessons: 20, quizzes: 10, students: 300, price: '$250', image: CoursesImg12 },
  // Ajoutez plus de cours ici pour compléter jusqu'à 10...
];

function CoursesSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8;
  const totalPages = Math.ceil(coursesData.length / coursesPerPage);

  // Paginer les données de cours
  const currentCourses = coursesData.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <div className="container mx-auto px-4 md:px-52 py-10">
      {/* Titre */}
      <h1 className="text-3xl font-bold mb-4 text-center">All Courses</h1>
      
      {/* Description */}
      <p className="text-center mb-6">
        Browse through our extensive collection of online courses in various fields. 
        Learn from industry experts and gain new skills. Whether you're a beginner or advanced, 
        we have something for everyone.
      </p>

      {/* Liste des cours */}
      <div className="space-y-8">
        {currentCourses.map(course => (
          <div key={course.id} className="border-b pb-4">
            <div className="flex flex-col md:flex-row items-start">
              {/* Image en haut sur mobile, à gauche sur bureau */}
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover mb-4 md:w-48 md:h-48 md:mr-6 md:mb-0" />

              {/* Contenu en bas sur mobile, à droite sur bureau */}
              <div className="flex-1">
                {/* Catégorie, enseignant et nom du cours */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-semibold">{course.category}</span>
                  <span className="text-gray-600 font-bold">by {course.teacher}</span>
                </div>
                <h2 className="text-2xl uppercase text-red-600 font-bold mb-2">{course.title}</h2>

                {/* Détails du cours (icônes et infos) */}
                <div className="flex flex-wrap space-x-4 text-gray-500 text-sm mb-2">
                  <span className="flex items-center">
                    <FaClock className="mr-1" /> {course.weeks} weeks
                  </span>
                  <span className="flex items-center">
                    <FaLayerGroup className="mr-1" /> {course.level}
                  </span>
                  <span className="flex items-center">
                    <FaBook className="mr-1" /> {course.lessons} lessons
                  </span>
                  <span className="flex items-center">
                    <FaQuestionCircle className="mr-1" /> {course.quizzes} quizzes
                  </span>
                  <span className="flex items-center">
                    <FaUsers className="mr-1" /> {course.students} students
                  </span>
                </div>

                {/* Prix et bouton */}
                <div className="flex justify-between items-center">
                  <span className="text-red-600 text-lg font-bold">{course.price}</span>
                  <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">Read More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          &larr; Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-gray-300 hover:bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default CoursesSection;
