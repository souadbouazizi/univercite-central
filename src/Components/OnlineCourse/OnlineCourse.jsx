import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaPython, FaCss3Alt, FaHtml5, FaJs, FaJava, FaDatabase } from 'react-icons/fa';
import './OnlineCourses.css';

const courses = [
    { id: 1, title: 'React for Beginners', description: '10 courses\nReact', icon: <FaReact />, bg: 'bg-blue-100', text:'text-blue-800' },
    { id: 2, title: 'Node.js Essentials', description: '7 courses\nMaster server-side development', icon: <FaNodeJs />, bg: 'bg-lime-100', text:'text-lime-800' },
    { id: 3, title: 'Python Programming', description: '15 courses\nPython', icon: <FaPython />, bg: 'bg-yellow-100', text:'text-sky-800' },
    { id: 4, title: 'CSS Flexbox', description: '12 courses\nCSS layout', icon: <FaCss3Alt />, bg: 'bg-cyan-100', text:'text-cyan-500'},
    { id: 5, title: 'HTML Basics', description: '8 courses\nHTML from scratch', icon: <FaHtml5 />, bg: 'bg-orange-100', text:'text-orange-600'},   
    { id: 6, title: 'Java Programming', description: '11 courses\nJava for building apps', icon: <FaJava />, bg: 'bg-red-100', text:'text-blue-500' },
    { id: 7, title: 'JavaScript Fundamentals', description: '7 courses\nJS programming', icon: <FaJs />, bg: 'bg-yellow-100', text:'text-yellow-600' },
    { id: 8, title: 'Database Management', description: '20 courses\nManage data effectively', icon: <FaDatabase />, bg: 'bg-sky-100', text:'text-sky-800' },
];

const OnlineCourse = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const coursesPerPage = 4;
    const totalPages = Math.ceil(courses.length / coursesPerPage);

    const nextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    const goToPage = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const startIndex = currentPage * coursesPerPage;
    const selectedCourses = courses.slice(startIndex, startIndex + coursesPerPage);

    return (
        <div className="relative fade-in pt-12 px-4 md:px-44">
            <h6 className="text-center text-3xl uppercase font-bold text-red-600">Online Courses</h6>
            <p className="text-center mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia earum velit iste veritatis nostrum, vitae dolorem quasi<br /> ex tempore quo enim delectus quos odio fugit quas adipisci veniam corporis asperiores.</p>

            {/* Flèches de navigation positionnées au milieu */}
            <button 
                onClick={prevPage} 
                className="absolute left-36 top-[60%] transform -translate-y-1/2 p-3 bg-gray-300 rounded-full hover:bg-gray-400 z-10"
            >
                &lt;
            </button>

            <button 
                onClick={nextPage} 
                className="absolute right-36 top-[60%] transform -translate-y-1/2 p-3 bg-gray-300 rounded-full hover:bg-gray-400 z-10"
            >
                &gt;
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {selectedCourses.map((course) => (
                    <div 
                        key={course.id} 
                        className={`rounded-lg shadow-lg p-4 transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300 mb-8 ${course.bg} ${course.text}`}
                    >
                        <div className="flex justify-center items-center text-3xl mb-3">{course.icon}</div>
                        <h5 className="text-lg font-bold">{course.title}</h5>
                        {/* Sauts de ligne gérés ici */}
                        <p className="text-sm">
                            {course.description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                ))}
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index)}
                        className={`h-3 w-3 rounded-full mx-1 ${currentPage === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default OnlineCourse;
