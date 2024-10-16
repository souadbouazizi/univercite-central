import React, { useState, useEffect } from 'react'; // Ajout de useEffect
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBuildingColumns, faGraduationCap, faPersonDotsFromLine } from '@fortawesome/free-solid-svg-icons';

function ServiceItems() {
  const [selectedOption, setSelectedOption] = useState(''); // État pour stocker l'option sélectionnée
  const [isVisible, setIsVisible] = useState(false); // État pour contrôler la visibilité

  // Liste des options
  const options = [
    'Courses Name 1',
    'Courses Name 2',
    'Courses Name 3',
    'Courses Name 4',
    'Courses Name 5',
    'Courses Name 6',
  ];

  // Gestion du changement de sélection
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Met à jour l'option sélectionnée
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Vous avez sélectionné : ${selectedOption}`); // Action de soumission (alerte)
  };

  // Utiliser useEffect pour gérer la visibilité et l'animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Lancer l'animation après 100ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className='flex flex-col md:flex-row w-full px-4 md:px-44'>
  {/* Partie gauche: 80% */}
  <div className='w-full md:w-4/6 p-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
    {/* Carte 1 */}
    <div className='bg-white shadow-lg rounded-lg p-4 text-center h-56'>
      <FontAwesomeIcon icon={faBook} size="2x" style={{ color: "#ef4444", marginBottom: "1rem" }} />
      <h2 className='text-xl font-bold mb-2'>Next Scheduled</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    {/* Carte 2 */}
    <div className='bg-white shadow-lg rounded-lg p-4 text-center h-56'>
      <FontAwesomeIcon icon={faPersonDotsFromLine} size="2x" style={{ color: "#ef4444", marginBottom: "1rem" }} />
      <h2 className='text-xl font-bold mb-2'>Online Courses</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste fugit optio incidunt.</p>
    </div>
    {/* Carte 3 */}
    <div className='bg-white shadow-lg rounded-lg p-4 text-center h-56'>
      <FontAwesomeIcon icon={faGraduationCap} size="2x" style={{ color: "#ef4444", marginBottom: "1rem" }} />
      <h2 className='text-xl font-bold mb-2'>Graduation</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, itaque at!</p>
    </div>
    {/* Carte 4 */}
    <div className='bg-white shadow-lg rounded-lg p-4 text-center h-56'>
      <FontAwesomeIcon icon={faBuildingColumns} size="2x" style={{ color: "#ef4444", marginBottom: "1rem" }} />
      <h2 className='text-xl font-bold mb-2'>University Life</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo repellat alias quae explicabo.</p>
    </div>
  </div>

  {/* Partie droite: Formulaire */}
  <div className='w-full md:w-2/6 p-4 relative'>
    <form onSubmit={handleSubmit} className='bg-gray-100 shadow-md rounded-lg p-6 md:-mt-20 mt-2 '>
      <h2 className='text-lg font-semibold mb-4'>Registration for Course Enroll</h2>
      <div className='mb-4'>
        <input
          type='text'
          className='mt-1 block w-full border border-gray-300 rounded-md p-2'
          placeholder='Name'
          required
        />
      </div>
      <div className='mb-4'>
        <input
          type='email'
          className='mt-1 block w-full border border-gray-300 rounded-md p-2'
          placeholder='Email'
          required
        />
      </div>
      <div className='mb-4'>
        <input
          type='number'
          className='mt-1 block w-full border border-gray-300 rounded-md p-2'
          placeholder='Phone'
          required
        />
      </div>
      <div className='mb-4'>
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className='block w-full mt-1 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          required
        >
          <option value='' disabled>
            Courses Name
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button type='submit' className='bg-red-600 text-white p-2 rounded-lg w-full hover:bg-gray-900'>
        Apply Now
      </button>
    </form>
  </div>
</div>

    </div>
  );
}

export default ServiceItems;
