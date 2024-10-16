import React, { useState } from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import BlogImg1 from '../../Assets/images/blog1.png';
import BlogImg2 from '../../Assets/images/blog2.png';
import BlogImg3 from '../../Assets/images/blog3.png';
import BlogImg4 from '../../Assets/images/blog4.png';
import BlogImg5 from '../../Assets/images/blog5.png';
import BlogImg6 from '../../Assets/images/blog6.png';
import BlogImg7 from '../../Assets/images/blog7.png';

const blogsData = [
  {
    id: 1,
    category: 'Technology',
    title: 'How to Learn React',
    shortDescription: 'A beginner’s guide to learning React step-by-step.',
    image: BlogImg1,
    date: 'October 15, 2024',
    admin: 'John Doe',
    fullImage: BlogImg1,
    subtitle: 'Master React Basics',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quidem! Iure delectus incidunt possimus ea blanditiis,
         eos architecto accusantium ratione, suscipit dolores consequatur illo dignissimos, quod sunt consequuntur odit iste 
         magni quibusdam accusamus perferendis qui cupiditate. Possimus maiores quaerat delectus fugiat ratione, 
         veniam nulla illum distinctio facere rem magnam, ut eaque tenetur minus animi deleniti. Cum labore repellat
          aliquam enim fuga eum rem corporis inventore, voluptatem provident nam, sunt magnam sit consequuntur animi 
          blanditiis hic doloribus a harum nobis, aliquid soluta aperiam dolores! Expedita, est earum. Doloremque,
         nihil expedita magni iusto sit quidem exercitationem? Deleniti non magni reiciendis. Consequatur, magnam.`,
   },
  {
    id: 2,
    category: 'Design',
    title: 'UI/UX Design Trends in 2024',
    shortDescription: 'Explore the latest UI/UX design trends for web and mobile apps.',
    image: BlogImg2,
    date: 'October 10, 2024',
    admin: 'Jane Smith',
    fullImage: BlogImg2,
    subtitle: 'Latest Design Trends',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quidem! Iure delectus incidunt possimus ea blanditiis,
         eos architecto accusantium ratione, suscipit dolores consequatur illo dignissimos, quod sunt consequuntur odit iste 
         magni quibusdam accusamus perferendis qui cupiditate. Possimus maiores quaerat delectus fugiat ratione, 
         veniam nulla illum distinctio facere rem magnam, ut eaque tenetur minus animi deleniti. Cum labore repellat
          aliquam enim fuga eum rem corporis inventore, voluptatem provident nam, sunt magnam sit consequuntur animi 
          blanditiis hic doloribus a harum nobis, aliquid soluta aperiam dolores! Expedita, est earum. Doloremque,
         nihil expedita magni iusto sit quidem exercitationem? Deleniti non magni reiciendis. Consequatur, magnam.`,
  },
  {
    id: 3,
    category: 'Design',
    title: 'UI/UX Design Trends in 2024',
    shortDescription: 'Explore the latest UI/UX design trends for web and mobile apps.',
    image: BlogImg3,
    date: 'October 10, 2024',
    admin: 'Jane Smith',
    fullImage: BlogImg3,
    subtitle: 'Latest Design Trends',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quidem! Iure delectus incidunt possimus ea blanditiis,
         eos architecto accusantium ratione, suscipit dolores consequatur illo dignissimos, quod sunt consequuntur odit iste 
         magni quibusdam accusamus perferendis qui cupiditate. Possimus maiores quaerat delectus fugiat ratione, 
         veniam nulla illum distinctio facere rem magnam, ut eaque tenetur minus animi deleniti. Cum labore repellat
          aliquam enim fuga eum rem corporis inventore, voluptatem provident nam, sunt magnam sit consequuntur animi 
          blanditiis hic doloribus a harum nobis, aliquid soluta aperiam dolores! Expedita, est earum. Doloremque,
         nihil expedita magni iusto sit quidem exercitationem? Deleniti non magni reiciendis. Consequatur, magnam.`,
  },
  {
    id: 4,
    category: 'Design',
    title: 'UI/UX Design Trends in 2024',
    shortDescription: 'Explore the latest UI/UX design trends for web and mobile apps.',
    image: BlogImg4,
    date: 'October 10, 2024',
    admin: 'Jane Smith',
    fullImage: BlogImg4,
    subtitle: 'Latest Design Trends',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quidem! Iure delectus incidunt possimus ea blanditiis,
         eos architecto accusantium ratione, suscipit dolores consequatur illo dignissimos, quod sunt consequuntur odit iste 
         magni quibusdam accusamus perferendis qui cupiditate. Possimus maiores quaerat delectus fugiat ratione, 
         veniam nulla illum distinctio facere rem magnam, ut eaque tenetur minus animi deleniti. Cum labore repellat
          aliquam enim fuga eum rem corporis inventore, voluptatem provident nam, sunt magnam sit consequuntur animi 
          blanditiis hic doloribus a harum nobis, aliquid soluta aperiam dolores! Expedita, est earum. Doloremque,
         nihil expedita magni iusto sit quidem exercitationem? Deleniti non magni reiciendis. Consequatur, magnam.`,
  },
  {
    id: 5,
    category: 'Design',
    title: 'UI/UX Design Trends in 2024',
    shortDescription: 'Explore the latest UI/UX design trends for web and mobile apps.',
    image: BlogImg5,
    date: 'October 10, 2024',
    admin: 'Jane Smith',
    fullImage: BlogImg5,
    subtitle: 'Latest Design Trends',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quidem! Iure delectus incidunt possimus ea blanditiis,
         eos architecto accusantium ratione, suscipit dolores consequatur illo dignissimos, quod sunt consequuntur odit iste 
         magni quibusdam accusamus perferendis qui cupiditate. Possimus maiores quaerat delectus fugiat ratione, 
         veniam nulla illum distinctio facere rem magnam, ut eaque tenetur minus animi deleniti. Cum labore repellat
          aliquam enim fuga eum rem corporis inventore, voluptatem provident nam, sunt magnam sit consequuntur animi 
          blanditiis hic doloribus a harum nobis, aliquid soluta aperiam dolores! Expedita, est earum. Doloremque,
         nihil expedita magni iusto sit quidem exercitationem? Deleniti non magni reiciendis. Consequatur, magnam.`,
  },
  {
    id: 6,
    category: 'Design',
    title: 'UI/UX Design Trends in 2024',
    shortDescription: 'Explore the latest UI/UX design trends for web and mobile apps.',
    image: BlogImg6,
    date: 'October 10, 2024',
    admin: 'Jane Smith',
    fullImage: BlogImg6,
    subtitle: 'Latest Design Trends',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quidem! Iure delectus incidunt possimus ea blanditiis,
         eos architecto accusantium ratione, suscipit dolores consequatur illo dignissimos, quod sunt consequuntur odit iste 
         magni quibusdam accusamus perferendis qui cupiditate. Possimus maiores quaerat delectus fugiat ratione, 
         veniam nulla illum distinctio facere rem magnam, ut eaque tenetur minus animi deleniti. Cum labore repellat
          aliquam enim fuga eum rem corporis inventore, voluptatem provident nam, sunt magnam sit consequuntur animi 
          blanditiis hic doloribus a harum nobis, aliquid soluta aperiam dolores! Expedita, est earum. Doloremque,
         nihil expedita magni iusto sit quidem exercitationem? Deleniti non magni reiciendis. Consequatur, magnam.`,
  },
  {
    id: 7,
    category: 'Design',
    title: 'UI/UX Design Trends in 2024',
    shortDescription: 'Explore the latest UI/UX design trends for web and mobile apps.',
    image: BlogImg7,
    date: 'October 10, 2024',
    admin: 'Jane Smith',
    fullImage: BlogImg7,
    subtitle: 'Latest Design Trends',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quidem! Iure delectus incidunt possimus ea blanditiis,
         eos architecto accusantium ratione, suscipit dolores consequatur illo dignissimos, quod sunt consequuntur odit iste 
         magni quibusdam accusamus perferendis qui cupiditate. Possimus maiores quaerat delectus fugiat ratione, 
         veniam nulla illum distinctio facere rem magnam, ut eaque tenetur minus animi deleniti. Cum labore repellat
          aliquam enim fuga eum rem corporis inventore, voluptatem provident nam, sunt magnam sit consequuntur animi 
          blanditiis hic doloribus a harum nobis, aliquid soluta aperiam dolores! Expedita, est earum. Doloremque,
         nihil expedita magni iusto sit quidem exercitationem? Deleniti non magni reiciendis. Consequatur, magnam.`,
  },
  // Ajoutez plus de blogs ici (total 6 blogs)
];

function BlogSection() {
    const [selectedBlog, setSelectedBlog] = useState(blogsData[0]);
    const [showFullDescription, setShowFullDescription] = useState(false);
  
    const handleReadMore = () => {
      setShowFullDescription(!showFullDescription); // Inverse l'état pour afficher ou cacher la description complète
    };
  
    return (
      <div className="container mx-auto px-4 py-10 md:px-44">
        <div className="flex flex-col md:flex-row">
          {/* Colonne gauche - Liste des blogs */}
          <div className="w-full md:w-1/3 pr-4">
            {blogsData.map(blog => (
              <div key={blog.id} className="mb-6">
                <div
                  className={`cursor-pointer p-4 border hover:bg-gray-100 ${selectedBlog.id === blog.id ? 'bg-gray-200' : ''}`}
                  onClick={() => {
                    setSelectedBlog(blog);
                    setShowFullDescription(false); // Réinitialise l'état lors du changement de blog
                  }}
                >
                  <div className="flex">
                    <img src={blog.image} alt={blog.title} className="w-16 h-16 object-cover mr-4" />
                    <div>
                    <span className="text-red-600">{blog.category}</span>
                      <h3 className="font-semibold text-lg">{blog.title}</h3>
                      <p className="text-sm text-gray-600">{blog.shortDescription}</p>
                    </div>
                  </div>
                  
                 
                </div>
              </div>
            ))}
          </div>
  
          {/* Colonne droite - Détails du blog sélectionné */}
          <div className="w-full md:w-2/3 pl-4">
            <img src={selectedBlog.fullImage} alt={selectedBlog.title} className="w-full h-68 object-cover mb-4" />
            <div className="flex items-center text-gray-500 mb-2">
              <span className="flex items-center mr-4">
                <FaCalendarAlt className="mr-1" /> {selectedBlog.date}
              </span>
              <span className="flex items-center">
                <FaUser className="mr-1" /> {selectedBlog.admin}
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-2">{selectedBlog.title}</h2>
            <h3 className="text-xl text-gray-600 mb-4">{selectedBlog.subtitle}</h3>
            {/* Description avec bouton "Read More" */}
            <p className="text-gray-700 mb-4">
              {showFullDescription
                ? selectedBlog.description
                : `${selectedBlog.description.substring(0, 150)}...`} {/* Affiche une partie du texte */}
            </p>
  
            <button
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              onClick={handleReadMore}
            >
              {showFullDescription ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default BlogSection;