import React from 'react';
import AboutImg1 from '../../Assets/images/about1.png';
import AboutImg2 from '../../Assets/images/about2.png';
import AboutImg3 from '../../Assets/images/about3.png';

function AboutSection() {
  const cards = [
    {
      title: 'Who are we?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      image: AboutImg1,
      reverse: false, // false for normal order, true for reversed order
    },
    {
      title: 'Missions and values',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      image: AboutImg2,
      reverse: true,
    },
    {
      title: 'Our Vision',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      image: AboutImg3,
      reverse: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 md:px-44">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col items-center md:flex-row mb-8 ${card.reverse ? 'md:flex-row-reverse' : ''}`}
        >
          {/* Image Column */}
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Content Column */}
          <div className="md:w-1/2 md:pl-6 md:px-4">
            <h2 className="text-2xl font-bold mb-4 uppercase">{card.title}</h2>
            <p className="text-gray-600">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutSection;
