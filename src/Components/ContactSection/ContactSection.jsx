import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import ContactForm from '../ContactForm/ContactForm';



function ContactSection() {
  return (
    <div className="container mx-auto px-4 py-10 md:px-44 bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Left Column - Contact Information */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <ContactInfo />
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
