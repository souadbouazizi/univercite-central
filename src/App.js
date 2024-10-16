import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Topbar from './Components/Topbar/Topbar';
import Carousel from './Components/Carousel/Carousel';
import Home from './Pages/Home';
import AllCourses from './Pages/AllCourses';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ExpertsLearningSection from './Components/ExpertsLearningSection/ExpertsLearningSection';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Navbar />
        <Carousel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experts-learning" element={<ExpertsLearningSection />} /> {/* Ajoutez votre section ici */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
