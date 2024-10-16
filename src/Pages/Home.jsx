import React from 'react';
import ServiceItems from '../Components/serviceitems/serviceitems';
import ExpertsLearningSection from '../Components/ExpertsLearningSection/ExpertsLearningSection';
import OnlineCourse from '../Components/OnlineCourse/OnlineCourse';
import PopularCourses from '../Components/PopularCourses/PopularCourses';
import InstructorSection from '../Components/InstructorSection/InstructorSection';
import MotivitionSection from '../Components/MotivitionSection/MotivitionSection';
import UpcomingEventsSection from '../Components/UpcomingEventsSection/UpcomingEventsSection';
import TestimonialSection from '../Components/TestimonialSection/TestimonialSection';



function Home() {
  return (
    <div>
   <ServiceItems />
   <ExpertsLearningSection />
   <OnlineCourse />
   <PopularCourses />
   <InstructorSection />
   <MotivitionSection />
   <UpcomingEventsSection />
   <TestimonialSection />
   
     
  
     
     
     
     
     
     </div>
  )
}

export default Home;